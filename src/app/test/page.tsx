'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loading } from '@/components/ui/loading';
import { toast } from '@/components/ui/toast';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function TestPage() {
    return (
        <div className="container mx-auto p-8 space-y-8">
            <h1 className="text-3xl font-bold">Component Test Page</h1>

            <div className="flex justify-end">
                <ThemeToggle />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Button Test</CardTitle>
                        <CardDescription>Test the button component</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button onClick={() => toast.success('Button clicked!')}>
                            Click Me
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Input Test</CardTitle>
                        <CardDescription>Test the input component</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            label="Test Input"
                            placeholder="Type something..."
                            description="This is a test input field"
                        />
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary">Submit</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Loading Test</CardTitle>
                        <CardDescription>Test the loading component</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center p-8">
                        <Loading label="Loading..." />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Toast Test</CardTitle>
                        <CardDescription>Test the toast notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Button variant="default" onClick={() => toast.default('Default toast')}>
                                Default
                            </Button>
                            <Button variant="secondary" onClick={() => toast.info('Info toast')}>
                                Info
                            </Button>
                            <Button variant="accent" onClick={() => toast.success('Success toast')}>
                                Success
                            </Button>
                            <Button variant="green" onClick={() => toast.warning('Warning toast')}>
                                Warning
                            </Button>
                            <Button variant="destructive" onClick={() => toast.error('Error toast')}>
                                Error
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}