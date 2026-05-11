"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${pathname === path
      ? "bg-accent text-white"
      : "text-[var(--text-primary)] hover:text-accent"
    }`;

  return (
    <nav className="bg-[var(--background)] border-b border-theme sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/only_logo_no_bg.png?v=2"
            alt="Pawthentic Logo"
            className="w-auto h-8 object-contain"
          />
          <img
            src="/images/only_text_no_bg.png?v=2"
            alt="Pawthentic"
            className="w-auto h-6 object-contain"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-3">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/AboutUs" className={linkClass("/AboutUs")}>
            About Us
          </Link>
          <Link href="/Products" className={linkClass("/Products")}>
            Products
          </Link>
          <Link href="/ContactUs" className={linkClass("/ContactUs")}>
            Contact
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-theme">
          <div className="flex flex-col space-y-1 px-3 py-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/AboutUs" },
              { name: "Products", path: "/Products" },
              { name: "Contact", path: "/ContactUs" },
            ].map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={linkClass(path)}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
