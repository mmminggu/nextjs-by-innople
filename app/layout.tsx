import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import {ApolloWrapper} from "@/app/ApolloWrapper"

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
        <ApolloWrapper>
      <header className="flex justify-between p-4">
        <Link href="/">home</Link>
        <Link href="/cart">cart</Link>
      </header>
      {children}
    </ApolloWrapper>
      </body>
    </html>
  );
}
