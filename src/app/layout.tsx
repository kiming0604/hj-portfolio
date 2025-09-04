import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEV HJ - Frontend Developer Portfolio",
  description: "React와 Next.js를 주로 사용하는 프론트엔드 개발자 DEV HJ의 포트폴리오입니다.",
  keywords: ["React", "Next.js", "TypeScript", "Frontend", "Developer", "Portfolio"],
  authors: [{ name: "DEV HJ" }],
  creator: "DEV HJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
