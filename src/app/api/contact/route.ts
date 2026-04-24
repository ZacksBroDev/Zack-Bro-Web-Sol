import { NextRequest, NextResponse } from "next/server";
import {
  CONTACT_FORM_SUBJECT,
  hasTriggeredContactHoneypot,
} from "@/lib/contact";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? "";
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

/* Simple in-memory rate limiter (per-IP, resets on deploy) */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

/* Clean up stale entries periodically */
function pruneRateLimitMap(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}
setInterval(pruneRateLimitMap, 5 * 60_000);

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

  /* Rate limiting */
  if (isRateLimited(ip)) {
    console.warn(`[contact] Rate limited: ${ip}`);
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 },
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
  if (!ACCESS_KEY) {
    console.error("[contact] WEB3FORMS_ACCESS_KEY is not configured.");
    return NextResponse.json(
      {
        success: false,
        error:
          "The contact form is not configured yet. Please email directly at zackary@zbweb.solutions.",
      },
      { status: 500 },
    );
  }

  /* Submit to Web3Forms */
  try {
    const payload = {
      access_key: ACCESS_KEY,
      subject: CONTACT_FORM_SUBJECT,
      name: body.name?.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim() || "Not provided",
      business: body.business?.trim() || "Not provided",
      website: body.website?.trim() || "Not provided",
      service: body.service,
      timeline: body.timeline || "Not specified",
      message: body.message?.trim(),
    };

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await res.json()) as {
      success?: boolean;
      message?: string;
    };

    if (res.ok && data.success) {
      console.info(
        `[contact] Submission success: ${payload.name} <${payload.email}> | service: ${payload.service}`,
      );
      return NextResponse.json({ success: true });
    }

    console.error(`[contact] Web3Forms error:`, data);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong. Please try again or email directly at zackary@zbweb.solutions.",
      },
      { status: 502 },
    );
  } catch (err) {
    console.error(`[contact] Fetch error:`, err);
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
