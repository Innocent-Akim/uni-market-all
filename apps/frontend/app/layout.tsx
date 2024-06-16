import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'UNI-MARKET',
  description: "Uni-Market is an innovative and inclusive online trading platform, offering a centralised space for a variety of commercial transactions.As a universal marketplace, Uni-Market aims to bring together buyers and sellers from around the world, facilitating diverse exchanges in a single interface.With a commitment to inclusivity and diversity, Uni-Market offers a seamless and global experience, connecting consumers to a wide range of products and services. Uni-Market aspires to become the go-to destination for those seeking easy access to a diverse range of items, creating a dynamic and interconnected trading community.",
  applicationName: 'UNIMARKET',
  keywords: ['UNI-MARKET', 'UNICOMMERCE', 'UNIFIEDMARKET', 'UniHubMarket UNIHUBMARKET', 'UNIMARKET'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
