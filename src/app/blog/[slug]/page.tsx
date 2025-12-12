import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getResourceBySlug, resources } from "@/app/(home)/components/homeData";
import BlogDetail from "./components/BlogDetail";
import LayoutContainer from "@/components/layout/LayoutContainer";

export async function generateStaticParams() {
  return resources
    .filter((resource) => resource.slug)
    .map((resource) => ({
      slug: resource.slug!,
    }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${resource.title} | VoltHub Blog`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      images: [resource.image],
      type: "article",
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50">
      <LayoutContainer className="py-8 md:py-12 lg:py-16">
        <BlogDetail resource={resource} />
      </LayoutContainer>
    </main>
  );
}

