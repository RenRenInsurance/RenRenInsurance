import { ProductDetailPage } from "@/components/ProductDetailPage";
import { getSlugsForCategory } from "@/lib/productCatalog";

export function generateStaticParams() {
  return getSlugsForCategory("other").map((slug) => ({ slug }));
}

export default async function ServiceProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
