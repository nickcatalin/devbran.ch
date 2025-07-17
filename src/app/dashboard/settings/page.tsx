import SettingsForm from '@/components/dashboard/SettingsForm';

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-4 p-4 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
                    Settings
                </h2>
            </div>
            <SettingsForm />
        </div>
    );
}
