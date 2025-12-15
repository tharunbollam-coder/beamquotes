import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "BeamQuotes - Discover Inspiring Quotes Daily",
  description:
    "BeamQuotes - Find powerful quotes from great minds. Share, save, and get daily inspiration.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "quotes",
    "inspiration",
    "motivation",
    "wisdom",
    "life quotes",
    "success quotes",
    "Sanity CMS",
  ],
  authors: [{ name: "Quotes" }],
  openGraph: {
    title: "Quotes - Discover Inspiring Quotes Daily",
    description:
      "Find powerful quotes from great minds. Share, save, and get daily inspiration.",
    url: siteUrl,
    siteName: "Quotes",
    images: [
      {
        url: "https://cdn.sanity.io/images/placeholder/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quotes - Daily Inspiration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotes - Discover Inspiring Quotes Daily",
    description:
      "Find powerful quotes from great minds. Share, save, and get daily inspiration.",
    images: ["https://cdn.sanity.io/images/placeholder/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
