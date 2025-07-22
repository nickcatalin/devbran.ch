"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Bell,
    Check,
    X,
    Star,
    MessageSquare,
    Users,
    GitBranch,
    Heart,
    Share,
    Award,
    Calendar,
    Settings,
    Filter,
    MoreVertical
} from "lucide-react";
import { useState } from "react";

export default function NotificationsPage() {
    const [filter, setFilter] = useState("all");

    const notifications = [
        {
            id: 1,
            type: "star",
            title: "New star on your project",
            message: "Sarah Johnson starred your DevBran.ch Platform repository",
            timestamp: "2 minutes ago",
            isRead: false,
            avatar: "/placeholder-profile.jpg",
            userName: "Sarah Johnson",
            projectName: "DevBran.ch Platform",
            icon: Star,
            color: "text-yellow-500"
        },
        {
            id: 2,
            type: "connection",
            title: "New connection request",
            message: "Mike Chen wants to connect with you",
            timestamp: "15 minutes ago",
            isRead: false,
            avatar: "/placeholder-profile.jpg",
            userName: "Mike Chen",
            icon: Users,
            color: "text-blue-500"
        },
        {
            id: 3,
            type: "message",
            title: "New message",
            message: "Alex Rodriguez sent you a message about Docker configuration",
            timestamp: "1 hour ago",
            isRead: true,
            avatar: "/placeholder-profile.jpg",
            userName: "Alex Rodriguez",
            icon: MessageSquare,
            color: "text-green-500"
        },
        {
            id: 4,
            type: "achievement",
            title: "Achievement unlocked",
            message: "You've earned the 'Open Source Contributor' badge",
            timestamp: "3 hours ago",
            isRead: true,
            avatar: null,
            icon: Award,
            color: "text-purple-500"
        },
        {
            id: 5,
            type: "collaboration",
            title: "Collaboration invite",
            message: "Emily Davis invited you to collaborate on E-commerce Dashboard",
            timestamp: "5 hours ago",
            isRead: false,
            avatar: "/placeholder-profile.jpg",
            userName: "Emily Davis",
            projectName: "E-commerce Dashboard",
            icon: GitBranch,
            color: "text-orange-500"
        },
        {
            id: 6,
            type: "like",
            title: "Project liked",
            message: "David Kim liked your Task Management App project",
            timestamp: "1 day ago",
            isRead: true,
            avatar: "/placeholder-profile.jpg",
            userName: "David Kim",
            projectName: "Task Management App",
            icon: Heart,
            color: "text-red-500"
        },
        {
            id: 7,
            type: "share",
            title: "Project shared",
            message: "Lisa Anderson shared your Weather App on LinkedIn",
            timestamp: "2 days ago",
            isRead: true,
            avatar: "/placeholder-profile.jpg",
            userName: "Lisa Anderson",
            projectName: "Weather App",
            icon: Share,
            color: "text-blue-600"
        },
        {
            id: 8,
            type: "system",
            title: "Profile viewed",
            message: "Your profile was viewed 25 times this week",
            timestamp: "3 days ago",
            isRead: true,
            avatar: null,
            icon: Bell,
            color: "text-gray-500"
        }
    ];

    const getFilteredNotifications = () => {
        if (filter === "all") return notifications;
        if (filter === "unread") return notifications.filter(n => !n.isRead);
        return notifications.filter(n => n.type === filter);
    };

    const markAsRead = (id: number) => {
        // Here you would typically update the backend
        console.log("Marking notification as read:", id);
    };

    const markAllAsRead = () => {
        // Here you would typically update the backend
        console.log("Marking all notifications as read");
    };

    const deleteNotification = (id: number) => {
        // Here you would typically delete from backend
        console.log("Deleting notification:", id);
    };

    const filteredNotifications = getFilteredNotifications();
    const unreadCount = notifications.filter(n => !n.isRead).length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-3xl font-bold text-[#565264]">Notifications</h1>
                        {unreadCount > 0 && (
                            <Badge variant="secondary" className="bg-[#56876D]/20 text-[#56876D]">
                                {unreadCount} unread
                            </Badge>
                        )}
                    </div>
                    <p className="text-[#565264]/70">Stay updated with your latest activities and interactions</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={markAllAsRead}>
                        <Check className="mr-2 h-4 w-4" />
                        Mark All Read
                    </Button>
                    <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                </div>
            </div>

            {/* Filter Tabs */}
            <Tabs value={filter} onValueChange={setFilter} className="w-full">
                <TabsList className="grid w-full grid-cols-7">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="unread">
                        Unread
                        {unreadCount > 0 && (
                            <Badge variant="secondary" className="ml-1 bg-[#56876D]/20 text-[#56876D] text-xs">
                                {unreadCount}
                            </Badge>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="star">Stars</TabsTrigger>
                    <TabsTrigger value="connection">Connections</TabsTrigger>
                    <TabsTrigger value="message">Messages</TabsTrigger>
                    <TabsTrigger value="achievement">Achievements</TabsTrigger>
                    <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>

                <TabsContent value={filter} className="space-y-4 mt-6">
                    {/* Notifications List */}
                    <div className="space-y-2">
                        {filteredNotifications.map((notification) => (
                            <Card
                                key={notification.id}
                                className={`transition-all hover:shadow-md ${!notification.isRead ? 'border-l-4 border-l-[#56876D] bg-[#E7EBC5]/10' : ''
                                    }`}
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-start space-x-3">
                                        {/* Icon or Avatar */}
                                        <div className="flex-shrink-0">
                                            {notification.avatar ? (
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage src={notification.avatar} alt={notification.userName} />
                                                    <AvatarFallback className="bg-[#56876D] text-white">
                                                        {notification.userName?.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-[#56876D]/10 flex items-center justify-center">
                                                    <notification.icon className={`h-5 w-5 ${notification.color}`} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-[#565264]' : 'text-[#565264]/80'
                                                            }`}>
                                                            {notification.title}
                                                        </h4>
                                                        {!notification.isRead && (
                                                            <div className="h-2 w-2 bg-[#56876D] rounded-full" />
                                                        )}
                                                    </div>
                                                    <p className={`text-sm ${!notification.isRead ? 'text-[#565264]/70' : 'text-[#565264]/60'
                                                        }`}>
                                                        {notification.message}
                                                    </p>
                                                    <div className="flex items-center space-x-4 text-xs text-[#565264]/50">
                                                        <span>{notification.timestamp}</span>
                                                        <notification.icon className={`h-3 w-3 ${notification.color}`} />
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {!notification.isRead && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => markAsRead(notification.id)}
                                                            className="h-8 w-8 p-0"
                                                        >
                                                            <Check className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => deleteNotification(notification.id)}
                                                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                    >
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Action Buttons for specific types */}
                                            {notification.type === 'connection' && !notification.isRead && (
                                                <div className="flex space-x-2 mt-3">
                                                    <Button size="sm" className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                                        Accept
                                                    </Button>
                                                    <Button variant="outline" size="sm">
                                                        Decline
                                                    </Button>
                                                </div>
                                            )}

                                            {notification.type === 'collaboration' && !notification.isRead && (
                                                <div className="flex space-x-2 mt-3">
                                                    <Button size="sm" className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                                        View Invite
                                                    </Button>
                                                    <Button variant="outline" size="sm">
                                                        Ignore
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredNotifications.length === 0 && (
                        <div className="text-center py-12">
                            <div className="space-y-3">
                                <Bell className="h-12 w-12 text-[#565264]/40 mx-auto" />
                                <h3 className="text-lg font-medium text-[#565264]">No notifications</h3>
                                <p className="text-[#565264]/60">
                                    {filter === "unread"
                                        ? "You're all caught up!"
                                        : "You don't have any notifications yet"
                                    }
                                </p>
                            </div>
                        </div>
                    )}
                </TabsContent>
            </Tabs>

            {/* Notification Settings Quick Access */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-[#565264]">Notification Preferences</CardTitle>
                    <CardDescription>Customize what notifications you receive</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center space-y-2">
                            <div className="h-12 w-12 bg-[#56876D]/10 rounded-full flex items-center justify-center mx-auto">
                                <Star className="h-6 w-6 text-[#56876D]" />
                            </div>
                            <h4 className="font-medium text-[#565264] text-sm">Project Stars</h4>
                            <p className="text-xs text-[#565264]/60">When someone stars your projects</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                Enabled
                            </Badge>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="h-12 w-12 bg-[#56876D]/10 rounded-full flex items-center justify-center mx-auto">
                                <Users className="h-6 w-6 text-[#56876D]" />
                            </div>
                            <h4 className="font-medium text-[#565264] text-sm">Connections</h4>
                            <p className="text-xs text-[#565264]/60">New connection requests</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                Enabled
                            </Badge>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="h-12 w-12 bg-[#56876D]/10 rounded-full flex items-center justify-center mx-auto">
                                <MessageSquare className="h-6 w-6 text-[#56876D]" />
                            </div>
                            <h4 className="font-medium text-[#565264] text-sm">Messages</h4>
                            <p className="text-xs text-[#565264]/60">Direct messages from others</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                Enabled
                            </Badge>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="h-12 w-12 bg-[#56876D]/10 rounded-full flex items-center justify-center mx-auto">
                                <Bell className="h-6 w-6 text-[#56876D]" />
                            </div>
                            <h4 className="font-medium text-[#565264] text-sm">System Updates</h4>
                            <p className="text-xs text-[#565264]/60">Platform updates and news</p>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                                Disabled
                            </Badge>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <Button variant="outline" className="w-full sm:w-auto">
                            <Settings className="mr-2 h-4 w-4" />
                            Manage All Preferences
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
