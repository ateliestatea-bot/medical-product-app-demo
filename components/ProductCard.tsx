import Image from "next/image";
import Link from "next/link";
import { getCategoryName, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-card-image">
        <Image src={product.image} alt="" width={360} height={240} />
      </div>
      <div>
        <p className="eyebrow">{getCategoryName(product.categoryId)}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}
