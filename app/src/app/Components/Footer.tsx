"use client";

import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--background)] text-secondary border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div>
          <h3 className="text-2xl font-bold text-accent mb-3 flex items-center gap-2">
            🐾 Pawthentic
          </h3>
          <p>
            Premium natural pet care products with a Pure Paw Promise.
            Trusted by pet parents for safe, effective grooming solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Products", "Contact"].map((t) => (
              <li key={t}>
                <a href={`/${t === "Home" ? "" : t.replace(" ", "")}`} className="hover:text-accent transition">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>contact@pawthentic.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <span>1-800-PAW-CARE</span>
            </li>
          </ul>
          <div className="flex justify-start mt-5 space-x-4">
            <a
              href="https://www.instagram.com/pawthentic"
              className="text-accent hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-theme py-4 text-center text-sm">
        © {new Date().getFullYear()} Pawthentic. All rights reserved. Pure Paw Promise.
        <p className="text-xs mt-1 text-accent-light">
          Designed with ❤️ by{" "}
          <a
            href="https://bagora.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            Bagora Agency
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
