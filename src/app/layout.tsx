import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const webUrl = "https://swarupa-damodara.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(webUrl),
  title: {
    default: "Damodara — Software Developer",
    template: "%s • Damodara",
  },
  applicationName: "Damodara",
  description:
    "Personal portfolio of I Komang Swarupa Damodara, showcasing projects, open-source work, and a passion for turning ideas into software.",
  keywords: [
    "Damodara",
    "Portfolio",
    "Software Developer",
    "TypeScript",
    "Next.js",
    "React",
    "Open Source",
    "Indonesia",
    "Neo Brutalism",
  ],
  authors: [
    {
      name: "I Komang Swarupa Damodara",
      url: webUrl,
    },
  ],
  creator: "I Komang Swarupa Damodara",
  publisher: "I Komang Swarupa Damodara",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: webUrl,
    title: "Damodara — Software Developer",
    description:
      "Building bold interfaces, reliable software, and open-source projects.",

    siteName: "Damodara",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Damodara Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damodara — Software Developer",
    description:
      "Turning ideas into software through web, desktop, mobile, and IoT projects",
    images: ["/og.png"],
    creator: "@damodara_2008",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
