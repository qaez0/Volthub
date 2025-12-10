import type { Metadata } from "next";
import LayoutContainer from "@/components/layout/LayoutContainer";
import OverviewSection from "./components/OverviewSection";
import MissionVisionSection from "./components/MissionVisionSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import HistorySection from "./components/HistorySection";
import LeadershipStatsSection from "./components/LeadershipStatsSection";
import MarketInsightsSection from "./components/MarketInsightsSection";
import OperationsCarouselSection from "./components/OperationsCarouselSection";
import PartnershipsSection from "./components/PartnershipsSection";
import SectionHeading from "@/components/marketing/SectionHeading";

export const metadata: Metadata = {
  title: "About Us - VoltHub",
  description: "Learn about VoltHub's mission to build a cleaner energy economy. Discover our history, values, leadership, and commitment to sustainable energy solutions.",
};

export default function About() {
  return (
    <main className="pt-32 bg-linear-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <LayoutContainer className="flex flex-1 flex-col gap-6 pb-16 px-0 md:px-4">
        <SectionHeading
          eyebrow="About VoltHub"
          title="Building the blueprint for a cleaner energy economy"
          align="center"
        />

        <div className="flex flex-col gap-6">
          <OverviewSection />
          <MissionVisionSection />
        </div>
        <WhoWeAreSection />
        <WhatWeDoSection />
        <LeadershipStatsSection />
        {/* <OperationsCarouselSection /> */}
        <MarketInsightsSection />
        <HistorySection />
        {/* <PartnershipsSection /> */}
      </LayoutContainer>
    </main>
  );
}
