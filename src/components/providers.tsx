'use client';

import { ThemeProvider } from "next-themes";
import { PostHogProvider } from "posthog-js/react";
import { posthog } from "@/lib/posthog";
import { AnalyticsProvider } from "./analytics-provider";
import { DevBranchThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { AuthProvider } from "@/features/auth/auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AuthProvider>
                    <AnalyticsProvider>
                        <DevBranchThemeProvider>
                            <Toaster />
                            {children}
                        </DevBranchThemeProvider>
                    </AnalyticsProvider>
                </AuthProvider>
            </ThemeProvider>
        </PostHogProvider>
    );
}