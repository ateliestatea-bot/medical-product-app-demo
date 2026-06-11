import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/data";

export default function ProductsPage() {
  return (
    <PageShell>
      <div className="section-heading">
        <p className="eyebrow">Products</p>
        <h1>製品一覧</h1>
      </div>
      <div className="product-grid">
        {getProducts().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
