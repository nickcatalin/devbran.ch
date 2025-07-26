"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    Search,
    Bell,
    Settings,
    User,
    LogOut,
    Mail,
    HelpCircle,
    Star,
    Globe
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function DashboardHeader() {
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background backdrop-blur-sm">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <SidebarTrigger className="text-foreground/90 hover:bg-muted/80 hover:text-foreground transition-colors" />
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* Mobile Search */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-foreground/90 hover:bg-muted/80 hover:text-foreground transition-colors"
                    >
                        <Search className="h-4 w-4" />
                    </Button>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-muted/80 transition-colors">
                                <Avatar className="h-8 w-8 border-2 border-primary/20">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-sm">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium text-foreground">
                                        {user?.name || 'Developer'}
                                    </p>
                                    <p className="text-xs text-muted-foreground/80">
                                        {user?.email || 'user@example.com'}
                                    </p>
                                    {user?.emailVerification && (
                                        <Badge variant="secondary" className="w-fit text-xs bg-accent/80 text-accent-foreground">
                                            Verified
                                        </Badge>
                                    )}
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild className="hover:bg-secondary/60 transition-colors">
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4 text-muted-foreground/80" />
                                    <span className="text-foreground/90">Profile</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className="hover:bg-secondary/60 transition-colors">
                                <Link href="/settings">
                                    <Settings className="mr-2 h-4 w-4 text-muted-foreground/80" />
                                    <span className="text-foreground/90">Settings</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className="hover:bg-secondary/60 transition-colors">
                                <Link href="/profile" target="_blank">
                                    <Globe className="mr-2 h-4 w-4 text-muted-foreground/80" />
                                    <span className="text-foreground/90">Public Profile</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="hover:bg-secondary/60 transition-colors">
                                <HelpCircle className="mr-2 h-4 w-4 text-muted-foreground/80" />
                                <span className="text-foreground/90">Help & Support</span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-destructive hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
