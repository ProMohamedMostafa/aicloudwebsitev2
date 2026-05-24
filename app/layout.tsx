import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/components/header/Header";
import Footer from "./components/shared/components/footer/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
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
        className={`${geistSans.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
            <header className="layout-container">
              <Header />
            </header>

            <main className="layout-container flex-1">{children}</main>

            <footer className="layout-container">
              <Footer />
            </footer>
          </div>
          {/* this component for scroll top */}
          <ScrollToTop />
      </body>
    </html>
  );
}
