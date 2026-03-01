"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-glass-highlight ${className}`}
        >
            {children}
        </motion.div>
    );
}
