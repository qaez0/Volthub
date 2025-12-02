"use client";

import Link from "next/link";
import { RiArrowRightLine, RiDownloadLine, RiMailLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface LeadCaptureSectionProps {
  badge?: string;
  title: string;
  description: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  resourceTitle?: string;
  resourceDescription?: string;
  consultationCta?: string;
  quoteCta?: string;
}

export default function LeadCaptureSection({
  badge = "Get Started Today",
  title,
  description,
  newsletterTitle = "Newsletter",
  newsletterDescription = "Stay updated with the latest energy solutions, tips, and exclusive offers.",
  resourceTitle = "Free Guide",
  resourceDescription = 'Download our comprehensive guide: "Complete Guide to Energy Savings" - absolutely free!',
  consultationCta = "Schedule Free Consultation",
  quoteCta = "Get Instant Quote",
}: LeadCaptureSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
      <LayoutContainer>
        <div className="max-w-4xl mx-auto text-center space-y-8 reveal-on-scroll">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-white/80 uppercase mb-4">{badge}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <RiMailLine className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">{newsletterTitle}</h3>
              </div>
              <p className="text-white/90 mb-6">{newsletterDescription}</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Free Resource Download */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <RiDownloadLine className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold">{resourceTitle}</h3>
              </div>
              <p className="text-white/90 mb-6">{resourceDescription}</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Download Free Guide
                </button>
              </form>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/90 mb-6">Or get in touch directly for a personalized consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {consultationCta}
                <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 group"
              >
                {quoteCta}
                <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

