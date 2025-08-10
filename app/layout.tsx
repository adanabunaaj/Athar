import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Athar Initiative - Palestinian Youth Community',
  description: 'A hybrid platform where Palestinian youth can connect, receive support, and engage in meaningful dialogue that drives collective progress.',
  keywords: ['Palestinian youth', 'community', 'support', 'education', 'solidarity'],
  authors: [{ name: 'Athar Initiative' }],
  openGraph: {
    title: 'Athar Initiative - Palestinian Youth Community',
    description: 'Building solidarity through collective growth and shared success.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athar Initiative - Palestinian Youth Community',
    description: 'Building solidarity through collective growth and shared success.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}