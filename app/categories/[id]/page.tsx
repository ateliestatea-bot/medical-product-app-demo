import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { getCategories, getCategoryById, getProductsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return getCategories().map((category) => ({ id: category.id }));
}

export default async function CategoryProductsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = getCategoryById(id);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.id);

  return (
    <PageShell>
      <Link href="/categories" className="back-link">カテゴリー一覧へ戻る</Link>
      <div className="section-heading">
        <p className="eyebrow">Category</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
