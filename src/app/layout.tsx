import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.scss'
import ReduxProvider from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GIT_HUB_PAGES_BASE_PATH : '';

export const metadata: Metadata = {
  title: 'Maksym | Portfolio',
  description: 'Maksym Mitusov | Portfolio',
  icons: {
    icon: `${basePath}/media/my_logo.svg`,
    // icon: `${basePath}/media/my_logo.svg?v=1.0`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
