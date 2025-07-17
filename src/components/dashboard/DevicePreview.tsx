'use client';

import { Block, Profile } from '@/types';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { ScrollArea } from '@/components/ui/shadcn/scroll-area';
import ProfileBlock from '@/components/blocks/ProfileBlock';
import WaitlistBlock from '@/components/blocks/WaitlistBlock';
import ProjectsBlock from '@/components/blocks/ProjectsBlock';

interface DevicePreviewProps {
  device: 'mobile' | 'tablet' | 'desktop';
  blocks: Block[];
  profile: Profile | null;
}

const deviceClasses = {
  mobile: 'w-80 h-[680px]',
  tablet: 'w-96 h-[640px]',
  desktop: 'w-full h-[600px]',
};

const deviceFrames = {
  mobile: 'rounded-3xl border-8 border-gray-800 bg-gray-800',
  tablet: 'rounded-2xl border-6 border-gray-700 bg-gray-700',
  desktop: 'rounded-lg border-2 border-gray-300 bg-gray-300',
};

export default function DevicePreview({ device, blocks, profile }: DevicePreviewProps) {
  const visibleBlocks = blocks.filter(block => block.isVisible).sort((a, b) => a.order - b.order);

  const renderBlock = (block: Block) => {
    if (!profile) return null;

    switch (block.type) {
      case 'profile':
        return (
          <ProfileBlock
            key={block.$id}
            profile={profile}
            config={block.config as any}
            isPreview={true}
          />
        );
      case 'waitlist':
        return (
          <WaitlistBlock
            key={block.$id}
            config={block.config as any}
            isPreview={true}
          />
        );
      case 'projects':
        return (
          <ProjectsBlock
            key={block.$id}
            config={block.config as any}
            projects={[]} // TODO: Pass actual projects
            isPreview={true}
          />
        );
      default:
        return (
          <Card key={block.$id} className="w-full">
            <CardContent className="p-6">
              <div className="text-center py-8 text-text-muted dark:text-dark-text-muted">
                <p className="text-lg font-medium mb-2">{block.title}</p>
                <p className="text-sm">Coming soon...</p>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-full p-4">
      <div className={`${deviceFrames[device]} ${deviceClasses[device]}`}>
        <div className="w-full h-full bg-background rounded-lg overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              {visibleBlocks.length === 0 ? (
                <div className="text-center py-20 text-text-muted dark:text-dark-text-muted">
                  <p className="text-lg font-medium mb-2">No blocks yet</p>
                  <p className="text-sm">Add some blocks to get started!</p>
                </div>
              ) : (
                visibleBlocks.map(renderBlock)
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
