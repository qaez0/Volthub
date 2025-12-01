"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollAnimations() {
  useEffect(() => {
    // Animate elements on scroll
    const elements = document.querySelectorAll(".reveal-on-scroll");
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger animation for cards
    const cards = document.querySelectorAll(".stagger-card");
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cards[0]?.parentElement,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect for hero background
    const hero = document.querySelector(".hero-parallax");
    if (hero) {
      gsap.to(hero, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Counter animation for stats
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = counter.getAttribute("data-target");
      const duration = counter.getAttribute("data-duration") || "2";
      
      if (target) {
        const obj = { value: 0 };
        const numericValue = parseInt(target.replace(/\D/g, ""));
        const suffix = target.replace(/\d/g, "");
        
        gsap.to(obj, {
          value: numericValue,
          duration: parseFloat(duration),
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (counter) {
              counter.textContent = Math.floor(obj.value) + suffix;
            }
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

