"use client";

import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="min-h-screen bg-background flex w-full">
                <DashboardSidebar />
                <SidebarInset className="flex-1">
                    <div className="flex flex-col min-h-screen">
                        <DashboardHeader />
                        <main className="flex-1 p-4 md:p-6 lg:p-8">
                            <div className="max-w-7xl mx-auto">
                                {children}
                            </div>
                        </main>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
