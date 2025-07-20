"use client";

import React, { useState } from "react";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <Navbar className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navigation */}
            <NavBody className="border border-white/50 shadow-lg">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#565264] to-[#56876D] shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 7L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-lg font-bold text-[#2c2937] drop-shadow-sm dark:text-white">
                        DevBran.ch
                    </span>
                </div>

                {/* Navigation Items */}
                <NavItems
                    items={navItems}
                    onItemClick={handleItemClick}
                    className="text-[#2c2937] drop-shadow-sm dark:text-white font-medium"
                />

                {/* Login Button */}
                <div className="flex items-center space-x-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#2c2937] hover:bg-white/50 hover:text-[#56876D] transition-all duration-200 dark:text-white dark:hover:text-[#E8C7DE] font-medium border border-[#2c2937]/30 hover:border-[#56876D]/40 backdrop-blur-sm"
                    >
                        <IconLogin className="mr-2 h-4 w-4" />
                        Login
                    </Button>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#565264] to-[#56876D] text-white hover:from-[#56876D] hover:to-[#565264] hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        Sign Up
                    </Button>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="border border-white/50 shadow-lg">
                <MobileNavHeader>
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#565264] to-[#56876D] shadow-lg">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 12L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 12V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 7L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-[#2c2937] drop-shadow-sm dark:text-white">
                            DevBran.ch
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
                                className="justify-start text-[#2c2937] hover:bg-[#E8C7DE]/40 hover:text-[#56876D] transition-all duration-200 border border-[#2c2937]/30 hover:border-[#56876D]/40 backdrop-blur-sm"
                                onClick={handleItemClick}
                            >
                                <IconLogin className="mr-2 h-4 w-4" />
                                Login
                            </Button>
                            <Button
                                className="bg-gradient-to-r from-[#565264] to-[#56876D] text-white hover:from-[#56876D] hover:to-[#565264] hover:shadow-lg transition-all duration-300 shadow-md"
                                onClick={handleItemClick}
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
