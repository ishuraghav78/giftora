import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import ProductDetailClient from "../../../components/ProductDetailClient";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === params.id);

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
