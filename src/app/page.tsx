import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Blending Engineering",
    description:
      "Precision-calibrated blending systems for petroleum lubricants, motor oils, and specialty products engineered to exact specifications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Quality & Lab Testing",
    description:
      "On-site quality control laboratory with rigorous testing protocols for raw materials, in-process verification, and final product certification.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "red",
  },
  {
    title: "Filling & Packaging Systems",
    description:
      "High-speed automated filling lines for bottles, pails, drums, and totes with precise volume control and professional packaging.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Supply Chain & Distribution",
    description:
      "Strategic positioning in the Houston petrochemical corridor with efficient global logistics and distribution capabilities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "red",
  },
];

const stats = [
  { value: "95,000", label: "Sq Ft Facility", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { value: "24/7", label: "Production Ready", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "1,000+", label: "Products Manufactured", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { value: "Global", label: "Distribution Network", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const metrics = [
  { value: "95,000", unit: "sq ft", label: "Production Facility", color: "blue" },
  { value: "1,000+", unit: "SKUs", label: "Products Manufactured", color: "red" },
  { value: "15+", unit: "countries", label: "Export Markets", color: "blue" },
  { value: "6", unit: "formats", label: "Packaging Formats", color: "red" },
  { value: "24/7", unit: "", label: "Production Readiness", color: "blue" },
  { value: "1M+", unit: "gallons", label: "Annual Capacity", color: "red" },
];

const productCategories = [
  { name: "Engine Oils", desc: "Conventional, synthetic blend, and full synthetic formulations", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { name: "Transmission Fluids", desc: "ATF and manual transmission fluid formulations", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Hydraulic Oils", desc: "Industrial and mobile hydraulic system fluids", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Gear Lubricants", desc: "Industrial and automotive gear oil formulations", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Greases", desc: "Multi-purpose and specialty grease products", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
  { name: "Antifreeze & Coolants", desc: "OAT, HOAT, and IAT coolant formulations", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { name: "DEF", desc: "API-certified diesel exhaust fluid", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { name: "Industrial Fluids", desc: "Specialty industrial and water-based solutions", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
];

const leadership = [
  { name: "Carmine Colarusso", title: "CEO", initials: "CC", desc: "Leads overall corporate strategy and business development." },
  { name: "Ramon Chang", title: "Chief Manufacturing Officer", initials: "RC", desc: "Oversees all manufacturing operations and production systems." },
  { name: "Diego Castro", title: "Chief Operations Officer", initials: "DC", desc: "Directs operational strategy and organizational efficiency." },
  { name: "Eugenio Piratelli", title: "Plant Manager", initials: "EP", desc: "Manages day-to-day plant operations and facility management." },
  { name: "Ybeth Ramirez", title: "Operations & Production Coordinator", initials: "YR", desc: "Coordinates production scheduling and workflow optimization." },
  { name: "Ricardo Sama", title: "Procurement & Cost Analysis", initials: "RS", desc: "Handles sourcing, supplier relationships, and cost management." },
  { name: "Elvin Aponte", title: "Maintenance Manager", initials: "EA", desc: "Manages equipment maintenance and facility infrastructure." },
  { name: "Marcos Sama", title: "Quality & Lab Manager", initials: "MS", desc: "Leads quality assurance, lab testing, and product certification." },
];

const partnerships = [
  {
    category: "Additive Suppliers",
    desc: "Premium additive packages from leading global suppliers for optimized formulations.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    category: "Base Oil & Raw Materials",
    desc: "Strategic sourcing from Gulf Coast refineries and chemical producers.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    category: "Packaging Solutions",
    desc: "Full range of containers from bottles to bulk totes from certified partners.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
  {
    category: "Logistics & Distribution",
    desc: "Integrated transportation and warehousing for domestic and international delivery.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
];

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-screen flex items-center bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />

        <div className="geo-light w-96 h-96 bg-u1-steel-blue/20 top-[-10%] right-[-5%]" />
        <div className="geo-light w-80 h-80 bg-u1-red/10 bottom-[-10%] left-[-5%]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/10 top-[40%] left-[30%]" />

        <div className="tech-scan" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8">
                <span className="w-2 h-2 bg-u1-steel-blue rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">
                  Pasadena, Texas &mdash; Advanced Manufacturing Platform
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                <span className="gradient-text">Precision-Engineered.</span>
                <br />
                <span className="gradient-text">Performance</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white px-3 py-1">Delivered.</span>
                  <span className="absolute inset-0 bg-u1-red rounded-sm" />
                </span>
              </h1>
              <p className="text-lg text-u1-silver/80 leading-relaxed mb-10 max-w-xl">
                U1Dynamics Manufacturing LLC is your advanced manufacturing partner for
                petroleum and water-based product blending, contract filling,
                and private label manufacturing. Precision-driven solutions
                engineered for quality, reliability, and global scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/capabilities" className="btn-primary">
                  Explore Our Capabilities
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-u1-steel-blue/20 via-transparent to-u1-red/10 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <Image
                    src="/images/facility-aerial.jpeg"
                    alt="U1Dynamics Manufacturing Facility - Aerial View"
                    width={600}
                    height={400}
                    priority
                    className="relative z-10 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-6 text-center stat-card">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-u1-steel-blue mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-u1-chrome/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: MANUFACTURING CAPABILITIES ========== */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-u1-steel-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Core Operations</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Manufacturing <span className="text-u1-red">Capabilities</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              End-to-end manufacturing solutions from formulation to delivery.
              Precision-blended, quality-verified, globally distributed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="service-card bg-u1-gunmetal border border-white/5 rounded-xl p-8 text-center">
                <div className={`icon-gradient${cap.color === "blue" ? "-blue" : ""} inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${cap.color === "blue" ? "text-u1-steel-blue" : "text-u1-red"}`}>
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/capabilities" className="btn-primary">
              View Full Capabilities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: PRODUCTION SCALE ========== */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-u1-steel-blue/5 rounded-full blur-3xl" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Production Scale</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Manufacturing by the <span className="text-u1-red">Numbers</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              Industrial-scale operations delivering consistent quality and capacity for partners worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="dashboard-card p-8 text-center">
                <div className={`text-4xl sm:text-5xl font-black mb-1 ${metric.color === "blue" ? "highlight-number" : "highlight-number-red"}`}>
                  {metric.value}
                </div>
                {metric.unit && (
                  <div className="text-sm text-u1-chrome/50 uppercase tracking-wider mb-2">{metric.unit}</div>
                )}
                <div className="text-sm text-u1-silver font-semibold uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: PRODUCT CATEGORIES ========== */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Product Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Comprehensive Product <span className="text-u1-red">Range</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              Formulated, blended, and packaged to meet the most demanding industry specifications.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product) => (
              <div key={product.name} className="service-card bg-u1-gunmetal border border-white/5 rounded-xl p-6 text-center">
                <div className="icon-gradient-blue inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-u1-steel-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{product.name}</h3>
                <p className="text-u1-chrome/60 text-xs leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/products" className="btn-steel">
              Explore All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: QUALITY & COMPLIANCE ========== */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-u1-red/5 rounded-full blur-3xl" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Quality Infrastructure</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 red-accent">
                Uncompromising <span className="text-u1-red">Quality</span> Standards
              </h2>
              <p className="text-u1-chrome/80 text-lg mt-8 mb-8">
                Every product is manufactured under rigorous quality protocols
                with full traceability from raw materials to finished goods.
              </p>
              <ul className="space-y-5">
                {[
                  "Dedicated on-site quality control laboratory",
                  "Raw material testing and verification protocols",
                  "In-process quality checkpoints at every stage",
                  "Final product certification and documentation",
                  "API, ILSAC, and OEM specification compliance",
                  "Batch traceability and quality record retention",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-u1-steel-blue to-u1-cyan flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-u1-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <video controls preload="metadata" poster="/images/facility-interior-wide.jpeg" className="w-full aspect-video bg-black">
                <source src="/videos/facility-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: MANUFACTURING LEADERSHIP ========== */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-u1-steel-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Engineering Team</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Manufacturing <span className="text-u1-red">Leadership</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              Our experienced leadership team brings decades of manufacturing expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="service-card bg-u1-gunmetal border border-white/5 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-u1-steel-blue to-u1-steel-blue-dark text-white text-lg font-bold mb-4">
                  {person.initials}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{person.name}</h3>
                <p className="text-u1-red text-xs font-semibold uppercase tracking-wider mb-3">{person.title}</p>
                <p className="text-u1-chrome/60 text-xs leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: STRATEGIC PARTNERSHIPS ========== */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-u1-steel-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Partnership Network</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Strategic <span className="text-u1-red">Partnerships</span>
            </h2>
            <div className="section-divider" />
            <p className="text-u1-chrome/70 max-w-2xl mx-auto text-lg">
              We collaborate with industry-leading suppliers and logistics partners to deliver consistent quality at scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner) => (
              <div key={partner.category} className="service-card bg-u1-gunmetal border border-white/5 rounded-xl p-8 text-center">
                <div className="icon-gradient-blue inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 text-u1-steel-blue">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={partner.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-3">{partner.category}</h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: CTA ========== */}
      <section className="relative py-24 bg-u1-carbon tech-grid geometric-accent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-20%] right-[10%]" />
        <div className="geo-light w-64 h-64 bg-u1-red/10 bottom-[-15%] left-[5%]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Ready to Scale Your <span className="text-u1-red">Manufacturing</span>?
          </h2>
          <p className="text-u1-silver/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need petroleum blending, water-based formulations, or
            complete private label solutions, we deliver with engineering precision
            and operational reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request Manufacturing Partnership
            </Link>
            <Link href="/contact" className="btn-steel">
              Contact the Engineering Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
