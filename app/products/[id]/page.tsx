import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getCategoryName, getProductById, getProducts } from "@/lib/data";

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <Link href="/products" className="back-link">製品一覧へ戻る</Link>
      <section className="detail-layout">
        <div className="detail-image">
          <Image src={product.image} alt={product.name} width={720} height={480} priority />
        </div>
        <div className="detail-content">
          <p className="eyebrow">{getCategoryName(product.categoryId)}</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>

          <div className="detail-block">
            <h2>特徴</h2>
            <ul className="tag-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block">
            <h2>対象のお悩み</h2>
            <ul className="concern-list">
              {product.concerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
          </div>

          <a href={product.documentUrl} target="_blank" rel="noreferrer" className="touch-button primary document-button">
            資料を見る
          </a>
        </div>
      </section>
    </PageShell>
  );
}
