'use client';

import { Profile, ProfileBlockConfig } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Badge } from '@/components/ui/shadcn/badge';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import {
    MapPin,
    Briefcase,
    ExternalLink,
    Mail,
    Phone,
    Globe,
    Twitter,
    Linkedin,
    Github,
    DollarSign,
    CheckCircle
} from 'lucide-react';

interface ProfileBlockProps {
    profile: Profile;
    config: ProfileBlockConfig;
    isPreview?: boolean;
}

export default function ProfileBlock({ profile, config, isPreview = false }: ProfileBlockProps) {
    const getContactIcon = (type: string) => {
        switch (type) {
            case 'email':
                return <Mail className="w-4 h-4" />;
            case 'phone':
                return <Phone className="w-4 h-4" />;
            case 'website':
                return <Globe className="w-4 h-4" />;
            case 'twitter':
                return <Twitter className="w-4 h-4" />;
            case 'linkedin':
                return <Linkedin className="w-4 h-4" />;
            case 'github':
                return <Github className="w-4 h-4" />;
            default:
                return <ExternalLink className="w-4 h-4" />;
        }
    };

    const handleContactClick = (link: any) => {
        if (isPreview) return;

        let url = link.value;
        if (link.type === 'email') {
            url = `mailto:${link.value}`;
        } else if (link.type === 'phone') {
            url = `tel:${link.value}`;
        } else if (!url.startsWith('http')) {
            url = `https://${url}`;
        }

        window.open(url, '_blank');
    };

    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar className="w-24 h-24">
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback className="text-2xl font-medium">
                                {profile.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        <div className="text-center space-y-2">
                            <h1 className="text-2xl font-bold">{profile.name}</h1>
                            {profile.bio && (
                                <p className="text-text-muted dark:text-dark-text-muted max-w-md">
                                    {profile.bio}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {config.showCurrentRole && profile.currentRole && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <Briefcase className="w-3 h-3" />
                                {profile.currentRole}
                            </Badge>
                        )}

                        {config.showLocation && profile.location && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {profile.location}
                            </Badge>
                        )}

                        {config.showOpenToWork && profile.openToWork && (
                            <Badge variant="default" className="flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                <CheckCircle className="w-3 h-3" />
                                Open to Work
                            </Badge>
                        )}
                    </div>

                    {/* Revenue Display */}
                    {config.showRevenue && config.revenueAmount && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                            <DollarSign className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                                Monthly Revenue: ${config.revenueAmount.toLocaleString()}
                            </span>
                        </div>
                    )}

                    {/* Contact Links */}
                    {config.showContactLinks && profile.contactLinks.length > 0 && (
                        <div className="w-full space-y-3">
                            <h3 className="text-sm font-medium text-text-muted dark:text-dark-text-muted text-center">
                                Connect with me
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {profile.contactLinks
                                    .filter(link => link.isVisible)
                                    .map((link) => (
                                        <Button
                                            key={link.id}
                                            variant="outline"
                                            size="sm"
                                            className="flex items-center gap-2"
                                            onClick={() => handleContactClick(link)}
                                            disabled={isPreview}
                                        >
                                            {getContactIcon(link.type)}
                                            {link.label}
                                        </Button>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
