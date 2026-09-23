"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById } from "@/data/products";
import { ShoppingCart, Package, Award, Droplet } from "lucide-react";
import WaitlistPopup from "../../Components/WaitlistPopup";
import { useState, useEffect } from "react";


interface MetaPixelWindow {
    fbq?: (event: string, action: string, params?: Record<string, unknown>) => void;
}

export default function ProductDetail() {
    const params = useParams();
    const product = getProductById(params.id as string);

    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const [amazonTarget, setAmazonTarget] = useState("_blank");

    useEffect(() => {
        if (!product) return;

        if (typeof window !== "undefined" && typeof navigator !== "undefined") {
            const userAgent = navigator.userAgent || navigator.vendor || "";
            const isMobile = /android|iPad|iPhone|iPod/i.test(userAgent);

            if (isMobile) {
                setAmazonTarget("_self");
            }
        }
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-theme-gradient">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-accent mb-4">Product Not Found</h1>
                    <p className="text-secondary mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link
                        href="/Products"
                        className="inline-block bg-accent hover:opacity-90 text-black font-semibold px-8 py-3 rounded-full transition"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // Product Schema for SEO
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": `https://getpawthentic.com${product.image}`,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Pawthentic"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://getpawthentic.com/Products/${product.id}`,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    const handleBuyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsWaitlistOpen(true);
    };

    const handleAmazonClick = () => {
        if (typeof window !== "undefined") {
            const pixelWindow = window as unknown as MetaPixelWindow;
            if (pixelWindow.fbq) {
                pixelWindow.fbq('track', 'Purchase', {
                    content_name: product.name,
                    content_ids: [product.id],
                    content_type: 'product',
                    value: 0.00,
                    currency: 'INR'
                });
            }
        }
    };

    return (
        <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
            {/* Product SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <WaitlistPopup isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

            {/* BREADCRUMB */}
            <section className="py-6 px-6 border-b border-theme">
                <div className="max-w-6xl mx-auto flex items-center gap-2 text-secondary">
                    <Link href="/Products" className="hover:text-accent transition">
                        Products
                    </Link>
                    <span>/</span>
                    <span className="text-accent font-semibold">{product.name}</span>
                </div>
            </section>

            {/* PRODUCT HERO */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Product Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-full h-96 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="h-full w-auto object-contain" />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-bold text-accent uppercase tracking-wider">
                            {product.category === "dog" ? "DOG CARE" : "CAT CARE"}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3">{product.name}</h1>
                        <p className="text-xl text-accent-light font-semibold mb-6">{product.tagline}</p>

                        {/* Description */}
                        <p className="text-secondary text-lg leading-relaxed mb-8">{product.description}</p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 flex-wrap mb-8">
                            <a
                                href={product.amazonUrl}
                                target={amazonTarget}
                                rel="noopener noreferrer"
                                onClick={handleAmazonClick}
                                className="flex items-center gap-2 bg-accent hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-transform transform hover:scale-105"
                            >
                                <ShoppingCart size={20} />
                                Buy on Amazon
                            </a>
                            <a
                                href={product.flipkartUrl}
                                onClick={handleBuyClick}
                                className="hidden flex items-center gap-2 border border-theme text-accent hover:bg-[var(--gold-dark)] hover:text-white font-semibold px-6 py-3 rounded-full transition"
                            >
                                <Package size={20} />
                                Buy on Flipkart
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "✓", text: "Dermatologist Tested" },
                                { icon: "🌿", text: "100% Natural" },
                                { icon: "✓", text: "Pet Safe" },
                                { icon: "⭐", text: "Proven Results" },
                            ].map(({ icon, text }, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-[var(--background)] rounded-lg border border-theme">
                                    <span className="text-xl text-accent">{icon}</span>
                                    <span className="text-sm font-semibold">{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="py-20 px-6 bg-[var(--background)] border-t border-theme">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Key <span className="text-accent">Benefits</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {product.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                className="p-6 bg-[var(--gradient-end)] rounded-xl border border-theme flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div className="p-3 bg-accent rounded-full flex-shrink-0">
                                    <Droplet className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-secondary">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INGREDIENTS */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Carefully Selected <span className="text-accent">Ingredients</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {product.ingredients.map((ingredient, i) => (
                        <motion.div
                            key={i}
                            className="p-8 bg-[var(--background)] rounded-2xl border border-theme hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-accent rounded-full flex-shrink-0">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{ingredient}</h3>
                                    <p className="text-secondary text-sm">Premium quality, naturally sourced</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* HOW TO USE */}
            <section className="py-20 px-6 bg-[var(--background)] border-t border-theme">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        How to <span className="text-accent">Use</span>
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: "Wet Your Pet's Coat",
                                desc: "Rinse your pet's fur with lukewarm water, ensuring all areas are thoroughly wet.",
                            },
                            {
                                step: "2",
                                title: "Apply Shampoo",
                                desc: "Apply a generous amount of Pawthentic shampoo, working it into a rich lather.",
                            },
                            {
                                step: "3",
                                title: "Massage Gently",
                                desc: "Massage thoroughly, paying special attention to problem areas. Leave for 2-3 minutes.",
                            },
                            {
                                step: "4",
                                title: "Rinse Thoroughly",
                                desc: "Rinse completely with clean water until no shampoo residue remains.",
                            },
                            {
                                step: "5",
                                title: "Dry & Enjoy",
                                desc: "Pat dry with a towel and enjoy a freshly groomed, healthy-looking coat!",
                            },
                        ].map(({ step, title, desc }, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-6 p-6 bg-[var(--gradient-end)] rounded-xl border border-theme"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div className="p-4 bg-accent text-white rounded-full font-bold text-2xl flex-shrink-0 flex items-center justify-center h-16 w-16">
                                    {step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                                    <p className="text-secondary">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                    Ready to Get {product.name}?
                </motion.h2>
                <motion.p
                    className="text-white/90 max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Your pets deserve the best. Order now and give them the Pawthentic care they deserve.
                </motion.p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href={product.amazonUrl}
                        target={amazonTarget}
                        rel="noopener noreferrer"
                        onClick={handleAmazonClick}
                        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                    >
                        Buy on Amazon
                    </a>
                    <a
                        href={product.flipkartUrl}
                        onClick={handleBuyClick}
                        className="hidden inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-transform transform hover:scale-105"
                    >
                        Buy on Flipkart
                    </a>
                </div>
            </section>

            {/* RELATED PRODUCTS */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    You Might Also Like
                </motion.h2>

                <div className="text-center">
                    <Link
                        href="/Products"
                        className="inline-block border border-theme text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-full transition"
                    >
                        Explore All Products
                    </Link>
                </div>
            </section>
        </main>
    );
}
