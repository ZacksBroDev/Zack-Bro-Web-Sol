"use client";

import { useState, FormEvent } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const SUBMISSION_COOLDOWN_MS = 60_000;
const MIN_FILL_TIME_MS = 3_000;
const LAST_SUBMISSION_KEY = "zbws-contact-last-submission-at";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitting(false);
      setErrorMessage(
        "The contact form is not configured yet. Please email me directly at zackary@zbweb.solutions."
      );
      return;
    }

    const now = Date.now();
    const lastSubmission =
      typeof window !== "undefined"
        ? Number(window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? "0")
        : 0;

    if (lastSubmission && now - lastSubmission < SUBMISSION_COOLDOWN_MS) {
      setSubmitting(false);
      setErrorMessage(
        "Please wait about a minute before sending another inquiry."
      );
      return;
    }

    if (now - startedAt < MIN_FILL_TIME_MS) {
      setSubmitting(false);
      setErrorMessage("Please take a moment to review your details and try again.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
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
      } else {
        setErrorMessage(
          data.message ??
            data.error ??
            "Something went wrong. Please try again or email me directly."
        );
      }
    } catch {
      setErrorMessage(
        "Something went wrong. Please try again or email me directly."
      );
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
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <input
        type="hidden"
        name="subject"
        value="New inquiry from ZB Web Solutions"
      />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} />
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
          What are you looking for?
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
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}
        className="form-grid"
      >
        <div>
          <label htmlFor="budget" className="form-label">
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="form-input"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 – $1,000</option>
            <option value="1000-2000">$1,000 – $2,000</option>
            <option value="2000-3000">$2,000 – $3,000</option>
            <option value="3000-plus">$3,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="form-label">
            Timeline
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
            <option value="asap">ASAP</option>
            <option value="1-2-weeks">1–2 weeks</option>
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
