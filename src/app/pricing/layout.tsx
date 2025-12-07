import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - VoltHub",
  description: "Transparent pricing for VoltHub's energy solutions. Explore flexible plans for EV charging, solar installation, and energy storage systems. Get quotes tailored to your needs.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

