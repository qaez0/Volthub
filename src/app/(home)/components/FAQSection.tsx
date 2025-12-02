"use client";

import Link from "next/link";
import { RiArrowRightLine, RiQuestionLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  badge?: string;
  title: string;
  description: string;
  faqs: FAQ[];
  contactLink?: string;
}

export default function FAQSection({
  badge = "Common Questions",
  title,
  description,
  faqs,
  contactLink = "/contact",
}: FAQSectionProps) {
  return (
    <section className="section-spacing bg-white">
      <LayoutContainer>
        <div className="text-center space-y-4 mb-16 reveal-on-scroll">
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">{badge}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal-on-scroll bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <RiQuestionLine className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={contactLink as any}
            className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Still have questions? Contact us
            <RiArrowRightLine className="text-lg" />
          </Link>
        </div>
      </LayoutContainer>
    </section>
  );
}

