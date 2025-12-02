"use client";

import { IconType } from "react-icons";
import { RiStarFill } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

interface TrustBadge {
  name: string;
  icon: IconType;
}

interface SocialProofSectionProps {
  badge?: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
  trustBadges: TrustBadge[];
}

export default function SocialProofSection({
  badge = "Trusted By Thousands",
  title,
  description,
  testimonials,
  trustBadges,
}: SocialProofSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-br from-white via-gray-50 to-white">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-green-700 uppercase">{badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="stagger-card reveal-on-scroll p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <RiStarFill key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges & Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Certified & Trusted</h3>
            <p className="text-gray-600">Our certifications and partnerships ensure quality and reliability</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="text-3xl text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-700">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}

