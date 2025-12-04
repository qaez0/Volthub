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
    <section className="section-spacing bg-white">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">{badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="stagger-card reveal-on-scroll p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg card-hover-3d hover-lift border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <segment.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{segment.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{segment.description}</p>
              <ul className="space-y-3 mb-6">
                {segment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <RiCheckLine className="text-primary text-lg flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={segment.link}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group/btn w-full"
              >
                {segment.cta}
                <RiArrowRightLine className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}

