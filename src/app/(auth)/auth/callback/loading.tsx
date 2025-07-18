export default function AuthCallbackLoading() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-6 w-64 bg-muted animate-pulse rounded mx-auto mb-2"></div>
            <div className="flex flex-col items-center space-y-4">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-devbranch-primary border-t-transparent"></div>
                <div className="h-4 w-72 bg-muted animate-pulse rounded"></div>
            </div>
        </div>
    );
}