import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import PipelineDiagram from "@/components/sections/PipelineDiagram";
import GlassCard from "@/components/ui/GlassCard";

export default function SciencePage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    The <AnimatedGradientText text="Science" /> of ProteoStruct
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A rigorous academic deep-dive into our novel algorithmic approach,
                    merging biological intuition with machine learning architectures.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Evolutionary Covariance Mapping (ECM)</h2>
                        <div className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed">
                            <p className="mb-4">
                                At the core of ProteoStruct's predictive engine lies our proprietary Evolutionary Covariance Mapping (ECM) framework. By abandoning traditional, computationally exhaustive molecular dynamics simulations, ECM leverages deep homologous sequence alignments to statistically infer residue-residue proximity constraints.
                            </p>
                            <p>
                                This process captures deep evolutionary linkages across phylogenetic lineages, allowing the robust mathematical projection of intricate structural determinants from primary amino acid sequences with unprecedented computational efficiency and topological fidelity.
                            </p>
                        </div>
                    </div>
                    <GlassCard className="bg-obsidian/80">
                        <div className="aspect-video flex items-center justify-center rounded-lg border border-white/5 bg-black/40 relative overflow-hidden">
                            {/* Abstract placeholder for ECM representation */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-biocyan/20 to-transparent opacity-50"></div>
                            <div className="relative font-mono text-sm text-biocyan animate-pulse">
                                &gt; Aligning homologous sequences...<br />
                                &gt; Inferring spatial constraints...<br />
                                &gt; Computing covariance matrix...
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>

            <div className="bg-white/5 border-y border-glass-border py-24 my-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bioviolet/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Neural Spatial Encoding (NSE)</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Building upon the topological priors established by ECM, ProteoStruct employs a secondary phase of Neural Spatial Encoding. The NSE module utilizes attention-based equivariant neural architectures to iteratively refine three-dimensional coordinate placements in continuous space.
                        </p>
                    </div>
                    <PipelineDiagram />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Achieving Sub-Angstrom Precision</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                    This multi-layered attention mechanism explicitly preserves translation and rotation symmetries, dynamically adjusting dihedral angles to achieve physically viable atomic realities. The synergistic integration of ECM and NSE results in sub-Angstrom precision, enabling the rigorous resolution of orphan proteins and massive macromolecular complexes previously considered intractable by conventional crystallographic methods.
                </p>
            </div>
        </div>
    );
}
