"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Shield, Truck, Leaf } from "lucide-react";

export default function ImpactGrid() {
    const impacts = [
        {
            title: "Global Health Architecture",
            description: "Accelerating structural targeting for next-generation vaccines and antiviral design. High-fidelity predictive modeling drastically reduces the timeline from pathogen identification to viable therapeutic candidates.",
            icon: <Shield className="w-6 h-6 text-biocyan" />,
            delay: 0.1
        },
        {
            title: "Supply Chain Resilience",
            description: "Engineering thermostable protein variants to create cold-storage-independent therapeutics. Democratizes access to critical biomolecules in resource-constrained environments globally.",
            icon: <Truck className="w-6 h-6 text-bioemerald" />,
            delay: 0.3
        },
        {
            title: "Agricultural Biotechnology",
            description: "Developing drought-resistant crop enzymes and sustainable, highly targeted biopesticides. Securing global food systems against accelerating climate-induced stressors through optimized bio-catalysts.",
            icon: <Leaf className="w-6 h-6 text-bioviolet" />,
            delay: 0.5
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {impacts.map((impact, index) => (
                <GlassCard key={index} delay={impact.delay} className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                        {impact.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{impact.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                        {impact.description}
                    </p>
                </GlassCard>
            ))}
        </div>
    );
}
