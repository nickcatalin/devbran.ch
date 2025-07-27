"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/15 p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/5 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/5 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                <Card className="bg-card/80 backdrop-blur border-border/50 shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">
                            <span className="text-foreground">Terms of Service</span>
                        </CardTitle>
                        <p className="text-center text-muted-foreground text-sm">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </CardHeader>

                    <CardContent className="prose prose-slate max-w-none space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using DevBran.ch, you accept and agree to be bound by the terms and provision of this agreement.
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">2. Use License</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Permission is granted to temporarily use DevBran.ch for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>modify or copy the materials</li>
                                <li>use the materials for any commercial purpose or for any public display</li>
                                <li>attempt to reverse engineer any software contained on the website</li>
                                <li>remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                                You are responsible for safeguarding the password and for all activities that occur under your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">4. Content</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You retain ownership of any content you submit, post or display on or through the service.
                                By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">5. Privacy Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
                                to understand our practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">6. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability,
                                under our sole discretion, for any reason whatsoever including breach of the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">7. Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
                                this Company excludes all representations, warranties, conditions and terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at [email].
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
