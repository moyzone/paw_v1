"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { submitToGoogleSheets } from "../utils/submitToGoogleSheets";

interface WaitlistPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await submitToGoogleSheets({
            type: 'waitlist',
            ...formData
        });

        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "" });
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition z-10"
                        >
                            <X size={24} />
                        </button>

                        {/* Content */}
                        <div className="p-8 pt-12 text-center">
                            {/* Dog "Mascot" Header */}
                            <div className="flex flex-col items-center justify-center mb-6">
                                <div className="w-24 h-24 relative mb-4">
                                    <Image
                                        src="/images/only_logo_no_bg.png"
                                        alt="Pawthentic Dog"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Speech Bubble */}
                                <div className="relative bg-black text-white px-6 py-4 rounded-2xl rounded-tr-none mb-2 shadow-lg">
                                    <p className="font-medium text-sm md:text-base">
                                        Hold up dear friend! 🐾
                                    </p>
                                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-black transform rotate-45"></div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                We&apos;re Cooking Up Something Pawsome!
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are still creating the best formulations for you and are coming soon.
                                Please fill the form below to join the waitlist and get first access to our products.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-green-50 text-green-800 p-4 rounded-xl"
                                >
                                    <p className="font-bold">Thanks for joining! 🐶</p>
                                    <p className="text-sm">We&apos;ll bark at you soon!</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transform hover:scale-[1.02] transition-all shadow-lg mt-4"
                                    >
                                        Join Waitlist
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
