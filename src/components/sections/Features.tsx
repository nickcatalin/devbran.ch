'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Badge } from '@/components/ui/shadcn/badge';
import {
    User,
    Mail,
    FolderOpen,
    FileText,
    Star,
    MessageSquare,
    BarChart3,
    Settings,
    Heart,
    Users,
    Zap,
    Shield,
    Palette,
    Globe
} from 'lucide-react';

const features = [
    {
        icon: User,
        title: 'Profile Block',
        description: 'Showcase your photo, bio, contact info, and current role with customizable visibility settings.',
        color: 'text-primary-600',
        bgColor: 'bg-primary-50 dark:bg-primary-900/20'
    },
    {
        icon: Mail,
        title: 'Waitlist Block',
        description: 'Collect email signups with custom forms and export to CSV for your marketing campaigns.',
        color: 'text-accent-600',
        bgColor: 'bg-accent-50 dark:bg-accent-900/20'
    },
    {
        icon: FolderOpen,
        title: 'Projects Block',
        description: 'Display your work with descriptions, links, revenue tracking, and category organization.',
        color: 'text-forest-600',
        bgColor: 'bg-forest-50 dark:bg-forest-900/20'
    },
    {
        icon: FileText,
        title: 'Resume Block',
        description: 'Upload and showcase your resume with custom descriptions and download buttons.',
        color: 'text-lime-600',
        bgColor: 'bg-lime-50 dark:bg-lime-900/20'
    },
    {
        icon: Star,
        title: 'Reviews Block',
        description: 'Feature testimonials and reviews with ratings, auto-rotation, and social proof.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
        icon: MessageSquare,
        title: 'AMA Block',
        description: 'Let visitors ask questions with moderation tools and email notifications.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
        icon: Users,
        title: 'Discord Block',
        description: 'Connect your community with Discord invites and member count display.',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
        icon: Heart,
        title: 'Donation Block',
        description: 'Add BuyMeACoffee, Ko-fi, and Patreon links styled in their brand colors.',
        color: 'text-pink-600',
        bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        description: 'Track visitors, referrers, and block interactions with beautiful charts.',
        color: 'text-green-600',
        bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
];

const additionalFeatures = [
    {
        icon: Zap,
        title: 'Drag & Drop Builder',
        description: 'Reorder blocks with intuitive drag-and-drop interface'
    },
    {
        icon: Palette,
        title: 'Custom Themes',
        description: 'Beautiful light and dark modes with custom styling'
    },
    {
        icon: Globe,
        title: 'Custom Domains',
        description: 'Use your own domain or our devbran.ch subdomain'
    },
    {
        icon: Shield,
        title: 'Privacy First',
        description: 'Control what information is visible to visitors'
    },
    {
        icon: Settings,
        title: 'Easy Management',
        description: 'Simple dashboard to manage all your blocks'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-background-secondary dark:bg-dark-background-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-4 border-primary-600 text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                    >
                        Powerful Features
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary dark:text-dark-text-primary mb-6">
                        Everything You Need to{' '}
                        <span className="bg-gradient-to-r from-primary-600 to-forest-500 bg-clip-text text-transparent">
                            Stand Out
                        </span>
                    </h2>
                    <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                        Create a professional developer profile with our comprehensive set of customizable blocks
                        and powerful analytics tools.
                    </p>
                </div>

                {/* Block Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.title}
                                className="hover:shadow-lg transition-shadow duration-200 border-0 bg-background-primary dark:bg-dark-background-primary"
                            >
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                                        <Icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <CardTitle className="text-lg text-text-primary dark:text-dark-text-primary">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription className="text-text-secondary dark:text-dark-text-secondary">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>

                {/* Additional Features */}
                <div className="bg-background-primary dark:bg-dark-background-primary rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-center">
                        Plus Many More Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {additionalFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.title} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary-600 to-forest-500 rounded-2xl p-8 lg:p-12 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Ready to Build Your Developer Profile?
                        </h3>
                        <p className="text-lg mb-8 text-white/90">
                            Join thousands of developers who have already created their professional profiles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/signup"
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary-600 bg-white rounded-full hover:bg-gray-100 transition-colors"
                            >
                                Get Started Free
                            </a>
                            <a
                                href="/demo"
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-primary-600 transition-colors"
                            >
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
