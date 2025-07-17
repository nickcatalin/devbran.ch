'use client';

import { useState } from 'react';
import { WaitlistBlockConfig } from '@/types';
import { Button } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { CheckCircle, Mail, Users, Building } from 'lucide-react';

interface WaitlistBlockProps {
    config: WaitlistBlockConfig;
    isPreview?: boolean;
}

export default function WaitlistBlock({ config, isPreview = false }: WaitlistBlockProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        company: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isPreview) return;

        setIsLoading(true);

        try {
            // TODO: Implement actual waitlist submission
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            setIsSubmitted(true);
        } catch (error) {
            console.error('Failed to submit to waitlist:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <Card className="w-full">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold">You're on the list!</h3>
                        <p className="text-text-muted dark:text-dark-text-muted max-w-md">
                            {config.successMessage}
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {config.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-text-muted dark:text-dark-text-muted">
                    {config.description}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted dark:text-dark-text-muted" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="pl-10"
                                required
                                disabled={isPreview}
                            />
                        </div>
                    </div>

                    {config.collectName && (
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                disabled={isPreview}
                            />
                        </div>
                    )}

                    {config.collectCompany && (
                        <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted dark:text-dark-text-muted" />
                                <Input
                                    id="company"
                                    type="text"
                                    placeholder="Enter your company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="pl-10"
                                    disabled={isPreview}
                                />
                            </div>
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading || isPreview}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                Joining...
                            </>
                        ) : (
                            config.buttonText
                        )}
                    </Button>
                </form>

                <p className="text-xs text-text-muted dark:text-dark-text-muted text-center">
                    We'll notify you when it's ready!
                </p>
            </CardContent>
        </Card>
    );
}
