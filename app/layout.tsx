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
  title: "DoSales - Stop Chasing Leads!",
  description: "Automated Outreach and Lead Qualification",
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
