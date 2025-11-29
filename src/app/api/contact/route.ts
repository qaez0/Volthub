import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - nodemailer types are not included in this project
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, interest, details } =
      await request.json();

    const interestLabels: Record<string, string> = {
      "solar-systems": "Solar Systems",
      "ev-chargers": "EV Chargers",
      "energy-storage": "Energy Storage",
      "smart-lighting": "Smart Lighting",
    };

    const interestLabel =
      interestLabels[interest as keyof typeof interestLabels] ?? "Inquiry";

    const subject = `${interestLabel} - ${firstName} ${lastName}`;

    const bodyLines = [
      "Tell us about your project details:",
      "",
      details || "",
      "",
      `${firstName} ${lastName}`,
      phone ? `Phone Number: ${phone}` : "",
      email ? `Email Address: ${email}` : "",
    ].filter(Boolean);

    const body = bodyLines.join("\n");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      // Gmail requires the authenticated account as the actual sender
      from: `"${firstName} ${lastName} via VoltHub" <${
        process.env.SMTP_FROM || process.env.SMTP_USER
      }>`,
      to: "ella587620@gmail.com",
      subject,
      text: body,
      // This makes replies go directly to the email entered in the form
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}


