"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { CardStack } from "@/components/ui/card-stack"
import { Toaster } from "@/components/ui/sonner"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Android from "@/components/ui/android"
import Iphone15Pro from "@/components/ui/iphone-15-pro"
import { Safari } from "@/components/ui/safari"
import { Sidebar, SidebarBody, SidebarLink, SidebarProvider } from "@/components/ui/sidebar"
import { StickyBanner } from "@/components/ui/sticky-banner"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    AlertCircle,
    CheckCircle,
    Info,
    X,
    Plus,
    Minus,
    Settings,
    User,
    Mail,
    Phone,
    Bold,
    Italic,
    Underline,
    ChevronDown,
    Home,
    Search,
    MoreHorizontal,
    Calendar as CalendarIcon,
    CreditCard,
    LogOut,
    MessageSquare,
    PlusCircle,
    UserPlus,
    Users,
    Star,
    Heart,
    Share,
    Download,
    Upload,
    Copy
} from "lucide-react"

export default function ShowComponentsPage() {
    const [sliderValue, setSliderValue] = React.useState([50])
    const [progressValue, setProgressValue] = React.useState(65)
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    React.useEffect(() => {
        const timer = setTimeout(() => setProgressValue(75), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 text-center">
                    <div className="flex justify-between items-center mb-6">
                        <div></div>
                        <ThemeToggle />
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Component Showcase</h1>
                    <p className="text-muted-foreground">
                        A complete overview of all UI components with the new theme palette
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#565264" }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#E8C7DE" }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#E7EBC5" }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#56876D" }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#0C0C0C" }}></div>
                    </div>
                </div>

                <div className="grid gap-8">
                    {/* Buttons Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Buttons</CardTitle>
                            <CardDescription>Various button styles and states</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <Button>Default Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                                <Button variant="destructive">Destructive</Button>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon"><Plus className="h-4 w-4" /></Button>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button disabled>Disabled</Button>
                                <Button variant="outline" disabled>Disabled Outline</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Badges Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Badges</CardTitle>
                            <CardDescription>Badge components with different variants</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Form Inputs Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Form Inputs</CardTitle>
                            <CardDescription>Input fields, textareas, and form controls</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="textarea">Message</Label>
                                <Textarea id="textarea" placeholder="Type your message here..." />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Accept terms and conditions</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch id="notifications" />
                                    <Label htmlFor="notifications">Enable notifications</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Select and Radio Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Selection Controls</CardTitle>
                            <CardDescription>Select dropdowns and radio groups</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Framework</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a framework" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="vue">Vue</SelectItem>
                                        <SelectItem value="svelte">Svelte</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <Label>Preferred contact method</Label>
                                <RadioGroup defaultValue="email">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="email" id="email-radio" />
                                        <Label htmlFor="email-radio">Email</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="phone" id="phone-radio" />
                                        <Label htmlFor="phone-radio">Phone</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="sms" id="sms-radio" />
                                        <Label htmlFor="sms-radio">SMS</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sliders and Progress Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Progress Indicators</CardTitle>
                            <CardDescription>Sliders, progress bars, and loading states</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Volume: {sliderValue[0]}%</Label>
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Progress: {progressValue}%</Label>
                                <Progress value={progressValue} className="w-full" />
                            </div>
                            <div className="space-y-2">
                                <Label>Loading Skeleton</Label>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-4/5" />
                                    <Skeleton className="h-4 w-3/5" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Alerts Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Alerts</CardTitle>
                            <CardDescription>Different alert types and states</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription>
                                    This is an informational alert with the new theme colors.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    Something went wrong. Please try again later.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    {/* Avatar and Toggle Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Avatars and Toggles</CardTitle>
                            <CardDescription>User avatars and toggle controls</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Toggle>
                                        <Bold className="h-4 w-4" />
                                    </Toggle>
                                    <Toggle>
                                        <Italic className="h-4 w-4" />
                                    </Toggle>
                                    <Toggle>
                                        <Underline className="h-4 w-4" />
                                    </Toggle>
                                </div>
                                <ToggleGroup type="multiple">
                                    <ToggleGroupItem value="bold">
                                        <Bold className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic">
                                        <Italic className="h-4 w-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="underline">
                                        <Underline className="h-4 w-4" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tabs Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tabs</CardTitle>
                            <CardDescription>Tabbed navigation interface</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="account" className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="account">Account</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account" className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="@johndoe" />
                                    </div>
                                </TabsContent>
                                <TabsContent value="password" className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="current">Current password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="new">New password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                </TabsContent>
                                <TabsContent value="notifications" className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Switch id="email-notifications" />
                                        <Label htmlFor="email-notifications">Email notifications</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="push-notifications" />
                                        <Label htmlFor="push-notifications">Push notifications</Label>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* Accordion Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Accordion</CardTitle>
                            <CardDescription>Collapsible content sections</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is the new color palette?</AccordionTrigger>
                                    <AccordionContent>
                                        The new palette features purple-gray (#565264), soft pink (#E8C7DE),
                                        sage green (#E7EBC5), forest green (#56876D), and deep black (#0C0C0C)
                                        for a sophisticated and harmonious design.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How are hover states handled?</AccordionTrigger>
                                    <AccordionContent>
                                        Hover states use darker variations of the main colors with smooth
                                        transitions to provide clear visual feedback for interactive elements.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes! The theme includes a comprehensive dark mode with inverted color
                                        relationships that maintain the same visual hierarchy and accessibility.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* Calendar Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Calendar</CardTitle>
                            <CardDescription>Date picker component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </CardContent>
                    </Card>

                    {/* Dialog Components Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Dialogs and Modals</CardTitle>
                            <CardDescription>Modal dialogs and alert dialogs</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline">Open Dialog</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This dialog demonstrates the new color theme.
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive">Delete Account</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your account.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline">Open Sheet</Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Edit profile</SheetTitle>
                                            <SheetDescription>
                                                Make changes to your profile here.
                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>

                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline">Open Drawer</Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Popover and Hover Card Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Popovers and Hover Cards</CardTitle>
                            <CardDescription>Floating content and hover interactions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline">Open Popover</Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">Popover Content</h4>
                                            <p className="text-sm text-muted-foreground">
                                                This is a popover with the new theme.
                                            </p>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Button variant="link">Hover for info</Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-semibold">@nextjs</h4>
                                            <p className="text-sm">
                                                The React Framework – created and maintained by @vercel.
                                            </p>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline">Hover for tooltip</Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>This is a tooltip</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Menu Components Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Menus and Navigation</CardTitle>
                            <CardDescription>Various menu types and navigation components</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-wrap gap-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <ContextMenu>
                                    <ContextMenuTrigger asChild>
                                        <Button variant="outline">Right-click me</Button>
                                    </ContextMenuTrigger>
                                    <ContextMenuContent>
                                        <ContextMenuItem>Back</ContextMenuItem>
                                        <ContextMenuItem>Forward</ContextMenuItem>
                                        <ContextMenuItem>Reload</ContextMenuItem>
                                    </ContextMenuContent>
                                </ContextMenu>
                            </div>

                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>File</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem>New Tab</MenubarItem>
                                        <MenubarItem>New Window</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>Edit</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem>Undo</MenubarItem>
                                        <MenubarItem>Redo</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>

                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink>
                                                        <div className="p-4">
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                shadcn/ui
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully designed components.
                                                            </p>
                                                        </div>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </CardContent>
                    </Card>

                    {/* Command and Search Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Command and Search</CardTitle>
                            <CardDescription>Command palette and search interfaces</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Command className="rounded-lg border">
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                        <CommandItem>
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            <span>Calendar</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Search Contacts</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </CardContent>
                    </Card>

                    {/* Table Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Data Table</CardTitle>
                            <CardDescription>Table component for displaying data</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
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
                                    <TableRow>
                                        <TableCell className="font-medium">INV003</TableCell>
                                        <TableCell>Unpaid</TableCell>
                                        <TableCell>Bank Transfer</TableCell>
                                        <TableCell className="text-right">$350.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Navigation and Pagination Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Navigation and Pagination</CardTitle>
                            <CardDescription>Breadcrumbs and pagination controls</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label className="text-sm font-medium mb-2 block">Breadcrumb Navigation</Label>
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-2 block">Pagination</Label>
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#" isActive>2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href="#" />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Layout Components Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Layout Components</CardTitle>
                            <CardDescription>Layout and container components</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label className="text-sm font-medium mb-2 block">Scroll Area</Label>
                                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                    <div className="space-y-4">
                                        {Array.from({ length: 20 }, (_, i) => (
                                            <div key={i} className="text-sm">
                                                Scroll item {i + 1} - This is a scrollable area with the new theme colors.
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-2 block">Resizable Panels</Label>
                                <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-[200px] items-center justify-center p-6">
                                            <span className="font-semibold">One</span>
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle />
                                    <ResizablePanel defaultSize={50}>
                                        <div className="flex h-[200px] items-center justify-center p-6">
                                            <span className="font-semibold">Two</span>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-2 block">Aspect Ratio</Label>
                                <div className="w-[450px]">
                                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                                        <div className="flex h-full items-center justify-center">
                                            <span className="text-muted-foreground">16:9 Aspect Ratio</span>
                                        </div>
                                    </AspectRatio>
                                </div>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-2 block">Collapsible</Label>
                                <Collapsible>
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" className="flex items-center gap-2">
                                            <ChevronDown className="h-4 w-4" />
                                            Can I use this in my project?
                                        </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="space-y-2">
                                        <div className="rounded-md border px-4 py-3 text-sm">
                                            Yes. Free to use for personal and commercial projects.
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Advanced Input Components Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Advanced Inputs</CardTitle>
                            <CardDescription>Specialized input components</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label className="text-sm font-medium mb-2 block">OTP Input</Label>
                                <InputOTP maxLength={6}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 3D and Special Effects Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>3D and Special Effects</CardTitle>
                            <CardDescription>Components with special visual effects</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label className="text-sm font-medium mb-2 block">3D Card</Label>
                                <CardContainer className="inter-var">
                                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                            3D Card Effect
                                        </CardItem>
                                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                            Hover over this card to see the 3D effect in action
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                            <div className="h-60 w-full bg-gradient-to-br from-violet-300 to-orange-300 rounded-xl dark:from-violet-600 dark:to-orange-600" />
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-2 block">Bento Grid</Label>
                                <BentoGrid className="max-w-4xl mx-auto">
                                    <BentoGridItem
                                        title="The Dawn of Innovation"
                                        description="Explore the birth of groundbreaking ideas and inventions."
                                        header={<div className="h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg" />}
                                        icon={<Star className="h-4 w-4 text-neutral-500" />}
                                    />
                                    <BentoGridItem
                                        title="The Digital Revolution"
                                        description="Dive into the transformative power of technology."
                                        header={<div className="h-24 bg-gradient-to-r from-green-300 to-blue-300 rounded-lg" />}
                                        icon={<Heart className="h-4 w-4 text-neutral-500" />}
                                    />
                                </BentoGrid>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Carousel Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Carousel</CardTitle>
                            <CardDescription>Sliding content carousel component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Carousel className="w-full max-w-xs mx-auto">
                                <CarouselContent>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </CardContent>
                    </Card>

                    {/* Device Mockups Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Device Mockups</CardTitle>
                            <CardDescription>iPhone, Android, and Safari browser mockups</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                <div className="flex flex-col items-center space-y-2">
                                    <Label className="text-sm font-medium">iPhone 15 Pro</Label>
                                    <Iphone15Pro
                                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&h=800"
                                    />
                                </div>

                                <div className="flex flex-col items-center space-y-2">
                                    <Label className="text-sm font-medium">Android Device</Label>
                                    <Android
                                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop"
                                    />
                                </div>

                                <div className="flex flex-col items-center space-y-2">
                                    <Label className="text-sm font-medium">Safari Browser</Label>
                                    <Safari
                                        url="https://example.com"
                                        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card Stack and Moving Cards Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Animated Card Components</CardTitle>
                            <CardDescription>Card stacks and infinite moving cards</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div>
                                <Label className="text-sm font-medium mb-4 block">Card Stack</Label>
                                <div className="flex justify-center">
                                    <CardStack
                                        items={[
                                            {
                                                id: 1,
                                                name: "John Doe",
                                                designation: "Senior Developer",
                                                content: (
                                                    <p className="text-neutral-600 dark:text-neutral-400">
                                                        "This is an amazing component library with beautiful design."
                                                    </p>
                                                ),
                                            },
                                            {
                                                id: 2,
                                                name: "Jane Smith",
                                                designation: "Product Manager",
                                                content: (
                                                    <p className="text-neutral-600 dark:text-neutral-400">
                                                        "The new color palette is absolutely stunning and professional."
                                                    </p>
                                                ),
                                            },
                                            {
                                                id: 3,
                                                name: "Mike Johnson",
                                                designation: "UI Designer",
                                                content: (
                                                    <p className="text-neutral-600 dark:text-neutral-400">
                                                        "These components make building beautiful UIs so much easier."
                                                    </p>
                                                ),
                                            },
                                        ]}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className="text-sm font-medium mb-4 block">Infinite Moving Cards</Label>
                                <InfiniteMovingCards
                                    items={[
                                        {
                                            quote: "It was the best of times, it was the worst of times.",
                                            name: "Charles Dickens",
                                            title: "A Tale of Two Cities",
                                        },
                                        {
                                            quote: "To be, or not to be, that is the question.",
                                            name: "William Shakespeare",
                                            title: "Hamlet",
                                        },
                                        {
                                            quote: "All that we see or seem is but a dream within a dream.",
                                            name: "Edgar Allan Poe",
                                            title: "A Dream Within a Dream",
                                        },
                                    ]}
                                    direction="right"
                                    speed="slow"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sticky Banner Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Sticky Banner</CardTitle>
                            <CardDescription>Sticky banner component (check the top of the page)</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                    The sticky banner component is demonstrated at the top of this page.
                                    It shows and hides based on scroll position.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <StickyBanner className="bg-primary text-primary-foreground">
                    <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                        <div className="flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            <span className="text-sm font-medium">
                                🎉 New theme colors are now live! Check out all the beautiful components below.
                            </span>
                        </div>
                        <Button variant="secondary" size="sm">
                            Learn More
                        </Button>
                    </div>
                </StickyBanner>

                <div className="mt-8 text-center">
                    <p className="text-muted-foreground">
                        This comprehensive showcase demonstrates all UI components styled with the new color palette.
                    </p>
                    <Toaster />
                </div>
            </div>
        </div>
    )
}
