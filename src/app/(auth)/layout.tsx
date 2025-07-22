"use client";

import { ReactNode } from "react";
import { ProtectedRoute } from "@/components/protected-route";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <ProtectedRoute requireVerification={true}>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </ProtectedRoute>
    );
}
