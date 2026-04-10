import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const satoshi = localFont({
  src: [
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dosales-omega.vercel.app/"),
  title: {
    default: "DoSales | AI-Powered B2B Lead Generation & Outreach",
    template: "%s | DoSales"
  },
  description: "Automate your B2B sales pipeline with DoSales AI. Discover leads, enrich data, and qualify prospects automatically across MENA and Southeast Asia.",
  keywords: ["B2B lead generation", "sales automation", "AI outreach", "lead qualification", "MENA B2B data", "Southeast Asia sales intelligence", "automated prospecting"],
  authors: [{ name: "DoSales Team" }],
  creator: "DoSales",
  publisher: "DoSales",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DoSales | AI-Powered B2B Lead Generation & Outreach",
    description: "Automate your B2B sales pipeline with DoSales AI. Discover leads, enrich data, and qualify prospects automatically.",
    url: "https://dosales-omega.vercel.app/",
    siteName: "DoSales",
    images: [
      {
        url: "/assets/svg/logo.svg",
        width: 800,
        height: 600,
        alt: "DoSales Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoSales | AI-Powered B2B Lead Generation & Outreach",
    description: "Automate your B2B sales pipeline with DoSales AI.",
    images: ["/assets/svg/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/svg/logo.svg",
    shortcut: "/assets/svg/logo.svg",
    apple: "/assets/svg/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
