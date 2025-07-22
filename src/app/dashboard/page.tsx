"use client";

import { ProtectedRoute } from "@/components/protected-route";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
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
        <ProtectedRoute requireVerification={true}>
            <DashboardLayout>
                <div className="space-y-6">
                    {/* Welcome Section */}
                    <div className="bg-gradient-to-br from-[#E8C7DE]/30 to-[#E7EBC5]/30 rounded-xl p-6 border border-[#565264]/10">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h1 className="text-2xl md:text-3xl font-bold text-[#565264]">
                                    Welcome back, {user?.name?.split(' ')[0] || 'Developer'}!
                                </h1>
                                <p className="text-[#565264]/70 text-sm md:text-base">
                                    Ready to showcase your development journey?
                                </p>
                            </div>
                            <div className="hidden md:flex items-center space-x-4">
                                <Avatar className="h-12 w-12 border-2 border-[#56876D]/20">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={user?.name || "User"} />
                                    <AvatarFallback className="bg-[#56876D] text-white font-semibold">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card className="bg-gradient-to-br from-[#56876D]/10 to-[#56876D]/5 border-[#56876D]/20">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-[#565264]">
                                        Profile Views
                                    </CardTitle>
                                    <TrendingUp className="h-4 w-4 text-[#56876D]" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[#565264]">1,234</div>
                                <p className="text-xs text-[#565264]/60 mt-1">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#E8C7DE]/20 to-[#E8C7DE]/10 border-[#E8C7DE]/30">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-[#565264]">
                                        Projects
                                    </CardTitle>
                                    <FileText className="h-4 w-4 text-[#565264]" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[#565264]">12</div>
                                <p className="text-xs text-[#565264]/60 mt-1">
                                    3 active this week
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#E7EBC5]/30 to-[#E7EBC5]/15 border-[#E7EBC5]/40">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-[#565264]">
                                        Connections
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-[#565264]" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[#565264]">573</div>
                                <p className="text-xs text-[#565264]/60 mt-1">
                                    +12 new this week
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-[#565264]/10 to-[#565264]/5 border-[#565264]/20">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-[#565264]">
                                        Stars Earned
                                    </CardTitle>
                                    <Star className="h-4 w-4 text-[#565264]" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-[#565264]">89</div>
                                <p className="text-xs text-[#565264]/60 mt-1">
                                    +5 this week
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Activity */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="text-[#565264]">Recent Activity</CardTitle>
                                            <CardDescription>Your latest development updates</CardDescription>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            View All
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        {
                                            action: "Pushed to repository",
                                            project: "DevBran.ch Platform",
                                            time: "2 hours ago",
                                            icon: Github,
                                            type: "git"
                                        },
                                        {
                                            action: "Updated profile",
                                            project: "Personal Portfolio",
                                            time: "1 day ago",
                                            icon: User,
                                            type: "profile"
                                        },
                                        {
                                            action: "Published article",
                                            project: "React Best Practices",
                                            time: "3 days ago",
                                            icon: FileText,
                                            type: "content"
                                        },
                                        {
                                            action: "Connected with",
                                            project: "Sarah Johnson",
                                            time: "1 week ago",
                                            icon: Users,
                                            type: "social"
                                        }
                                    ].map((activity, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 border border-[#565264]/10">
                                            <div className={`p-2 rounded-full ${activity.type === 'git' ? 'bg-[#56876D]/20' :
                                                    activity.type === 'profile' ? 'bg-[#E8C7DE]/30' :
                                                        activity.type === 'content' ? 'bg-[#E7EBC5]/40' :
                                                            'bg-[#565264]/20'
                                                }`}>
                                                <activity.icon className={`h-4 w-4 ${activity.type === 'git' ? 'text-[#56876D]' :
                                                        activity.type === 'profile' ? 'text-[#565264]' :
                                                            activity.type === 'content' ? 'text-[#565264]' :
                                                                'text-[#565264]'
                                                    }`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-[#565264] truncate">
                                                    {activity.action} <span className="font-semibold">{activity.project}</span>
                                                </p>
                                                <p className="text-xs text-[#565264]/60">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Quick Actions & Profile Status */}
                        <div className="space-y-6">
                            {/* Profile Completion */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-[#565264]">Profile Status</CardTitle>
                                    <CardDescription>Complete your developer profile</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#565264]">Profile Completion</span>
                                            <span className="text-[#56876D] font-medium">75%</span>
                                        </div>
                                        <div className="w-full bg-[#E7EBC5]/40 rounded-full h-2">
                                            <div className="bg-[#56876D] h-2 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { label: "Add bio", completed: true },
                                            { label: "Upload avatar", completed: true },
                                            { label: "Add skills", completed: true },
                                            { label: "Connect GitHub", completed: false },
                                            { label: "Add projects", completed: false }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div className={`w-2 h-2 rounded-full ${item.completed ? 'bg-[#56876D]' : 'bg-[#565264]/30'
                                                    }`} />
                                                <span className={`text-sm ${item.completed ? 'text-[#565264] line-through' : 'text-[#565264]'
                                                    }`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                        Complete Profile
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-[#565264]">Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="outline" className="w-full justify-start" size="sm">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Create New Project
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start" size="sm">
                                        <Users className="mr-2 h-4 w-4" />
                                        Find Developers
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start" size="sm">
                                        <Globe className="mr-2 h-4 w-4" />
                                        Share Profile
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start" size="sm">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Account Settings
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-[#565264]">Recent Projects</CardTitle>
                                    <CardDescription>Your latest development work</CardDescription>
                                </div>
                                <Button variant="outline" size="sm">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Add Project
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        name: "DevBran.ch Platform",
                                        description: "A modern developer profile platform built with Next.js and TypeScript",
                                        tech: ["Next.js", "TypeScript", "Tailwind"],
                                        status: "Active",
                                        updated: "2 hours ago"
                                    },
                                    {
                                        name: "E-commerce Dashboard",
                                        description: "React-based dashboard for managing online store operations",
                                        tech: ["React", "Node.js", "MongoDB"],
                                        status: "Completed",
                                        updated: "1 week ago"
                                    },
                                    {
                                        name: "Task Management App",
                                        description: "Collaborative task management tool with real-time updates",
                                        tech: ["Vue.js", "Firebase", "PWA"],
                                        status: "In Progress",
                                        updated: "3 days ago"
                                    }
                                ].map((project, index) => (
                                    <div key={index} className="p-4 rounded-lg border border-[#565264]/10 bg-gradient-to-br from-[#E7EBC5]/10 to-[#E8C7DE]/10 hover:shadow-md transition-shadow">
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between">
                                                <h3 className="font-semibold text-[#565264] text-sm truncate">{project.name}</h3>
                                                <Badge variant="secondary" className={`text-xs ${project.status === 'Active' ? 'bg-[#56876D]/20 text-[#56876D]' :
                                                        project.status === 'Completed' ? 'bg-[#E8C7DE]/30 text-[#565264]' :
                                                            'bg-[#E7EBC5]/40 text-[#565264]'
                                                    }`}>
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-[#565264]/70 line-clamp-2">{project.description}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-2 py-1 bg-[#565264]/10 text-[#565264] text-xs rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-[#565264]/60">
                                                <span>Updated {project.updated}</span>
                                                <Button variant="ghost" size="sm" className="h-6 px-2">
                                                    View
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </DashboardLayout>
        </ProtectedRoute>
    );
}
