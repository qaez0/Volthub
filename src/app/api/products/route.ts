import { NextResponse } from "next/server";
import { products, categories, categoryBanner, type ProductCategory } from "@/app/products/components/productData";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") as ProductCategory | null;
    const search = searchParams.get("search")?.toLowerCase() || "";
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    // Filter products by category if provided
    let filteredProducts = products;
    
    if (category && category !== "all") {
      filteredProducts = products.filter((product) => product.category === category);
    }

    // Filter by search query if provided
    if (search) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.subtitle.toLowerCase().includes(search) ||
          product.description?.toLowerCase().includes(search) ||
          product.tag?.toLowerCase().includes(search)
      );
    }

    // Apply pagination if provided
    const limitNum = limit ? parseInt(limit, 10) : undefined;
    const offsetNum = offset ? parseInt(offset, 10) : 0;
    
    let paginatedProducts = filteredProducts;
    if (limitNum) {
      paginatedProducts = filteredProducts.slice(offsetNum, offsetNum + limitNum);
    }

    // Get category info if category is specified
    const categoryInfo = category && category !== "all" ? categoryBanner[category] : null;

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        categories,
        categoryInfo,
        pagination: {
          limit: limitNum,
          offset: offsetNum,
          hasMore: limitNum ? offsetNum + limitNum < filteredProducts.length : false,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}




