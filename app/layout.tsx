import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const satoshi = localFont({
  src: [
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
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
    <html lang="en" className="h-full antialiased">
      <body className={`${satoshi.variable} min-h-full flex flex-col `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
