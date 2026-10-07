import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { insuranceType, zipCode, name, email, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 });
  }

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Type:</strong> ${escapeHtml(insuranceType || "Not specified")}</p>
    <p><strong>Zip Code:</strong> ${escapeHtml(zipCode || "Not specified")}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><em>Submitted from the RenRen Insurance website quote form.</em></p>
  `;

  try {
    await sendNotificationEmail(`New Quote Request — ${name}`, html);
  } catch (err) {
    console.error("Failed to send quote request email:", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
