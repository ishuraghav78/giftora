import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import ProductDetailClient from "../../../components/ProductDetailClient";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
