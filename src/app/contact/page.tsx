"use client";

import { Suspense } from "react";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Suspense fallback={
      <main className="pt-10">
        <section className="relative py-20 text-white bg-cover bg-center">
          <div className="absolute inset-0 backdrop-blur"/>
          <div className="relative">
            <LayoutContainer className="flex-col space-y-14">
              <div className="text-center space-y-4">
                <p className="font-orbitron tracking-[0.3em] uppercase text-sm text-secondary">
                  Partner with VoltHub
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Ready to transform your energy future?
                </h1>
              </div>
            </LayoutContainer>
          </div>
        </section>
      </main>
    }>
      <ContactForm />
    </Suspense>
  );
}
