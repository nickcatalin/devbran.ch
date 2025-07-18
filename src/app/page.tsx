import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { AboutSection } from '@/components/landing/about-section';
import { Footer } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'DevBran.ch - Professional Link Management for Developers',
  description: 'A clean, minimalist platform for developers to showcase their professional presence online.',
  keywords: 'developer, link management, portfolio, professional presence, linktree alternative',
  openGraph: {
    title: 'DevBran.ch - Professional Link Management for Developers',
    description: 'A clean, minimalist platform for developers to showcase their professional presence online.',
    url: 'https://devbran.ch',
    siteName: 'DevBran.ch',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevBran.ch - Professional Link Management for Developers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevBran.ch - Professional Link Management for Developers',
    description: 'A clean, minimalist platform for developers to showcase their professional presence online.',
    images: ['/og-image.png'],
    creator: '@devbranch',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="landing" />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}