import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendgrid";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { to, subject, text, html } = body;

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    await sendEmail({
      to,
      from: process.env.SENDGRID_SENDER!, // Use your verified email
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
