import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXA | Consultancy",
  description: "Professional consultancy services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-2xl font-extrabold text-blue-800">
              NEXA<span className="text-blue-500">.</span>
            </Link>

            <div className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
              <Link href="/" className="hover:text-blue-700">Home</Link>
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/service" className="hover:text-blue-700">Services</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </div>

            <Link
              href="/contact"
              className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Get Consultation
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-950 px-6 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                NEXA<span className="text-blue-400">.</span>
              </h2>
              <p className="leading-7 text-gray-400">
                Your trusted partner for professional consultancy,
                strategic planning, and business growth.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <div className="flex flex-col gap-3 text-gray-400">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
              <p className="mb-2 text-gray-400">Email: info@nexa.com</p>
              <p className="text-gray-400">Website: www.nexa.com</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2026 NEXA Consultancy. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}