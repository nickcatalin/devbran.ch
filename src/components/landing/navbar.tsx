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
import { IconLogin, IconUserPlus } from "@tabler/icons-react";

const navItems = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Get Started", link: "#pricing" },
    { name: "FAQ", link: "#faq" },
];

export function LandingNavbar() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLoginClick = () => {
        router.push("/login");
        handleItemClick();
    };

    const handleSignupClick = () => {
        router.push("/signup");
        handleItemClick();
    };

    return (
        <Navbar className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navigation */}
            <NavBody className="border border-white/50 shadow-lg">
                {/* Logo */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center">
                        <img
                            src="/devbranch-logo.svg"
                            alt="DevBranch Logo"
                            className="h-8 w-8 object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold text-[#2c2937] drop-shadow-sm dark:text-white whitespace-nowrap">
                        <span className="text-[#565264]">Dev</span>
                        <span className="text-[#56876D]">Bran.ch</span>
                    </span>
                </div>

                {/* Navigation Items */}
                <NavItems
                    items={navItems}
                    onItemClick={handleItemClick}
                    className="text-[#2c2937] drop-shadow-sm dark:text-white font-medium"
                />

                {/* Login Button */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLoginClick}
                        className="text-[#2c2937] hover:bg-white/50 hover:text-[#56876D] transition-all duration-200 dark:text-white dark:hover:text-[#E8C7DE] font-medium border border-[#2c2937]/30 hover:border-[#56876D]/40 backdrop-blur-sm whitespace-nowrap"
                    >
                        <IconLogin className="mr-2 h-4 w-4" />
                        Login
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleSignupClick}
                        className="text-white bg-[#56876D] hover:bg-[#56876D]/90 hover:text-white transition-all duration-200 font-medium border border-[#56876D] hover:border-[#56876D]/70 backdrop-blur-sm shadow-md whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="border border-white/50 shadow-lg">
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
                        <span className="text-lg font-bold text-[#2c2937] drop-shadow-sm dark:text-white whitespace-nowrap">
                            <span className="text-[#565264]">Dev</span>
                            <span className="text-[#56876D]">Bran.ch</span>
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
                                className="text-[#2c2937] hover:text-[#56876D] hover:bg-[#E8C7DE]/30 px-3 py-2 rounded-md transition-all duration-200 font-medium border border-transparent hover:border-[#56876D]/30 backdrop-blur-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-col space-y-2 pt-4 border-t border-[#2c2937]/30">
                            <Button
                                variant="ghost"
                                onClick={handleLoginClick}
                                className="text-[#2c2937] hover:bg-[#E8C7DE]/40 hover:text-[#56876D] transition-all duration-200 border border-[#2c2937]/30 hover:border-[#56876D]/40 backdrop-blur-sm w-full justify-center"
                            >
                                Login
                            </Button>
                            <Button
                                onClick={handleSignupClick}
                                className="text-white bg-[#56876D] hover:bg-[#56876D]/90 hover:text-white transition-all duration-200 font-medium border border-[#56876D] hover:border-[#56876D]/70 backdrop-blur-sm shadow-md"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
