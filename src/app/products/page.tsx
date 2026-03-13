import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Products & Services — Lubricants, DEF, Coolants & Industrial Fluids",
  description:
    "U1Dynamics manufactures engine oils, transmission fluids, gear lubricants, hydraulic oils, greases, coolants, DEF, and industrial fluids. Contract blending, private label, and custom packaging from quart bottles to 275-gallon totes.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products & Services | U1Dynamics Manufacturing",
    description:
      "Full-spectrum lubricant and fluid manufacturing: engine oils, gear oils, DEF, coolants, and industrial fluids with flexible packaging options.",
    url: "https://u1dynamics.com/products",
    images: [
      {
        url: "/images/product-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Ultra1Plus Premium Quality Oils - Full Product Lineup",
      },
    ],
  },
};

const products = [
  {
    title: "Engine Oils",
    description: "Conventional, synthetic blend, and full synthetic formulations for automotive and heavy-duty applications.",
    image: "/images/facility/oil-pouring.jpg",
  },
  {
    title: "Transmission Fluids",
    description: "ATF and manual transmission fluid formulations for modern drivetrains.",
    image: "/images/facility/filling-bottles.jpg",
  },
  {
    title: "Hydraulic Oils",
    description: "Industrial and mobile hydraulic system fluids for demanding mechanical environments.",
    image: "/images/facility/blending-vortex.jpg",
  },
  {
    title: "Gear Lubricants",
    description: "Industrial and automotive gear oil formulations for maximum protection.",
    image: "/images/facility/pails-gear-oil.jpg",
  },
  {
    title: "Greases",
    description: "Multi-purpose and specialty grease products for diverse applications.",
    image: "/images/facility/drums-closeup.jpg",
  },
  {
    title: "Antifreeze & Coolants",
    description: "Extended life coolants, heavy-duty antifreeze, and universal coolant technologies.",
    image: "/images/facility/raw-material-storage.jpg",
  },
  {
    title: "Diesel Exhaust Fluid",
    description: "ISO 22241 compliant DEF in bulk, tote, drum, and retail packaging formats.",
    image: "/images/facility/ibc-tank.jpg",
  },
  {
    title: "Industrial Fluids",
    description: "Water-based cleaners, degreasers, and custom formulations for industrial use.",
    image: "/images/facility/lab-testing.jpg",
  },
];

const packaging = [
  "Quart bottles",
  "Gallon bottles",
  "5-gallon pails",
  "55-gallon drums",
  "275-gallon totes",
  "Custom packaging formats",
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "U1Dynamics Manufacturing Products",
  description: "Lubricants, fluids, and industrial products manufactured by U1Dynamics Manufacturing LLC",
  url: "https://u1dynamics.com/products",
  numberOfItems: 8,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.title,
      description: product.description,
      manufacturer: {
        "@type": "Organization",
        name: "U1Dynamics Manufacturing LLC",
        url: "https://u1dynamics.com",
      },
      brand: {
        "@type": "Brand",
        name: "Ultra1Plus",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Header */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Product Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">What We Manufacture</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in the blending, manufacturing, and packaging of lubricants, coolants, DEF, and industrial performance fluids for partners across the United States and international markets.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{product.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Filling & Packaging</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Multiple Packaging Configurations</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our facility supports flexible production with multiple filling lines capable of handling diverse packaging formats.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {packaging.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#2563EB" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/facility/filling-nozzles.jpg" alt="Multiple filling nozzles for lubricant packaging at U1Dynamics facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Our Process</p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">From Formulation to Delivery</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Every product is blended, filled, labeled, and shipped from our Pasadena, Texas facility.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/facility/blending-composite.jpg", alt: "Lubricant formulation and blending process at U1Dynamics", label: "Formulate" },
              { src: "/images/facility/filling-nozzles.jpg", alt: "Precision lubricant filling nozzles on automated production line", label: "Fill" },
              { src: "/images/facility/labeling-machine.jpg", alt: "Automated bottle labeling machine for private label lubricants", label: "Label" },
              { src: "/images/facility/branded-truck.jpg", alt: "Ultra1Plus branded truck for lubricant product distribution", label: "Ship" },
            ].map((step) => (
              <div key={step.label} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 group">
                  <Image src={step.src} alt={step.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-sm font-bold text-gray-900">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Quality Control</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Every Batch. Every Time.</h2>
          <p className="text-gray-400 leading-relaxed">
            Each batch is monitored using strict quality assurance procedures to ensure consistent performance and compliance with industry standards. Our quality control protocols cover every stage from raw material inspection through final product release.
          </p>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/product-lineup.jpg"
              alt="Ultra1Plus Premium Quality Oils - Full Product Lineup"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Need a Custom Formulation?</h2>
          <p className="text-gray-400 mb-8">
            Our engineering team can develop products tailored to your exact specifications. We help partners move from concept to production with efficiency and confidence.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
