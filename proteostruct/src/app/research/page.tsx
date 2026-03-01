import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import GlassCard from "@/components/ui/GlassCard";
import { Download, FileText, Database } from "lucide-react";

export default function ResearchPage() {
    const datasets = [
        { title: "Human Proteome Baseline (ECM-v1)", type: ".csv, .pdb", size: "128 GB", badge: "Core" },
        { title: "Bacterial Pathogen Subset", type: ".pdb, FASTA", size: "45 GB", badge: "Applied" },
        { title: "Plant Genomic Hydrolases", type: ".cif", size: "18 GB", badge: "Agriculture" },
    ];

    const papers = [
        { title: "Evolutionary Covariance Mapping in Sparse Lineages", date: "April 2026", journal: "ProteoStruct Preprint" },
        { title: "Neural Spatial Encoding for Cryo-EM Resolution Estimation", date: "March 2026", journal: "ProteoStruct Preprint" },
        { title: "Thermostability Optimization of Monoclonal Antibodies", date: "January 2026", journal: "Computational Biology Review" },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Open Access <AnimatedGradientText text="Knowledge Repository" />
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                        In our commitment to democratizing access to bioscience, we provide entirely static,
                        easily downloadable structural datasets and whitepapers for the scientific community without barriers or proprietary APIs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Datasets Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Database className="w-6 h-6 text-biocyan" />
                            <h2 className="text-2xl font-bold text-white">Topological Datasets</h2>
                        </div>
                        <div className="space-y-4">
                            {datasets.map((dataset, idx) => (
                                <GlassCard key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between group p-5 hover:bg-glass-highlight">
                                    <div className="mb-4 sm:mb-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-biocyan/20 text-biocyan border border-biocyan/30">
                                                {dataset.badge}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-white group-hover:text-biocyan transition-colors">{dataset.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{dataset.type} • {dataset.size}</p>
                                    </div>
                                    <button className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-biocyan/20 hover:border-biocyan/40 transition-colors text-gray-300 hover:text-white">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </GlassCard>
                            ))}
                        </div>
                    </section>

                    {/* Whitepapers Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <FileText className="w-6 h-6 text-bioemerald" />
                            <h2 className="text-2xl font-bold text-white">Whitepapers & Preprints</h2>
                        </div>
                        <div className="space-y-4">
                            {papers.map((paper, idx) => (
                                <GlassCard key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between group p-5 hover:bg-glass-highlight">
                                    <div className="mb-4 sm:mb-0">
                                        <h3 className="font-medium text-white group-hover:text-bioemerald transition-colors leading-snug max-w-sm">{paper.title}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{paper.journal} • {paper.date}</p>
                                    </div>
                                    <button className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-bioemerald/20 hover:border-bioemerald/40 transition-colors text-gray-300 hover:text-white shrink-0">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </GlassCard>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
