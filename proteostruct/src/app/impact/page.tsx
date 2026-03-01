import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import ImpactGrid from "@/components/sections/ImpactGrid";
import GlassCard from "@/components/ui/GlassCard";

export default function ImpactPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Translating Algorithms to <AnimatedGradientText text="Global Impact" />
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        ProteoStruct's high-fidelity spatial predictions transcend theoretical biology
                        to catalyze tangible breakthroughs across critical application sectors.
                    </p>
                </div>

                <ImpactGrid />

                {/* Additional depth section */}
                <div className="mt-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Structural Economics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="border-t-4 border-t-biocyan">
                            <h3 className="text-xl font-bold text-white mb-4">Accelerating R&D Timelines</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Traditional experimental structure determination techniques, such as X-ray crystallography or Cryo-EM,
                                require months of rigorous purification and optimization. ProteoStruct reduces the discovery phase
                                from years to computational hours.
                            </p>
                        </GlassCard>
                        <GlassCard className="border-t-4 border-t-bioemerald">
                            <h3 className="text-xl font-bold text-white mb-4">Orphan Targeting</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Thousands of critical proteins across endemic pathogens remain "orphan" structures, fundamentally
                                intractable to wet-lab crystallization. ProteoStruct unlocks the latent architecture of these highly
                                flexible and disordered regions.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
