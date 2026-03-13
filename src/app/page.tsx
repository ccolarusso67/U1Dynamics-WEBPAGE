import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "U1Dynamics Manufacturing | Lubricant Blending & Private Label Manufacturing",
  description:
    "U1Dynamics Manufacturing LLC operates a 95,000 sq ft lubricant blending and contract filling facility in Pasadena, Texas. Private label lubricants, DEF, coolants, and industrial fluids for domestic and international partners.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    title: "Contract Manufacturing",
    description: "Formulation blending, production scale-up, quality control, packaging, filling, and logistics coordination.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Private Label Lubricants",
    description: "Engine oils, gear oils, transmission fluids, hydraulic oils, and specialty lubricants under your brand.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "DEF Manufacturing",
    description: "ISO 22241 compliant diesel exhaust fluid in bulk, tote, drum, and retail packaging formats.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Coolant & Antifreeze",
    description: "Extended life coolants, heavy-duty antifreeze, universal coolant technologies, and specialty thermal fluids.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

const industries = [
  { title: "Automotive", description: "Engine oils, transmission fluids, coolants, and maintenance products for modern vehicles." },
  { title: "Heavy Duty & Transportation", description: "Performance fluids for trucking, logistics fleets, and commercial vehicles." },
  { title: "Industrial Equipment", description: "Hydraulic oils and industrial lubricants for demanding mechanical environments." },
  { title: "Agriculture & Construction", description: "Durable fluids for heavy equipment and off-road machinery." },
  { title: "Marine", description: "Specialty lubricants and fluids designed to perform in harsh operating conditions." },
];

const whyPartner = [
  { title: "Reliability", description: "Consistent manufacturing processes designed to support long-term partnerships." },
  { title: "Flexibility", description: "Production capabilities that adapt to the needs of growing brands and distributors." },
  { title: "Speed to Market", description: "Efficient production systems that allow partners to bring products to market faster." },
  { title: "Manufacturing Expertise", description: "Deep industry knowledge in lubricant blending and fluid technologies." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Lubricant & Fluid Manufacturing in the United States</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                U1Dynamics Manufacturing
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-md">
                Behind every trusted fluid brand, there is a place where performance is built.
              </p>
              <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-md">
                From private label lubricant manufacturing to large-scale contract blending, we help partners bring high-performance products to market with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">Our Products</Link>
                <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
              </div>

              {/* Trust bar */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                {[
                  { value: "95K", label: "Sq Ft Facility" },
                  { value: "1,000+", label: "SKUs" },
                  { value: "38+", label: "Export Markets" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src="/images/facility/oil-pouring.jpg" alt="Lubricant oil blending at U1Dynamics manufacturing facility" fill className="object-cover" priority />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src="/images/facility/drums-usa-flag.jpg" alt="Ultra1Plus lubricant drums manufactured in the USA" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src="/images/facility/bottling-line-worker.jpg" alt="Worker operating automated lubricant bottling production line" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src="/images/facility/aerial-hero.jpg" alt="Aerial view of U1Dynamics 95,000 sq ft manufacturing facility in Pasadena Texas" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Mobile: single hero image */}
            <div className="lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/facility/aerial-hero.jpg" alt="Aerial view of U1Dynamics lubricant manufacturing facility in Pasadena Texas" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>About U1Dynamics</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">Built to Manufacture Performance</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                U1Dynamics Manufacturing was founded to create a modern lubricant blending and filling platform in the United States, capable of supporting both established brands and emerging companies seeking reliable manufacturing partners.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                With decades of combined industry experience, our team understands the importance of consistent product quality, dependable supply chains, scalable manufacturing capacity, and fast response to market demand.
              </p>
              <p className="text-gray-500 font-medium italic">
                Because when our partners grow, our purpose is fulfilled.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/facility/interior-wide.jpg" alt="Interior of U1Dynamics lubricant blending and filling facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Manufacturing Services</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">What We Manufacture</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We specialize in blending, manufacturing, and packaging lubricants, coolants, DEF, and industrial performance fluids.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="#2563EB" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Industries We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Partners Across Every Sector</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-base font-bold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Manufacturing Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Our Facility</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Designed to support flexible production and scalable growth. Because in manufacturing, precision is not optional — it is everything.
            </p>
          </div>

          {/* Row 1: 2 large images */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { src: "/images/facility/bottling-line-worker.jpg", alt: "Automated lubricant bottling production line at U1Dynamics" },
              { src: "/images/facility/warehouse-crane.jpg", alt: "U1Dynamics warehouse with overhead crane for drum and tote handling" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[16/10] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Row 2: 3 medium images */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { src: "/images/facility/blending-vortex.jpg", alt: "Lubricant oil blending vortex during manufacturing process" },
              { src: "/images/facility/drums-usa-workers.jpg", alt: "Workers on the drum filling and labeling production line" },
              { src: "/images/facility/filling-closeup.jpg", alt: "Precision lubricant bottle filling at U1Dynamics facility" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Row 3: 3 medium images */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { src: "/images/facility/team-packing.jpg", alt: "U1Dynamics team packing lubricant orders for distribution" },
              { src: "/images/facility/branded-truck.jpg", alt: "Ultra1Plus branded delivery truck for lubricant distribution" },
              { src: "/images/facility/forklift-warehouse.jpg", alt: "Forklift operations in U1Dynamics lubricant warehouse" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/QM8CQ6vG3Gw"
              title="U1Dynamics Manufacturing Facility Tour - Lubricant Blending and Filling Operations"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Why Partner With U1Dynamics</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Manufacturing Is About Trust</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Choosing a manufacturing partner is one of the most important decisions a brand can make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPartner.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made in USA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/facility/drums-usa-flag.jpg" alt="U1Dynamics lubricant drums proudly manufactured in the United States" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: "#2563EB" }}>Made in the USA</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">U.S.-Based Manufacturing</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                U1Dynamics proudly operates as a U.S.-based lubricant manufacturer, supporting both domestic and international partners who value quality, reliability, and strong supply chains.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Manufacturing in the United States allows us to maintain high standards of production, dependable sourcing, and efficient logistics. For our partners, that means greater confidence in every product delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 mb-8">
            If you are looking for a reliable lubricant manufacturer, private label partner, or contract blending facility, our team would welcome the opportunity to discuss your project.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
