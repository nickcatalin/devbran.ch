"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth-context";
import {
    User,
    Settings,
    Bell,
    Activity,
    Users,
    FileText,
    Star,
    Calendar,
    Mail,
    Github,
    Globe,
    TrendingUp
} from "lucide-react";

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-6"></div>
    );
}
