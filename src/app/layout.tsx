import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
/*import { inter } from '@/app/UI/fonts';*/

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umesha G",
  description: "Portfolio of Umesha Madushan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
