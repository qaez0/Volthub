"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Route } from "next";

interface Segment {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  cta: string;
  link: Route;
  color: string;
}

interface UserSegmentationSectionProps {
  badge?: string;
  title: string;
  description: string;
  segments: Segment[];
}

export default function UserSegmentationSection({
  badge = "Solutions For Everyone",
  title,
  description,
  segments,
}: UserSegmentationSectionProps) {
  return (
    <section className="section-spacing bg-white overflow-x-hidden">
      <LayoutContainer className="flex flex-col md:flex-col md:pt-10 gap-6 md:gap-8 p-2">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16 reveal-on-scroll px-2">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-accent uppercase">{badge}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text break-words">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto break-words px-2">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="stagger-card reveal-on-scroll p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-lg card-hover-3d hover-lift border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <segment.icon className="text-2xl sm:text-2xl md:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-800 break-words">{segment.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed break-words">{segment.description}</p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {segment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <RiCheckLine className="text-primary text-base md:text-lg flex-shrink-0 mt-0.5" />
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={segment.link}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group/btn w-full"
              >
                {segment.cta}
                <RiArrowRightLine className="text-base md:text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

