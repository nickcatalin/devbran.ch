"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    LayoutDashboard,
    User,
    FileText,
    Users,
    Settings,
    Bell,
    Star,
    Activity,
    Globe,
    Github,
    Mail,
    Calendar,
    BarChart3,
    Folder,
    MessageSquare,
    LogOut,
    ChevronRight
} from "lucide-react";

const navigationItems = [
    {
        title: "Overview",
        icon: LayoutDashboard,
        href: "/dashboard",
        badge: null
    },
    {
        title: "Profile",
        icon: User,
        href: "/dashboard/profile",
        badge: null
    },
    {
        title: "Projects",
        icon: Folder,
        href: "/dashboard/projects",
        badge: "12"
    },
    {
        title: "Analytics",
        icon: BarChart3,
        href: "/dashboard/analytics",
        badge: null
    },
    {
        title: "Connections",
        icon: Users,
        href: "/dashboard/connections",
        badge: "3"
    },
    {
        title: "Messages",
        icon: MessageSquare,
        href: "/dashboard/messages",
        badge: "2"
    }
];

const secondaryItems = [
    {
        title: "Notifications",
        icon: Bell,
        href: "/dashboard/notifications",
        badge: "5"
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
        badge: null
    }
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();
    const { state } = useSidebar();

    const isCollapsed = state === "collapsed";

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <Sidebar
            variant="sidebar"
            collapsible="icon"
            className="border-r border-[#565264]/20 bg-white/90 backdrop-blur-sm"
        >
            <SidebarHeader className="border-b border-[#565264]/10 pb-4">
                <div className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'space-x-3 px-2'}`}>
                    <div className={`flex items-center justify-center flex-shrink-0 ${isCollapsed ? 'w-8 h-8' : 'w-12 h-12'}`}>
                        <img
                            src="/devbranch-logo.svg"
                            alt="DevBranch Logo"
                            className={`object-contain ${isCollapsed ? 'w-6 h-6' : 'w-12 h-12'}`}
                        />
                    </div>
                    {!isCollapsed && (
                        <div className="flex flex-col">
                            <span className="font-semibold text-[#565264] text-sm">DevBran.ch</span>
                            <span className="text-xs text-[#565264]/60">Developer Platform</span>
                        </div>
                    )}
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2">
                {/* Main Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[#565264]/70 text-xs font-medium uppercase tracking-wider">
                        {!isCollapsed ? "Navigation" : ""}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`group w-full ${isCollapsed ? 'flex justify-center items-center' : ''} ${isActive
                                                ? 'bg-gradient-to-r from-[#56876D]/20 to-[#E8C7DE]/20 text-[#565264] border-r-2 border-[#56876D]'
                                                : 'text-[#565264]/70 hover:bg-gradient-to-r hover:from-[#E7EBC5]/30 hover:to-[#E8C7DE]/20 hover:text-[#565264]'
                                                }`}
                                        >
                                            <Link href={item.href} className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                                                <item.icon className={`h-4 w-4 ${isActive ? 'text-[#56876D]' : 'text-[#565264]/60'} ${isCollapsed ? 'mx-auto' : ''}`} />
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium text-sm">{item.title}</span>
                                                        {item.badge && (
                                                            <Badge variant="secondary" className="ml-auto h-5 bg-[#E8C7DE]/40 text-[#565264] text-xs">
                                                                {item.badge}
                                                            </Badge>
                                                        )}
                                                    </>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Secondary Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[#565264]/70 text-xs font-medium uppercase tracking-wider">
                        {!isCollapsed ? "Account" : ""}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondaryItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`group w-full ${isCollapsed ? 'flex justify-center items-center' : ''} ${isActive
                                                ? 'bg-gradient-to-r from-[#56876D]/20 to-[#E8C7DE]/20 text-[#565264] border-r-2 border-[#56876D]'
                                                : 'text-[#565264]/70 hover:bg-gradient-to-r hover:from-[#E7EBC5]/30 hover:to-[#E8C7DE]/20 hover:text-[#565264]'
                                                }`}
                                        >
                                            <Link href={item.href} className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                                                <item.icon className={`h-4 w-4 ${isActive ? 'text-[#56876D]' : 'text-[#565264]/60'} ${isCollapsed ? 'mx-auto' : ''}`} />
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium text-sm">{item.title}</span>
                                                        {item.badge && (
                                                            <Badge variant="secondary" className="ml-auto h-5 bg-[#E8C7DE]/40 text-[#565264] text-xs">
                                                                {item.badge}
                                                            </Badge>
                                                        )}
                                                    </>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Quick Actions - Only show when expanded */}
                {!isCollapsed && (
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-[#565264]/70 text-xs font-medium uppercase tracking-wider">
                            Quick Actions
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <div className="space-y-2 px-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start text-xs bg-gradient-to-r from-[#56876D]/10 to-[#56876D]/5 border-[#56876D]/20 hover:bg-[#56876D]/20"
                                >
                                    <FileText className="mr-2 h-3 w-3" />
                                    New Project
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start text-xs bg-gradient-to-r from-[#E8C7DE]/20 to-[#E8C7DE]/10 border-[#E8C7DE]/30 hover:bg-[#E8C7DE]/30"
                                >
                                    <Users className="mr-2 h-3 w-3" />
                                    Find Devs
                                </Button>
                            </div>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>

            <SidebarFooter className="border-t border-[#565264]/10 pt-4">
                {/* User Profile Section */}
                <div className={`px-2 ${isCollapsed ? 'flex justify-center' : ''}`}>
                    {isCollapsed ? (
                        <Avatar className="h-8 w-8 border-2 border-[#56876D]/20">
                            <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                            <AvatarFallback className="bg-[#56876D] text-white text-xs font-semibold">
                                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 border border-[#565264]/10">
                                <Avatar className="h-8 w-8 border-2 border-[#56876D]/20">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                                    <AvatarFallback className="bg-[#56876D] text-white text-xs font-semibold">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-[#565264] truncate">
                                        {user?.name || 'Developer'}
                                    </p>
                                    <p className="text-xs text-[#565264]/60 truncate">
                                        {user?.email || 'user@example.com'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start text-xs border-[#565264]/20 hover:bg-[#565264]/10"
                                    asChild
                                >
                                    <Link href="/dashboard/profile">
                                        <User className="mr-2 h-3 w-3" />
                                        View Profile
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="w-full justify-start text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
                                >
                                    <LogOut className="mr-2 h-3 w-3" />
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
