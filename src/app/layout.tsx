import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { PostHogProvider } from "@/lib/posthog-provider";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { initSentry } from "@/lib/sentry";

// Initialize Sentry
initSentry();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBran.ch - Developer Personal SaaS Platform",
  description: "Create your professional developer profile with custom blocks, analytics, and more. The ultimate Linktree alternative for developers.",
  keywords: ["developer", "profile", "linktree", "personal", "saas", "portfolio"],
  authors: [{ name: "DevBran.ch Team" }],
  creator: "DevBran.ch",
  publisher: "DevBran.ch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devbran.ch",
    title: "DevBran.ch - Developer Personal SaaS Platform",
    description: "Create your professional developer profile with custom blocks, analytics, and more.",
    siteName: "DevBran.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBran.ch - Developer Personal SaaS Platform",
    description: "Create your professional developer profile with custom blocks, analytics, and more.",
    creator: "@devbranch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider
            defaultTheme="system"
          >
            <AuthProvider>
              <NotificationProvider>
                {children}
                <Toaster />
              </NotificationProvider>
            </AuthProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
