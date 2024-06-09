import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_JP, Orbitron } from "next/font/google";
import "./globals.css";
import { sharedMetadata } from "@/app/lib/sharedmetadata";
import type { ReactNode } from "react";
import classNames from "classnames";

const notoSansJP = Noto_Sans_JP({
  variable: '--font-family-noto-sans-jp',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

const orbitron = Orbitron({
  variable: '--font-family-orbitron',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'sans-serif'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-family-jetbrains-mono',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'monospace', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "SUGAWA",
  description: "site of sugawa",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode}>) {
  return (
      <html lang="jp">
        <head>
          <meta charSet="utf-8"/>
        </head>
        <body className={
            classNames(
                orbitron.variable,
                notoSansJP.variable,
                jetBrainsMono.variable,
                notoSansJP.className,
            )}>
            {children}
        </body>
      </html>
  );
}
