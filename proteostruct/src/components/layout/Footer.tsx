import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-auto glass border-t border-glass-border">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-biocyan to-bioviolet" />
                            <span className="font-bold text-lg tracking-tight text-white">
                                Proteo<span className="text-biocyan">Struct</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm mb-6">
                            Democratizing access to AI-driven macromolecular structure prediction.
                            Empowering global scientific communities to accelerate discoveries without barriers.
                        </p>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <span className="sr-only">Email</span>
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Platform
                        </h3>
                        <ul className="space-y-3 relative z-10">
                            <li>
                                <Link href="/science" className="text-sm text-gray-400 hover:text-biocyan transition-colors z-20 relative">
                                    Methodology
                                </Link>
                            </li>
                            <li>
                                <Link href="/impact" className="text-sm text-gray-400 hover:text-biocyan transition-colors">
                                    Applications
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="text-sm text-gray-400 hover:text-biocyan transition-colors">
                                    Open Datasets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Open Access License
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-glass-border">
                    <p className="text-xs text-gray-500 text-center">
                        2026 ProteoStruct Consortium. An independent academic endeavor.
                        No commercial affiliation. All prediction algorithms and datasets provided under open-access terms.
                    </p>
                </div>
            </div>
        </footer>
    );
}
