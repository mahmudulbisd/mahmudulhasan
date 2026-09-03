import { NextResponse } from "next/server";

// Server-side only: this route proxies the contact form to GoHighLevel's
// Contacts API so the Private Integration Token never reaches the browser.
// Docs: https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact

const GHL_API_URL = "https://services.leadconnectorhq.com/contacts/";
const GHL_API_VERSION = "2021-07-28";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const apiKey = process.env.GHL_PRIVATE_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const [firstName = "", ...rest] = name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  const noteContent = service
    ? `Selected Service: ${service}\n\nMessage:\n${message}`
    : message;

  const payload = {
    firstName,
    lastName,
    email,
    phone: phone || undefined,
    locationId,
    source: "Website Contact Form",
    tags: service ? ["website-lead", `service-${service.toLowerCase().replace(/\s+/g, "-")}`] : ["website-lead"],
    customFields:
      service && process.env.GHL_SERVICE_CUSTOM_FIELD_ID
        ? [
            {
              id: process.env.GHL_SERVICE_CUSTOM_FIELD_ID,
              value: service,
            },
          ]
        : [],
    notes: noteContent,
  };

  try {
    const response = await fetch(GHL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("GHL contact creation failed:", response.status, data);
      return NextResponse.json(
        { error: "We couldn't submit your message. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true, contactId: data?.contact?.id });
  } catch (error) {
    console.error("GHL request error:", error);
    return NextResponse.json(
      { error: "We couldn't submit your message. Please try again." },
      { status: 500 }
    );
  }
}
