import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rural Projects Energy Solutions - VoltHub",
  description: "Bringing reliable power to rural communities. Solar street lighting, off-grid power systems, and EV charging for remote areas. Perfect for off-grid and remote locations.",
};

export default function RuralProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

