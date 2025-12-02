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
    <section className={`section-spacing ${bgGradient} text-white`}>
      <LayoutContainer>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stagger-card reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                <stat.icon className="text-4xl" />
              </div>
              <div className="text-5xl font-bold font-orbitron mb-2 counter" data-target={stat.value}>
                {stat.value}
              </div>
              <div className="text-xl text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

