import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const html = `
    <h2>New Appointment Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(service || "Not specified")}</p>
    <p><em>Submitted from the RenRen Insurance website appointment form.</em></p>
  `;

  try {
    await sendNotificationEmail(`New Appointment Request — ${name}`, html);
  } catch (err) {
    console.error("Failed to send appointment email:", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
