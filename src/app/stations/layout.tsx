import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charging Stations - VoltHub",
  description: "Find VoltHub EV charging stations near you. Locate fast charging points across the Philippines. Search by location, charging speed, and availability.",
};

export default function StationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

