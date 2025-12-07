import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation Services - VoltHub",
  description: "Turn-key solar solutions from consultation to connection. Professional installation of solar street lights, energy storage systems, and off-grid power generation. Custom system sizing and ROI analysis.",
};

export default function SolarInstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

