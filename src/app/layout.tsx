import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TerminalEffects } from "@/components/TerminalEffects";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jonsaxton.com"),
  title: "Jon Saxton – Senior Webflow Developer",
  description: "Working with growth-stage and enterprise organizations to bring great designs to life.",
  icons: {
    icon: "/seo/jonsaxton-favicon.png",
    shortcut: "/seo/jonsaxton-favicon.png",
    apple: "/seo/jonsaxton-webclip.png",
  },
  openGraph: {
    title: "Jon Saxton – Senior Webflow Developer",
    description: "Working with growth-stage and enterprise organizations to bring great designs to life.",
    type: "website",
    images: ["/seo/jonsaxton-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon Saxton – Senior Webflow Developer",
    description: "Working with growth-stage and enterprise organizations to bring great designs to life.",
    images: ["/seo/jonsaxton-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body>
        <TerminalEffects />
        {children}
      </body>
    </html>
  );
}
