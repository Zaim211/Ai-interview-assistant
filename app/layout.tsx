import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Importing the Mona Sans font from Google Fonts
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "AI Interview",
  description: "AI Interview is a platform that helps you prepare for technical interviews by providing AI-generated questions and answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
