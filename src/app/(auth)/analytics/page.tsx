"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Eye,
    Users,
    Globe,
    Calendar,
    Star,
    MessageSquare,
    Clock,
    ArrowUpRight
} from "lucide-react";

export default function AnalyticsPage() {
    const stats = [
        {
            title: "Profile Views",
            value: "12,847",
            change: "+18.2%",
            trend: "up",
            icon: Eye,
            period: "Last 30 days"
        },
        {
            title: "New Connections",
            value: "1,234",
            change: "+12.1%",
            trend: "up",
            icon: Users,
            period: "Last 30 days"
        },
        {
            title: "Project Views",
            value: "8,921",
            change: "-2.4%",
            trend: "down",
            icon: Globe,
            period: "Last 30 days"
        },
        {
            title: "Stars Earned",
            value: "456",
            change: "+8.7%",
            trend: "up",
            icon: Star,
            period: "Last 30 days"
        }
    ];

    const trafficSources = [
        { source: "Direct", visitors: 3420, percentage: 45 },
        { source: "GitHub", visitors: 2156, percentage: 28 },
        { source: "LinkedIn", visitors: 1342, percentage: 18 },
        { source: "Twitter", visitors: 689, percentage: 9 }
    ];

    const topProjects = [
        { name: "DevBran.ch Platform", views: 2340, stars: 89, trend: "up" },
        { name: "E-commerce Dashboard", views: 1890, stars: 67, trend: "up" },
        { name: "Task Management App", views: 1456, stars: 45, trend: "down" },
        { name: "Weather App", views: 1023, stars: 34, trend: "up" },
        { name: "Portfolio Website", views: 856, stars: 23, trend: "up" }
    ];

    const recentActivity = [
        { action: "Profile viewed", user: "Sarah Johnson", time: "2 minutes ago" },
        { action: "Star received", project: "DevBran.ch Platform", time: "15 minutes ago" },
        { action: "Connection request", user: "Mike Chen", time: "1 hour ago" },
        { action: "Project viewed", project: "E-commerce Dashboard", time: "2 hours ago" },
        { action: "Profile viewed", user: "Alex Rodriguez", time: "3 hours ago" }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#565264]">Analytics</h1>
                    <p className="text-[#565264]/70">Track your profile performance and engagement metrics</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Last 30 Days
                    </Button>
                    <Button variant="outline" size="sm">
                        Export
                    </Button>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-[#565264]/60">{stat.title}</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-2xl font-bold text-[#565264]">{stat.value}</p>
                                        <div className={`flex items-center text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {stat.trend === 'up' ? (
                                                <TrendingUp className="h-3 w-3 mr-1" />
                                            ) : (
                                                <TrendingDown className="h-3 w-3 mr-1" />
                                            )}
                                            {stat.change}
                                        </div>
                                    </div>
                                    <p className="text-xs text-[#565264]/50">{stat.period}</p>
                                </div>
                                <div className="p-3 rounded-full bg-[#56876D]/10">
                                    <stat.icon className="h-6 w-6 text-[#56876D]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Traffic Sources */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[#565264]">Traffic Sources</CardTitle>
                        <CardDescription>Where your profile visitors come from</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {trafficSources.map((source, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#565264]">{source.source}</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-[#565264]/60">{source.visitors.toLocaleString()}</span>
                                        <span className="text-sm font-medium text-[#56876D]">{source.percentage}%</span>
                                    </div>
                                </div>
                                <div className="w-full bg-[#E7EBC5]/40 rounded-full h-2">
                                    <div
                                        className="bg-[#56876D] h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${source.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Top Projects */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[#565264]">Top Projects</CardTitle>
                        <CardDescription>Your most viewed projects this month</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {topProjects.map((project, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 border border-[#565264]/10">
                                <div className="flex-1">
                                    <h4 className="font-medium text-[#565264] text-sm truncate">{project.name}</h4>
                                    <div className="flex items-center space-x-4 mt-1">
                                        <span className="text-xs text-[#565264]/60">{project.views} views</span>
                                        <span className="text-xs text-[#565264]/60">{project.stars} stars</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {project.trend === 'up' ? (
                                        <TrendingUp className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <TrendingDown className="h-4 w-4 text-red-600" />
                                    )}
                                    <Button variant="ghost" size="sm" className="h-6 px-2">
                                        <ArrowUpRight className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-[#565264]">Recent Activity</CardTitle>
                        <CardDescription>Latest interactions with your profile</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 border border-[#565264]/10">
                                <div className="p-2 rounded-full bg-[#56876D]/20">
                                    {activity.action.includes('viewed') ? (
                                        <Eye className="h-4 w-4 text-[#56876D]" />
                                    ) : activity.action.includes('Star') ? (
                                        <Star className="h-4 w-4 text-[#56876D]" />
                                    ) : activity.action.includes('Connection') ? (
                                        <Users className="h-4 w-4 text-[#56876D]" />
                                    ) : (
                                        <MessageSquare className="h-4 w-4 text-[#56876D]" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-[#565264] truncate">
                                        {activity.action} {activity.user && `by ${activity.user}`} {activity.project && `on ${activity.project}`}
                                    </p>
                                    <div className="flex items-center space-x-1 mt-1">
                                        <Clock className="h-3 w-3 text-[#565264]/40" />
                                        <p className="text-xs text-[#565264]/60">{activity.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-[#565264]">Quick Stats</CardTitle>
                        <CardDescription>At a glance metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-[#56876D]">4.8</div>
                            <p className="text-sm text-[#565264]/60">Average Rating</p>
                            <div className="flex justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-[#56876D]">87%</div>
                            <p className="text-sm text-[#565264]/60">Profile Completion</p>
                            <div className="w-full bg-[#E7EBC5]/40 rounded-full h-2">
                                <div className="bg-[#56876D] h-2 rounded-full" style={{ width: '87%' }} />
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-[#56876D]">24</div>
                            <p className="text-sm text-[#565264]/60">Days Active</p>
                            <Badge variant="secondary" className="bg-[#56876D]/10 text-[#56876D]">
                                This Month
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Performance Chart Placeholder */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-[#565264]">Profile Views Over Time</CardTitle>
                    <CardDescription>Track your profile visibility trends</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 rounded-lg border border-[#565264]/10">
                        <div className="text-center space-y-2">
                            <BarChart3 className="h-16 w-16 text-[#565264]/40 mx-auto" />
                            <p className="text-[#565264]/60">Chart visualization would go here</p>
                            <p className="text-sm text-[#565264]/40">Integration with charting library needed</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
