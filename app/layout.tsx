import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-IBM_Plex",
});

export const metadata: Metadata = {
  title: "Deep Edit",
  description: "A SaaS app that uses deep learning algorithms to edit images, providing advanced features such as object detection and recognition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: "#00AE98" }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <header>
            {children}
          </header>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
