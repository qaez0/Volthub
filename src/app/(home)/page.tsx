"use client";

import { useState } from "react";
import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import SplitText, { SplitTextProps } from "@/components/ui/split-text";
import Image from "next/image";

export default function Home() {
  const news = [
    {
      id: 1,
      title: "Company Launches New Solar Initiative",
      date: "2025-10-15",
      content:
        "Our company has announced a major investment in solar technology, aiming to power 100,000 homes with renewable energy by 2030. This initiative strengthens our commitment to a cleaner, greener future.",
      image: "/resources/bulb.jpg",
    },
    {
      id: 2,
      title: "Electric Vehicle Charging Network Expands Nationwide",
      date: "2025-09-28",
      content:
        "We’re proud to announce the expansion of our EV charging stations across major cities, making it easier than ever for drivers to go electric. Sustainable travel is now within everyone’s reach.",
      image: "/resources/speeding-car.jpg",
    },
    {
      id: 3,
      title: "Powering Communities with Green Energy",
      date: "2025-08-22",
      content:
        "In partnership with local governments, we’ve launched a community electrification program bringing reliable, affordable electricity to rural areas for the first time.",
      image: "/resources/power-grid.jpg",
    },
    {
      id: 4,
      title: "Introducing Smart Meters for Smarter Homes",
      date: "2025-07-14",
      content:
        "Say hello to smarter energy management! Our new smart meters allow customers to track and control their energy usage in real time through our mobile app.",
      image: "/resources/charging-stats.jpg",
    },
    {
      id: 5,
      title: "Scheduled Maintenance for Grid Upgrade",
      date: "2025-06-30",
      content:
        "To ensure reliable service, we’ll be upgrading our power grid infrastructure this month. Temporary power interruptions may occur in select areas. We appreciate your understanding as we improve your power experience.",
      image: "/resources/power-grid.jpg",
    },
    {
      id: 6,
      title: "Company Receives Sustainability Excellence Award",
      date: "2025-05-17",
      content:
        "We’re honored to receive the National Sustainability Excellence Award for our continuous efforts in renewable energy innovation and community support programs.",
      image: "/resources/bulb.jpg",
    },
    {
      id: 7,
      title: "Power Restoration Achieved Ahead of Schedule",
      date: "2025-04-29",
      content:
        "Thanks to the dedication of our technical teams, power has been restored 8 hours ahead of schedule in areas affected by last week’s storm. Safety and service remain our top priorities.",
      image: "/resources/power-grid.jpg",
    },
    {
      id: 8,
      title: "New Partnership with Electric Mobility Company",
      date: "2025-03-18",
      content:
        "We’ve teamed up with GreenRide Motors to provide fast-charging infrastructure for their upcoming line of electric vehicles. Together, we’re driving the future of clean mobility.",
      image: "/resources/speeding-car.jpg",
    },
    {
      id: 9,
      title: "Lower Energy Rates Starting This Quarter",
      date: "2025-02-09",
      content:
        "Great news! Customers will see a 5% reduction in energy rates starting this quarter, thanks to increased efficiency and renewable energy integration.",
      image: "/resources/charging-stats.jpg",
    },
    {
      id: 10,
      title: "Innovation Hub Opens for Clean Energy Research",
      date: "2025-01-20",
      content:
        "Our new Clean Energy Innovation Hub officially opened today, bringing together engineers, researchers, and environmental experts to develop the next generation of sustainable power solutions.",
      image: "/resources/bulb.jpg",
    },
  ];

  const [showAllNews, setShowAllNews] = useState(false);

  const splitTextOptions: Omit<SplitTextProps, "text"> = {
    duration: 1,
    ease: "power3.out",
    splitType: "words",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    delay: 10,
  };

  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/power-grid.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left">
            <SplitText
              text="VOLTHUB"
              className="text-xl font-normal md:font-semibold"
              {...splitTextOptions}
              tag="h6"
            />
            <SplitText
              text={
                <>
                  Powering the future of green mobility,{" "}
                  <span className="text-[#ff6f8b]">
                    with sustainable energy.
                  </span>
                </>
              }
              className="text-[40px] md:text-[60px] font-bold w-full sm:w-4/6 text-center sm:text-left leading-[1.3]"
              {...splitTextOptions}
              tag="h1"
              appearDelayMs={400}
            />
            <SplitText
              tag="h6"
              text="Electronic power generation services"
              className="text-xl font-normal md:font-semibold w-full md:w-3/4 text-foreground"
              {...splitTextOptions}
              appearDelayMs={500}
            />
          </div>
        </LayoutContainer>
      </MainContent>

      <section className="py-16">
        <LayoutContainer>
          <div className="flex items-end justify-between mb-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-bold text-primary">Latest News</h2>
              <p className="text-muted-foreground">
                Updates on energy, mobility, and our community.
              </p>
            </div>
            <Button
              className="text-primary bg-transparent hover:bg-transparent hover:scale-105 transition-all duration-300"
              variant="ghost"
              onClick={() => setShowAllNews((v) => !v)}
            >
              {showAllNews ? "Show less" : "Show more"}
              {showAllNews ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {(showAllNews ? news : news.slice(0, 6)).map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden bg-card text-card-foreground shadow-sm hover:scale-101 transition-all duration-300"
              >
                {item.image ? (
                  <div className="h-60 w-full relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col gap-2 p-4">
                  <div className="text-xl font-semibold leading-none text-black">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.date}
                  </div>
                  <p className="text-sm leading-relaxed text-black">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>
    </main>
  );
}
