"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/auth-context";
import {
    Shield,
    Bell,
    Eye,
    Lock,
    Mail,
    Globe,
    Smartphone,
    Trash2,
    AlertTriangle,
    Check
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        desktop: true,
        marketing: false
    });

    const [privacy, setPrivacy] = useState({
        profileVisible: true,
        showEmail: false,
        showLocation: true,
        allowMessages: true
    });

    const [security, setSecurity] = useState({
        twoFactor: false,
        loginAlerts: true,
        sessionTimeout: "30"
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#565264]">Settings</h1>
                <p className="text-[#565264]/70">Manage your account preferences and security settings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[#565264]">Settings Menu</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="space-y-1">
                                {[
                                    { icon: Shield, label: "Security", id: "security" },
                                    { icon: Bell, label: "Notifications", id: "notifications" },
                                    { icon: Eye, label: "Privacy", id: "privacy" },
                                    { icon: Mail, label: "Email", id: "email" },
                                    { icon: Globe, label: "Appearance", id: "appearance" }
                                ].map((item, index) => (
                                    <button key={index} className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#E7EBC5]/30 transition-colors">
                                        <item.icon className="h-4 w-4 text-[#565264]/60" />
                                        <span className="text-sm text-[#565264]">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Settings Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Account Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-[#565264]">Account Information</CardTitle>
                            <CardDescription>Update your account details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue={user?.name || "John Developer"} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" defaultValue={user?.email || "john@example.com"} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="johndeveloper" />
                            </div>
                            <Button className="bg-[#56876D] hover:bg-[#56876D]/90 text-white">
                                Save Changes
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-[#565264]">
                                <Shield className="h-5 w-5" />
                                <span>Security</span>
                            </CardTitle>
                            <CardDescription>Manage your account security and privacy</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                                        <p className="text-xs text-[#565264]/60">Add an extra layer of security to your account</p>
                                    </div>
                                    <Switch
                                        checked={security.twoFactor}
                                        onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-sm font-medium">Login Alerts</Label>
                                        <p className="text-xs text-[#565264]/60">Get notified of new sign-ins to your account</p>
                                    </div>
                                    <Switch
                                        checked={security.loginAlerts}
                                        onCheckedChange={(checked) => setSecurity({ ...security, loginAlerts: checked })}
                                    />
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Session Timeout</Label>
                                    <Input
                                        type="number"
                                        value={security.sessionTimeout}
                                        onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                                        placeholder="Minutes"
                                        className="w-24"
                                    />
                                </div>
                            </div>
                            <Button variant="outline" className="w-full">
                                <Lock className="mr-2 h-4 w-4" />
                                Change Password
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Notification Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-[#565264]">
                                <Bell className="h-5 w-5" />
                                <span>Notifications</span>
                            </CardTitle>
                            <CardDescription>Choose what notifications you want to receive</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Email Notifications</Label>
                                    <p className="text-xs text-[#565264]/60">Receive notifications via email</p>
                                </div>
                                <Switch
                                    checked={notifications.email}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Push Notifications</Label>
                                    <p className="text-xs text-[#565264]/60">Receive push notifications on your devices</p>
                                </div>
                                <Switch
                                    checked={notifications.push}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Desktop Notifications</Label>
                                    <p className="text-xs text-[#565264]/60">Show notifications on your desktop</p>
                                </div>
                                <Switch
                                    checked={notifications.desktop}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, desktop: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Marketing Emails</Label>
                                    <p className="text-xs text-[#565264]/60">Receive updates about new features and tips</p>
                                </div>
                                <Switch
                                    checked={notifications.marketing}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Privacy Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-[#565264]">
                                <Eye className="h-5 w-5" />
                                <span>Privacy</span>
                            </CardTitle>
                            <CardDescription>Control who can see your information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Profile Visibility</Label>
                                    <p className="text-xs text-[#565264]/60">Make your profile visible to other users</p>
                                </div>
                                <Switch
                                    checked={privacy.profileVisible}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Show Email</Label>
                                    <p className="text-xs text-[#565264]/60">Display your email address on your profile</p>
                                </div>
                                <Switch
                                    checked={privacy.showEmail}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showEmail: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Show Location</Label>
                                    <p className="text-xs text-[#565264]/60">Display your location on your profile</p>
                                </div>
                                <Switch
                                    checked={privacy.showLocation}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showLocation: checked })}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-sm font-medium">Allow Messages</Label>
                                    <p className="text-xs text-[#565264]/60">Let other users send you messages</p>
                                </div>
                                <Switch
                                    checked={privacy.allowMessages}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, allowMessages: checked })}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Danger Zone */}
                    <Card className="border-red-200">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-red-600">
                                <AlertTriangle className="h-5 w-5" />
                                <span>Danger Zone</span>
                            </CardTitle>
                            <CardDescription>Irreversible and destructive actions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Alert className="border-red-200 bg-red-50">
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-800">
                                    Once you delete your account, there is no going back. Please be certain.
                                </AlertDescription>
                            </Alert>
                            <Button variant="destructive" className="w-full">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Account
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
