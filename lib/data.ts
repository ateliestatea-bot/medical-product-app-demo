import categories from "@/data/categories.json";
import diagnosis from "@/data/diagnosis.json";
import products from "@/data/products.json";

export type Category = (typeof categories)[number];
export type Product = (typeof products)[number];
export type DiagnosisQuestion = (typeof diagnosis.questions)[number];

export function getProducts(): Product[] {
  return products;
}

export function getCategories(): Category[] {
  return categories;
}

export function getDiagnosisQuestions(): DiagnosisQuestion[] {
  return diagnosis.questions;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getProductsByConcern(concern: string): Product[] {
  return products.filter((product) => product.concerns.includes(concern));
}

export function getCategoryName(categoryId: string): string {
  return getCategoryById(categoryId)?.name ?? "未分類";
}
