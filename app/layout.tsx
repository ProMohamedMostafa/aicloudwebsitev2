import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/components/header/Header";
import Footer from "./components/shared/components/footer/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";
import { I18nProvider } from "./i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-cloud.sa"
  ),
  title: "AI Cloud",
  description:
    "Advanced solutions to manage your business and provide services powered by artificial intelligence",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    title: "AI Cloud",
    description:
      "Advanced solutions to manage your business and provide services powered by artificial intelligence",
    url: "https://ai-cloud.sa",
    siteName: "AI Cloud",
    images: [
      {
        url: "/assets/images/ai_logo.svg",
        width: 1200,
        height: 630,
        alt: "AI Cloud",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cloud",
    description:
      "Advanced solutions to manage your business and provide services powered by artificial intelligence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <I18nProvider>
          <div className="min-h-screen flex flex-col">
            <header className="layout-container">
              <Header />
            </header>
            <main className="layout-container flex-1">{children}</main>
            <footer className="layout-container">
              <Footer />
            </footer>
          </div>
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
