import { products } from "@/data/products";
import ProductDetails from "./ProductDetails";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function Page() {
  return <ProductDetails />;
}
