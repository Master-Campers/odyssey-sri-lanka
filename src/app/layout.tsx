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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "Odyssey Sri Lanka | Custom Sri Lanka Holidays & Tours",
    description: "Experience the best of Sri Lanka with Odyssey Sri Lanka. All-inclusive, tailor-made holidays, expert local guides, and unforgettable adventures.",
    url: "https://odysseysrilanka.com",
    siteName: "Odyssey Sri Lanka",
    images: [
      {
        url: "/favicon.ico",
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
    images: ["/favicon.ico"]
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/" />
        <link rel="canonical" href="https://odysseysrilanka.com/" />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KGPV268T');
        ` }} />
        {/* Structured Data: schema.org TravelAgency */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Odyssey Sri Lanka",
            "url": "https://odysseysrilanka.com",
            "logo": "https://odysseysrilanka.com/favicon.ico",
            "description": "All-inclusive, tailor-made holidays, expert local guides, and unforgettable adventures in Sri Lanka."
          })
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGPV268T"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
