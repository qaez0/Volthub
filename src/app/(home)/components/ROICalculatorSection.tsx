"use client";

import Link from "next/link";
import { RiArrowRightLine, RiCalculatorLine, RiCheckLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface ROICalculatorSectionProps {
  badge?: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ROICalculatorSection({
  badge = "Calculate Your Savings",
  title,
  description,
  benefits,
  ctaText = "Try Free Calculator",
  ctaLink = "/contact",
}: ROICalculatorSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
      <LayoutContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <RiCalculatorLine className="text-4xl" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-white/80 uppercase">{badge}</p>
                <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
              </div>
            </div>
            <p className="text-xl text-white/90 leading-relaxed mb-8">{description}</p>
            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <RiCheckLine className="text-2xl text-white flex-shrink-0" />
                  <span className="text-lg text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={ctaLink as any}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {ctaText}
              <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          <div className="reveal-on-scroll">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-white/90 mb-2 font-medium">Monthly Energy Bill ($)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 font-medium">System Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="residential">Residential Solar + Storage</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="ev">EV Charging</option>
                  </select>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/90">Estimated Monthly Savings</span>
                    <span className="text-3xl font-bold">$0</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/90">Annual Savings</span>
                    <span className="text-2xl font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Payback Period</span>
                    <span className="text-xl font-semibold">-- years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

