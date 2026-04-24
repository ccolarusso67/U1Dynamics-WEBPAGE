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
  metadataBase: new URL("https://u1dynamics.com"),
  title: {
    default: "U1Dynamics Manufacturing | Lubricant Blending & Private Label Manufacturing",
    template: "%s | U1Dynamics Manufacturing LLC",
  },
  description:
    "U1Dynamics Manufacturing LLC is a U.S.-based lubricant blending, contract filling, and private label manufacturing facility in Pasadena, Texas. Engine oils, gear oils, DEF, coolants, and industrial fluids.",
  keywords: [
    "lubricant manufacturer",
    "contract lubricant blending",
    "private label lubricants",
    "lubricant blending facility",
    "contract filling services",
    "DEF manufacturer",
    "coolant manufacturer",
    "engine oil manufacturer",
    "gear oil blending",
    "hydraulic oil manufacturer",
    "Pasadena Texas manufacturing",
    "Houston lubricant manufacturer",
    "Ultra1Plus",
    "U1Dynamics",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "U1Dynamics Manufacturing | Lubricant Blending & Private Label Manufacturing",
    description:
      "U.S.-based lubricant blending, contract filling, and private label manufacturing. Engine oils, gear oils, DEF, coolants, and industrial fluids from our 95,000 sq ft facility in Pasadena, Texas.",
    url: "https://u1dynamics.com",
    siteName: "U1Dynamics Manufacturing LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/product-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Ultra1Plus Premium Quality Oils by U1Dynamics Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "U1Dynamics Manufacturing | Lubricant Blending & Private Label Manufacturing",
    description:
      "U.S.-based lubricant blending, contract filling, and private label manufacturing in Pasadena, Texas.",
    images: ["/images/product-lineup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
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
              "@id": "https://u1dynamics.com/#organization",
              name: "U1Dynamics Manufacturing LLC",
              description:
                "U.S.-based lubricant blending, contract filling, and private label manufacturing facility. Specializing in engine oils, gear oils, transmission fluids, hydraulic oils, DEF, coolants, and industrial fluids.",
              url: "https://u1dynamics.com",
              telephone: "+18886878521",
              email: "info@u1dynamics.com",
              logo: {
                "@type": "ImageObject",
                url: "https://u1dynamics.com/images/logo-color.png",
              },
              image: [
                "https://u1dynamics.com/images/facility/aerial-hero.jpg",
                "https://u1dynamics.com/images/product-lineup.jpg",
              ],
              brand: {
                "@type": "Brand",
                name: "Ultra1Plus",
                description: "Premium Quality Oils - Made in USA",
              },
              address: [
                {
                  "@type": "PostalAddress",
                  name: "Manufacturing Facility",
                  streetAddress: "4468 Genoa Red Bluff Road",
                  addressLocality: "Pasadena",
                  addressRegion: "TX",
                  postalCode: "77505",
                  addressCountry: "US",
                },
                {
                  "@type": "PostalAddress",
                  name: "Corporate Offices",
                  streetAddress: "1600 Ponce De Leon Blvd STE 1108",
                  addressLocality: "Coral Gables",
                  addressRegion: "FL",
                  postalCode: "33134",
                  addressCountry: "US",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.6633,
                longitude: -95.1513,
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "AdministrativeArea", name: "International" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Contract Lubricant Manufacturing",
                    description: "Formulation blending, production scale-up, quality control, packaging, filling, and logistics coordination.",
                    url: "https://u1dynamics.com/contract-lubricant-manufacturing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Label Lubricant Manufacturing",
                    description: "Engine oils, gear oils, transmission fluids, hydraulic oils, and specialty lubricants under your brand.",
                    url: "https://u1dynamics.com/private-label-lubricants",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Toll Blending Services",
                    description: "Custom formulation blending for lubricant companies with proprietary formulas.",
                    url: "https://u1dynamics.com/toll-blending-lubricants",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Lubricant Contract Packaging",
                    description: "Contract filling and packaging in quarts, gallons, pails, drums, totes, and flexibags.",
                    url: "https://u1dynamics.com/lubricant-contract-packaging",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "DEF Manufacturing",
                    description: "ISO 22241 compliant diesel exhaust fluid in bulk, tote, drum, and retail packaging formats.",
                    url: "https://u1dynamics.com/diesel-exhaust-fluid-manufacturer",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Coolant & Antifreeze Manufacturing",
                    description: "Extended life coolants, heavy-duty antifreeze, and universal coolant technologies.",
                    url: "https://u1dynamics.com/coolant-antifreeze-manufacturer",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Industrial Fluid Manufacturing",
                    description: "Hydraulic oils, compressor oils, metalworking fluids, and specialty industrial formulations.",
                    url: "https://u1dynamics.com/industrial-fluid-manufacturing",
                  },
                },
              ],
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
