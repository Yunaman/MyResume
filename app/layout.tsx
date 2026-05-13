import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PersonSchema, WebSiteSchema } from "@/components/JSONLd";

export const metadata: Metadata = {
  title: {
    template: "%s | Yunus",
    default: "Yunus | Interactive Developer & Digital Creator",
  },
  description:
    "Ultra-premium interactive web experiences from Addis Ababa by Yunus, spanning full-stack engineering, cinematic design, motion systems, and digital storytelling.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Digital Creator",
    "Addis Ababa",
    "React Developer",
    "Next.js",
    "Video Editor",
    "Digital Marketing",
    "UI/UX Designer",
    "Freelancer",
    "Portfolio",
  ],
  authors: [{ name: "Yunus" }],
  creator: "Yunus",
  publisher: "Yunus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yunus | Interactive Developer & Digital Creator",
    description:
      "Premium web development and digital creation services from Addis Ababa",
    url: "https://yenus-sadik.vercel.app",
    siteName: "Yenus Sadik Portfolio",
    images: [
      {
        url: "https://yenus-sadik.vercel.app/assets/img/herobg1.jpg",
        width: 1200,
        height: 630,
        alt: "Yunus - Interactive Developer & Digital Creator",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus | Interactive Developer & Digital Creator",
    description:
      "Premium web development and digital creation services from Addis Ababa",
    images: ["https://yenus-sadik.vercel.app/assets/img/herobg1.jpg"],
    creator: "@yenus_sadik",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    rating: "general",
    "geo.placename": "Addis Ababa, Ethiopia",
    "geo.position": "9.03;38.75",
    "geo.region": "ET",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className="bg-canvas font-sans text-foreground antialiased"
      >
        <ThemeProvider>
          <Preloader />
          <Header />
          <main className="relative overflow-hidden">
            <PersonSchema />
            <WebSiteSchema />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
