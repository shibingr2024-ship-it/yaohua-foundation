import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "天津市瑶华公益基金会",
  description: "天津市瑶华公益基金会官方网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
