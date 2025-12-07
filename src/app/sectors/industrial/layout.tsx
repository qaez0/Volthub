import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Energy Solutions - VoltHub",
  description: "Large-scale power generation systems for factories, industrial parks, and utility-scale projects. From 40kWh to 2.7MWh capacity. Three-phase power for industrial equipment.",
};

export default function IndustrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

