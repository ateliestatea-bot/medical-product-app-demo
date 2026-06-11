import Link from "next/link";
import type { Category } from "@/lib/data";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="category-card"
      style={{ "--accent": category.accent } as React.CSSProperties}
    >
      <span className="category-marker" />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </Link>
  );
}
