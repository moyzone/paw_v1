import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // ✅ Client-side wrapper for layout components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ✅ SITE-WIDE SEO CONFIGURATION
 * This data automatically applies to all pages.
 * Pawthentic - Premium Pet Care Products
 */
export const metadata: Metadata = {
  title: {
    default: "Pawthentic | Pure Paw Promise - Premium Pet Care Products",
    template: "%s | Pawthentic",
  },
  description:
    "Pawthentic delivers premium, natural pet care shampoos for dogs and cats. Our Pure Paw Promise ensures safe, effective grooming with natural ingredients like oatmeal, aloe, and coconut.",
  keywords: [
    "Pawthentic",
    "pet shampoo",
    "dog shampoo",
    "cat shampoo",
    "natural pet care",
    "Indie dog shampoo",
    "5-in-1 dog shampoo",
    "cat safe shampoo",
    "pet grooming products",
  ],
  authors: [{ name: "Pawthentic" }, { name: "Bagora Agency", url: "https://bagoraagency.com" }],
  creator: "Bagora Agency",
  publisher: "Pawthentic",
  metadataBase: new URL("https://pawthentic.com"), // 🔗 replace with your real domain
  openGraph: {
    title: "Pawthentic | Pure Paw Promise - Premium Pet Care",
    description:
      "Discover Pawthentic's premium pet care shampoos. Natural ingredients, safe formulations for dogs and cats. Pure Paw Promise.",
    url: "https://pawthentic.com",
    siteName: "Pawthentic",
    images: [
      {
        url: "https://pawthentic.com/og-image.jpg", // 🖼️ Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Pawthentic - Pure Paw Promise Premium Pet Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restopia Homestay | Comfortable Stay in Guwahati",
    description:
      "Enjoy a cozy, air-conditioned stay with free Wi-Fi and parking at Restopia Homestay, Guwahati.",
    images: ["https://restopiahomestay.com/og-image.jpg"], // 🖼️ same image
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
