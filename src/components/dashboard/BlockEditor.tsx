'use client';

import { Block, ProfileBlockConfig, WaitlistBlockConfig, ProjectsBlockConfig } from '@/types';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { Switch } from '@/components/ui/shadcn/switch';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Separator } from '@/components/ui/shadcn/separator';

interface BlockEditorProps {
    block: Block;
    onUpdateBlock: (blockId: string, updates: Partial<Block>) => void;
}

export default function BlockEditor({ block, onUpdateBlock }: BlockEditorProps) {
    const updateConfig = (configUpdates: any) => {
        onUpdateBlock(block.$id, {
            config: { ...block.config, ...configUpdates }
        });
    };

    const updateTitle = (title: string) => {
        onUpdateBlock(block.$id, { title });
    };

    const renderProfileConfig = () => {
        const config = block.config as ProfileBlockConfig;
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="show-revenue">Show Revenue</Label>
                    <Switch
                        id="show-revenue"
                        checked={config.showRevenue || false}
                        onCheckedChange={(checked) => updateConfig({ showRevenue: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="show-location">Show Location</Label>
                    <Switch
                        id="show-location"
                        checked={config.showLocation !== false}
                        onCheckedChange={(checked) => updateConfig({ showLocation: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="show-role">Show Current Role</Label>
                    <Switch
                        id="show-role"
                        checked={config.showCurrentRole !== false}
                        onCheckedChange={(checked) => updateConfig({ showRole: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="show-open-to-work">Show "Open to Work"</Label>
                    <Switch
                        id="show-open-to-work"
                        checked={config.showOpenToWork !== false}
                        onCheckedChange={(checked) => updateConfig({ showOpenToWork: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="show-contact-links">Show Contact Links</Label>
                    <Switch
                        id="show-contact-links"
                        checked={config.showContactLinks !== false}
                        onCheckedChange={(checked) => updateConfig({ showContactLinks: checked })}
                    />
                </div>
            </div>
        );
    };

    const renderWaitlistConfig = () => {
        const config = block.config as any;
        return (
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="waitlist-title">Title</Label>
                    <Input
                        id="waitlist-title"
                        value={config.title || ''}
                        onChange={(e) => updateConfig({ title: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="waitlist-description">Description</Label>
                    <Textarea
                        id="waitlist-description"
                        value={config.description || ''}
                        onChange={(e) => updateConfig({ description: e.target.value })}
                        rows={3}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="waitlist-button-text">Button Text</Label>
                    <Input
                        id="waitlist-button-text"
                        value={config.buttonText || ''}
                        onChange={(e) => updateConfig({ buttonText: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="waitlist-thank-you">Thank You Message</Label>
                    <Input
                        id="waitlist-thank-you"
                        value={config.thankYouMessage || ''}
                        onChange={(e) => updateConfig({ thankYouMessage: e.target.value })}
                    />
                </div>
            </div>
        );
    };

    const renderProjectsConfig = () => {
        const config = block.config as any;
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="projects-show-revenue">Show Revenue</Label>
                    <Switch
                        id="projects-show-revenue"
                        checked={config.showRevenue || false}
                        onCheckedChange={(checked) => updateConfig({ showRevenue: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="projects-group-by-category">Group by Category</Label>
                    <Switch
                        id="projects-group-by-category"
                        checked={config.groupByCategory || false}
                        onCheckedChange={(checked) => updateConfig({ groupByCategory: checked })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="projects-show-status">Show Status</Label>
                    <Switch
                        id="projects-show-status"
                        checked={config.showStatus !== false}
                        onCheckedChange={(checked) => updateConfig({ showStatus: checked })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="projects-max-visible">Max Visible Projects</Label>
                    <Input
                        id="projects-max-visible"
                        type="number"
                        value={config.maxVisible || 6}
                        onChange={(e) => updateConfig({ maxVisible: parseInt(e.target.value) })}
                    />
                </div>
            </div>
        );
    };

    const renderResumeConfig = () => {
        const config = block.config as any;
        return (
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="resume-description">Description</Label>
                    <Textarea
                        id="resume-description"
                        value={config.description || ''}
                        onChange={(e) => updateConfig({ description: e.target.value })}
                        rows={3}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resume-button-text">Button Text</Label>
                    <Input
                        id="resume-button-text"
                        value={config.buttonText || ''}
                        onChange={(e) => updateConfig({ buttonText: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resume-file-name">File Name</Label>
                    <Input
                        id="resume-file-name"
                        value={config.fileName || ''}
                        onChange={(e) => updateConfig({ fileName: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resume-file-url">File URL</Label>
                    <Input
                        id="resume-file-url"
                        value={config.fileUrl || ''}
                        onChange={(e) => updateConfig({ fileUrl: e.target.value })}
                        placeholder="Upload resume or paste URL"
                    />
                </div>
            </div>
        );
    };

    const renderGenericConfig = () => {
        const config = block.config as any;
        return (
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="generic-title">Title</Label>
                    <Input
                        id="generic-title"
                        value={config.title || ''}
                        onChange={(e) => updateConfig({ title: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="generic-description">Description</Label>
                    <Textarea
                        id="generic-description"
                        value={config.description || ''}
                        onChange={(e) => updateConfig({ description: e.target.value })}
                        rows={3}
                    />
                </div>
            </div>
        );
    };

    const renderBlockConfig = () => {
        switch (block.type) {
            case 'profile':
                return renderProfileConfig();
            case 'waitlist':
                return renderWaitlistConfig();
            case 'projects':
                return renderProjectsConfig();
            case 'resume':
                return renderResumeConfig();
            default:
                return renderGenericConfig();
        }
    };

    return (
        <div className="space-y-6">
            {/* Basic Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Basic Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="block-title">Block Title</Label>
                        <Input
                            id="block-title"
                            value={block.title}
                            onChange={(e) => updateTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="block-visible">Visible</Label>
                        <Switch
                            id="block-visible"
                            checked={block.isVisible}
                            onCheckedChange={(checked) => onUpdateBlock(block.$id, { isVisible: checked })}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Block-specific Configuration */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Block Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderBlockConfig()}
                </CardContent>
            </Card>
        </div>
    );
}
