"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

export default function Products() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-accent-light">Products</span>
        </motion.h1>
        <motion.p
          className="text-secondary max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover our premium range of natural pet shampoos, carefully formulated for different pet needs. Each product is crafted with love to ensure your furry friends get the best care.
        </motion.p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-[var(--background)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-theme flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Product Image */}
              <div className="h-72 bg-white flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                <img src={product.image} alt={product.name} className="h-full w-auto object-contain" />
              </div>

              {/* Product Info */}
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  {product.category === "dog" ? "DOG CARE" : "CAT CARE"}
                </span>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-accent-light font-semibold mb-4">
                  {product.tagline}
                </p>
                <p className="text-secondary text-sm flex-1 mb-6">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-accent mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-secondary text-sm flex items-center gap-2">
                        <span className="text-accent">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/Products/${product.id}`}
                  className="text-center bg-accent hover:opacity-90 text-black font-semibold px-6 py-3 rounded-full transition-transform transform hover:scale-105"
                >
                  View Details & Buy
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INGREDIENTS HIGHLIGHT */}
      <section className="py-20 bg-[var(--background)] border-t border-theme px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Natural <span className="text-accent">Ingredients</span> You Can Trust
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { name: "Oatmeal", emoji: "🌾", benefit: "Soothes & protects sensitive skin" },
            { name: "Aloe Vera", emoji: "🌿", benefit: "Healing & anti-inflammatory" },
            { name: "Coconut Oil", emoji: "🥥", benefit: "Deep moisturizing & conditioning" },
            { name: "Strawberry", emoji: "🍓", benefit: "Antioxidant & nourishing" },
          ].map(({ name, emoji, benefit }, i) => (
            <motion.div
              key={name}
              className="p-6 bg-[var(--gradient-end)] rounded-xl text-center border border-theme hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-3">{emoji}</div>
              <h3 className="font-bold text-accent mb-2">{name}</h3>
              <p className="text-secondary text-sm">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY OUR PRODUCTS */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-accent">Pawthentic Products?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔬",
              title: "Scientifically Formulated",
              desc: "Each product combines natural ingredients with proven science for maximum effectiveness.",
            },
            {
              icon: "✅",
              title: "Dermatologist Tested",
              desc: "Safe, gentle, and tested by professionals to ensure they're perfect for sensitive skin.",
            },
            {
              icon: "🌍",
              title: "Eco-Conscious",
              desc: "We're committed to sustainable sourcing and environmentally responsible practices.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="p-8 bg-[var(--background)] rounded-2xl border border-theme hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-accent mb-3">{title}</h3>
              <p className="text-secondary">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent-gradient text-black text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Give Your Pets the Pawthentic Experience
        </motion.h2>
        <motion.p
          className="text-black/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Available on your favorite platforms. Pure Paw Promise — guaranteed.
        </motion.p>
        <Link
          href="/ContactUs"
          className="inline-block bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
        >
          Have Questions? Contact Us
        </Link>
      </section>
    </main>
  );
}
