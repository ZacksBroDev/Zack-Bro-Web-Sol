"use client";

import { useState, useRef, FormEvent } from "react";
import {
  trackFormStarted,
  trackFormSubmitted,
  trackFormSuccess,
  trackFormFailure,
} from "@/lib/analytics";
import { CONTACT_FORM_SUBJECT, CONTACT_HONEYPOT_FIELD } from "@/lib/contact";

const SUBMISSION_COOLDOWN_MS = 60_000;
const MIN_FILL_TIME_MS = 3_000;
const LAST_SUBMISSION_KEY = "zbws-contact-last-submission-at";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const formStartedRef = useRef(false);

  const handleFocus = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStarted();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
    trackFormSubmitted();

    const now = Date.now();
    const lastSubmission =
      typeof window !== "undefined"
        ? Number(window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? "0")
        : 0;

    if (lastSubmission && now - lastSubmission < SUBMISSION_COOLDOWN_MS) {
      setSubmitting(false);
      setErrorMessage(
        "Please wait about a minute before sending another inquiry.",
      );
      trackFormFailure("cooldown");
      return;
    }

    if (now - startedAt < MIN_FILL_TIME_MS) {
      setSubmitting(false);
      setErrorMessage(
        "Please take a moment to review your details and try again.",
      );
      trackFormFailure("too_fast");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") body[key] = value;
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (res.ok && data.success) {
        form.reset();
        window.localStorage.setItem(LAST_SUBMISSION_KEY, String(now));
        setSubmitted(true);
        trackFormSuccess();
      } else {
        const msg =
          data.message ??
          data.error ??
          "Something went wrong. Please try again or email me directly.";
        setErrorMessage(msg);
        trackFormFailure(msg);
      }
    } catch {
      setErrorMessage(
        "Something went wrong. Please try again or email me directly.",
      );
      trackFormFailure("network_error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--accent-light)",
          border: "1px solid var(--accent-muted)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem",
          textAlign: "center",
        }}
        role="status"
        aria-live="polite"
      >
        <p
          style={{
            fontSize: "1.25rem",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Thank you for reaching out.
        </p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
          I&apos;ll review your inquiry and get back to you within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <input
        type="hidden"
        name="subject"
        value={CONTACT_FORM_SUBJECT}
      />
      {/* Honeypot */}
      <input
        type="text"
        name={CONTACT_HONEYPOT_FIELD}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}
        className="form-grid"
      >
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@business.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="form-label">
          Phone{" "}
          <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="form-input"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="business" className="form-label">
          Business Name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          autoComplete="organization"
          className="form-input"
          placeholder="Your business name"
        />
      </div>
      <div>
        <label htmlFor="website" className="form-label">
          Current Website or Social Link{" "}
          <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <input
          id="website"
          name="website"
          type="url"
          autoComplete="url"
          className="form-input"
          placeholder="https://yourbusiness.com or social media link"
        />
      </div>
      <div>
        <label htmlFor="service" className="form-label">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          className="form-input"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="new-website">New Website</option>
          <option value="redesign">Website Redesign</option>
          <option value="lead-capture">Quote / Booking Setup</option>
          <option value="ongoing-support">Ongoing Support</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.25rem",
        }}
        className="form-grid"
      >
        <div>
          <label htmlFor="timeline" className="form-label">
            Timeline{" "}
            <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}>
              (optional)
            </span>
          </label>
          <select
            id="timeline"
            name="timeline"
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled>
              Select a timeline
            </option>
            <option value="asap">As soon as possible</option>
            <option value="2-4-weeks">2–4 weeks</option>
            <option value="1-2-months">1–2 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={20}
          className="form-input"
          placeholder="What does your business do? What are you hoping to achieve with a new or improved website?"
          style={{ resize: "vertical", minHeight: "120px" }}
        />
      </div>
      {errorMessage && (
        <p
          role="alert"
          style={{ color: "#c53030", fontSize: "0.9375rem", fontWeight: 500 }}
        >
          {errorMessage}{" "}
          <a
            href="mailto:zackary@zbweb.solutions"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            zackary@zbweb.solutions
          </a>
        </p>
      )}
      <button
        type="submit"
        className="btn-primary"
        style={{
          alignSelf: "flex-start",
          marginTop: "0.5rem",
          opacity: submitting ? 0.6 : 1,
        }}
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
      <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
        I&apos;ll respond within 1–2 business days. No pressure, no spam.
      </p>
    </form>
  );
}
