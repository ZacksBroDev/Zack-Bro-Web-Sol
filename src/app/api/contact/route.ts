import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_FORM_SUBJECT,
  hasTriggeredContactHoneypot,
} from "@/lib/contact";
import { limitContactByIdentifier } from "@/lib/rate-limit";

// RESEND_TO_EMAIL: where inquiries are delivered.
// Before zbweb.solutions domain is verified in Resend, use your Resend account email (e.g. zackaryzbrown@gmail.com).
// After domain verification, set this to zackary@zbweb.solutions and RESEND_FROM_EMAIL to contact@zbweb.solutions.
function getResendToEmail(): string {
  return process.env["RESEND_TO_EMAIL"]?.trim() ?? "zackaryzbrown@gmail.com";
}

function getResendFromEmail(): string {
  return (
    process.env["RESEND_FROM_EMAIL"]?.trim() ??
    "Contact Form <onboarding@resend.dev>"
  );
}

function getResendApiKey(): string {
  return process.env["RESEND_API_KEY"]?.trim() ?? "";
}

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

/* Validation */
function validateFields(body: Record<string, string>): string | null {
  const { name, email, message, service } = body;

  if (!name || name.trim().length < 2) return "Name is required.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "A valid email is required.";
  if (!service) return "Please select what you're looking for.";
  if (!message || message.trim().length < 20)
    return "Please provide more detail about your project (at least 20 characters).";

  // Basic URL spam check in message
  const urlCount = (message.match(/https?:\/\//g) || []).length;
  if (urlCount > 3) return "Message contains too many links.";

  return null;
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req);
  const apiKey = getResendApiKey();

  /* Rate limiting */
  const rateLimitResult = await limitContactByIdentifier(`contact:${ip}`);
  if (!rateLimitResult.success) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
    );

    console.warn(`[contact] Rate limited: ${ip}`);
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSeconds),
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.resetAt),
        },
      },
    );
  }

  /* Parse body */
  let body: Record<string, string>;
  try {
    body = (await req.json()) as Record<string, string>;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  /* Honeypot check */
  if (hasTriggeredContactHoneypot(body)) {
    console.warn(`[contact] Honeypot triggered: ${ip}`);
    // Return success to not tip off bots
    return NextResponse.json({ success: true });
  }

  /* Validation */
  const validationError = validateFields(body);
  if (validationError) {
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 400 },
    );
  }

  /* Check config */
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        success: false,
        error:
          "The contact form is not configured yet. Please email directly at zackary@zbweb.solutions.",
      },
      { status: 500 },
    );
  }

  /* Send email via Resend */
  try {
    const resend = new Resend(apiKey);

    const {
      name,
      email,
      phone,
      business,
      website,
      service,
      timeline,
      message,
    } = body;

    const { error } = await resend.emails.send({
      from: getResendFromEmail(),
      to: getResendToEmail(),
      replyTo: email?.trim(),
      subject: CONTACT_FORM_SUBJECT,
      text: [
        `Name: ${name?.trim()}`,
        `Email: ${email?.trim()}`,
        `Phone: ${phone?.trim() || "Not provided"}`,
        `Business: ${business?.trim() || "Not provided"}`,
        `Website: ${website?.trim() || "Not provided"}`,
        `Service: ${service}`,
        `Timeline: ${timeline || "Not specified"}`,
        ``,
        `Message:`,
        message?.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Something went wrong. Please try again or email directly at zackary@zbweb.solutions.",
        },
        { status: 502 },
      );
    }

    console.info(`[contact] Submission success | service: ${service}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Fetch error:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong. Please try again or email directly at zackary@zbweb.solutions.",
      },
      { status: 500 },
    );
  }
}
