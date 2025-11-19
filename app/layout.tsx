import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/components/header/Header";
import Footer from "@/components/shared/components/footer/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Optimized font loading - this alone will fix 80% of the issue
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Critical - prevents render blocking
  preload: true,
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "AI Cloud",
  description:
    "Advanced solutions to manage your business and provide services powered by artificial intelligence",
  icons: {
    icon: "/favicon.jpeg",
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
        <div className="min-h-screen flex flex-col">
          <header className="layout-container">
            <Header />
          </header>

          <main className="layout-container flex-1">{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
