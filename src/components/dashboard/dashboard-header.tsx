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
        <header className="sticky top-0 z-40 w-full border-b border-[#565264]/20 bg-white/90 backdrop-blur-sm">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <SidebarTrigger className="text-[#565264] hover:bg-[#E7EBC5]/30" />

                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#565264]/60" />
                        <Input
                            placeholder="Search projects, connections..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-64 lg:w-80 pl-10 bg-white/70 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* Mobile Search */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-[#565264] hover:bg-[#E7EBC5]/30"
                    >
                        <Search className="h-4 w-4" />
                    </Button>

                    {/* Notifications */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative text-[#565264] hover:bg-[#E7EBC5]/30"
                            >
                                <Bell className="h-4 w-4" />
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-[#56876D] hover:bg-[#56876D]/90"
                                >
                                    3
                                </Badge>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80 bg-white border-[#565264]/20">
                            <DropdownMenuLabel className="text-[#565264]">Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-[#565264]/20" />

                            <div className="space-y-1">
                                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3 hover:bg-[#E7EBC5]/20">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-sm font-medium text-[#565264]">New connection request</span>
                                        <Badge variant="secondary" className="bg-[#E8C7DE]/30 text-[#565264] text-xs">
                                            new
                                        </Badge>
                                    </div>
                                    <span className="text-xs text-[#565264]/70">Sarah Johnson wants to connect</span>
                                    <span className="text-xs text-[#565264]/50">2 minutes ago</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3 hover:bg-[#E7EBC5]/20">
                                    <span className="text-sm font-medium text-[#565264]">Project starred</span>
                                    <span className="text-xs text-[#565264]/70">Someone starred your "React Dashboard" project</span>
                                    <span className="text-xs text-[#565264]/50">1 hour ago</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3 hover:bg-[#E7EBC5]/20">
                                    <span className="text-sm font-medium text-[#565264]">Profile view</span>
                                    <span className="text-xs text-[#565264]/70">Your profile was viewed 5 times today</span>
                                    <span className="text-xs text-[#565264]/50">3 hours ago</span>
                                </DropdownMenuItem>
                            </div>

                            <DropdownMenuSeparator className="bg-[#565264]/20" />
                            <DropdownMenuItem asChild>
                                <Link href="/notifications" className="w-full text-center text-[#56876D] font-medium">
                                    View all notifications
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-[#E7EBC5]/30">
                                <Avatar className="h-8 w-8 border-2 border-[#56876D]/20">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                                    <AvatarFallback className="bg-[#56876D] text-white font-semibold text-sm">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-white border-[#565264]/20" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium text-[#565264]">
                                        {user?.name || 'Developer'}
                                    </p>
                                    <p className="text-xs text-[#565264]/70">
                                        {user?.email || 'user@example.com'}
                                    </p>
                                    {user?.emailVerification && (
                                        <Badge variant="secondary" className="w-fit bg-[#56876D]/20 text-[#56876D] text-xs">
                                            Verified
                                        </Badge>
                                    )}
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-[#565264]/20" />

                            <DropdownMenuItem asChild className="hover:bg-[#E7EBC5]/20">
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4 text-[#565264]" />
                                    <span className="text-[#565264]">Profile</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className="hover:bg-[#E7EBC5]/20">
                                <Link href="/settings">
                                    <Settings className="mr-2 h-4 w-4 text-[#565264]" />
                                    <span className="text-[#565264]">Settings</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className="hover:bg-[#E7EBC5]/20">
                                <Link href="/profile" target="_blank">
                                    <Globe className="mr-2 h-4 w-4 text-[#565264]" />
                                    <span className="text-[#565264]">Public Profile</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className="bg-[#565264]/20" />

                            <DropdownMenuItem className="hover:bg-[#E7EBC5]/20">
                                <HelpCircle className="mr-2 h-4 w-4 text-[#565264]" />
                                <span className="text-[#565264]">Help & Support</span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className="bg-[#565264]/20" />

                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-red-600 hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700"
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
