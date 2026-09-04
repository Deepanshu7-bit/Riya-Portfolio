import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Riya Mahajan — Creative Designer & Visual Storyteller",
  description:
    "Portfolio of Riya Mahajan, multidisciplinary creative designer specializing in high-impact graphic design, social media campaigns, brand visual systems, and motion graphics.",
  keywords: [
    "Riya Mahajan",
    "Creative Designer",
    "Graphic Designer Mohali",
    "Brand Identity Designer",
    "Social Media Designer",
    "EdTech Campaign Design",
    "Motion Designer",
    "Visual Storyteller",
  ],
  authors: [{ name: "Riya Mahajan" }],
  creator: "Riya Mahajan",
  metadataBase: new URL("https://riya-portfolio-flame.vercel.app"),
  openGraph: {
    title: "Riya Mahajan — Creative Designer & Visual Storyteller",
    description:
      "Turning ideas into memorable, scroll-stopping visual experiences across graphic design, campaigns, branding, and motion.",
    url: "https://riya-portfolio-flame.vercel.app",
    siteName: "Riya Mahajan Portfolio",
    images: [
      {
        url: "/riya-work/landing-slide.png",
        width: 1200,
        height: 630,
        alt: "Riya Mahajan Creative Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Mahajan — Creative Designer & Visual Storyteller",
    description:
      "Turning ideas into memorable visual experiences across graphic design, campaigns, branding, and motion.",
    images: ["/riya-work/landing-slide.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/riya-work/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans bg-canvas text-ink antialiased selection:bg-brand-coral selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
