import { CategoryCard } from "@/components/CategoryCard";
import { PageShell } from "@/components/PageShell";
import { getCategories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <PageShell>
      <div className="section-heading">
        <p className="eyebrow">Categories</p>
        <h1>カテゴリー一覧</h1>
      </div>
      <div className="category-grid">
        {getCategories().map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </PageShell>
  );
}
