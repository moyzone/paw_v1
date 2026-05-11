"use client";

import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--background)] text-secondary border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div>
          <h3 className="text-2xl font-bold text-accent mb-3 flex items-center gap-2">
            <img src="/images/only_logo_no_bg.png" alt="Logo" className="w-auto h-8" />
            Pawthentic
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
              <span>info@getpawthentic.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <span>+91-9181030800</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="https://www.instagram.com/getpawthentic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                @getpawthentic
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
