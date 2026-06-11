import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="TOPへ戻る">
        <Image src="/logo.svg" alt="METRAS" width={197} height={50} priority />
      </Link>
      <nav className="header-nav" aria-label="主要メニュー">
        <Link href="/products">製品一覧</Link>
        <Link href="/categories">カテゴリー</Link>
        <Link href="/diagnosis">お悩み診断</Link>
      </nav>
    </header>
  );
}
