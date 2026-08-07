import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sujan Multani — Full Stack Web Developer | Portfolio",
  description:
    "Production-grade portfolio of Sujan Multani, Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, and MongoDB.",
  keywords: ["Sujan Multani", "Full Stack Web Developer", "Next.js", "TypeScript", "React", "MongoDB", "Node.js"],
  authors: [{ name: "Sujan Multani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-text bg-noise antialiased selection:bg-accent selection:text-text">
        <SmoothScroll>
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col justify-between">
            <Navbar />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
