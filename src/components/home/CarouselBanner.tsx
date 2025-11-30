"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundImage?: string; // Optional background image
  buttonText: string;
  buttonLink: string;
  gradient: string;
  showimg?: boolean;
  imageClassName?: string;
  descriptionClassName?: string;
  layout?: "overlay" | "side-by-side"; // New layout option
}

interface CarouselBannerProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function CarouselBanner({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
}: CarouselBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality with proper cleanup
  useEffect(() => {
    if (!autoPlay || slides.length <= 1 || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset and animate progress bar
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
      progressRef.current.style.transition = "none";
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = `width ${autoPlayInterval}ms linear`;
          progressRef.current.style.width = "100%";
        }
      }, 50);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, slides.length, isPaused]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    
    // Reset progress bar when slide changes manually
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
      progressRef.current.style.transition = "none";
    }
    
    setCurrentSlide(index);
    
    // Animate slide transition
    if (carouselRef.current) {
      const slides = carouselRef.current.querySelectorAll(".carousel-slide");
      gsap.to(slides[index], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
      
      slides.forEach((slide, i) => {
        if (i !== index) {
          gsap.to(slide, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Update slide animations when currentSlide changes
  useEffect(() => {
    if (carouselRef.current) {
      const slideElements = carouselRef.current.querySelectorAll(".carousel-slide");
      slideElements.forEach((slide, index) => {
        if (index === currentSlide) {
          gsap.to(slide, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        } else {
          gsap.to(slide, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
    }

    // Reset progress bar when slide changes (for auto-play)
    if (autoPlay && progressRef.current && !isPaused) {
      progressRef.current.style.width = "0%";
      progressRef.current.style.transition = "none";
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = `width ${autoPlayInterval}ms linear`;
          progressRef.current.style.width = "100%";
        }
      }, 50);
    }
  }, [currentSlide, autoPlay, autoPlayInterval, isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % slides.length;
      return nextIndex;
    });
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => {
      const prevIndex = (prev - 1 + slides.length) % slides.length;
      return prevIndex;
    });
  };

  // Initialize slides on mount
  useEffect(() => {
    if (carouselRef.current) {
      const slideElements = carouselRef.current.querySelectorAll(".carousel-slide");
      slideElements.forEach((slide, index) => {
        if (index === currentSlide) {
          gsap.set(slide, { opacity: 1, scale: 1 });
        } else {
          gsap.set(slide, { opacity: 0, scale: 1.1 });
        }
      });
    }
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div ref={carouselRef} className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide absolute inset-0 ${
              index === currentSlide ? "z-10" : "z-0"
            }`}
          >
            {slide.layout === "side-by-side" ? (
              /* Side-by-side layout: Image left, Text right */
              <>
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage || slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Gradient Overlay - Reduced opacity to show background */}
                  <div
                    className={`absolute inset-0 ${slide.gradient} transition-opacity duration-1000`}
                    style={{ opacity: 0.3 }}
                  />
                </div>

                {/* Content with side-by-side layout */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="flex flex-row gap-12 items-center ">
                      {/* Image on Left */}
                     {slide.showimg && (
                      <div className= {slide.imageClassName}  >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-contain "
                        />
                      </div>)} 
                      
                      {/* Text on Right */}
                      <div className={slide.descriptionClassName}>
                        <div className="space-y-4">
                          <p className="font-orbitron tracking-[0.3em] text-sm text-secondary uppercase animate-fade-in">
                            {slide.subtitle}
                          </p>
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="neon-glow block">{slide.title}</span>
                          </h1>
                          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                        <div className="pt-4">
                          <Link
                            href={slide.buttonLink as any}
                            className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg glow-effect transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                          >
                            {slide.buttonText}
                            <RiArrowRightLine className="text-lg group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Overlay layout: Text over image */
              <>
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage || slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 ${slide.gradient} transition-opacity duration-1000`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl space-y-6 text-white">
                      <div className="space-y-4">
                        <p className="font-orbitron tracking-[0.3em] text-sm text-secondary uppercase animate-fade-in">
                          {slide.subtitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                          <span className="neon-glow block">{slide.title}</span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                          {slide.description}
                        </p>
                      </div>
                      <div className="pt-4">
                        <Link
                          href={slide.buttonLink as any}
                          className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg glow-effect transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                          {slide.buttonText}
                          <RiArrowRightLine className="text-lg group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous slide"
          >
            <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next slide"
          >
            <RiArrowRightLine className="text-2xl group-hover:translate-x-1 transition-transform" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative transition-all duration-300 disabled:cursor-not-allowed group`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-secondary scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
              {index === currentSlide && (
                <div className="absolute inset-0 -m-2 border-2 border-secondary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <div
            ref={progressRef}
            className="h-full bg-secondary"
            style={{
              width: "0%",
            }}
          />
        </div>
      )}
    </div>
  );
}

