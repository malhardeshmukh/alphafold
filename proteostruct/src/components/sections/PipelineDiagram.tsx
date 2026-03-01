"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Network, Database, Cpu, Layers } from "lucide-react";

export default function PipelineDiagram() {
    const steps = [
        {
            id: "01",
            title: "Input Sequence",
            desc: "Raw amino acid sequence ingested into the primary analytical engine.",
            icon: <Database className="w-8 h-8 text-biocyan" />,
        },
        {
            id: "02",
            title: "Evolutionary Covariance",
            desc: "Deep homologous alignments infer residue proximity constraints.",
            icon: <Network className="w-8 h-8 text-bioemerald" />,
        },
        {
            id: "03",
            title: "Neural Spatial Encoding",
            desc: "Attention-based equivariant architectures refine 3D coordinates.",
            icon: <Cpu className="w-8 h-8 text-bioviolet" />,
        },
        {
            id: "04",
            title: "Structural Output",
            desc: "Sub-Angstrom precision topological priors resolved.",
            icon: <Layers className="w-8 h-8 text-white" />,
        }
    ];

    return (
        <div className="py-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-glass-border to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-16 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className={`flex-1 ${index % 2 === 0 ? "md:max-w-md md:ml-auto" : "md:max-w-md md:mr-auto"}`}>
                            <GlassCard className="relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-biocyan/10 transition-colors" />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-gray-500 block mb-1">PHASE {step.id}</span>
                                        <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </GlassCard>
                        </div>

                        <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-glass-border bg-obsidian items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-biocyan to-bioviolet" />
                        </div>

                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
