"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";
import { ProductCategory, categoryBanner, categories } from "./productData";

interface ProductBannerProps {
  activeCategory: ProductCategory;
}

export default function ProductBanner({ activeCategory }: ProductBannerProps) {
  const banner = categoryBanner[activeCategory];
  const videoRef = useRef<HTMLVideoElement>(null);
  const categoryLabel = categories.find((c) => c.id === activeCategory)?.label || "";

  useEffect(() => {
    if (videoRef.current && banner.video) {
      videoRef.current.playbackRate = 0.20; // Set to 25% speed (super slow motion)
    }
  }, [banner.video, activeCategory]);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 min-h-[300px] md:min-h-[320px]">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
      {banner.video ? (
        <video
          ref={videoRef}
          src={banner.video}
          autoPlay
          muted
          playsInline
          className="w-full h-full md:h-[550px] object-cover"
        />
      ) : (
        <Image
          src={banner.image}
          alt={banner.title}
          width={1600}
          height={400}
          className="w-full h-full md:h-[550px] object-cover"
        />
      )}
      <div className="absolute inset-0">
        <LayoutContainer className="h-full flex flex-col justify-center items-center text-center text-white pt-30">
          <div className="max-w-4xl border-b border-white/10 pb-10 mb-10 space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              {banner.title}
            </h1>
           
          </div>
        </LayoutContainer>
        {/* Breadcrumb at bottom */}
        <div className="absolute bottom-6 left-0 right-0">
          <LayoutContainer>
            <div className="flex items-center gap-2 text-sm md:text-base text-white">
              <RiHome2Line className="h-4 w-4 md:h-5 md:w-5" />
              <RiArrowRightSLine className="h-4 w-4 md:h-5 md:w-5" />
              <span>Products</span>
              {activeCategory !== "all" && (
                <>
                  <RiArrowRightSLine className="h-4 w-4 md:h-5 md:w-5" />
                  <span>{categoryLabel}</span>
                </>
              )}
            </div>
          </LayoutContainer>
        </div>
      </div>
    </section>
  );
}


