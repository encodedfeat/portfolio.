import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syneMono = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne-mono",
});

export const metadata: Metadata = {
  title: "Mohit | Portfolio",
  description: "Personal portfolio of Mohit - Python Developer, Django Developer & Machine Learning Engineer",
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
      className={`${geistSans.variable} ${geistMono.variable} ${syneMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pt-16">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <SplashScreen>
            <Header />
            <main className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-6">
              {children}
            </main>
            <Footer />
          </SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
