import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';



export const metadata: Metadata = {
  title: "web",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
