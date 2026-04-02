import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STUDY.exe - 오픈형 스터디카페",
  description: "레트로 감성 오픈형 스터디카페",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DotGothic16&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
