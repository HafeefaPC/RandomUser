import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Random User Directory',
  description: 'A beautiful and intuitive app to browse random users from around the world',
  keywords: ['users', 'directory', 'random', 'people', 'profiles'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Random User Directory',
    description: 'Discover and connect with people from around the world',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-sans antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}