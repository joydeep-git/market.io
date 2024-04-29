import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market.io",
  description: "Digital Marketplace for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative font-sans h-full antialiased", inter.className)}>
        <main className="flex flex-col relative min-h-screen">
          <div className="flex-1 flex-grow">{ children }</div>
        </main>
      </body>
    </html>
  );
}