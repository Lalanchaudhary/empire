import type { Metadata } from "next";
import "./globals.css";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EMPIRE Online Cricket ID",
  description: "EMPIRE online cricket ID and customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
