import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoltHub - Electronic power generation services",
  description: "Electronic power generation services",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

