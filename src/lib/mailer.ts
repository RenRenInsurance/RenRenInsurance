import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (!transporter) {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    }
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return transporter;
}

export async function sendNotificationEmail(subject: string, html: string) {
  const to = process.env.NOTIFY_EMAIL || process.env.GMAIL_USER;
  await getTransporter().sendMail({
    from: `RenRen Insurance Website <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
