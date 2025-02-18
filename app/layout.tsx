import { Laila, Lora, Noto_Sans } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";

const laila = Laila({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "PatShop App",
  description: "Generated by PatShop App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${laila.className} ${lora.className} ${noto.className} antialiased bg-white text-black`}
      >
        <Navbar />
        <hr className="border border-[#D9D9D9]"/>
        <main className=" bg-white text-black">
           {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
