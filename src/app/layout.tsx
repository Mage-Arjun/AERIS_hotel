import type { Metadata } from 'next';
import './globals.css';
import { LayoutClient } from '@/components/layout/LayoutClient';

export const metadata: Metadata = {
  title: {
    default: 'AERIS — Where Light Finds You.',
    template: '%s — AERIS',
  },
  description:
    'A coastal sanctuary where light, architecture, and landscape converge. Experience quiet luxury redefined.',
  keywords: [
    'luxury hospitality',
    'architectural hotel',
    'quiet luxury',
    'boutique hotel',
    'design hotel',
    'premium accommodation',
    'aeris',
  ],
  authors: [{ name: 'AERIS' }],
  creator: 'AERIS',
  publisher: 'AERIS',
  metadataBase: new URL('https://aeris.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AERIS',
    title: 'AERIS — Where Light Finds You.',
    description:
      'A coastal sanctuary where light, architecture, and landscape converge. Experience quiet luxury redefined.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AERIS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AERIS — Where Light Finds You.',
    description:
      'A coastal sanctuary where light, architecture, and landscape converge. Experience quiet luxury redefined.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-background text-primary-text font-sans antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}