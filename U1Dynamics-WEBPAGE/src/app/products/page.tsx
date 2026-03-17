import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Engine oils, transmission fluids, hydraulic oils, gear lubricants, greases, antifreeze, coolants, DEF, and industrial fluids.",
};

const products = [
  {
    title: "Engine Oils",
    description: "Conventional, synthetic blend, and full synthetic formulations.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Transmission Fluids",
    description: "ATF and manual transmission fluid formulations.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Hydraulic Oils",
    description: "Industrial and mobile hydraulic system fluids.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Gear Lubricants",
    description: "Industrial and automotive gear oil formulations.",
    icon: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.645-6.536l-1.299.75m-10.112 6.536L6.645 5.464m0 13.072l1.299-.75m10.112-6.536l1.299.75M12 3v1.5m0 15V21",
  },
  {
    title: "Greases",
    description: "Multi-purpose and specialty grease products.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Antifreeze & Coolants",
    description: "OAT, HOAT, and IAT coolant formulations.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "DEF",
    description: "API-certified diesel exhaust fluid, ISO 22241 compliant.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Industrial Fluids",
    description: "Water-based cleaners, degreasers, and custom formulations.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">Products</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Precision-formulated petroleum and water-based products manufactured to the highest standards.
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
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-accent mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{product.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Need a custom formulation?</h2>
          <p className="text-gray-400 mb-8">
            Our engineering team can develop products tailored to your exact specifications.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
