'use client';

import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Loading } from './loading';
import { toast } from './toast';

export function ComponentShowcase() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (error) setError('');
    };

    const handleSubmit = () => {
        if (!email) {
            setError('Please enter your email');
            toast.error('Please enter your email');
            return;
        }

        if (!email.includes('@')) {
            setError('Please enter a valid email');
            toast.error('Please enter a valid email');
            return;
        }

        toast.success('Form submitted successfully!');
        setEmail('');
    };

    const showToast = (type: 'default' | 'success' | 'error' | 'warning' | 'info') => {
        switch (type) {
            case 'default':
                toast.default('This is a default toast');
                break;
            case 'success':
                toast.success('This is a success toast');
                break;
            case 'error':
                toast.error('This is an error toast');
                break;
            case 'warning':
                toast.warning('This is a warning toast');
                break;
            case 'info':
                toast.info('This is an info toast');
                break;
        }
    };

    return (
        <div className="space-y-8 p-6">
            <h1 className="text-3xl font-bold">DevBran.ch UI Components</h1>

            {/* Button Showcase */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Buttons</h2>
                <div className="flex flex-wrap gap-4">
                    <Button>Default Button</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="green">Green</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                        <span className="sr-only">Icon button</span>
                        +
                    </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                </div>
            </section>

            {/* Input Showcase */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Inputs</h2>
                <div className="grid gap-6 max-w-md">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleInputChange}
                        error={error}
                    />

                    <Input
                        label="Username"
                        placeholder="Enter your username"
                        description="Your username must be unique"
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        disabled
                        description="This field is disabled"
                    />

                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </section>

            {/* Card Showcase */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cards</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default Card</CardTitle>
                            <CardDescription>This is a default card component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the card.</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Action</Button>
                        </CardFooter>
                    </Card>

                    <Card variant="primary">
                        <CardHeader>
                            <CardTitle>Primary Card</CardTitle>
                            <CardDescription>This is a primary card component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the card.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary">Action</Button>
                        </CardFooter>
                    </Card>

                    <Card variant="accent">
                        <CardHeader>
                            <CardTitle>Accent Card</CardTitle>
                            <CardDescription>This is an accent card component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the card.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="accent">Action</Button>
                        </CardFooter>
                    </Card>

                    <Card variant="secondary">
                        <CardHeader>
                            <CardTitle>Secondary Card</CardTitle>
                            <CardDescription>This is a secondary card component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the card.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="green">Action</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* Loading Showcase */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Loading Indicators</h2>
                <div className="flex flex-wrap gap-8">
                    <Loading size="sm" />
                    <Loading label="Loading..." />
                    <Loading size="lg" variant="accent" />
                    <Loading size="xl" variant="green" label="Processing..." />
                </div>
            </section>

            {/* Toast Showcase */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Toast Notifications</h2>
                <div className="flex flex-wrap gap-4">
                    <Button onClick={() => showToast('default')}>Default Toast</Button>
                    <Button variant="secondary" onClick={() => showToast('info')}>Info Toast</Button>
                    <Button variant="accent" onClick={() => showToast('success')}>Success Toast</Button>
                    <Button variant="green" onClick={() => showToast('warning')}>Warning Toast</Button>
                    <Button variant="destructive" onClick={() => showToast('error')}>Error Toast</Button>
                </div>
            </section>
        </div>
    );
}