import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - VoltHub",
  description: "Get in touch with VoltHub for energy solutions, quotes, and installations. Contact our team for EV charging, solar installation, and power generation systems.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

