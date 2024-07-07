import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "../app/Loading"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NestJSTutorial",
  description: "NextJstutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
        {children}
        </Suspense>
        </body>
    </html>
  );
}
