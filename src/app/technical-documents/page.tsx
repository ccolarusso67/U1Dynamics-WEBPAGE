import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Technical Documents | SDS, TDS & Product Specifications",
  description:
    "Access U1Dynamics technical documentation including Safety Data Sheets (SDS), Technical Data Sheets (TDS), product specifications, and industry certifications for lubricants, DEF, coolants, and industrial fluids.",
  alternates: {
    canonical: "/technical-documents",
  },
};

const documentCategories = [
  {
    title: "Safety Data Sheets (SDS)",
    description:
      "GHS-compliant Safety Data Sheets for all products. Required for workplace safety, transportation, and regulatory compliance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    documents: [
      "Engine Oils (all viscosity grades)",
      "Transmission Fluids (ATF, CVT, DCT)",
      "Gear Oils (75W-90, 80W-90, 85W-140)",
      "Hydraulic Oils (AW 32, 46, 68)",
      "Diesel Exhaust Fluid (DEF)",
      "Coolants & Antifreeze",
      "Greases & Specialty Lubricants",
    ],
  },
  {
    title: "Technical Data Sheets (TDS)",
    description:
      "Detailed product specifications including viscosity, flash point, pour point, density, and performance characteristics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    documents: [
      "Ultra1Plus Full Synthetic Engine Oils",
      "Ultra1Plus Conventional Engine Oils",
      "Ultra1Plus Synthetic Blend Engine Oils",
      "Heavy-Duty Diesel Engine Oils",
      "Industrial Hydraulic Fluids",
      "Compressor Oils",
      "Metalworking Fluids",
    ],
  },
  {
    title: "Certifications & Standards",
    description:
      "Industry certifications, compliance documentation, and test results from accredited laboratories.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    documents: [
      "API Licensing Certificates",
      "ISO 22241 (DEF Compliance)",
      "SAE & ASTM Test Reports",
      "GHS Compliance Documentation",
      "DOT Shipping Classifications",
      "ILSAC & ACEA Performance Standards",
    ],
  },
  {
    title: "Product Guides",
    description:
      "Cross-reference guides, application charts, and product selection tools to help identify the right formulation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    documents: [
      "Viscosity Grade Cross-Reference",
      "OEM Approval Cross-Reference",
      "Packaging Format Specifications",
      "Private Label Quick-Start Guide",
      "Contract Manufacturing Overview",
      "Bulk & Export Packaging Guide",
    ],
  },
];

export default function TechnicalDocumentsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Technical Documents", href: "/technical-documents" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>
              Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
              Technical Documents
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Access Safety Data Sheets, Technical Data Sheets, product specifications, and certification documentation for the full U1Dynamics product portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Request Banner */}
      <section className="py-6 bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#2563EB" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700">
                Technical documents are available upon request. Contact us with the specific product or document you need.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary text-sm !py-2 !px-4 whitespace-nowrap">
              Request Documents
            </Link>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {documentCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{category.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-6">
                  {category.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>
              How It Works
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              How to Request Documents
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                label: "Contact Us",
                description: "Reach out via our contact form, email, or phone with your document request.",
              },
              {
                step: "2",
                label: "Specify Products",
                description: "Let us know the specific products, grades, or certifications you need documentation for.",
              },
              {
                step: "3",
                label: "Receive Documents",
                description: "We will send the requested documents directly to your email, typically within one business day.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Need Technical Documentation?
          </h2>
          <p className="text-gray-400 mb-8">
            Request SDS, TDS, certifications, or any product documentation. Our team typically responds within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">Request Documents</Link>
            <Link href="/products" className="btn btn-outline">View Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
