"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Zap, Shield } from "lucide-react";

export default function About() {
  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-accent-light">Pawthentic</span>
        </motion.h1>
        <motion.p
          className="text-secondary text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <strong>Pawthentic</strong> — where pet care meets pure love. We're dedicated to creating premium natural shampoos that protect, nourish, and celebrate the unique needs of dogs and cats.
        </motion.p>
      </section>

      {/* OUR STORY */}
      <section className="py-16 px-6 bg-[var(--background)] border-t border-theme">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex flex-col justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-accent mb-4">Our Story</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Pawthentic was born from a simple belief: pets are family, and family deserves the best. What started as a personal quest to find safe, natural grooming products for beloved pets has grown into a mission to revolutionize pet care.
            </p>
            <p className="text-secondary leading-relaxed">
              Every shampoo is crafted with meticulous care, blending time-tested natural ingredients with modern science. We believe that your pets' health and happiness should never be compromised for convenience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { title: "Pet-Focused", desc: "Designed for dogs & cats", Icon: Heart },
              { title: "100% Natural", desc: "No harsh chemicals", Icon: Leaf },
              { title: "Effective Results", desc: "Visible improvement", Icon: Zap },
              { title: "Dermatologist-Tested", desc: "Safety proven", Icon: Shield },
            ].map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="p-6 bg-[var(--gradient-end)] rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-theme text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[var(--gold-dark)] rounded-full">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-secondary text-sm">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-accent">Values</span>
        </motion.h2>
        <motion.p
          className="text-secondary max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Purity, safety, and genuine care for pets guide every decision we make.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pure Ingredients",
              text: "Natural oatmeal, aloe vera, coconut oil, and strawberry extract — no fillers, no toxins, just pure goodness.",
              Icon: Leaf,
            },
            {
              title: "Pet Safety",
              text: "pH-balanced formulas for dogs and cats. Dermatologist-tested and gentle on sensitive skin.",
              Icon: Shield,
            },
            {
              title: "Proven Efficacy",
              text: "Our formulas deliver visible results: healthier coats, softer fur, reduced itching, and improved wellbeing.",
              Icon: Zap,
            },
          ].map(({ title, text, Icon }, i) => (
            <motion.div
              key={title}
              className="p-8 bg-[var(--background)] rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-theme"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[var(--gold-dark)] rounded-full">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{title}</h3>
              <p className="text-secondary">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="py-20 px-6 bg-[var(--background)] border-t border-theme">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-accent">Product Range</span>
        </motion.h2>

        <motion.p
          className="text-center text-secondary max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Carefully formulated for different needs, each shampoo combines natural ingredients with proven science.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Indie Dog Shampoo",
              desc: "Specially formulated for Indian dog breeds with allantoin to soothe and heal sensitive skin.",
              features: ["Allantoin for skin health", "Natural shine boost", "Breed-specific formula"],
            },
            {
              title: "Advanced Dog Coat Shampoo",
              desc: "5-in-1 formula that cleans, detangles, conditions, moisturizes, and nourishes in one wash.",
              features: ["5-in-1 benefits", "Deep conditioning", "Effortless grooming"],
            },
            {
              title: "Foaming Cat Shampoo",
              desc: "Gentle feline-specific formula with pH levels safe for cats and natural foam for easy bathing.",
              features: ["Cat-safe pH", "Gentle foaming", "Low stress bathing"],
            },
          ].map(({ title, desc, features }, i) => (
            <motion.div
              key={title}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-theme"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
              <p className="text-black/80 text-sm mb-4">{desc}</p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="text-black/70 text-sm flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE PAWTHENTIC */}
      <section className="py-20 text-center px-6 bg-theme-gradient">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Why Pet Parents <span className="text-accent">Choose Pawthentic</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
          {[
            "✓ 100% natural ingredients with no harsh chemicals",
            "✓ Dermatologist-tested and veterinarian-approved",
            "✓ pH-balanced for both dogs and cats",
            "✓ Visible results in coat health and shine",
            "✓ Safe for regular use and sensitive skin",
            "✓ Eco-conscious and responsibly sourced",
          ].map((feature, i) => (
            <motion.p
              key={i}
              className="text-secondary text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {feature}
            </motion.p>
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
          Ready to Experience Pawthentic?
        </motion.h2>
        <motion.p
          className="text-black/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Give your furry friends the gift of pure, natural pet care. Join our growing community of satisfied pet parents.
        </motion.p>
        <a
          href="/Products"
          className="inline-block bg-black text-accent font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--gold-dark)] hover:text-black transition-transform transform hover:scale-105"
        >
          Shop Pawthentic
        </a>
      </section>
    </main>
  );
}
