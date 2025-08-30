import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jeph - AI Automation Specialist | Business Process Automation",
  description:
    "Professional AI Automation Specialist helping businesses streamline operations with intelligent workflows using Make, Zapier, n8n, and AI technologies.",
  keywords:
    "AI automation, business automation, workflow optimization, Make, Zapier, n8n, process automation, AI integration, automation consultant",
  authors: [{ name: "Jeph", url: "https://jeph.dev" }],
  creator: "Jeph",
  publisher: "Jeph",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeph.dev",
    title: "Jeph - AI Automation Specialist",
    description:
      "Professional AI Automation Specialist helping businesses streamline operations with intelligent workflows.",
    siteName: "Jeph Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeph - AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeph - AI Automation Specialist",
    description:
      "Professional AI Automation Specialist helping businesses streamline operations with intelligent workflows.",
    images: ["/og-image.jpg"],
    creator: "@jeph",
  },
  alternates: {
    canonical: "https://jeph.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
