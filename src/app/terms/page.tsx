"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE] p-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#565264] hover:text-[#56876D] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">
                            <span className="text-[#565264]">Terms of Service</span>
                        </CardTitle>
                        <p className="text-center text-[#565264]/80 text-sm">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </CardHeader>

                    <CardContent className="prose prose-slate max-w-none space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">1. Acceptance of Terms</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                By accessing and using DevBran.ch, you accept and agree to be bound by the terms and provision of this agreement.
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">2. Use License</h2>
                            <p className="text-[#565264]/80 leading-relaxed mb-3">
                                Permission is granted to temporarily use DevBran.ch for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-[#565264]/80 space-y-1 ml-4">
                                <li>modify or copy the materials</li>
                                <li>use the materials for any commercial purpose or for any public display</li>
                                <li>attempt to reverse engineer any software contained on the website</li>
                                <li>remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">3. User Accounts</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                                You are responsible for safeguarding the password and for all activities that occur under your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">4. Content</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                You retain ownership of any content you submit, post or display on or through the service.
                                By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">5. Privacy Policy</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
                                to understand our practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">6. Termination</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability,
                                under our sole discretion, for any reason whatsoever including breach of the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">7. Disclaimer</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
                                this Company excludes all representations, warranties, conditions and terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#565264] mb-3">8. Contact Information</h2>
                            <p className="text-[#565264]/80 leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at [email].
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}