'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';
import { Button } from '@/components/ui/shadcn/button';
import { Badge } from '@/components/ui/shadcn/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/shadcn/select';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import {
    Eye,
    Users,
    MousePointer,
    TrendingUp,
    TrendingDown,
    BarChart3,
    Download,
    Calendar,
    ExternalLink
} from 'lucide-react';

// Mock data for demonstration
const mockVisitorData = [
    { date: '2024-01-01', visitors: 45, views: 67 },
    { date: '2024-01-02', visitors: 52, views: 78 },
    { date: '2024-01-03', visitors: 38, views: 54 },
    { date: '2024-01-04', visitors: 63, views: 89 },
    { date: '2024-01-05', visitors: 71, views: 102 },
    { date: '2024-01-06', visitors: 58, views: 83 },
    { date: '2024-01-07', visitors: 49, views: 71 },
];

const mockReferrerData = [
    { source: 'Direct', visitors: 342, percentage: 45 },
    { source: 'Twitter', visitors: 189, percentage: 25 },
    { source: 'GitHub', visitors: 123, percentage: 16 },
    { source: 'LinkedIn', visitors: 76, percentage: 10 },
    { source: 'Google', visitors: 30, percentage: 4 },
];

const mockBlockData = [
    { name: 'Profile', clicks: 156, color: '#565264' },
    { name: 'Projects', clicks: 134, color: '#56876D' },
    { name: 'Resume', clicks: 89, color: '#E8C7DE' },
    { name: 'Waitlist', clicks: 67, color: '#E7EBC5' },
    { name: 'Discord', clicks: 45, color: '#9333EA' },
];

export default function AnalyticsDashboard() {
    const [timeRange, setTimeRange] = useState('7d');
    const [isLoading, setIsLoading] = useState(false);

    // Mock analytics data
    const analytics = {
        totalViews: 1234,
        totalVisitors: 891,
        totalClicks: 567,
        conversionRate: 4.2,
        trends: {
            views: 12.5,
            visitors: 8.3,
            clicks: -2.1,
            conversion: 0.8
        }
    };

    const handleExport = () => {
        // TODO: Implement export functionality
        console.log('Exporting analytics data...');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                        Analytics Overview
                    </h3>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                        Track your profile performance and visitor insights
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7d">Last 7 days</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="90d">Last 90 days</SelectItem>
                            <SelectItem value="1y">Last year</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={handleExport}>
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.totalViews.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className={`inline-flex items-center ${analytics.trends.views > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {analytics.trends.views > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(analytics.trends.views)}%
                            </span>
                            {' from last period'}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.totalVisitors.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className={`inline-flex items-center ${analytics.trends.visitors > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {analytics.trends.visitors > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(analytics.trends.visitors)}%
                            </span>
                            {' from last period'}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                        <MousePointer className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.totalClicks.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className={`inline-flex items-center ${analytics.trends.clicks > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {analytics.trends.clicks > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(analytics.trends.clicks)}%
                            </span>
                            {' from last period'}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analytics.conversionRate}%</div>
                        <p className="text-xs text-muted-foreground">
                            <span className={`inline-flex items-center ${analytics.trends.conversion > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {analytics.trends.conversion > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(analytics.trends.conversion)}%
                            </span>
                            {' from last period'}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visitor Trends */}
                <Card>
                    <CardHeader>
                        <CardTitle>Visitor Trends</CardTitle>
                        <CardDescription>
                            Daily visitors and page views over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockVisitorData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="visitors"
                                    stroke="#565264"
                                    strokeWidth={2}
                                    name="Visitors"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="views"
                                    stroke="#56876D"
                                    strokeWidth={2}
                                    name="Views"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Block Interactions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Block Interactions</CardTitle>
                        <CardDescription>
                            Clicks per block type
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={mockBlockData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="clicks" fill="#565264" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Referrers */}
                <Card>
                    <CardHeader>
                        <CardTitle>Top Referrers</CardTitle>
                        <CardDescription>
                            Sources driving traffic to your profile
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {mockReferrerData.map((referrer, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                        <div>
                                            <p className="font-medium text-text-primary dark:text-dark-text-primary">
                                                {referrer.source}
                                            </p>
                                            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                                {referrer.visitors} visitors
                                            </p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">
                                        {referrer.percentage}%
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest interactions with your profile
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { action: 'Profile view', time: '2 minutes ago', location: 'San Francisco, CA' },
                                { action: 'Project clicked', time: '5 minutes ago', location: 'London, UK' },
                                { action: 'Resume downloaded', time: '12 minutes ago', location: 'Tokyo, JP' },
                                { action: 'Waitlist signup', time: '18 minutes ago', location: 'Berlin, DE' },
                                { action: 'Discord join', time: '25 minutes ago', location: 'Toronto, CA' },
                            ].map((activity, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-text-primary dark:text-dark-text-primary">
                                            {activity.action}
                                        </p>
                                        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                            {activity.location}
                                        </p>
                                    </div>
                                    <span className="text-sm text-text-muted dark:text-dark-text-muted">
                                        {activity.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
