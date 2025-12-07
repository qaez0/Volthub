import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Energy Services - VoltHub",
  description: "Expert installation and maintenance of EV charging infrastructure and solar energy systems. From consultation to commissioning, we deliver comprehensive energy solutions tailored to your needs.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

