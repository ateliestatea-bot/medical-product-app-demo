import { Header } from "@/components/Header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="page-shell">{children}</main>
    </>
  );
}
