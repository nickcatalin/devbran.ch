'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { Switch } from '@/components/ui/shadcn/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Separator } from '@/components/ui/shadcn/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Badge } from '@/components/ui/shadcn/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/shadcn/select';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/shadcn/alert-dialog';
import {
    User,
    Link,
    Palette,
    Shield,
    Trash2,
    Save,
    Upload,
    Plus,
    X,
    ExternalLink,
    Moon,
    Sun,
    Monitor
} from 'lucide-react';

export default function SettingsForm() {
    const { user, profile, updateProfile } = useAuth();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: profile?.name || '',
        bio: profile?.bio || '',
        location: profile?.location || '',
        currentRole: profile?.currentRole || '',
        slug: profile?.slug || '',
        openToWork: profile?.openToWork || false,
        showRevenue: profile?.showRevenue || false,
        isPublic: profile?.isPublic !== false,
        customDomain: profile?.customDomain || '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!profile) return;

        setIsLoading(true);
        try {
            await updateProfile(formData);
        } catch (error) {
            console.error('Failed to update profile:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        // TODO: Implement account deletion
        console.log('Deleting account...');
    };

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="appearance">Appearance</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>
                                Update your profile information and public details
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <form onSubmit={handleSubmit}>
                                {/* Avatar */}
                                <div className="flex items-center space-x-4">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src={profile?.avatar} alt={profile?.name} />
                                        <AvatarFallback className="text-2xl">
                                            {profile?.name?.charAt(0).toUpperCase() || 'U'}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2">
                                        <Button variant="outline" size="sm">
                                            <Upload className="w-4 h-4 mr-2" />
                                            Change Avatar
                                        </Button>
                                        <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                            JPG, PNG or GIF. Max size 2MB.
                                        </p>
                                    </div>
                                </div>

                                <Separator />

                                {/* Basic Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Profile Slug</Label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                                devbran.ch/
                                            </span>
                                            <Input
                                                id="slug"
                                                value={formData.slug}
                                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                                placeholder="your-slug"
                                                className="rounded-l-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea
                                        id="bio"
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                        placeholder="Tell us about yourself..."
                                        rows={4}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            placeholder="San Francisco, CA"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="currentRole">Current Role</Label>
                                        <Input
                                            id="currentRole"
                                            value={formData.currentRole}
                                            onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                                            placeholder="Senior Developer"
                                        />
                                    </div>
                                </div>

                                {/* Status Toggles */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Open to Work</Label>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Show that you're available for new opportunities
                                            </p>
                                        </div>
                                        <Switch
                                            checked={formData.openToWork}
                                            onCheckedChange={(checked) => setFormData({ ...formData, openToWork: checked })}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Show Revenue</Label>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Display revenue information on your profile
                                            </p>
                                        </div>
                                        <Switch
                                            checked={formData.showRevenue}
                                            onCheckedChange={(checked) => setFormData({ ...formData, showRevenue: checked })}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4 mr-2" />
                                                Save Changes
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Theme</CardTitle>
                            <CardDescription>
                                Choose how DevBran.ch looks and feels
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div
                                    className={`p-4 border rounded-lg cursor-pointer transition-all ${theme === 'light' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-border hover:border-primary-400'
                                        }`}
                                    onClick={() => handleThemeChange('light')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Sun className="w-5 h-5" />
                                        <div>
                                            <p className="font-medium">Light</p>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Clean and bright
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`p-4 border rounded-lg cursor-pointer transition-all ${theme === 'dark' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-border hover:border-primary-400'
                                        }`}
                                    onClick={() => handleThemeChange('dark')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Moon className="w-5 h-5" />
                                        <div>
                                            <p className="font-medium">Dark</p>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Easy on the eyes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`p-4 border rounded-lg cursor-pointer transition-all ${theme === 'system' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-border hover:border-primary-400'
                                        }`}
                                    onClick={() => handleThemeChange('system')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Monitor className="w-5 h-5" />
                                        <div>
                                            <p className="font-medium">System</p>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Matches your device
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="privacy" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Privacy Settings</CardTitle>
                            <CardDescription>
                                Control who can see your profile and information
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Public Profile</Label>
                                    <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                        Make your profile visible to everyone
                                    </p>
                                </div>
                                <Switch
                                    checked={formData.isPublic}
                                    onCheckedChange={(checked) => setFormData({ ...formData, isPublic: checked })}
                                />
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <Label htmlFor="customDomain">Custom Domain</Label>
                                <Input
                                    id="customDomain"
                                    value={formData.customDomain}
                                    onChange={(e) => setFormData({ ...formData, customDomain: e.target.value })}
                                    placeholder="yourdomain.com"
                                />
                                <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                    Use your own domain instead of devbran.ch/username
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Advanced Settings</CardTitle>
                            <CardDescription>
                                Advanced options and account management
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Account Email</Label>
                                <Input value={user?.email || ''} disabled />
                                <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                    Contact support to change your email address
                                </p>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-red-600">Danger Zone</h4>
                                <div className="border border-red-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-red-600">Delete Account</p>
                                            <p className="text-sm text-text-muted dark:text-dark-text-muted">
                                                Permanently delete your account and all associated data
                                            </p>
                                        </div>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" size="sm">
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    Delete Account
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete your
                                                        account and remove all your data from our servers.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={handleDeleteAccount}>
                                                        Delete Account
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
