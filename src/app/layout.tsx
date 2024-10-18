import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Stone | Homepage",
  description: "Invest in your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${""} antialiased`}>{children}</body>
    </html>
  );
}
