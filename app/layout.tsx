import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yenus Sadik • Full-Stack Developer & Digital Creator",
  description:
    "Premium web development and digital creation services from Addis Ababa. Specializing in full-stack development, design, video editing, and digital marketing.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Digital Creator",
    "Addis Ababa",
    "React Developer",
    "Next.js",
    "Video Editor",
    "Digital Marketing",
  ],
  authors: [{ name: "Yenus Sadik" }],
  openGraph: {
    title: "Yenus Sadik • Full-Stack Developer & Digital Creator",
    description:
      "Premium web development and digital creation services from Addis Ababa",
    type: "website",
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-light dark:bg-dark-bg text-primary dark:text-light transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
