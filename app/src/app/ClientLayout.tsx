"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Normalize trailing slashes (e.g., /AboutUs/ -> /AboutUs) for exact route matching
  const cleanPath = pathname?.replace(/\/$/, "") || "/";
  const normalizedPath = cleanPath === "" ? "/" : cleanPath;

  // Show Navbar/Footer on main site routes (include Products and product detail pages)
  const showLayout =
    normalizedPath === "/AboutUs" ||
    normalizedPath === "/gallery" ||
    normalizedPath === "/ContactUs" ||
    normalizedPath === "/" ||
    normalizedPath === "/Products" ||
    normalizedPath?.startsWith("/Products/");

  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
