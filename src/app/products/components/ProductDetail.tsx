"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  RiArrowLeftLine, 
  RiCheckLine,
  RiFlashlightLine,
  RiPlugLine,
  RiSettings3Line,
  RiMapPinLine,
  RiBatteryChargeLine,
  RiFileList3Line,
  RiHeartLine,
  RiHeartFill,
  RiChat3Line,
  RiThumbUpLine,
  RiStarLine
} from "react-icons/ri";
import { Product, categories, productDetails } from "./productData";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const details = productDetails[product.id];
  const categoryLabel = categories.find((c) => c.id === product.category)?.label;
  
  // Get all images (main image + additional images)
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [activeTab, setActiveTab] = useState<"stats" | "comments" | "projects">("stats");

  // Variant-based pricing (for products that define prices on variations)
  const pricedVariations =
    details?.variations?.filter(
      (v) => typeof v.price === "string" && !v.name.toLowerCase().includes("model")
    ) ?? [];
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant =
    pricedVariations.length > 0 ? pricedVariations[selectedVariantIndex] : undefined;
  const currentPrice =
    pricedVariations.length > 0
      ? pricedVariations[selectedVariantIndex]?.price ?? product.price
      : product.price;
  const descriptionText =
    selectedVariant?.description ?? details?.description;
  
  // Interactive stats state
  const [likes, setLikes] = useState(1234);
  const [isLiked, setIsLiked] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [averageRating, setAverageRating] = useState(4.8);
  const [totalRatings, setTotalRatings] = useState(856);
  const [positiveReviews, setPositiveReviews] = useState(856);

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

      {/* Top Section - Row 1: Image and Image Selector */}
      <div className="space-y-4">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            className="object-contain transition-opacity duration-300"
            priority
          />
        </div>
        
        {/* Image Selection List */}
        {allImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === img
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Top Section - Row 2: Description and Variations */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Info & Description */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 mt-3">{product.subtitle}</p>

            {/* Variant selector buttons (e.g. 60k / 120k / 400k) */}
            {pricedVariations.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {pricedVariations.map((variant, idx) => {
                  const match = variant.name.match(/(\d+\s*k)/i);
                  const label = match ? match[1].toUpperCase() : variant.name;
                  const isActive = idx === selectedVariantIndex;
                  return (
                    <button
                      key={variant.name}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold border shadow-sm transition-all ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-md scale-[1.03]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-primary/60 hover:bg-primary/5"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {product.tag && (
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
                {product.tag}
              </span>
            )}
            {currentPrice && (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">
                  {currentPrice}
                </span>
                <span className="text-sm text-slate-500">per unit</span>
              </div>
            )}
          </div>

          {details && (
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Description
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {descriptionText}
              </p>
            </div>
          )}
        </div>

        {/* Variations */}
        {details && details.variations && details.variations.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Product Specifications
            </h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {details.variations.map((variation, index) => {
                    // Get icon based on variation name
                    const getIcon = (name: string) => {
                      const lowerName = name.toLowerCase();
                      if (lowerName.includes("model") || lowerName.includes("code")) {
                        return <RiFileList3Line className="h-5 w-5" />;
                      }
                      if (lowerName.includes("power") || lowerName.includes("output")) {
                        return <RiFlashlightLine className="h-5 w-5" />;
                      }
                      if (lowerName.includes("connector") || lowerName.includes("gun")) {
                        return <RiPlugLine className="h-5 w-5" />;
                      }
                      if (lowerName.includes("type")) {
                        return <RiSettings3Line className="h-5 w-5" />;
                      }
                      if (lowerName.includes("use") || lowerName.includes("case")) {
                        return <RiMapPinLine className="h-5 w-5" />;
                      }
                      return <RiBatteryChargeLine className="h-5 w-5" />;
                    };

                            const isPricedVariant = typeof variation.price === "string";
                            const pricedIndex = isPricedVariant
                              ? pricedVariations.findIndex((v) => v.name === variation.name)
                              : -1;
                            const isSelected =
                              isPricedVariant &&
                              pricedIndex !== -1 &&
                              pricedIndex === selectedVariantIndex;

                            return (
                      <tr
                        key={index}
                                onClick={() => {
                                  if (isPricedVariant && pricedIndex !== -1) {
                                    setSelectedVariantIndex(pricedIndex);
                                  }
                                }}
                                className={`hover:bg-slate-50 transition-colors cursor-${
                                  isPricedVariant ? "pointer" : "default"
                                } ${isSelected ? "bg-primary/5" : ""}`}
                      >
                        <td className="px-4 py-3 w-12">
                          <div className="text-primary">
                            {getIcon(variation.name)}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-semibold text-slate-900 min-w-[140px]">
                            {variation.name}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                                <div className="text-slate-700 flex flex-col gap-1">
                                  <span>{variation.value}</span>
                                  {variation.price && (
                                    <span className="text-sm font-semibold text-primary">
                                      {variation.price}
                                    </span>
                                  )}
                                </div>
                          {variation.description && (
                            <div className="text-sm text-slate-500 mt-1">
                              {variation.description}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section - Full Width with Tabs */}
      <div className="mt-12">
        <div className="border-b border-slate-200 mb-6">
          <nav className="flex gap-1">
            <button
              onClick={() => setActiveTab("stats")}
              className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${
                activeTab === "stats"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <RiThumbUpLine className="h-4 w-4" />
                Stats & Reacts
              </span>
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${
                activeTab === "comments"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <RiChat3Line className="h-4 w-4" />
                Comments
              </span>
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${
                activeTab === "projects"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <RiMapPinLine className="h-4 w-4" />
                Applicable Spaces
              </span>
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
          {activeTab === "stats" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Stats & Reactions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Likes Card - Clickable */}
                <button
                  onClick={() => {
                    setIsLiked(!isLiked);
                    setLikes(prev => isLiked ? prev - 1 : prev + 1);
                  }}
                  className="group text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {isLiked ? (
                      <RiHeartFill className="h-7 w-7 text-red-500 animate-pulse" />
                    ) : (
                      <RiHeartLine className="h-7 w-7 text-slate-400 group-hover:text-red-400 transition-colors" />
                    )}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1 transition-all">
                    {likes.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Likes</div>
                  <div className="text-xs text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isLiked ? "Click to unlike" : "Click to like"}
                  </div>
                </button>

                {/* Rating Card - Interactive Stars */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
                    <RiStarLine className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-3">{averageRating.toFixed(1)}</div>
                  <div className="text-sm text-slate-600 font-medium mb-4">Average Rating</div>
                  
                  {/* Interactive Star Rating */}
                  <div 
                    className="flex items-center justify-center gap-1 mb-2"
                    onMouseLeave={() => setHoveredStar(0)}
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isActive = star <= (hoveredStar || (hasRated ? userRating : Math.round(averageRating)));
                      return (
                        <button
                          key={star}
                          onClick={() => {
                            if (!hasRated) {
                              setUserRating(star);
                              setHasRated(true);
                              // Update average rating calculation
                              const newTotal = totalRatings + 1;
                              const newAvg = ((averageRating * totalRatings) + star) / newTotal;
                              setAverageRating(newAvg);
                              setTotalRatings(newTotal);
                              setPositiveReviews(prev => prev + 1);
                            }
                          }}
                          onMouseEnter={() => setHoveredStar(star)}
                          className="transition-transform hover:scale-125 active:scale-95"
                        >
                          <RiStarLine
                            className={`h-5 w-5 transition-all duration-200 ${
                              isActive
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300 hover:text-yellow-300"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <div className="text-xs text-slate-500">
                    {hasRated 
                      ? `You rated: ${userRating} stars` 
                      : hoveredStar > 0 
                        ? `Rate: ${hoveredStar} stars` 
                        : "Hover to rate"}
                  </div>
                </div>

                {/* Positive Reviews Card - Clickable */}
                <button
                  onClick={() => {
                    setPositiveReviews(prev => prev + 1);
                  }}
                  className="group text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                    <RiThumbUpLine className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1 transition-all">
                    {positiveReviews.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Positive Reviews</div>
                  <div className="text-xs text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to add review
                  </div>
                </button>
              </div>
              {details && details.specifications && details.specifications.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Technical Specifications</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {details.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 bg-slate-50 rounded-lg"
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
              {details && details.features && details.features.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {details.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <RiCheckLine className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "comments" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Customer Comments & Reviews</h3>
              <div className="space-y-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">John Doe</div>
                      <div className="text-sm text-slate-500">Verified Customer</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-yellow-500">
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    &quot;Excellent charging station! Fast charging speed and very reliable. 
                    Perfect for our commercial parking lot. Highly recommend!&quot;
                  </p>
                  <div className="mt-3 text-sm text-slate-500">2 days ago</div>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Sarah Miller</div>
                      <div className="text-sm text-slate-500">Business Owner</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-yellow-500">
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    &quot;Installed 5 units at our expressway service area. Great performance 
                    and customer satisfaction. The dual-gun feature is a game-changer!&quot;
                  </p>
                  <div className="mt-3 text-sm text-slate-500">1 week ago</div>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-700 font-semibold">MC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Mike Chen</div>
                      <div className="text-sm text-slate-500">Fleet Manager</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-yellow-500">
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4 fill-current" />
                      <RiStarLine className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    &quot;Future-proof design with excellent build quality. Our EV fleet 
                    charges efficiently. Weather resistance is impressive.&quot;
                  </p>
                  <div className="mt-3 text-sm text-slate-500">2 weeks ago</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Applicable Spaces</h3>
              <div className={`grid ${product.id === "ev-charging-89" ? "md:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
                {product.id === "ev-charging-89" ? (
                  <>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/green/96.jpg"
                          alt="Office building parking lot"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Office building parking lot</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Ideal for corporate and business facilities</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/green/97.jpg"
                          alt="Residential community"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Residential community</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Perfect for apartment complexes and housing developments</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/green/98.jpg"
                          alt="Commercial parking lot"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Commercial parking lot</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Suitable for shopping centers and retail facilities</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/green/99.jpg"
                          alt="Small enterprise parking lot"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Small enterprise parking lot</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Perfect for small businesses and local enterprises</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/small/83.jpg"
                          alt="Apartment parking spaces"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Apartment parking spaces</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Ideal for residential complexes and multi-unit buildings</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/small/84.jpg"
                          alt="Enterprise parking spaces"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Enterprise parking spaces</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Perfect for commercial and office parking facilities</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                        <Image
                          src="/Product/EV/small/85.jpg"
                          alt="Private parking spaces"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-bold text-white text-lg">Private parking spaces</h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 text-center">Suitable for individual homes and private garages</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

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


