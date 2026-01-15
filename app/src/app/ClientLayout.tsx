"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Show Navbar/Footer only on specific routes
  const showLayout =
    pathname === "/AboutUs" ||
    pathname === "/gallery" ||
    pathname === "/ContactUs";

  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
