import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Cities Energy Solutions - VoltHub",
  description: "Integrated energy infrastructure for modern cities. Street lighting, EV charging networks, and microgrid systems for sustainable urban development.",
};

export default function SmartCitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

