import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import { RESUME_DATA } from '@/data/resume-data';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.specialisation}`,
  description: RESUME_DATA.summary,
  openGraph: {
    type: 'website',
    url: 'https://cv.jatinkumar.dev',
    title: `${RESUME_DATA.name} - ${RESUME_DATA.specialisation}`,
    siteName: RESUME_DATA.name,
    description: RESUME_DATA.summary,
    images: [
      {
        url: 'https://cv.jatinkumar.dev/cover.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
