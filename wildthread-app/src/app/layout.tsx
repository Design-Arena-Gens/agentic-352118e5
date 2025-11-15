import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WildThreadBot | Wear Your Wild",
  description:
    "WildThreadBot automates WildThread Co., a feminist print-on-demand brand. Manage product drops, marketing, finances, and operations end-to-end while you sleep.",
  metadataBase: new URL("https://agentic-352118e5.vercel.app"),
  openGraph: {
    title: "WildThreadBot | Wear Your Wild",
    description:
      "Automation HQ for WildThread Co.—women's empowerment apparel run by an autonomous AI agent.",
    url: "https://agentic-352118e5.vercel.app",
    siteName: "WildThreadBot",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "WildThread Co.",
    "WildThreadBot",
    "print on demand automation",
    "Etsy automation",
    "women empowerment t-shirts",
    "AI ecommerce operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-zinc-950 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
