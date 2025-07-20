"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ProtectedRoute } from "@/components/protected-route";
import { useAuth } from "@/contexts/auth-context";
import { useOAuthSession } from "@/hooks/use-oauth-session";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";
import {
    User,
    Mail,
    Calendar,
    Shield,
    LogOut,
    Settings,
    Home,
    Github,
    Globe,
    Edit3,
    Save,
    X,
    CheckCircle,
    AlertCircle,
    Send
} from "lucide-react";

export default function DashboardPage() {
    const { user, logout, sendEmailVerification, refreshOAuthSession } = useAuth();
    const { session, isOAuthProvider, providerName, isTokenExpiringSoon } = useOAuthSession();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [isVerificationSending, setIsVerificationSending] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "",
        bio: "",
        website: "",
        github: "",
    });

    useEffect(() => {
        if (user) {
            setProfileData({
                name: user.name || "",
                bio: user.prefs?.bio || "",
                website: user.prefs?.website || "",
                github: user.prefs?.github || "",
            });
        }

        // Refresh OAuth session if token is expiring soon
        if (user && isTokenExpiringSoon && session) {
            refreshOAuthSession().catch(error => {
                console.warn("Failed to refresh OAuth session:", error);
            });
        }
    }, [user, isTokenExpiringSoon, session]); // Remove refreshOAuthSession from dependencies

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out successfully");
            router.push("/");
        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    const handleSaveProfile = () => {
        // Here you would typically save to Appwrite database
        setIsEditing(false);
        toast.success("Profile updated successfully");
    };

    const handleSendVerification = async () => {
        setIsVerificationSending(true);
        try {
            await sendEmailVerification();
            toast.success("Verification email sent! Check your inbox.");
        } catch (error: any) {
            console.error("Failed to send verification email:", error);
            toast.error(error.message || "Failed to send verification email");
        } finally {
            setIsVerificationSending(false);
        }
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE]">
                {/* Navigation Bar */}
                <nav className="bg-white/90 backdrop-blur-sm border-b border-[#565264]/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => router.push("/")}
                                    className="text-2xl font-bold"
                                >
                                    <span className="text-[#565264]">Dev</span>
                                    <span className="text-[#56876D]">Bran.ch</span>
                                </button>
                                <Badge variant="secondary" className="bg-[#56876D]/10 text-[#56876D]">
                                    Dashboard
                                </Badge>
                            </div>

                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.push("/")}
                                    className="text-[#565264] hover:text-[#56876D]"
                                >
                                    <Home className="h-4 w-4 mr-2" />
                                    Home
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Profile Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-20 w-20">
                                                <AvatarImage src="" />
                                                <AvatarFallback className="bg-[#56876D] text-white text-lg">
                                                    {user?.name ? getInitials(user.name) : "U"}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-2xl text-[#565264]">
                                                    Welcome back, {user?.name || "User"}!
                                                </CardTitle>
                                                <CardDescription className="text-[#565264]/70">
                                                    Manage your developer profile
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setIsEditing(!isEditing)}
                                            className="border-[#56876D] text-[#56876D] hover:bg-[#56876D] hover:text-white"
                                        >
                                            {isEditing ? (
                                                <>
                                                    <X className="h-4 w-4 mr-2" />
                                                    Cancel
                                                </>
                                            ) : (
                                                <>
                                                    <Edit3 className="h-4 w-4 mr-2" />
                                                    Edit Profile
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {isEditing ? (
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-[#565264]">
                                                    Display Name
                                                </label>
                                                <Input
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                                                    className="bg-white/80 border-[#565264]/20 focus:border-[#56876D]"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-[#565264]">
                                                    Bio
                                                </label>
                                                <Textarea
                                                    value={profileData.bio}
                                                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                                                    placeholder="Tell us about yourself..."
                                                    className="bg-white/80 border-[#565264]/20 focus:border-[#56876D]"
                                                    rows={3}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-[#565264]">
                                                        Website
                                                    </label>
                                                    <Input
                                                        value={profileData.website}
                                                        onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
                                                        placeholder="https://your-website.com"
                                                        className="bg-white/80 border-[#565264]/20 focus:border-[#56876D]"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-[#565264]">
                                                        GitHub Username
                                                    </label>
                                                    <Input
                                                        value={profileData.github}
                                                        onChange={(e) => setProfileData(prev => ({ ...prev, github: e.target.value }))}
                                                        placeholder="your-github-username"
                                                        className="bg-white/80 border-[#565264]/20 focus:border-[#56876D]"
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                onClick={handleSaveProfile}
                                                className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                            >
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Changes
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {profileData.bio && (
                                                <div>
                                                    <h4 className="text-sm font-medium text-[#565264] mb-2">Bio</h4>
                                                    <p className="text-[#565264]/80">{profileData.bio}</p>
                                                </div>
                                            )}

                                            <div className="flex flex-wrap gap-4">
                                                {profileData.website && (
                                                    <a
                                                        href={profileData.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[#56876D] hover:underline"
                                                    >
                                                        <Globe className="h-4 w-4" />
                                                        Website
                                                    </a>
                                                )}

                                                {profileData.github && (
                                                    <a
                                                        href={`https://github.com/${profileData.github}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[#56876D] hover:underline"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        GitHub
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                                <CardHeader>
                                    <CardTitle className="text-[#565264]">Quick Actions</CardTitle>
                                    <CardDescription>
                                        Common tasks and settings
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Button
                                            variant="outline"
                                            className="justify-start h-auto p-4 border-[#565264]/20 hover:bg-[#565264]/5"
                                        >
                                            <Settings className="h-5 w-5 mr-3" />
                                            <div className="text-left">
                                                <div className="font-medium">Account Settings</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Manage your account preferences
                                                </div>
                                            </div>
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="justify-start h-auto p-4 border-[#565264]/20 hover:bg-[#565264]/5"
                                        >
                                            <Shield className="h-5 w-5 mr-3" />
                                            <div className="text-left">
                                                <div className="font-medium">Security</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Update password and security settings
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Account Info Sidebar */}
                        <div className="space-y-6">
                            <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                                <CardHeader>
                                    <CardTitle className="text-[#565264]">Account Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <User className="h-4 w-4 text-[#565264]/60" />
                                        <div>
                                            <p className="text-sm font-medium text-[#565264]">Name</p>
                                            <p className="text-sm text-[#565264]/70">{user?.name}</p>
                                        </div>
                                    </div>

                                    <Separator className="bg-[#565264]/10" />

                                    <div className="flex items-center gap-3">
                                        <Mail className="h-4 w-4 text-[#565264]/60" />
                                        <div>
                                            <p className="text-sm font-medium text-[#565264]">Email</p>
                                            <p className="text-sm text-[#565264]/70">{user?.email}</p>
                                        </div>
                                    </div>

                                    <Separator className="bg-[#565264]/10" />

                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-4 w-4 text-[#565264]/60" />
                                        <div>
                                            <p className="text-sm font-medium text-[#565264]">Member Since</p>
                                            <p className="text-sm text-[#565264]/70">
                                                {user?.$createdAt ? formatDate(user.$createdAt) : "Unknown"}
                                            </p>
                                        </div>
                                    </div>

                                    {isOAuthProvider && session?.provider && (
                                        <>
                                            <Separator className="bg-[#565264]/10" />

                                            <div className="flex items-center gap-3">
                                                {session.provider === 'google' ? (
                                                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                        />
                                                    </svg>
                                                ) : session.provider === 'github' ? (
                                                    <Github className="h-4 w-4 text-[#565264]/60" />
                                                ) : (
                                                    <Shield className="h-4 w-4 text-[#565264]/60" />
                                                )}
                                                <div>
                                                    <p className="text-sm font-medium text-[#565264]">Connected Account</p>
                                                    <p className="text-sm text-[#565264]/70">
                                                        {providerName || session.provider}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <Separator className="bg-[#565264]/10" />

                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <div>
                                            <p className="text-sm font-medium text-[#565264]">Email Verified</p>
                                            <p className="text-sm text-green-600">
                                                {user?.emailVerification ? "Verified" : "Not verified"}
                                            </p>
                                        </div>
                                    </div>

                                    {!user?.emailVerification && (
                                        <>
                                            <Separator className="bg-[#565264]/10" />

                                            <Alert className="border-amber-200 bg-amber-50">
                                                <AlertCircle className="h-4 w-4 text-amber-600" />
                                                <AlertDescription className="text-amber-800">
                                                    Please verify your email address to access all features.
                                                </AlertDescription>
                                            </Alert>

                                            <Button
                                                onClick={handleSendVerification}
                                                disabled={isVerificationSending}
                                                className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                                size="sm"
                                            >
                                                {isVerificationSending ? (
                                                    <>
                                                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Send Verification Email
                                                    </>
                                                )}
                                            </Button>
                                        </>
                                    )}
                                </CardContent>
                            </Card>

                            {user?.emailVerification && (
                                <Alert className="border-[#56876D]/20 bg-[#56876D]/5">
                                    <CheckCircle className="h-4 w-4 text-[#56876D]" />
                                    <AlertDescription className="text-[#565264]">
                                        Your profile is set up and ready to go! Start building your developer presence.
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
