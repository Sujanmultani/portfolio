import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Full-Stack Developer & Systems Architect | Studio Portfolio",
  description:
    "Production-grade developer portfolio featuring full-stack architecture, high-performance web systems, and design-led digital experiences.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "GSAP", "MongoDB", "Node.js", "Software Engineer"],
  authors: [{ name: "Developer Portfolio" }],
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
