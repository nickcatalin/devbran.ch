import { Navbar } from '@/components/navbar';
import { ThemeDemo } from '@/components/ui/theme-demo';

export default function ThemeDemoPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto py-10">
                    <h1 className="mb-6 text-3xl font-bold">DevBran.ch Theme System Demo</h1>
                    <ThemeDemo />
                </div>
            </main>
        </div>
    );
}