import type { Metadata } from "next";
import { Doto, Space_Grotesk, Space_Mono } from "next/font/google";

import "./globals.css";

import { Nav } from "./components/layout/nav";
import { Footer } from "./components/layout/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Oscar Castaneda",
  description:
    "AI Engineer specializing in ML, NLP, and inference-powered digital products. Shipping web and mobile applications with AI at the core.",
  keywords: [
    "AI Engineer",
    "ML",
    "NLP",
    "React",
    "Python",
    "Web",
    "Mobile",
    "México",
  ],
  authors: [{ name: "Oscar Castaneda" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark text-base ${spaceGrotesk.variable} ${spaceMono.variable} ${doto.variable}`}
    >
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
