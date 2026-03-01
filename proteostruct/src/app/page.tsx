import Hero from "@/components/ui/Hero";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, Activity, Zap, Database } from "lucide-react";
import Link from "next/link";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Paradigm Shift in <AnimatedGradientText text="Structural Biology" />
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              ProteoStruct represents a completely novel, independent academic endeavor
              designed to push the boundaries of AI-driven macromolecular predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard delay={0.1}>
              <Activity className="w-8 h-8 text-biocyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Evolutionary Accuracy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our models map deep evolutionary linkages across phylogenetic lineages,
                extracting structural determinants with unprecedented fidelity.
              </p>
            </GlassCard>

            <GlassCard delay={0.3}>
              <Zap className="w-8 h-8 text-bioemerald mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Computational Efficiency</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bypassing traditional resource-exhaustive molecular dynamics simulations
                through optimized neural spatial encoding matrices.
              </p>
            </GlassCard>

            <GlassCard delay={0.5}>
              <Database className="w-8 h-8 text-bioviolet mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Open Datasets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A massive, continuously compounding repository of predicted topologies
                available immediately for the global scientific community.
              </p>
            </GlassCard>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/science"
              className="inline-flex items-center gap-2 text-biocyan hover:text-white transition-colors border-b border-transparent hover:border-biocyan pb-1 font-medium"
            >
              Read the full methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
