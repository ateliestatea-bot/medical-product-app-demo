import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/data";

export default function HomePage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <PageShell>
      <section className="hero">
        <div>
          <p className="eyebrow">Clinic product navigator</p>
          <h1>患者様のお悩みに合わせて、最適な製品をすばやく提案。</h1>
          <p className="hero-copy">
            製品名、カテゴリー、患者様のお悩みから選べるタッチパネル向けプロトタイプです。
          </p>
        </div>
        <div className="hero-actions" aria-label="選択導線">
          <Link href="/products" className="touch-button primary">製品名から選択</Link>
          <Link href="/categories" className="touch-button">カテゴリーから選択</Link>
          <Link href="/diagnosis" className="touch-button">患者様のお悩みから選択</Link>
        </div>
      </section>

      <section className="section-grid two-columns">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Products</p>
            <h2>製品名から探す</h2>
          </div>
          <div className="compact-list">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <div className="section-heading">
            <p className="eyebrow">Categories</p>
            <h2>カテゴリーから探す</h2>
          </div>
          <div className="choice-list">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="choice-row">
                <span>{category.name}</span>
                <strong>見る</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
