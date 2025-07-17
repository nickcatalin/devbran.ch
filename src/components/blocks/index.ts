import { BlockType } from '@/types';
import ProfileBlock from './ProfileBlock';
import WaitlistBlock from './WaitlistBlock';
import ProjectsBlock from './ProjectsBlock';

// Block registry for dynamic rendering
export const blockComponents = {
    profile: ProfileBlock,
    waitlist: WaitlistBlock,
    projects: ProjectsBlock,
    // TODO: Add remaining block types
    resume: null,
    reviews: null,
    discord: null,
    donation: null,
    ama: null,
    'claim-link': null,
};

export const blockTitles: Record<BlockType, string> = {
    profile: 'Profile',
    waitlist: 'Waitlist',
    projects: 'Projects',
    resume: 'Resume',
    reviews: 'Reviews',
    discord: 'Discord',
    donation: 'Donation',
    ama: 'Ask Me Anything',
    'claim-link': 'Claim Link',
};

export const blockDescriptions: Record<BlockType, string> = {
    profile: 'Display your profile information and contact details',
    waitlist: 'Collect email addresses from interested users',
    projects: 'Showcase your projects and work',
    resume: 'Share your resume or CV',
    reviews: 'Display testimonials and reviews',
    discord: 'Link to your Discord server',
    donation: 'Accept donations and support',
    ama: 'Allow visitors to ask you questions',
    'claim-link': 'Offer referral or claim links',
};

export const blockIcons: Record<BlockType, string> = {
    profile: 'User',
    waitlist: 'Users',
    projects: 'FolderOpen',
    resume: 'FileText',
    reviews: 'Star',
    discord: 'MessageCircle',
    donation: 'Heart',
    ama: 'HelpCircle',
    'claim-link': 'Link',
};

export function getBlockComponent(type: BlockType) {
    return blockComponents[type];
}

export function getBlockTitle(type: BlockType) {
    return blockTitles[type];
}

export function getBlockDescription(type: BlockType) {
    return blockDescriptions[type];
}

export function getBlockIcon(type: BlockType) {
    return blockIcons[type];
}
