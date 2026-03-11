import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Facility",
  description:
    "Tour the U1Dynamics Manufacturing facility in Pasadena, Texas. State-of-the-art blending and filling equipment in 95,000 square feet of production space.",
};

const capabilities = [
  {
    title: "Blending Systems",
    description:
      "Multiple blending vessels with precision-calibrated temperature and ratio control for both petroleum and water-based products.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Filling Lines",
    description:
      "High-speed automated filling equipment for bottles, pails, drums, and totes with precise volume control.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    color: "red",
  },
  {
    title: "Water Treatment",
    description:
      "Reverse osmosis purification systems ensure ultra-pure water for water-based product formulations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Storage Tanks",
    description:
      "Bulk storage for raw materials and finished products, enabling efficient large-scale production runs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: "red",
  },
  {
    title: "Capping & Labeling",
    description:
      "Automated capping machines and labeling systems for professional product presentation and brand consistency.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Quality Lab",
    description:
      "On-site quality control laboratory for testing raw materials, in-process checks, and final product certification.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "red",
  },
];

export default function FacilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-10%] right-[15%]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Manufacturing Floor</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className="text-u1-red">Facility</span>
          </h1>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg max-w-2xl mx-auto">
            Step into our advanced manufacturing facility
            in Pasadena, Texas.
          </p>
        </div>
      </section>

      {/* Video Tour */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Facility Showcase</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Facility <span className="text-u1-red">Tour</span>
            </h2>
            <p className="text-u1-chrome/70 text-lg">
              Watch our blending, filling, and
              packaging operations in action.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video bg-black"
              poster="/images/filling-line-overhead.jpeg"
            >
              <source src="/videos/facility-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Core Operations</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Equipment & <span className="text-u1-red">Capabilities</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              Our facility is equipped with precision-engineered systems built for consistency and reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-u1-gunmetal rounded-2xl p-8 service-card shadow-sm"
              >
                <div className={`icon-gradient inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${
                  cap.color === "blue" ? "text-u1-red" : "text-u1-red"
                }`}>
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-28 bg-u1-charcoal">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Production Scale</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Facility <span className="text-u1-red">Highlights</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "95,000", label: "Square Feet", desc: "of production and warehouse space", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { value: "Multiple", label: "Filling Lines", desc: "for bottles, pails, drums, and totes", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
              { value: "Dedicated", label: "QC Laboratory", desc: "for in-house testing and certification", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { value: "Strategic", label: "Location", desc: "Houston petrochemical corridor", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-8 bg-u1-gray rounded-2xl stat-card"
              >
                <div className="icon-gradient inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-u1-red">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div className="text-2xl font-black highlight-number mb-1">
                  {item.value}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {item.label}
                </div>
                <p className="text-u1-chrome/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/20 top-[-15%] left-[15%]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Schedule a Visit</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Want to <span className="text-u1-red">Visit</span>?
          </h2>
          <p className="text-u1-silver/70 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a facility tour and experience our manufacturing
            capabilities firsthand.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Facility Tour
          </Link>
        </div>
      </section>
    </>
  );
}
