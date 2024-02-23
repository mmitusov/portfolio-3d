import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Maksym | Portfolio',
  description: 'Maksym Mitusov | Portfolio',
  icons: {
    icon: '/media/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
