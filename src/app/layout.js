import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Legal Chatbot - Indian Law AI",
  description: "AI-powered chatbot for Indian legal queries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Legal Chatbot - Indian Law AI</title>
        <link rel="icon" href="/logo.webp" type="image/webp" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
