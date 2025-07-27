"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarButton
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconLogin, IconUserPlus, IconLogout, IconDashboard } from "@tabler/icons-react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { analytics } from "@/lib/posthog";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Get Started", link: "#pricing" },
    { name: "FAQ", link: "#faq" },
];

export function LandingNavbar() {
    const router = useRouter();
    const { user, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLoginClick = () => {
        analytics.buttonClick('login', 'navbar');
        router.push("/login");
        handleItemClick();
    };

    const handleSignupClick = () => {
        analytics.buttonClick('signup', 'navbar');
        router.push("/signup");
        handleItemClick();
    };

    const handleDashboardClick = () => {
        router.push("/dashboard");
        handleItemClick();
    };

    const handleLogoutClick = async () => {
        try {
            await logout();
            toast.success("Logged out successfully");
            handleItemClick();
        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    return (
        <Navbar className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navigation */}
            <NavBody className="border border-border/50 shadow-lg">
                {/* Logo */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center">
                        <img
                            src="/devbranch-logo.svg"
                            alt="DevBranch Logo"
                            className="h-8 w-8 object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold text-foreground whitespace-nowrap">
                        <span className="text-primary">Dev</span>
                        <span className="text-secondary">Bran.ch</span>
                    </span>
                </div>

                {/* Navigation Items */}
                <NavItems
                    items={navItems}
                    onItemClick={handleItemClick}
                    className="text-foreground font-medium"
                />



                {/* User Actions */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    {user ? (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleDashboardClick}
                                className="text-foreground hover:bg-accent hover:text-secondary transition-all duration-200 font-medium border border-border hover:border-secondary/40 backdrop-blur-sm whitespace-nowrap"
                            >
                                <IconDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </Button>
                            <div className="flex items-center space-x-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                                        {user.name ? getInitials(user.name) : "U"}
                                    </AvatarFallback>
                                </Avatar>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogoutClick}
                                    className="text-foreground hover:bg-accent hover:text-destructive transition-all duration-200 font-medium border border-border hover:border-destructive backdrop-blur-sm whitespace-nowrap"
                                >
                                    <IconLogout className="h-4 w-4" />
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleLoginClick}
                                className="text-foreground hover:bg-accent hover:text-secondary transition-all duration-200 font-medium border border-border hover:border-secondary/40 backdrop-blur-sm whitespace-nowrap"
                            >
                                <IconLogin className="mr-2 h-4 w-4" />
                                Login
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleSignupClick}
                                className="text-primary-foreground bg-primary hover:bg-secondary transition-all duration-200 font-medium border border-primary hover:border-primary/70 backdrop-blur-sm shadow-md whitespace-nowrap"
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="border border-border/50 shadow-lg">
                <MobileNavHeader>
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
                        <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
                            <img
                                src="/devbranch-logo.svg"
                                alt="DevBranch Logo"
                                className="h-8 w-8 object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-foreground whitespace-nowrap">
                            <span className="text-primary">Dev</span>
                            <span className="text-secondary">Bran.ch</span>
                        </span>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={handleMobileMenuToggle}
                    />
                </MobileNavHeader>

                {/* Mobile Menu */}
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    <div className="flex flex-col space-y-4 w-full">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                onClick={handleItemClick}
                                className="text-foreground hover:text-secondary hover:bg-accent px-3 py-2 rounded-md transition-all duration-200 font-medium border border-transparent hover:border-secondary backdrop-blur-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                            {user ? (
                                <>
                                    <div className="flex items-center space-x-3 px-3 py-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="" />
                                            <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                                                {user.name ? getInitials(user.name) : "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-foreground">
                                                {user.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {user.email}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        onClick={handleDashboardClick}
                                        className="text-foreground hover:bg-accent hover:text-secondary transition-all duration-200 border border-border hover:border-secondary/40 backdrop-blur-sm w-full justify-start"
                                    >
                                        <IconDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={handleLogoutClick}
                                        className="text-foreground hover:bg-accent hover:text-destructive transition-all duration-200 border border-border hover:border-destructive backdrop-blur-sm w-full justify-start"
                                    >
                                        <IconLogout className="mr-2 h-4 w-4" />
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="ghost"
                                        onClick={handleLoginClick}
                                        className="text-foreground hover:bg-accent hover:text-secondary transition-all duration-200 border border-border hover:border-secondary/40 backdrop-blur-sm w-full justify-center"
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        onClick={handleSignupClick}
                                        className="text-primary-foreground bg-primary hover:bg-secondary transition-all duration-200 font-medium border border-primary hover:border-primary/70 backdrop-blur-sm shadow-md"
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </MobileNavMenu>
            </MobileNav>
            <ThemeToggle />

        </Navbar>
    );
}
