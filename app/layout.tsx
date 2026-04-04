import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Muhaimin | Junior Software Developer",
  description:
    "Portfolio of a junior software developer: projects, experience, and technical skills.",
  openGraph: {
    title: "Abdul Muhaimin | Junior Software Developer",
    description:
      "Portfolio of a junior software developer: projects, experience, and technical skills.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
