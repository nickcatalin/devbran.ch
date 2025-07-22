"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    Users,
    UserPlus,
    MessageSquare,
    MapPin,
    Calendar,
    Github,
    Linkedin,
    Globe,
    Filter,
    MoreVertical,
    Star,
    Code
} from "lucide-react";
import { useState } from "react";

export default function ConnectionsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const connections = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Frontend Developer",
            company: "TechCorp",
            location: "New York, NY",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 12,
            skills: ["React", "TypeScript", "Design"],
            isOnline: true,
            connectedDate: "2 months ago",
            github: "sarahjohnson",
            linkedin: "sarah-johnson-dev"
        },
        {
            id: 2,
            name: "Mike Chen",
            title: "Full Stack Engineer",
            company: "StartupXYZ",
            location: "San Francisco, CA",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 8,
            skills: ["Node.js", "Python", "AWS"],
            isOnline: false,
            connectedDate: "3 weeks ago",
            github: "mikechen",
            linkedin: "mike-chen-engineer"
        },
        {
            id: 3,
            name: "Alex Rodriguez",
            title: "DevOps Engineer",
            company: "CloudTech",
            location: "Austin, TX",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 15,
            skills: ["Docker", "Kubernetes", "CI/CD"],
            isOnline: true,
            connectedDate: "1 month ago",
            github: "alexrodriguez",
            linkedin: "alex-rodriguez-devops"
        },
        {
            id: 4,
            name: "Emily Davis",
            title: "UX Designer",
            company: "DesignStudio",
            location: "Los Angeles, CA",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 6,
            skills: ["Figma", "Prototyping", "User Research"],
            isOnline: false,
            connectedDate: "2 weeks ago",
            github: null,
            linkedin: "emily-davis-ux"
        },
        {
            id: 5,
            name: "David Kim",
            title: "Mobile Developer",
            company: "AppCo",
            location: "Seattle, WA",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 10,
            skills: ["React Native", "Swift", "Flutter"],
            isOnline: true,
            connectedDate: "1 week ago",
            github: "davidkim",
            linkedin: "david-kim-mobile"
        }
    ];

    const pendingRequests = [
        {
            id: 6,
            name: "Jessica Wong",
            title: "Backend Developer",
            company: "DataFlow",
            location: "Vancouver, BC",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 4,
            skills: ["Go", "PostgreSQL", "Microservices"],
            requestDate: "2 days ago"
        },
        {
            id: 7,
            name: "Robert Taylor",
            title: "Data Scientist",
            company: "AI Labs",
            location: "Boston, MA",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 7,
            skills: ["Python", "Machine Learning", "TensorFlow"],
            requestDate: "1 day ago"
        }
    ];

    const suggestions = [
        {
            id: 8,
            name: "Lisa Anderson",
            title: "Product Manager",
            company: "ProductCorp",
            location: "Chicago, IL",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 9,
            skills: ["Product Strategy", "Agile", "Analytics"],
            reason: "Works at similar companies"
        },
        {
            id: 9,
            name: "James Wilson",
            title: "Security Engineer",
            company: "SecureTech",
            location: "Denver, CO",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 5,
            skills: ["Cybersecurity", "Penetration Testing", "CISSP"],
            reason: "Shared connections"
        },
        {
            id: 10,
            name: "Maria Garcia",
            title: "QA Engineer",
            company: "TestSoft",
            location: "Miami, FL",
            avatar: "/placeholder-profile.jpg",
            mutualConnections: 3,
            skills: ["Test Automation", "Selenium", "API Testing"],
            reason: "Similar skills"
        }
    ];

    const filteredConnections = connections.filter(connection =>
        connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        connection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        connection.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        connection.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#565264]">Connections</h1>
                    <p className="text-[#565264]/70">Grow your professional network and collaborate with other developers</p>
                </div>
                <Button className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Find Developers
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">{connections.length}</div>
                        <p className="text-sm text-[#565264]/60">Connections</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">{pendingRequests.length}</div>
                        <p className="text-sm text-[#565264]/60">Pending Requests</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">{suggestions.length}</div>
                        <p className="text-sm text-[#565264]/60">Suggestions</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">
                            {connections.filter(c => c.isOnline).length}
                        </div>
                        <p className="text-sm text-[#565264]/60">Online Now</p>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="connections" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="connections">My Connections</TabsTrigger>
                    <TabsTrigger value="requests">
                        Requests {pendingRequests.length > 0 && (
                            <Badge variant="secondary" className="ml-2 bg-[#56876D]/20 text-[#56876D]">
                                {pendingRequests.length}
                            </Badge>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                </TabsList>

                <TabsContent value="connections" className="space-y-4">
                    {/* Search */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#565264]/60" />
                            <Input
                                placeholder="Search connections..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </div>

                    {/* Connections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredConnections.map((connection) => (
                            <Card key={connection.id} className="group hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="relative">
                                                    <Avatar className="h-12 w-12">
                                                        <AvatarImage src={connection.avatar} alt={connection.name} />
                                                        <AvatarFallback className="bg-[#56876D] text-white">
                                                            {connection.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    {connection.isOnline && (
                                                        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="font-medium text-[#565264] truncate">{connection.name}</h3>
                                                    <p className="text-sm text-[#565264]/70 truncate">{connection.title}</p>
                                                    <p className="text-xs text-[#565264]/50 truncate">{connection.company}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <MapPin className="h-3 w-3" />
                                                <span>{connection.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <Users className="h-3 w-3" />
                                                <span>{connection.mutualConnections} mutual connections</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <Calendar className="h-3 w-3" />
                                                <span>Connected {connection.connectedDate}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {connection.skills.slice(0, 3).map((skill, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-xs bg-[#565264]/10 text-[#565264]"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <MessageSquare className="mr-2 h-4 w-4" />
                                                Message
                                            </Button>
                                            <div className="flex space-x-1">
                                                {connection.github && (
                                                    <Button variant="outline" size="sm" className="p-2">
                                                        <Github className="h-4 w-4" />
                                                    </Button>
                                                )}
                                                {connection.linkedin && (
                                                    <Button variant="outline" size="sm" className="p-2">
                                                        <Linkedin className="h-4 w-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="requests" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pendingRequests.map((request) => (
                            <Card key={request.id}>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={request.avatar} alt={request.name} />
                                                <AvatarFallback className="bg-[#56876D] text-white">
                                                    {request.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="font-medium text-[#565264]">{request.name}</h3>
                                                <p className="text-sm text-[#565264]/70">{request.title}</p>
                                                <p className="text-xs text-[#565264]/50">{request.company}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <MapPin className="h-3 w-3" />
                                                <span>{request.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <Users className="h-3 w-3" />
                                                <span>{request.mutualConnections} mutual connections</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <Calendar className="h-3 w-3" />
                                                <span>Requested {request.requestDate}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {request.skills.map((skill, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-xs bg-[#565264]/10 text-[#565264]"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex space-x-2">
                                            <Button className="flex-1 bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                                Accept
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                Decline
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="suggestions" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {suggestions.map((suggestion) => (
                            <Card key={suggestion.id}>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={suggestion.avatar} alt={suggestion.name} />
                                                <AvatarFallback className="bg-[#56876D] text-white">
                                                    {suggestion.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="font-medium text-[#565264]">{suggestion.name}</h3>
                                                <p className="text-sm text-[#565264]/70">{suggestion.title}</p>
                                                <p className="text-xs text-[#565264]/50">{suggestion.company}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <MapPin className="h-3 w-3" />
                                                <span>{suggestion.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-xs text-[#565264]/60">
                                                <Users className="h-3 w-3" />
                                                <span>{suggestion.mutualConnections} mutual connections</span>
                                            </div>
                                            <div className="text-xs text-[#56876D] font-medium">
                                                {suggestion.reason}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {suggestion.skills.slice(0, 3).map((skill, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-xs bg-[#565264]/10 text-[#565264]"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex space-x-2">
                                            <Button className="flex-1 bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                Connect
                                            </Button>
                                            <Button variant="outline" size="sm" className="p-2">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
