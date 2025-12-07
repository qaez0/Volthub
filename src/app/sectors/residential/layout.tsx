import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Energy Solutions - VoltHub",
  description: "Power your home with reliable solar energy storage and backup systems. From small backup kits to complete home energy independence. EV charging, solar street lights, and energy storage for Filipino homes.",
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

