"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Switch } from "@/components/ui/shadcn/switch";
import { Progress } from "@/components/ui/shadcn/progress";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { Separator } from "@/components/ui/shadcn/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/shadcn/accordion";
import { Toggle } from "@/components/ui/shadcn/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/shadcn/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/shadcn/select";
import { Textarea } from "@/components/ui/shadcn/textarea";
import { Calendar } from "@/components/ui/shadcn/calendar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcn/hover-card";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/shadcn/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/shadcn/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/shadcn/dropdown-menu";

// Aceternity UI Components
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { FlipWords } from "@/components/ui/aceternity/flip-words";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { Carousel, Card as CarouselCard } from "@/components/ui/aceternity/apple-cards-carousel";
import { CardStack } from "@/components/ui/aceternity/card-stack";
import { FileUpload } from "@/components/ui/aceternity/file-upload";
import { LinkPreview } from "@/components/ui/aceternity/link-preview";
import { StickyBanner } from "@/components/ui/aceternity/sticky-banner";

// MagicUI Components
import { Marquee } from "@/components/ui/magicui/marquee";
import Iphone15Pro from "@/components/ui/magicui/iphone-15-pro";
import { Safari } from "@/components/ui/magicui/safari";
import Android from "@/components/ui/magicui/android";

export default function TestComponentsPage() {
    const words = ["modern", "beautiful", "interactive", "responsive"];

    const testimonials = [
        {
            quote: "This is an amazing component library!",
            name: "John Doe",
            title: "Frontend Developer",
        },
        {
            quote: "The design system is very well thought out.",
            name: "Jane Smith",
            title: "UI/UX Designer",
        },
        {
            quote: "Easy to use and highly customizable.",
            name: "Mike Johnson",
            title: "Full Stack Developer",
        },
    ];

    const cardStackItems = [
        {
            id: 0,
            name: "Manu Arora",
            designation: "Senior Software Engineer",
            content: (
                <p>
                    These cards are amazing, I want to use them in my project. Framer motion is a godsend ngl tbh fam 🙏
                </p>
            ),
        },
        {
            id: 1,
            name: "Elon Musk",
            designation: "Senior Shitposter",
            content: (
                <p>
                    I dont like this Twitter thing, deleting it right away because yolo. Instead, I would like to call it X.com so that it can easily be confused with adult sites.
                </p>
            ),
        },
        {
            id: 2,
            name: "Tyler Durden",
            designation: "Manager Project Mayhem",
            content: (
                <p>
                    The first rule of Fight Club is that you do not talk about fight club. The second rule of Fight club is that you DO NOT TALK about fight club.
                </p>
            ),
        },
    ];

    const carouselItems = [
        <CarouselCard key="card1" card={{
            src: "/next.svg",
            title: "Forest Adventure",
            category: "Adventure",
            content: <p>Explore the mystical forest and discover hidden treasures.</p>
        }} index={0} />,
        <CarouselCard key="card2" card={{
            src: "/vercel.svg",
            title: "Ocean Depths",
            category: "Exploration",
            content: <p>Dive deep into the ocean and uncover ancient secrets.</p>
        }} index={1} />,
        <CarouselCard key="card3" card={{
            src: "/globe.svg",
            title: "Mountain Peak",
            category: "Challenge",
            content: <p>Climb the highest peaks and reach for the stars.</p>
        }} index={2} />,
    ];

    const handleFileUpload = (files: File[]) => {
        console.log(files);
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Component Showcase</h1>
                    <p className="text-xl text-muted-foreground">
                        A collection of beautiful and interactive components
                    </p>
                </div>

                {/* Aceternity UI Section */}
                <section className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-2xl font-semibold">Aceternity UI</h2>
                        <Badge variant="secondary">Premium Components</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 3D Card */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">3D Card</h3>
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        3D Card Effect
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        Hover over this card to see the 3D effect in action.
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Button className="w-full">Learn More</Button>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </div>

                        {/* Flip Words */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Flip Words</h3>
                            <Card className="p-6">
                                <div className="text-lg text-neutral-600 dark:text-neutral-400">
                                    Build
                                    <FlipWords words={words} />
                                    <br />
                                    websites with this library
                                </div>
                            </Card>
                        </div>

                        {/* Bento Grid */}
                        <div className="space-y-2 col-span-full">
                            <h3 className="text-lg font-medium">Bento Grid</h3>
                            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                                {[
                                    {
                                        title: "Component Library",
                                        description: "A collection of beautiful components",
                                        className: "md:col-span-2",
                                    },
                                    {
                                        title: "Responsive Design",
                                        description: "Works on all screen sizes",
                                        className: "md:col-span-1",
                                    },
                                    {
                                        title: "Dark Mode",
                                        description: "Full dark mode support",
                                        className: "md:col-span-1",
                                    },
                                    {
                                        title: "Customizable",
                                        description: "Easy to customize and extend",
                                        className: "md:col-span-2",
                                    },
                                ].map((item, i) => (
                                    <BentoGridItem
                                        key={i}
                                        title={item.title}
                                        description={item.description}
                                        className={item.className}
                                    />
                                ))}
                            </BentoGrid>
                        </div>
                    </div>

                    {/* Infinite Moving Cards */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Infinite Moving Cards</h3>
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>

                    {/* Card Stack */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Card Stack</h3>
                        <div className="flex justify-center">
                            <CardStack items={cardStackItems} />
                        </div>
                    </div>

                    {/* Apple Cards Carousel */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Apple Cards Carousel</h3>
                        <Carousel items={carouselItems} />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">File Upload</h3>
                        <div className="max-w-md mx-auto">
                            <FileUpload onChange={handleFileUpload} />
                        </div>
                    </div>

                    {/* Link Preview */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Link Preview</h3>
                        <Card className="p-6">
                            <div className="text-neutral-500 dark:text-neutral-400">
                                Hover over this{" "}
                                <LinkPreview url="https://tailwindcss.com" className="font-bold">
                                    Tailwind CSS
                                </LinkPreview>{" "}
                                link to see the preview.
                            </div>
                        </Card>
                    </div>

                    {/* Sticky Banner */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Sticky Banner</h3>
                        <StickyBanner>
                            <div className="text-center">
                                <p className="text-white">🎉 New components available! Check them out now.</p>
                            </div>
                        </StickyBanner>
                    </div>
                </section>

                {/* MagicUI Section */}
                <section className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-2xl font-semibold">MagicUI</h2>
                        <Badge variant="outline">Special Effects</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Marquee */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Marquee</h3>
                            <Marquee className="[--duration:20s]">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="flex items-center space-x-2 mx-4">
                                        <Badge variant="secondary">Feature {i + 1}</Badge>
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        {/* iPhone 15 Pro */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">iPhone 15 Pro</h3>
                            <div className="flex justify-center">
                                <Iphone15Pro
                                    width={200}
                                    height={400}
                                    src="/next.svg"
                                />
                            </div>
                        </div>

                        {/* Safari Browser */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Safari Browser</h3>
                            <div className="flex justify-center">
                                <Safari
                                    width={300}
                                    height={200}
                                    url="https://example.com"
                                    imageSrc="/globe.svg"
                                />
                            </div>
                        </div>

                        {/* Android Phone */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Android Device</h3>
                            <div className="flex justify-center">
                                <Android
                                    width={200}
                                    height={400}
                                    src="/vercel.svg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ShadCN UI Section */}
                <section className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-2xl font-semibold">ShadCN UI</h2>
                        <Badge>Core Components</Badge>
                    </div>

                    <Tabs defaultValue="buttons" className="w-full">
                        <TabsList className="grid w-full grid-cols-6">
                            <TabsTrigger value="buttons">Buttons</TabsTrigger>
                            <TabsTrigger value="inputs">Inputs</TabsTrigger>
                            <TabsTrigger value="feedback">Feedback</TabsTrigger>
                            <TabsTrigger value="layout">Layout</TabsTrigger>
                            <TabsTrigger value="data">Data</TabsTrigger>
                            <TabsTrigger value="overlay">Overlay</TabsTrigger>
                        </TabsList>

                        <TabsContent value="buttons" className="space-y-4">
                            <h3 className="text-lg font-medium">Buttons & Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Button Variants</h4>
                                    <div className="space-y-2">
                                        <Button>Default</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="outline">Outline</Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button variant="destructive">Destructive</Button>
                                    </div>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Button Sizes</h4>
                                    <div className="space-y-2">
                                        <Button size="sm">Small</Button>
                                        <Button size="default">Default</Button>
                                        <Button size="lg">Large</Button>
                                    </div>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Toggle Components</h4>
                                    <div className="space-y-4">
                                        <Toggle>Toggle</Toggle>
                                        <ToggleGroup type="single">
                                            <ToggleGroupItem value="a">A</ToggleGroupItem>
                                            <ToggleGroupItem value="b">B</ToggleGroupItem>
                                            <ToggleGroupItem value="c">C</ToggleGroupItem>
                                        </ToggleGroup>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="inputs" className="space-y-4">
                            <h3 className="text-lg font-medium">Form Inputs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Basic Inputs</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" />
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Enter your message" />
                                        </div>
                                        <div>
                                            <Label htmlFor="country">Country</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="us">United States</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                    <SelectItem value="ca">Canada</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <Label htmlFor="terms">Accept terms and conditions</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="notifications" />
                                            <Label htmlFor="notifications">Enable notifications</Label>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Progress & Loading</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <Label>Progress Bar</Label>
                                            <Progress value={33} className="mt-2" />
                                        </div>
                                        <div>
                                            <Label>Skeleton Loading</Label>
                                            <div className="space-y-2 mt-2">
                                                <Skeleton className="h-4 w-full" />
                                                <Skeleton className="h-4 w-3/4" />
                                                <Skeleton className="h-4 w-1/2" />
                                            </div>
                                        </div>
                                        <div>
                                            <Label>Calendar</Label>
                                            <Calendar className="mt-2" />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="feedback" className="space-y-4">
                            <h3 className="text-lg font-medium">Feedback Components</h3>
                            <div className="space-y-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Alerts</h4>
                                    <div className="space-y-4">
                                        <Alert>
                                            <AlertDescription>
                                                This is a default alert message.
                                            </AlertDescription>
                                        </Alert>
                                        <Alert variant="destructive">
                                            <AlertDescription>
                                                This is a destructive alert message.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Badges</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Default</Badge>
                                        <Badge variant="secondary">Secondary</Badge>
                                        <Badge variant="outline">Outline</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="layout" className="space-y-4">
                            <h3 className="text-lg font-medium">Layout Components</h3>
                            <div className="space-y-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Accordion</h4>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It adheres to the WAI-ARIA design pattern.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It comes with default styles that matches the other components&apos; aesthetic.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Separator & Scroll Area</h4>
                                    <div className="space-y-4">
                                        <div>Section 1</div>
                                        <Separator />
                                        <div>Section 2</div>
                                        <Separator />
                                        <ScrollArea className="h-32 w-full border rounded p-4">
                                            <div className="space-y-2">
                                                {Array.from({ length: 20 }).map((_, i) => (
                                                    <div key={i} className="text-sm">
                                                        Scrollable item {i + 1}
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="data" className="space-y-4">
                            <h3 className="text-lg font-medium">Data Display</h3>
                            <div className="space-y-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Table</h4>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">INV001</TableCell>
                                                <TableCell>Paid</TableCell>
                                                <TableCell>Credit Card</TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">INV002</TableCell>
                                                <TableCell>Pending</TableCell>
                                                <TableCell>PayPal</TableCell>
                                                <TableCell className="text-right">$150.00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="overlay" className="space-y-4">
                            <h3 className="text-lg font-medium">Overlay Components</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Dialog</h4>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button>Open Dialog</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </Card>

                                <Card className="p-6">
                                    <h4 className="font-medium mb-4">Dropdown Menu & Hover Card</h4>
                                    <div className="space-y-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline">Open Menu</Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                                <DropdownMenuItem>Logout</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                        <HoverCard>
                                            <HoverCardTrigger asChild>
                                                <Button variant="link">@nextjs</Button>
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <div className="flex space-x-4">
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-semibold">@nextjs</h4>
                                                        <p className="text-sm">
                                                            The React Framework – created and maintained by @vercel.
                                                        </p>
                                                    </div>
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        </div>
    );
}
