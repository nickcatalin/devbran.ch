"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background p-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">
                            <span className="text-foreground">Privacy Policy</span>
                        </CardTitle>
                        <p className="text-center text-muted-foreground text-sm">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </CardHeader>

                    <CardContent className="prose prose-slate max-w-none space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.
                            </p>
                            <h3 className="text-lg font-medium text-foreground mb-2">Personal Information</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Username and email address</li>
                                <li>Profile information (bio, skills, projects)</li>
                                <li>GitHub integration data (if connected)</li>
                                <li>Communication preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Create and manage your developer profile</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Analyze usage patterns to improve user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                                except as described in this policy. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-3">
                                <li>With your consent or at your direction</li>
                                <li>For legal reasons or to protect our rights</li>
                                <li>In connection with a business transfer</li>
                                <li>With service providers who assist in our operations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                                over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your personal information for as long as necessary to provide our services and fulfill
                                the purposes outlined in this policy, unless a longer retention period is required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                <li>Access and receive a copy of your personal information</li>
                                <li>Rectify inaccurate personal information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to or restrict processing of your information</li>
                                <li>Data portability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies and Tracking</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to collect information about your browsing activities
                                and to provide personalized content. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service may contain links to third-party websites or integrate with third-party services (like GitHub).
                                We are not responsible for the privacy practices of these third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                                the new policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us at [email].
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
