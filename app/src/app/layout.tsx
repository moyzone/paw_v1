import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // ✅ Client-side wrapper for layout components
import Script from "next/script";

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
    "pet grooming products India",
    "best organic dog shampoo",
    "gentle cat shampoo India",
  ],
  authors: [{ name: "Pawthentic" }, { name: "Pawthentic", url: "https://getpawthentic.com" }],
  creator: "Pawthentic",
  publisher: "Pawthentic",
  metadataBase: new URL("https://getpawthentic.com"), // 🔗 replace with your real domain
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Pawthentic | Pure Paw Promise - Premium Pet Care",
    description:
      "Discover Pawthentic's premium pet care shampoos. Natural ingredients, safe formulations for dogs and cats. Pure Paw Promise.",
    url: "https://getpawthentic.com",
    siteName: "Pawthentic",
    images: [
      {
        url: "https://getpawthentic.com/og-image.jpg", // 🖼️ Replace with your actual image
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
    title: "Pawthentic | Pure Paw Promise - Premium Pet Care",
    description:
      "Pawthentic delivers premium, natural pet care shampoos for dogs and cats. Our Pure Paw Promise ensures safe, effective grooming.",
    images: ["https://getpawthentic.com/og-image.jpg"],
  },
  icons: {
    icon: "/images/logo_p.png",
    shortcut: "/images/logo_p.png",
    apple: "/images/logo_p.png",
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
        <Script id="www-redirect" strategy="beforeInteractive">
          {`
            if (window.location.hostname.startsWith('www.')) {
              window.location.replace(window.location.href.replace('www.', ''));
            }
          `}
        </Script>
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pawthentic",
              "url": "https://getpawthentic.com",
              "logo": "https://getpawthentic.com/images/logo.png",
              "description": "Pawthentic delivers premium, natural pet care shampoos for dogs and cats with our Pure Paw Promise.",
              "brand": "Pawthentic",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            }
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2203603280392566');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2203603280392566&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
