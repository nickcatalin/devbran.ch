'use client';

import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';
import { Badge } from '@/components/ui/shadcn/badge';
import { Plus, Eye, Settings, Save, Smartphone, Monitor, Tablet } from 'lucide-react';
import BlockList from './BlockList';
import BlockEditor from './BlockEditor';
import DevicePreview from './DevicePreview';
import { Block, BlockType } from '@/types';

const availableBlocks: Array<{ type: BlockType; label: string; description: string }> = [
    { type: 'profile', label: 'Profile', description: 'Your basic information and photo' },
    { type: 'waitlist', label: 'Waitlist', description: 'Collect emails for your waitlist' },
    { type: 'projects', label: 'Projects', description: 'Showcase your work and projects' },
    { type: 'resume', label: 'Resume', description: 'Upload and display your resume' },
    { type: 'reviews', label: 'Reviews', description: 'Display testimonials and reviews' },
    { type: 'discord', label: 'Discord', description: 'Link to your Discord server' },
    { type: 'donation', label: 'Donation', description: 'Add donation and support links' },
    { type: 'ama', label: 'AMA', description: 'Let visitors ask you questions' },
    { type: 'claim-link', label: 'Claim Link', description: 'Referral link for new users' },
];

export default function PageBuilder() {
    const { user, profile } = useAuth();
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
    const [previewDevice, setPreviewDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Load blocks from Appwrite
    useEffect(() => {
        const loadBlocks = async () => {
            if (!user) return;

            try {
                // TODO: Load blocks from Appwrite
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to load blocks:', error);
                setIsLoading(false);
            }
        };

        loadBlocks();
    }, [user]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setBlocks((items) => {
                const oldIndex = items.findIndex((item) => item.$id === active.id);
                const newIndex = items.findIndex((item) => item.$id === over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const addBlock = (type: BlockType) => {
        const newBlock: Block = {
            $id: Math.random().toString(36).substr(2, 9),
            userId: user?.$id || '',
            type,
            title: availableBlocks.find(b => b.type === type)?.label || '',
            order: blocks.length,
            isVisible: true,
            config: getDefaultConfig(type),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        setBlocks([...blocks, newBlock]);
        setSelectedBlock(newBlock);
    };

    const updateBlock = (blockId: string, updates: Partial<Block>) => {
        setBlocks(blocks.map(block =>
            block.$id === blockId
                ? { ...block, ...updates, updatedAt: new Date().toISOString() }
                : block
        ));

        if (selectedBlock && selectedBlock.$id === blockId) {
            setSelectedBlock({ ...selectedBlock, ...updates });
        }
    };

    const deleteBlock = (blockId: string) => {
        setBlocks(blocks.filter(block => block.$id !== blockId));
        if (selectedBlock && selectedBlock.$id === blockId) {
            setSelectedBlock(null);
        }
    };

    const saveBlocks = async () => {
        if (!user) return;

        setIsSaving(true);
        try {
            // TODO: Save blocks to Appwrite
            console.log('Saving blocks:', blocks);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        } catch (error) {
            console.error('Failed to save blocks:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const getDefaultConfig = (type: BlockType): any => {
        switch (type) {
            case 'profile':
                return {
                    showRevenue: false,
                    showLocation: true,
                    showRole: true,
                    showOpenToWork: true,
                    showContactLinks: true,
                };
            case 'waitlist':
                return {
                    title: 'Join the Waitlist',
                    description: 'Be the first to know when we launch!',
                    buttonText: 'Join Waitlist',
                    thankYouMessage: 'Thanks for joining!',
                };
            case 'projects':
                return {
                    showRevenue: false,
                    groupByCategory: false,
                    showStatus: true,
                    maxVisible: 6,
                };
            case 'resume':
                return {
                    title: 'Resume',
                    description: 'Download my resume',
                    buttonText: 'Download Resume',
                    fileUrl: '',
                    fileName: 'resume.pdf',
                };
            case 'reviews':
                return {
                    title: 'What People Say',
                    showRating: true,
                    maxVisible: 3,
                    autoRotate: false,
                    rotationInterval: 5000,
                };
            case 'discord':
                return {
                    title: 'Join Our Discord',
                    description: 'Connect with the community',
                    inviteUrl: '',
                    buttonText: 'Join Discord',
                    showMemberCount: true,
                };
            case 'donation':
                return {
                    title: 'Support My Work',
                    description: 'If you enjoy my content, consider supporting me',
                    platforms: [],
                };
            case 'ama':
                return {
                    title: 'Ask Me Anything',
                    description: 'Have a question? Ask away!',
                    buttonText: 'Ask Question',
                    allowAnonymous: true,
                    requireEmail: false,
                    moderationEnabled: true,
                };
            case 'claim-link':
                return {
                    title: 'Claim Your Link',
                    description: 'Create your own developer profile',
                    buttonText: 'Get Started',
                    referralCode: user?.email || 'devbranch',
                };
            default:
                return {};
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-96 items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-text-secondary dark:text-dark-text-secondary">Loading blocks...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* Block List */}
            <div className="lg:col-span-1 space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Blocks</CardTitle>
                        <CardDescription>
                            Drag and drop to reorder
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DndContext
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                            modifiers={[restrictToVerticalAxis]}
                        >
                            <SortableContext items={blocks.map(b => b.$id)} strategy={verticalListSortingStrategy}>
                                <BlockList
                                    blocks={blocks}
                                    selectedBlock={selectedBlock}
                                    onSelectBlock={setSelectedBlock}
                                    onUpdateBlock={updateBlock}
                                    onDeleteBlock={deleteBlock}
                                />
                            </SortableContext>
                        </DndContext>
                    </CardContent>
                </Card>

                {/* Add Block */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Add Block</CardTitle>
                        <CardDescription>
                            Choose a block type to add
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {availableBlocks.map((blockType) => (
                            <Button
                                key={blockType.type}
                                variant="outline"
                                onClick={() => addBlock(blockType.type)}
                                className="w-full justify-start text-left h-auto p-3"
                            >
                                <div>
                                    <div className="font-medium">{blockType.label}</div>
                                    <div className="text-xs text-text-muted dark:text-dark-text-muted">
                                        {blockType.description}
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Block Editor */}
            <div className="lg:col-span-1">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            {selectedBlock ? 'Edit Block' : 'Select a Block'}
                        </CardTitle>
                        {selectedBlock && (
                            <Badge variant="secondary">
                                {availableBlocks.find(b => b.type === selectedBlock.type)?.label}
                            </Badge>
                        )}
                    </CardHeader>
                    <CardContent>
                        {selectedBlock ? (
                            <BlockEditor
                                block={selectedBlock}
                                onUpdateBlock={updateBlock}
                            />
                        ) : (
                            <div className="text-center py-8">
                                <Settings className="mx-auto h-12 w-12 text-text-muted dark:text-dark-text-muted mb-4" />
                                <p className="text-text-secondary dark:text-dark-text-secondary">
                                    Select a block to edit its settings
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2">
                <Card className="h-full">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Preview</CardTitle>
                            <div className="flex items-center space-x-2">
                                <Tabs value={previewDevice} onValueChange={(value) => setPreviewDevice(value as any)}>
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="mobile">
                                            <Smartphone className="h-4 w-4" />
                                        </TabsTrigger>
                                        <TabsTrigger value="tablet">
                                            <Tablet className="h-4 w-4" />
                                        </TabsTrigger>
                                        <TabsTrigger value="desktop">
                                            <Monitor className="h-4 w-4" />
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                                <Button
                                    onClick={saveBlocks}
                                    disabled={isSaving}
                                    className="bg-primary-600 hover:bg-primary-700"
                                >
                                    {isSaving ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4 mr-2" />
                                            Save
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="h-full">
                        <DevicePreview
                            device={previewDevice}
                            blocks={blocks}
                            profile={profile}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
