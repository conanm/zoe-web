"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono, Khula } from "next/font/google";
// import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import "./globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const khula = Khula({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-khula',
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${khula.variable}`}>
        <GoogleAnalytics trackPageViews />
        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}
