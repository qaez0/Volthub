"use client";

import { IconType } from "react-icons";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Stat {
  label: string;
  value: string;
  icon: IconType;
}

interface StatsSectionProps {
  stats: Stat[];
  bgGradient?: string;
}

export default function StatsSection({
  stats,
  bgGradient = "bg-gradient-to-br from-primary via-primary/95 to-accent",
}: StatsSectionProps) {
  return (
    <section className={`section-spacing ${bgGradient} text-white overflow-x-hidden`}>
      <LayoutContainer className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stagger-card reveal-on-scroll px-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 float-animation">
                <stat.icon className="text-3xl sm:text-3xl md:text-4xl" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-2 counter break-words" data-target={stat.value}>
                {stat.value}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 break-words px-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

