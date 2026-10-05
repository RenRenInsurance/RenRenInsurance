import { ProductDetailPage } from "@/components/ProductDetailPage";
import { getSlugsForCategory } from "@/lib/productCatalog";

export function generateStaticParams() {
  return getSlugsForCategory("commercial").map((slug) => ({ slug }));
}

export default async function BusinessProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
