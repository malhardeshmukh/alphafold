"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Dna } from "lucide-react";
import AnimatedGradientText from "./AnimatedGradientText";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Abstract Background Animation */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-[800px] h-[800px] border border-biocyan/20 rounded-full flex items-center justify-center"
                >
                    <div className="w-[600px] h-[600px] border border-bioemerald/20 rounded-full border-dashed" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-biocyan/30 bg-biocyan/10 mb-8"
                >
                    <Dna className="w-4 h-4 text-biocyan animate-pulse" />
                    <span className="text-xs font-medium text-biocyan tracking-wider uppercase">
                        Evolutionary Covariance Mapping
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    <span className="block text-white mb-2">Deciphering the</span>
                    <AnimatedGradientText text="Language of Proteins" />
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    ProteoStruct democratizes access to AI-driven macromolecular structure models.
                    By bridging deep evolutionary linkages with neural spatial encoding, we provide
                    sub-Angstrom precision for the world's most critical biological challenges.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/science"
                        className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                    >
                        Explore Methodology
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/research"
                        className="px-8 py-4 rounded-full font-semibold text-gray-300 hover:text-white border border-transparent hover:border-gray-700 transition-colors"
                    >
                        Download Datasets
                    </Link>
                </motion.div>
            </div>

            {/* Decorative bioluminescent orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-biocyan/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bioviolet/20 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
