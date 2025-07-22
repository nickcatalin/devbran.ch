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
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: user?.name || "John Developer",
        title: "Full Stack Developer",
        bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love working with React, Node.js, and modern web technologies.",
        location: "San Francisco, CA",
        website: "https://johndeveloper.dev",
        github: "johndeveloper",
        linkedin: "john-developer",
        twitter: "john_dev"
    });

    const skills = [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
        "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "GraphQL"
    ];

    const achievements = [
        { title: "Open Source Contributor", description: "Contributed to 15+ open source projects", icon: Code },
        { title: "Tech Speaker", description: "Spoke at 8 tech conferences", icon: Award },
        { title: "Mentor", description: "Mentored 25+ junior developers", icon: User },
        { title: "5-Star Developer", description: "Maintained 5-star rating on DevBran.ch", icon: Star }
    ];

    const handleSave = () => {
        // Here you would typically save the data to your backend
        console.log("Saving profile data:", profileData);
        setIsEditing(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#565264]">Profile</h1>
                    <p className="text-[#565264]/70">Manage your developer profile and showcase your skills</p>
                </div>
                <Button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                >
                    {isEditing ? (
                        <>
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                        </>
                    ) : (
                        <>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Profile
                        </>
                    )}
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader className="text-center">
                            <div className="relative mx-auto">
                                <Avatar className="h-32 w-32 mx-auto border-4 border-[#56876D]/20">
                                    <AvatarImage src="/placeholder-profile.jpg" alt={profileData.name} />
                                    <AvatarFallback className="bg-[#56876D] text-white font-semibold text-2xl">
                                        {profileData.name.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                {isEditing && (
                                    <Button
                                        size="sm"
                                        className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-[#56876D] hover:bg-[#56876D]/90"
                                    >
                                        <Camera className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                            {isEditing ? (
                                <div className="space-y-2">
                                    <Input
                                        value={profileData.name}
                                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                        className="text-center font-bold"
                                    />
                                    <Input
                                        value={profileData.title}
                                        onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                                        className="text-center"
                                    />
                                </div>
                            ) : (
                                <>
                                    <CardTitle className="text-xl text-[#565264]">{profileData.name}</CardTitle>
                                    <CardDescription className="text-[#565264]/70">{profileData.title}</CardDescription>
                                </>
                            )}
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm text-[#565264]/70">
                                <MapPin className="h-4 w-4" />
                                {isEditing ? (
                                    <Input
                                        value={profileData.location}
                                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                                        className="text-sm"
                                    />
                                ) : (
                                    <span>{profileData.location}</span>
                                )}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-[#565264]/70">
                                <Calendar className="h-4 w-4" />
                                <span>Joined March 2023</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-[#565264]/70">
                                <Mail className="h-4 w-4" />
                                <span>{user?.email}</span>
                            </div>

                            <div className="space-y-2 pt-4">
                                <h4 className="font-medium text-[#565264]">Social Links</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Globe className="h-4 w-4 text-[#565264]/60" />
                                        {isEditing ? (
                                            <Input
                                                value={profileData.website}
                                                onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                                                className="text-sm"
                                                placeholder="Website URL"
                                            />
                                        ) : (
                                            <a href={profileData.website} className="text-sm text-[#56876D] hover:underline">
                                                {profileData.website}
                                            </a>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Github className="h-4 w-4 text-[#565264]/60" />
                                        {isEditing ? (
                                            <Input
                                                value={profileData.github}
                                                onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                                                className="text-sm"
                                                placeholder="GitHub username"
                                            />
                                        ) : (
                                            <span className="text-sm">github.com/{profileData.github}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Linkedin className="h-4 w-4 text-[#565264]/60" />
                                        {isEditing ? (
                                            <Input
                                                value={profileData.linkedin}
                                                onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                                                className="text-sm"
                                                placeholder="LinkedIn username"
                                            />
                                        ) : (
                                            <span className="text-sm">linkedin.com/in/{profileData.linkedin}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Bio Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[#565264]">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isEditing ? (
                                <Textarea
                                    value={profileData.bio}
                                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                    rows={4}
                                    className="resize-none"
                                />
                            ) : (
                                <p className="text-[#565264]/80 leading-relaxed">{profileData.bio}</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Skills Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[#565264]">Skills & Technologies</CardTitle>
                            <CardDescription>Technologies I work with</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="bg-[#56876D]/10 text-[#56876D] hover:bg-[#56876D]/20">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Achievements Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[#565264]">Achievements</CardTitle>
                            <CardDescription>Milestones and accomplishments</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-[#E7EBC5]/20 to-[#E8C7DE]/20 border border-[#565264]/10">
                                        <div className="p-2 rounded-full bg-[#56876D]/20">
                                            <achievement.icon className="h-4 w-4 text-[#56876D]" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#565264] text-sm">{achievement.title}</h4>
                                            <p className="text-xs text-[#565264]/60">{achievement.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-2xl font-bold text-[#56876D]">42</div>
                                <p className="text-sm text-[#565264]/60">Projects Completed</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-2xl font-bold text-[#56876D]">1.2K</div>
                                <p className="text-sm text-[#565264]/60">GitHub Stars</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="text-2xl font-bold text-[#56876D]">573</div>
                                <p className="text-sm text-[#565264]/60">Connections</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
