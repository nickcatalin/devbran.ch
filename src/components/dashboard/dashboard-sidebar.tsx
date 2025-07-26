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
        href: "/profile",
        badge: null
    },
    {
        title: "Analytics",
        icon: BarChart3,
        href: "/analytics",
        badge: null
    },
];

const secondaryItems = [
    {
        title: "Settings",
        icon: Settings,
        href: "/settings",
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
            className="border-r border-border bg-card"
        >
            <SidebarHeader className="border-b border-border pb-4">
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
                            <span className="font-semibold text-foreground text-sm">DevBran.ch</span>
                            <span className="text-xs text-muted-foreground">Developer Platform</span>
                        </div>
                    )}
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2">
                {/* Main Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
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
                                            className={`group w-full transition-all duration-200 ${isCollapsed ? 'flex justify-center items-center' : ''} ${isActive
                                                ? 'bg-primary text-primary-foreground border-r-2 border-primary'
                                                : 'text-muted-foreground hover:bg-secondary/80 hover:text-foreground/90 hover:shadow-sm'
                                                }`}
                                        >
                                            <Link href={item.href} className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                                                <item.icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground/70 group-hover:text-foreground/90'} ${isCollapsed ? 'mx-auto' : ''}`} />
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium text-sm transition-colors group-hover:text-foreground/95">{item.title}</span>
                                                        {item.badge && (
                                                            <Badge variant="secondary" className="ml-auto h-5 bg-accent text-accent-foreground text-xs">
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
                    <SidebarGroupLabel className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
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
                                            className={`group w-full transition-all duration-200 ${isCollapsed ? 'flex justify-center items-center' : ''} ${isActive
                                                ? 'bg-primary text-primary-foreground border-r-2 border-primary'
                                                : 'text-muted-foreground hover:bg-secondary/80 hover:text-foreground/90 hover:shadow-sm'
                                                }`}
                                        >
                                            <Link href={item.href} className={`flex items-center w-full ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                                                <item.icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground/70 group-hover:text-foreground/90'} ${isCollapsed ? 'mx-auto' : ''}`} />
                                                {!isCollapsed && (
                                                    <>
                                                        <span className="font-medium text-sm transition-colors group-hover:text-foreground/95">{item.title}</span>
                                                        {item.badge && (
                                                            <Badge variant="secondary" className="ml-auto h-5 bg-accent text-accent-foreground text-xs">
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

            </SidebarContent>

            <SidebarFooter className="border-t border-border pt-4">
                {/* User Profile Section */}
                <div className={`px-2 ${isCollapsed ? 'flex justify-center' : ''}`}>
                    {isCollapsed ? (
                        <Avatar className="h-8 w-8 border-2 border-primary">
                            <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-secondary border border-border">
                                <Avatar className="h-8 w-8 border-2 border-primary">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">
                                        {user?.name || 'Developer'}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {user?.email || 'user@example.com'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start text-xs border-border hover:bg-muted"
                                    asChild
                                >
                                    <Link href="/profile">
                                        <User className="mr-2 h-3 w-3" />
                                        View Profile
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="w-full justify-start text-xs text-destructive hover:bg-destructive hover:text-destructive-foreground"
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
