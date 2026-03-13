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
    default: "U1Dynamics Manufacturing LLC",
    template: "%s | U1Dynamics Manufacturing LLC",
  },
  description:
    "Petroleum and water-based product blending, contract filling, and private label manufacturing in Pasadena, Texas.",
  keywords: [
    "petroleum blending",
    "private label manufacturing",
    "contract filling",
    "lubricant blending",
    "Pasadena Texas",
    "Houston manufacturing",
  ],
  openGraph: {
    title: "U1Dynamics Manufacturing LLC",
    description:
      "Petroleum and water-based product blending, contract filling, and private label manufacturing.",
    url: "https://u1dynamics.com",
    siteName: "U1Dynamics Manufacturing LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U1Dynamics Manufacturing LLC",
    description:
      "Petroleum and water-based product blending, contract filling, and private label manufacturing.",
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
                "Petroleum and water-based product blending, contract filling, and private label manufacturing.",
              url: "https://u1dynamics.com",
              telephone: "+18886878521",
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
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
