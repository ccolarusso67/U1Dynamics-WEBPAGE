import Image from "next/image";
import Link from "next/link";

interface CapabilityItem {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  // Hero
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  // Credibility strip
  stats: { value: string; label: string }[];
  // Capabilities
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  capabilities: CapabilityItem[];
  // Packaging
  packagingFormats: string[];
  packagingImage?: string;
  packagingImageAlt?: string;
  // Industries
  industries: string[];
  // Process
  processSteps: { label: string; description: string }[];
  // FAQ
  faqs: FAQItem[];
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  // Optional second section
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export default function ServicePageLayout({
  badge,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  stats,
  capabilitiesTitle,
  capabilitiesDescription,
  capabilities,
  packagingFormats,
  packagingImage,
  packagingImageAlt,
  industries,
  processSteps,
  faqs,
  ctaTitle,
  ctaDescription,
  secondaryTitle,
  secondaryDescription,
  secondaryImage,
  secondaryImageAlt,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>{badge}</p>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">{title}</h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">{subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
                <Link href="/manufacturing-capabilities" className="btn btn-outline">Our Capabilities</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{capabilitiesTitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{capabilitiesDescription}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Section (optional) */}
      {secondaryTitle && secondaryImage && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={secondaryImage} alt={secondaryImageAlt || ""} fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">{secondaryTitle}</h2>
                <p className="text-gray-500 leading-relaxed">{secondaryDescription}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packaging Formats */}
      <section className={`py-24 ${secondaryTitle ? "bg-white" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Packaging Options</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Flexible Packaging Formats</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We fill and package across a wide range of formats to meet retail, commercial, fleet, and industrial requirements.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {packagingFormats.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#2563EB" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {packagingImage && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={packagingImage} alt={packagingImageAlt || "Packaging formats"} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={`py-24 ${secondaryTitle ? "bg-gray-50" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Industries Served</p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Who We Work With</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Our Process</p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>FAQ</p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{ctaTitle}</h2>
          <p className="text-gray-400 mb-8">{ctaDescription}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link href="/products" className="btn btn-outline">View Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
