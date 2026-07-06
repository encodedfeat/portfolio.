import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { LayoutWrapper } from "@/components/LayoutWrapper";
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${syneMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pt-16 w-full">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="w-full overflow-x-clip relative flex flex-col min-h-[calc(100vh-64px)]">
            <InteractiveGrid />
            <SplashScreen>
              <Header />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
              <Footer />
            </SplashScreen>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
