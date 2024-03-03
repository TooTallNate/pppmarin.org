import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/header";
import { Footer } from "@/app/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marin County Council of Parent Participation Nursery Schools",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center`}>
        <Header />
        <main className="flex flex-col items-center py-8 md:px-12 max-w-5xl text-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
