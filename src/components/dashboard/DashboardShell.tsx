'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/shadcn/button';
import { ScrollArea } from '@/components/ui/shadcn/scroll-area';
import { Separator } from '@/components/ui/shadcn/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/shadcn/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/shadcn/dropdown-menu';
import {
    LayoutDashboard,
    User,
    BarChart3,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    ChevronDown,
    ExternalLink,
    Moon,
    Sun
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const sidebarItems = [
    {
        title: 'Page Builder',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Analytics',
        href: '/dashboard/analytics',
        icon: BarChart3,
    },
    {
        title: 'Waitlist',
        href: '/dashboard/waitlist',
        icon: Users,
    },
    {
        title: 'AMA Questions',
        href: '/dashboard/ama',
        icon: MessageSquare,
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
    },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    const { user, profile, logout, isLoading } = useAuth();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-text-secondary dark:text-dark-text-secondary">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="flex h-screen bg-background-secondary dark:bg-dark-background-secondary">
            {/* Sidebar */}
            <div className="flex flex-col w-64 bg-background-primary dark:bg-dark-background-primary border-r border-primary-200 dark:border-dark-background-tertiary">
                {/* Logo */}
                <div className="flex items-center px-6 py-4">
                    <Link href="/dashboard" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-forest-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                            DevBran.ch
                        </span>
                    </Link>
                </div>

                <Separator />

                {/* Profile Preview */}
                <div className="p-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary dark:bg-dark-background-secondary">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={profile?.avatar} alt={profile?.name} />
                            <AvatarFallback>
                                {profile?.name?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
                                {profile?.name || 'Your Name'}
                            </p>
                            <p className="text-xs text-text-secondary dark:text-dark-text-secondary truncate">
                                devbran.ch/{profile?.slug || 'your-slug'}
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="p-1 h-6 w-6"
                            asChild
                        >
                            <Link href={`/${profile?.slug}`} target="_blank">
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 space-y-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-text-secondary dark:text-dark-text-secondary hover:bg-background-secondary dark:hover:bg-dark-background-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
                            >
                                <Icon className="mr-3 h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                <Separator />

                {/* User Menu */}
                <div className="p-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full justify-start space-x-3 p-3 h-auto"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={profile?.avatar} alt={profile?.name} />
                                    <AvatarFallback>
                                        {profile?.name?.charAt(0).toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
                                        {profile?.name || 'Your Name'}
                                    </p>
                                    <p className="text-xs text-text-secondary dark:text-dark-text-secondary truncate">
                                        {user.email}
                                    </p>
                                </div>
                                <ChevronDown className="h-4 w-4 text-text-secondary dark:text-dark-text-secondary" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/settings">
                                    <User className="mr-2 h-4 w-4" />
                                    Profile Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={toggleTheme}>
                                {resolvedTheme === 'dark' ? (
                                    <Sun className="mr-2 h-4 w-4" />
                                ) : (
                                    <Moon className="mr-2 h-4 w-4" />
                                )}
                                {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {children}
            </div>
        </div>
    );
}
