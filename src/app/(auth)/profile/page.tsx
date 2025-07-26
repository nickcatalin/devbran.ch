"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/auth-context";
import {
    User,
    MapPin,
    Calendar,
    Mail,
    Globe,
    Github,
    Linkedin,
    Twitter,
    Edit,
    Save,
    Camera,
    Star,
    Code,
    Award
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
    const { user } = useAuth();
    return (
        <div className="space-y-6"></div>
    );
}
