import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiCheckLine } from "react-icons/ri";
import { Product, categories, productDetails } from "./productData";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const details = productDetails[product.id];
  const categoryLabel = categories.find((c) => c.id === product.category)?.label;

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
      >
        <RiArrowLeftLine className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      {/* Product Header */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 mt-3">{product.subtitle}</p>
          </div>

          {product.tag && (
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
                {product.tag}
              </span>
            </div>
          )}

          {details && (
            <>
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Description
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {details.description}
                </p>
              </div>

              {/* Variations */}
              {details.variations && details.variations.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Variations
                  </h2>
                  <div className="space-y-3">
                    {details.variations.map((variation, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">
                            {variation.name}
                          </p>
                          <p className="text-slate-600 mt-1">
                            {variation.value}
                          </p>
                          {variation.description && (
                            <p className="text-sm text-slate-500 mt-1">
                              {variation.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Specifications & Features */}
      {details && (
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Specifications */}
          {details.specifications && details.specifications.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Specifications
              </h2>
              <div className="space-y-3">
                {details.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-slate-200"
                  >
                    <span className="text-slate-600">{spec.label}</span>
                    <span className="font-semibold text-slate-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {details.features && details.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <RiCheckLine className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">
          Interested in this product?
        </h3>
        <p className="text-blue-100 mb-6">
          Contact us for pricing, availability, and custom configurations
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

