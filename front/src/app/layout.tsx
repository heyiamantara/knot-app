import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SessionProvider from "@/providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Knot",
  description: "Secure Real-time Communication Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Space+Grotesk:wght@600&family=Inter:wght@400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <SessionProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased overflow-x-hidden text-body-md font-body-md",
            fontSans.variable
          )}
        >
          {children}
          <Toaster richColors duration={5000} />
        </body>
      </SessionProvider>
    </html>
  );
}

