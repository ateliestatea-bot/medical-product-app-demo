import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { getProducts, getProductsByConcern } from "@/lib/data";

export default async function DiagnosisResultPage({
  searchParams
}: {
  searchParams: Promise<{ concern?: string }>;
}) {
  const { concern } = await searchParams;
  const selectedConcern = concern ?? "乾燥";
  const matchedProducts = getProductsByConcern(selectedConcern);
  const products = matchedProducts.length > 0 ? matchedProducts : getProducts().slice(0, 3);

  return (
    <PageShell>
      <Link href="/diagnosis" className="back-link">診断へ戻る</Link>
      <div className="result-hero">
        <p className="eyebrow">Result</p>
        <h1>「{selectedConcern}」に関連する製品</h1>
        <p>患者様のお悩みに合わせて、以下の製品をご提案できます。</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
