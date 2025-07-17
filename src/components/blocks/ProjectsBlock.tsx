'use client';

import { ProjectsBlockConfig, Project } from '@/types';
import { Button } from '@/components/ui/shadcn/button';
import { Badge } from '@/components/ui/shadcn/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import {
    ExternalLink,
    Github,
    Globe,
    Star,
    GitFork,
    Calendar,
    Code,
    FolderOpen,
    DollarSign
} from 'lucide-react';

interface ProjectsBlockProps {
    config: ProjectsBlockConfig;
    projects: Project[];
    isPreview?: boolean;
}

export default function ProjectsBlock({ config, projects, isPreview = false }: ProjectsBlockProps) {
    const handleProjectClick = (project: Project) => {
        if (isPreview) return;
        window.open(project.url, '_blank');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'completed':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'archived':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
            case 'coming-soon':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
        }
    };

    // Filter and sort projects
    const visibleProjects = projects
        .filter(project => project.isVisible)
        .sort((a, b) => a.order - b.order)
        .slice(0, config.maxVisible);

    // Group by category if enabled
    const projectsByCategory = config.groupByCategory
        ? visibleProjects.reduce((acc, project) => {
            if (!acc[project.category]) {
                acc[project.category] = [];
            }
            acc[project.category].push(project);
            return acc;
        }, {} as Record<string, Project[]>)
        : { 'All Projects': visibleProjects };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5" />
                    Projects
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {visibleProjects.length === 0 ? (
                    <div className="text-center py-8 text-text-muted dark:text-dark-text-muted">
                        <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No projects to display yet.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
                            <div key={category}>
                                {config.groupByCategory && (
                                    <h3 className="text-lg font-semibold mb-3">{category}</h3>
                                )}
                                <div className="space-y-4">
                                    {categoryProjects.map((project) => (
                                        <div
                                            key={project.$id}
                                            className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-lg">{project.name}</h3>
                                                        {config.showStatus && (
                                                            <Badge className={getStatusColor(project.status)}>
                                                                {project.status.replace('-', ' ')}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-text-muted dark:text-dark-text-muted text-sm mb-2">
                                                        {project.description}
                                                    </p>

                                                    {/* Tech Stack */}
                                                    {project.technologies && project.technologies.length > 0 && (
                                                        <div className="flex flex-wrap gap-1 mb-3">
                                                            {project.technologies.map((tech, index) => (
                                                                <Badge key={index} variant="secondary" className="text-xs">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Revenue */}
                                                    {config.showRevenue && project.revenue && (
                                                        <div className="flex items-center gap-2 text-xs text-text-muted dark:text-dark-text-muted mb-3">
                                                            <DollarSign className="w-3 h-3" />
                                                            ${project.revenue.toLocaleString()} revenue
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleProjectClick(project)}
                                                    disabled={isPreview}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    View Project
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
