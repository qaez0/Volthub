import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Energy Solutions - VoltHub",
  description: "Power your business with reliable solar energy storage and EV charging infrastructure. From small offices to large commercial establishments. Reduce operating costs and ensure reliable power.",
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

