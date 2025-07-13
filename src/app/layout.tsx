import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odyssey Sri Lanka | Custom Sri Lanka Holidays & Tours",
  description: "Experience the best of Sri Lanka with Odyssey Sri Lanka. All-inclusive, tailor-made holidays, expert local guides, and unforgettable adventures.",
  icons: {
    icon: "/Logo/odyssey-logo.jpeg",
    shortcut: "/Logo/odyssey-logo.jpeg",
    apple: "/Logo/odyssey-logo.jpeg"
  },
  openGraph: {
    title: "Odyssey Sri Lanka | Custom Sri Lanka Holidays & Tours",
    description: "Experience the best of Sri Lanka with Odyssey Sri Lanka. All-inclusive, tailor-made holidays, expert local guides, and unforgettable adventures.",
    url: "https://odysseysrilanka.com",
    siteName: "Odyssey Sri Lanka",
    images: [
      {
        url: "/Logo/odyssey-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Odyssey Sri Lanka Logo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Odyssey Sri Lanka | Custom Sri Lanka Holidays & Tours",
    description: "Experience the best of Sri Lanka with Odyssey Sri Lanka. All-inclusive, tailor-made holidays, expert local guides, and unforgettable adventures.",
    images: ["/Logo/odyssey-logo.jpeg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <meta name="keywords" content="Sri Lanka, Holidays, Tours, Custom, Odyssey, Travel, Safari, Beach, Adventure, Luxury, Odyssey Sri Lanka" />
        <meta name="author" content="Odyssey Sri Lanka" />
        <link rel="icon" href="/Logo/odyssey-logo.jpeg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Logo/odyssey-logo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
