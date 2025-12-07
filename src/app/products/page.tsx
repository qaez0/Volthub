import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products - VoltHub",
  description: "Explore VoltHub's complete range of energy solutions including EV charging stations, solar street lights, smart home IPS, cabinet and container power systems.",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-slate-50 min-h-screen flex items-center justify-center">
          <p className="text-slate-600">Loading products...</p>
        </main>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
