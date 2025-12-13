import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Solutions by Sector - VoltHub",
  description:
    "Discover tailored energy solutions for every sector. From residential homes to industrial level projects, we provide comprehensive energy infrastructure including energy storage, EV charging, and solar solutions.",
};

export default function SectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

