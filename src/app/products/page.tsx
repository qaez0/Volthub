"use client";

import { useState } from "react";
import LayoutContainer from "@/components/layout/LayoutContainer";
import ProductBanner from "./components/ProductBanner";
import ProductSidebar from "./components/ProductSidebar";
import ProductGrid from "./components/ProductGrid";
import { ProductCategory, products } from "./components/productData";

export default function Products() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero / banner (changes with category) */}
      <ProductBanner activeCategory={activeCategory} />

      {/* Main layout: sidebar + grid */}
      <section className="py-10 md:py-14">
        <LayoutContainer className="flex gap-8 items-start">
          {/* Sidebar categories */}
          <ProductSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Products grid */}
          <ProductGrid
            products={filteredProducts}
            activeCategory={activeCategory}
          />
        </LayoutContainer>
      </section>
    </main>
  );
}
