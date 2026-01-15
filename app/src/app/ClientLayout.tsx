"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Show Navbar/Footer on main site routes (include Products and product detail pages)
  const showLayout =
    pathname === "/AboutUs" ||
    pathname === "/gallery" ||
    pathname === "/ContactUs" ||
    pathname === "/" ||
    pathname === "/Products" ||
    pathname?.startsWith("/Products/");

  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
