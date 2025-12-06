import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - nodemailer types are not included in this project
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, interest, details } =
      await request.json();

    const interestLabels: Record<string, string> = {
      // Products
      "ev-charging-station": "EV Charging Station",
      "solar-street-lights": "Solar Street Lights",
      "smart-home-ips": "Smart Home IPS",
      "cabinet-type-power-supply": "Cabinet Type Power Supply",
      "container-type-power-supply": "Container Type Power Supply",
      // Services - EV Charging
      "ev-charging-installation": "EV Charging Installation",
      "ev-charging-quote": "EV Charging Quote",
      "ac-charger-installation": "AC Charger Installation (7kW)",
      "dc-fast-charger-installation": "DC Fast Charger Installation (60-400kW)",
      // Services - Solar Installation
      "solar-energy-installation": "Solar Energy Installation",
      "solar-installation-quote": "Solar Installation Quote",
      "street-light-installation": "Street Light Installation",
      "solar-street-light-quote": "Solar Street Light Quote",
      "off-grid-power-generation": "Off-Grid Power Generation System",
      "energy-storage-installation": "Energy Storage Installation",
      // Sector-Specific
      "residential-solutions": "Residential Solutions",
      "commercial-solutions": "Commercial Solutions",
      "industrial-solutions": "Industrial Solutions",
      "rural-projects": "Rural Projects",
      // General
      "general-inquiry": "General Inquiry",
      "technical-support": "Technical Support",
      "maintenance-service": "Maintenance Service",
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
      to: "admin-help@volthub-ev.com",
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


