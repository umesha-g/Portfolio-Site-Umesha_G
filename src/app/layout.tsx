import type { Metadata } from "next";
import "./globals.css";
/*import { inter } from '@/app/UI/fonts';*/

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
      <body>{children}</body>
    </html>
  );
}
