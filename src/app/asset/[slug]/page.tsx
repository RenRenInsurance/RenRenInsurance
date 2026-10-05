import { ProductDetailPage } from "@/components/ProductDetailPage";
import { getSlugsForCategory } from "@/lib/productCatalog";

export function generateStaticParams() {
  return getSlugsForCategory("asset").map((slug) => ({ slug }));
}

export default async function AssetProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
