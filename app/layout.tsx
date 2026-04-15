import type { Metadata } from "next";
import { Manrope, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EdTech Canvas",
  description: "The Intelligent Canvas for Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        manrope.variable,
        inter.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="bg-background text-on-surface font-body antialiased selection:bg-primary-fixed selection:text-on-primary-fixed-variant">
        {children}

        <Toaster toastOptions={{}} theme="light" richColors />
      </body>
    </html>
  );
}
