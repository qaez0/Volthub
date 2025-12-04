"use client";

import Link from "next/link";
import type { Route } from "next";
import { IconType } from "react-icons";
import { RiArrowRightLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Resource {
  title: string;
  description: string;
  type: string;
  icon: IconType;
  color: string;
}

interface BlogResourcesSectionProps {
  badge?: string;
  title: string;
  description: string;
  resources: Resource[];
  viewAllLink?: Route;
}

export default function BlogResourcesSection({
  badge = "Learn & Grow",
  title,
  description,
  resources,
  viewAllLink = "/contact",
}: BlogResourcesSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">{badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="stagger-card reveal-on-scroll p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <resource.icon className="text-2xl text-white" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {resource.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                <span>Read More</span>
                <RiArrowRightLine className="text-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={viewAllLink}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 group"
          >
            View All Resources
            <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </LayoutContainer>
    </section>
  );
}

