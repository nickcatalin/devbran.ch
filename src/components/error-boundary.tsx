'use client';

import { Component, ReactNode } from 'react';
import { analytics } from '@/lib/posthog';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        analytics.captureException(error, {
            context: 'react_error_boundary',
            componentStack: errorInfo.componentStack,
            errorBoundary: true
        });
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE]">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-bold text-[#565264] mb-4">Something went wrong</h2>
                        <p className="text-[#565264]/80 mb-6">We've logged this issue and will fix it soon.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#56876D] hover:bg-[#56876D]/90 text-white px-6 py-2 rounded-md"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
