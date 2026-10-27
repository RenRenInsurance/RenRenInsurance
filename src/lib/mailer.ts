import { Resend } from "resend";

let resend: Resend | null = null;

function getClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function sendNotificationEmail(subject: string, html: string) {
  const to = process.env.NOTIFY_EMAIL;
  if (!to) {
    throw new Error("NOTIFY_EMAIL is not set");
  }
  const { error } = await getClient().emails.send({
    from: process.env.RESEND_FROM || "RenRen Insurance Website <onboarding@resend.dev>",
    to,
    subject,
    html,
  });
  if (error) {
    throw new Error(error.message);
  }
}
