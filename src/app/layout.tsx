import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter"
});

const rethink_sans = Rethink_Sans({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--rethink-sans"
});

export const metadata: Metadata = {
  title: "Home Connect",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rethink_sans.variable} bg-gray-scale-50`}
      >
        {children}
      </body>
    </html>
  );
}
