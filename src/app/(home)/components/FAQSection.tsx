"use client";

import Link from "next/link";
import { RiArrowRightLine, RiQuestionLine } from "react-icons/ri";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Route } from "next";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  badge?: string;
  title: string;
  description: string;
  faqs: FAQ[];
  contactLink?: Route;
}

export default function FAQSection({
  badge = "Common Questions",
  title,
  description,
  faqs,
  contactLink = "/contact",
}: FAQSectionProps) {
  return (
    <section className="section-spacing bg-white overflow-x-hidden">
      <LayoutContainer className="flex flex-col md:flex-col gap-6 md:gap-8 p-2">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16 reveal-on-scroll px-2">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-primary uppercase">{badge}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text break-words">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto break-words px-2">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal-on-scroll bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-3 md:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300 break-words">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{faq.answer}</p>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <RiQuestionLine className="text-primary text-sm md:text-base" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href={contactLink}
            className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-sm sm:text-base hover:gap-3 transition-all duration-300"
          >
            Still have questions? Contact us
            <RiArrowRightLine className="text-base md:text-lg" />
          </Link>
        </div>
      </LayoutContainer>
    </section>
  );
}

