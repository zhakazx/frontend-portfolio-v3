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
  title: "Zhaka Hidayat Yasir - Fullstack Developer",
  description:
    "Portfolio of Zhaka Hidayat Yasir, a passionate Fullstack Developer.",
  keywords: [
    "Zhaka Hidayat Yasir",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Web Development",
    "Portfolio",
    "Makassar",
    "Indonesia",
  ],
  authors: [{ name: "Zhaka Hidayat Yasir" }],
  openGraph: {
    type: "website",
    url: "https://zhakazx.com/",
    title: "Zhaka Hidayat Yasir - Fullstack Developer",
    description:
      "Portfolio of Zhaka Hidayat Yasir, a passionate Fullstack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
