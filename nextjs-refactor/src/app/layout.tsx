import type { Metadata } from "next";
import { Inter, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-var",
  weight: ["300", "400", "500", "600", "700"],
});

const display = Archivo_Narrow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-var",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-var",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.u1dynamics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "U1Dynamics · Lubricant Blending & Private Label Manufacturing · Pasadena, TX",
    template: "%s · U1Dynamics",
  },
  description:
    "U1Dynamics is a 95,000 sq ft lubricant blending and contract filling platform in Pasadena, Texas. Private label motor oil, DEF, coolants and specialty fluids — shipped to 38+ markets.",
  keywords: [
    "lubricant blending",
    "contract packaging",
    "private label motor oil",
    "specialty fluids manufacturer",
    "Pasadena lubricant manufacturer",
    "Houston lubricant manufacturer",
    "custom formulation",
    "contract blending Texas",
    "DEF manufacturer",
    "hydraulic fluid blender",
    "private label lubricants",
  ],
  authors: [{ name: "U1Dynamics Manufacturing LLC" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "U1Dynamics",
    title: "U1Dynamics · Lubricant Blending & Private Label Manufacturing",
    description:
      "State-of-the-art lubricant blending and contract packaging facility. Private label motor oil, specialty fluids and custom formulations — shipped worldwide from Pasadena, TX.",
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "U1Dynamics Pasadena, TX blending facility" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "U1Dynamics · Lubricant Blending & Private Label Manufacturing",
    description:
      "State-of-the-art lubricant blending and contract packaging. Private label, custom formulation, shipped worldwide from Pasadena, TX.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Pasadena",
    "geo.position": "29.63;-95.16",
    ICBM: "29.63, -95.16",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "U1Dynamics Manufacturing LLC",
      alternateName: "U1Dynamics",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      description:
        "Lubricant blending, contract packaging and private label manufacturing for premium oils and specialty fluids.",
      foundingDate: "2022",
      sameAs: [
        "https://www.linkedin.com/company/u1dynamics-manufacturing-llc",
        "https://www.facebook.com/U1Dynamics/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-888-687-8521",
          contactType: "sales",
          email: "info@u1dynamics.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Spanish"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#plant`,
      name: "U1Dynamics Pasadena Plant",
      image: `${siteUrl}/og-image.png`,
      url: `${siteUrl}/`,
      telephone: "+1-888-687-8521",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4468 Genoa Red Bluff Rd",
        addressLocality: "Pasadena",
        addressRegion: "TX",
        postalCode: "77505",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 29.63, longitude: -95.16 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Lubricant Contract Blending & Private Label Packaging",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
      serviceType: "Contract manufacturing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Capabilities",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lubricant Blending" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contract Packaging" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Labeling" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formulation R&D" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Specialty Fluids Manufacturing" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette="midnight" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0b0d" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
          }}
          onFocus={(e) => {
            e.currentTarget.style.left = "12px";
            e.currentTarget.style.top = "12px";
            e.currentTarget.style.zIndex = "100";
          }}
          onBlur={(e) => {
            e.currentTarget.style.left = "-9999px";
          }}
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
