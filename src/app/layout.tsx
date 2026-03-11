import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "U1Dynamics Manufacturing LLC | Petroleum and Water-Based Product Blending",
    template: "%s | U1Dynamics Manufacturing LLC",
  },
  description:
    "U1Dynamics Manufacturing LLC delivers precision-engineered petroleum and water-based product blending, contract filling, and private label manufacturing in Pasadena, Texas. High-performance solutions for global customers.",
  keywords: [
    "petroleum blending",
    "water-based products",
    "private label manufacturing",
    "contract filling",
    "lubricant blending",
    "motor oil manufacturing",
    "Pasadena Texas",
    "Houston manufacturing",
    "engine oils",
    "transmission fluids",
    "coolants",
    "DEF",
    "diesel exhaust fluid",
    "antifreeze",
    "manufacturing capabilities",
    "product packaging",
  ],
  openGraph: {
    title: "U1Dynamics Manufacturing LLC | Precision-Engineered. Performance-Delivered.",
    description:
      "High-performance petroleum and water-based product blending, contract filling, and private label manufacturing in Pasadena, Texas.",
    url: "https://u1dynamics.com",
    siteName: "U1Dynamics Manufacturing LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo-color.png",
        width: 1200,
        height: 630,
        alt: "U1Dynamics Manufacturing LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "U1Dynamics Manufacturing LLC",
    description:
      "High-performance petroleum and water-based product blending, contract filling, and private label manufacturing.",
    images: ["/images/logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ManufacturingBusiness",
              name: "U1Dynamics Manufacturing LLC",
              description:
                "Precision-engineered petroleum and water-based product blending, contract filling, and private label manufacturing.",
              url: "https://u1dynamics.com",
              telephone: "+18886878521",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://u1dynamics.com/contact",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "4468 Genoa Red Bluff Road",
                addressLocality: "Pasadena",
                addressRegion: "TX",
                postalCode: "77505",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.6633,
                longitude: -95.1513,
              },
              image: "/images/logo-color.png",
              sameAs: [],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
