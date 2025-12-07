import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Solutions - VoltHub",
  description: "Complete EV charging infrastructure from AC chargers to ultra-fast DC charging stations. Professional installation, network integration, and 24/7 support for residential, commercial, and industrial applications.",
};

export default function EVChargingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

