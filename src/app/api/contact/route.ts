import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_ACCESS_KEY = "344a67a5-573d-4e5e-a27d-92f54a7d52ef";
const REQUEST_TIMEOUT_MS = 12000;

function getTrimmedValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function appendIfPresent(formData: FormData, key: string, value: string) {
  if (value) {
    formData.set(key, value);
  }
}

export async function POST(request: Request) {
  const incomingFormData = await request.formData();

  if (getTrimmedValue(incomingFormData, "botcheck")) {
    return NextResponse.json({ success: true });
  }

  const payload = {
    name: getTrimmedValue(incomingFormData, "name"),
    email: getTrimmedValue(incomingFormData, "email"),
    phone: getTrimmedValue(incomingFormData, "phone"),
    business: getTrimmedValue(incomingFormData, "business"),
    website: getTrimmedValue(incomingFormData, "website"),
    service: getTrimmedValue(incomingFormData, "service"),
    budget: getTrimmedValue(incomingFormData, "budget"),
    timeline: getTrimmedValue(incomingFormData, "timeline"),
    message: getTrimmedValue(incomingFormData, "message"),
  };

  if (!payload.name || !payload.email || !payload.service || !payload.message) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Please complete your name, email, service, and project details before sending.",
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      {
        success: false,
        error: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  if (payload.website && !isValidUrl(payload.website)) {
    return NextResponse.json(
      {
        success: false,
        error: "Please enter a valid website or social profile link.",
      },
      { status: 400 }
    );
  }

  const outgoingFormData = new FormData();
  outgoingFormData.set(
    "access_key",
    process.env.WEB3FORMS_ACCESS_KEY ?? DEFAULT_ACCESS_KEY
  );
  outgoingFormData.set("subject", "New inquiry from ZB Web Solutions");
  outgoingFormData.set("name", payload.name);
  outgoingFormData.set("email", payload.email);
  outgoingFormData.set("message", payload.message);
  appendIfPresent(outgoingFormData, "phone", payload.phone);
  appendIfPresent(outgoingFormData, "business", payload.business);
  appendIfPresent(outgoingFormData, "website", payload.website);
  appendIfPresent(outgoingFormData, "service", payload.service);
  appendIfPresent(outgoingFormData, "budget", payload.budget);
  appendIfPresent(outgoingFormData, "timeline", payload.timeline);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: outgoingFormData,
      signal: controller.signal,
      cache: "no-store",
    });

    const data = (await response.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null;

    if (!response.ok || !data?.success) {
      console.error("Contact submission failed", {
        status: response.status,
        data,
      });

      return NextResponse.json(
        {
          success: false,
          error:
            "I couldn't send your message just now. Please try again in a minute or email me directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const timedOut =
      error instanceof DOMException && error.name === "AbortError";

    console.error("Contact submission error", error);

    return NextResponse.json(
      {
        success: false,
        error: timedOut
          ? "The request timed out before it could be delivered. Please try again."
          : "I couldn't send your message just now. Please try again in a minute or email me directly.",
      },
      { status: timedOut ? 504 : 500 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
