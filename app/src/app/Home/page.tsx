"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Droplet, Heart, Leaf } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";

import VideoHero from "../Components/VideoHero";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <VideoHero>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-0">
          <motion.div
            className="flex-1 text-center md:text-left z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight text-white drop-shadow-md">
              <span className="text-white">Pawthentic</span>
              <br />
              Pure Paw Promise
            </h1>
            <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-xl drop-shadow-sm">
              Premium natural pet care shampoos formulated with love for your furry companions. Safe, effective, and crafted with ingredients like oatmeal, aloe, and coconut.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Link
                href="/Products"
                className="bg-accent hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Explore Products
              </Link>
              <Link
                href="/AboutUs"
                className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Optional: We can keep or remove the image. 
              Since the video is the background, we might not need the image, 
              or we can keep it if it's a specific product highlight.
              For now keeping it but styling it to fit nicely. 
          */}
          <motion.div
            className="flex-1 mb-12 md:mb-0 relative flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] h-[320px] sm:h-[420px] md:h-[480px]">
              {/* <img
                src="/images/home1.jpg"
                alt="Pawthentic pet care products"
                className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-white/20"
              /> */}
            </div>
          </motion.div>
        </div>
      </VideoHero>

      {/* WHY PAWTHENTIC SECTION */}
      <section className="py-20 text-center bg-[var(--background)]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-accent">Pawthentic?</span>
        </motion.h2>

        <motion.p
          className="text-secondary max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We believe your pets deserve the best. Our products are crafted with natural ingredients, proven safety standards, and genuine care for your furry friends.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "Natural Ingredients",
              desc:
                "Formulated with oatmeal, aloe vera, coconut oil, and strawberry extract. No harsh chemicals, no compromises on quality.",
              Icon: Leaf,
            },
            {
              title: "Pet-Safe Formulas",
              desc:
                "pH-balanced for dogs and cats. Dermatologist-tested, gentle on sensitive skin, and safe for regular use.",
              Icon: Heart,
            },
            {
              title: "Visible Results",
              desc:
                "Healthier coats, softer fur, reduced itching, and improved overall grooming. Notice the difference in every wash.",
              Icon: Droplet,
            },
          ].map(({ title, desc, Icon }, i) => (
            <motion.div
              key={i}
              className="p-8 bg-[var(--gradient-end)] rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-theme"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[var(--gold-dark)] rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-secondary">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-20 px-6 bg-theme-gradient">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-accent">Products</span>
        </motion.h2>

        <motion.p
          className="text-center text-secondary max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Discover our premium shampoo range, specially formulated for different pet needs.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-[var(--background)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-theme flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Product Image */}
              <div className="h-64 bg-white flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-auto object-contain" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm font-semibold text-accent mb-2">
                  {product.category === "dog" ? "DOG CARE" : "CAT CARE"}
                </span>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-accent-light font-semibold mb-3">
                  {product.tagline}
                </p>
                <p className="text-secondary text-sm flex-1 mb-4">
                  {product.description.substring(0, 120)}...
                </p>

                {/* CTA Button */}
                <Link
                  href={`/Products/${product.id}`}
                  className="text-center bg-accent hover:opacity-90 text-white font-semibold px-4 py-2 rounded-full transition-transform transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Link
            href="/Products"
            className="inline-block border border-theme text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Browse All Products
          </Link>
        </div>
      </section>

      {/* INGREDIENTS SECTION */}
      <section className="py-20 bg-[var(--background)] border-t border-theme">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Natural <span className="text-accent">Ingredients</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-5xl mx-auto">
          {[
            { name: "Oatmeal", emoji: "🌾", benefit: "Soothes skin" },
            { name: "Aloe Vera", emoji: "🌿", benefit: "Healing & soothing" },
            { name: "Coconut", emoji: "🥥", benefit: "Moisturizing" },
            { name: "Almond", emoji: "🫘", benefit: "Nourishing" },
          ].map(({ name, emoji, benefit }, i) => (
            <motion.div
              key={name}
              className="p-6 bg-[var(--gradient-end)] rounded-xl text-center border border-theme hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-2">{emoji}</div>
              <h3 className="font-semibold text-accent mb-1">{name}</h3>
              <p className="text-sm text-secondary">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent-gradient text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Pets Deserve the Best
        </motion.h2>
        <motion.p
          className="text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Join thousands of happy pet parents who trust Pawthentic for safe, natural, and effective pet care.
        </motion.p>
        <Link
          href="/Products"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
