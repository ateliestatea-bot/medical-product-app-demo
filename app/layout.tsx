import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METRAS 製品提案プロトタイプ",
  description: "タッチパネル向け製品提案Webアプリ"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
