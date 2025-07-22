"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Plus,
    Search,
    Filter,
    Star,
    Eye,
    GitBranch,
    Calendar,
    ExternalLink,
    Github,
    Globe,
    Code,
    Trash2,
    Edit
} from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const projects = [
        {
            id: 1,
            name: "DevBran.ch Platform",
            description: "A modern developer profile platform built with Next.js and TypeScript. Features include authentication, real-time updates, and responsive design.",
            image: "/placeholder-safari.svg",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Appwrite"],
            status: "Active",
            stars: 89,
            views: 2340,
            commits: 247,
            lastUpdated: "2 hours ago",
            githubUrl: "https://github.com/johndeveloper/devbranch-platform",
            liveUrl: "https://devbranch-platform.vercel.app",
            isPrivate: false
        },
        {
            id: 2,
            name: "E-commerce Dashboard",
            description: "React-based dashboard for managing online store operations with real-time analytics and inventory management.",
            image: "/placeholder-safari.svg",
            tags: ["React", "Node.js", "MongoDB", "Chart.js"],
            status: "Completed",
            stars: 67,
            views: 1890,
            commits: 189,
            lastUpdated: "1 week ago",
            githubUrl: "https://github.com/johndeveloper/ecommerce-dashboard",
            liveUrl: "https://ecommerce-dashboard-demo.netlify.app",
            isPrivate: false
        },
        {
            id: 3,
            name: "Task Management App",
            description: "Collaborative task management tool with real-time updates, team collaboration features, and project tracking.",
            image: "/placeholder-safari.svg",
            tags: ["Vue.js", "Firebase", "PWA", "Vuetify"],
            status: "In Progress",
            stars: 45,
            views: 1456,
            commits: 156,
            lastUpdated: "3 days ago",
            githubUrl: "https://github.com/johndeveloper/task-management",
            liveUrl: null,
            isPrivate: false
        },
        {
            id: 4,
            name: "Weather App",
            description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
            image: "/placeholder-safari.svg",
            tags: ["React Native", "API Integration", "Maps", "Push Notifications"],
            status: "Completed",
            stars: 34,
            views: 1023,
            commits: 89,
            lastUpdated: "2 weeks ago",
            githubUrl: "https://github.com/johndeveloper/weather-app",
            liveUrl: "https://weather-app-react-native.expo.dev",
            isPrivate: false
        },
        {
            id: 5,
            name: "Portfolio Website",
            description: "Personal portfolio website showcasing projects, skills, and experience with smooth animations and modern design.",
            image: "/placeholder-safari.svg",
            tags: ["HTML", "CSS", "JavaScript", "GSAP"],
            status: "Active",
            stars: 23,
            views: 856,
            commits: 67,
            lastUpdated: "5 days ago",
            githubUrl: "https://github.com/johndeveloper/portfolio",
            liveUrl: "https://johndeveloper.dev",
            isPrivate: false
        },
        {
            id: 6,
            name: "Private Project",
            description: "Confidential client project with enterprise-level security and scalability requirements.",
            image: "/placeholder-safari.svg",
            tags: ["Enterprise", "Security", "Scalability"],
            status: "In Progress",
            stars: 0,
            views: 0,
            commits: 234,
            lastUpdated: "1 day ago",
            githubUrl: null,
            liveUrl: null,
            isPrivate: true
        }
    ];

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-[#56876D]/20 text-[#56876D]';
            case 'Completed':
                return 'bg-[#E8C7DE]/30 text-[#565264]';
            case 'In Progress':
                return 'bg-[#E7EBC5]/40 text-[#565264]';
            default:
                return 'bg-[#565264]/20 text-[#565264]';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#565264]">Projects</h1>
                    <p className="text-[#565264]/70">Showcase your development work and track performance</p>
                </div>
                <Button className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#565264]/60" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                </Button>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">{projects.length}</div>
                        <p className="text-sm text-[#565264]/60">Total Projects</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">
                            {projects.reduce((sum, project) => sum + project.stars, 0)}
                        </div>
                        <p className="text-sm text-[#565264]/60">Total Stars</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">
                            {projects.reduce((sum, project) => sum + project.views, 0).toLocaleString()}
                        </div>
                        <p className="text-sm text-[#565264]/60">Total Views</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[#56876D]">
                            {projects.filter(p => p.status === 'Active').length}
                        </div>
                        <p className="text-sm text-[#565264]/60">Active Projects</p>
                    </CardContent>
                </Card>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                        <div className="relative">
                            <div className="h-48 bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 rounded-t-lg flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-24 w-24 object-contain opacity-60"
                                />
                            </div>
                            <div className="absolute top-3 right-3">
                                <Badge variant="secondary" className={`text-xs ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </Badge>
                            </div>
                            {project.isPrivate && (
                                <div className="absolute top-3 left-3">
                                    <Badge variant="secondary" className="text-xs bg-[#565264]/20 text-[#565264]">
                                        Private
                                    </Badge>
                                </div>
                            )}
                        </div>

                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <CardTitle className="text-lg text-[#565264] truncate group-hover:text-[#56876D] transition-colors">
                                    {project.name}
                                </CardTitle>
                                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardDescription className="text-sm text-[#565264]/70 line-clamp-2">
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                                {project.tags.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-[#565264]/10 text-[#565264] text-xs rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-[#565264]/10 text-[#565264] text-xs rounded">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-between text-sm text-[#565264]/60">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4" />
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Eye className="h-4 w-4" />
                                        <span>{project.views}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <GitBranch className="h-4 w-4" />
                                        <span>{project.commits}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-[#565264]/50">
                                <div className="flex items-center space-x-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>Updated {project.lastUpdated}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                                {project.githubUrl && (
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Button>
                                )}
                                {project.liveUrl && (
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live
                                    </Button>
                                )}
                                {!project.githubUrl && !project.liveUrl && project.isPrivate && (
                                    <Button variant="outline" size="sm" className="flex-1" disabled>
                                        <Code className="mr-2 h-4 w-4" />
                                        Private
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <div className="space-y-3">
                        <Code className="h-12 w-12 text-[#565264]/40 mx-auto" />
                        <h3 className="text-lg font-medium text-[#565264]">No projects found</h3>
                        <p className="text-[#565264]/60">
                            {searchQuery ? "Try adjusting your search query" : "Start by creating your first project"}
                        </p>
                        <Button className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Project
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
