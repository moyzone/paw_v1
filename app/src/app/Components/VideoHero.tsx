"use client";

import { motion } from "framer-motion";

export default function VideoHero({ children }: { children: React.ReactNode }) {
    const videoSrc = "/videos/pawthentic_indie.mp4";

    return (
        <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <motion.video
                    src={videoSrc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 z-0" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                {children}
            </div>
        </div>
    );
}
