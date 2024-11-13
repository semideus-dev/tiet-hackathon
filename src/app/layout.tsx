import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import SignInPage from "./(auth)/sign-in/[[...sign-in]]/page";

const appFont = localFont({
  src: "./fonts/AppFont.ttf",
  variable: "--app-font",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Smart Campus",
  description: "TIET Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={appFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
