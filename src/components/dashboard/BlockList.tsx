'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/shadcn/button';
import { Switch } from '@/components/ui/shadcn/switch';
import { Badge } from '@/components/ui/shadcn/badge';
import {
    GripVertical,
    Eye,
    EyeOff,
    Trash2,
    User,
    Mail,
    FolderOpen,
    FileText,
    Star,
    MessageSquare,
    Users,
    Heart,
    Link,
    HelpCircle,
    MessageCircle
} from 'lucide-react';
import { Block } from '@/types';
import { getBlockTitle, getBlockDescription } from '@/components/blocks';

interface BlockListProps {
    blocks: Block[];
    selectedBlock: Block | null;
    onSelectBlock: (block: Block) => void;
    onUpdateBlock: (blockId: string, updates: Partial<Block>) => void;
    onDeleteBlock: (blockId: string) => void;
}

interface SortableBlockItemProps {
    block: Block;
    isSelected: boolean;
    onSelect: () => void;
    onToggleVisibility: () => void;
    onDelete: () => void;
}

const blockIcons = {
    profile: User,
    waitlist: Users,
    projects: FolderOpen,
    resume: FileText,
    reviews: Star,
    discord: MessageCircle,
    donation: Heart,
    ama: HelpCircle,
    'claim-link': Link,
};

const blockLabels = {
    profile: 'Profile',
    waitlist: 'Waitlist',
    projects: 'Projects',
    resume: 'Resume',
    reviews: 'Reviews',
    discord: 'Discord',
    donation: 'Donation',
    ama: 'AMA',
    'claim-link': 'Claim Link',
};

function SortableBlockItem({ block, isSelected, onSelect, onToggleVisibility, onDelete }: SortableBlockItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: block.$id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const Icon = blockIcons[block.type] || User;

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`
        flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all
        ${isSelected
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-primary-200 dark:border-dark-background-tertiary hover:border-primary-400'
                }
        ${isDragging ? 'opacity-50' : ''}
      `}
            onClick={onSelect}
        >
            <div
                className="cursor-grab active:cursor-grabbing"
                {...attributes}
                {...listeners}
            >
                <GripVertical className="h-4 w-4 text-text-muted dark:text-dark-text-muted" />
            </div>

            <div className="flex items-center space-x-2 flex-1">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${block.isVisible
                        ? 'bg-primary-600 text-white'
                        : 'bg-background-secondary dark:bg-dark-background-secondary text-text-muted dark:text-dark-text-muted'
                    }`}>
                    <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                            {blockLabels[block.type]}
                        </span>
                        {!block.isVisible && (
                            <Badge variant="secondary" className="text-xs">
                                Hidden
                            </Badge>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleVisibility();
                    }}
                    className="h-8 w-8 p-0"
                >
                    {block.isVisible ? (
                        <Eye className="h-4 w-4" />
                    ) : (
                        <EyeOff className="h-4 w-4" />
                    )}
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default function BlockList({
    blocks,
    selectedBlock,
    onSelectBlock,
    onUpdateBlock,
    onDeleteBlock,
}: BlockListProps) {
    if (blocks.length === 0) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-background-secondary dark:bg-dark-background-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="h-8 w-8 text-text-muted dark:text-dark-text-muted" />
                </div>
                <p className="text-text-secondary dark:text-dark-text-secondary mb-2">
                    No blocks yet
                </p>
                <p className="text-sm text-text-muted dark:text-dark-text-muted">
                    Add your first block to get started
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {blocks.map((block) => (
                <SortableBlockItem
                    key={block.$id}
                    block={block}
                    isSelected={selectedBlock?.$id === block.$id}
                    onSelect={() => onSelectBlock(block)}
                    onToggleVisibility={() => onUpdateBlock(block.$id, { isVisible: !block.isVisible })}
                    onDelete={() => onDeleteBlock(block.$id)}
                />
            ))}
        </div>
    );
}
