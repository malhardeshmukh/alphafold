"use client";

import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
}

export default function AnimatedGradientText({
    text,
    className = "",
    as: Component = "span"
}: AnimatedGradientTextProps) {
    return (
        <Component className={`relative inline-block ${className}`}>
            <motion.span
                className="text-gradient bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {text}
            </motion.span>
        </Component>
    );
}
