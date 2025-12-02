"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { RiArrowRightLine, RiPlayFill } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface VideoItem {
  title: string;
  icon: IconType;
}

interface VideoSectionProps {
  badge?: string;
  title: string;
  description: string;
  videoItems: VideoItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function VideoSection({
  badge = "Watch & Learn",
  title,
  description,
  videoItems,
  ctaText = "Watch All Videos",
  ctaLink = "/about",
}: VideoSectionProps) {
  return (
    <section className="section-spacing bg-white">
      <LayoutContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group/play">
                  <RiPlayFill className="text-4xl text-primary ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
          <div className="reveal-on-scroll space-y-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">{badge}</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
            </div>
            <div className="space-y-4">
              {videoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-2xl text-primary" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{item.title}</span>
                  <RiArrowRightLine className="text-xl text-gray-400 ml-auto group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <Link
              href={ctaLink as any}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {ctaText}
              <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

