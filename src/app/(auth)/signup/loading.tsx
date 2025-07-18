export default function SignupLoading() {
    return (
        <>
            <div className="text-center mb-6">
                <div className="h-6 w-40 bg-muted animate-pulse rounded mx-auto mb-2"></div>
                <div className="h-4 w-56 bg-muted animate-pulse rounded mx-auto"></div>
            </div>
            <div className="w-full max-w-md mx-auto">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
                    <div className="h-10 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded"></div>
                    <div className="h-10 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="h-10 bg-muted animate-pulse rounded"></div>
                        <div className="h-10 bg-muted animate-pulse rounded"></div>
                    </div>
                </div>
            </div>
        </>
    );
}