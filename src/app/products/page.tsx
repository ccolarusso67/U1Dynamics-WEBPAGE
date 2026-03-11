import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore U1Dynamics Manufacturing product range: engine oils, transmission fluids, hydraulic oils, gear lubricants, greases, antifreeze, coolants, DEF, and industrial fluids.",
};

const products = [
  {
    id: "engine-oils",
    title: "Engine Oils",
    description:
      "Conventional, synthetic blend, and full synthetic motor oils formulated to meet or exceed API, ILSAC, and OEM specifications.",
    specs: [
      "API SP/SN Plus certified formulations",
      "SAE viscosity grades: 0W-20, 5W-20, 5W-30, 10W-30, 10W-40, 15W-40, 20W-50",
      "Synthetic, semi-synthetic, and conventional options",
      "Heavy-duty diesel engine oils (CK-4, FA-4)",
      "High-mileage and specialty formulations",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "transmission-fluids",
    title: "Transmission Fluids",
    description:
      "Automatic and manual transmission fluid formulations engineered for optimal shift performance and component protection.",
    specs: [
      "ATF Dexron III/Mercon and Dexron VI/Mercon LV",
      "Multi-vehicle ATF formulations",
      "Manual transmission gear oils",
      "CVT fluid formulations",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "hydraulic-oils",
    title: "Hydraulic Oils",
    description:
      "Industrial and mobile hydraulic fluids formulated for consistent performance across temperature extremes.",
    specs: [
      "AW (Anti-Wear) hydraulic oils: AW 32, AW 46, AW 68",
      "ISO viscosity grades",
      "Multi-grade hydraulic fluids",
      "Biodegradable hydraulic options",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "gear-lubricants",
    title: "Gear Lubricants",
    description:
      "Industrial and automotive gear oils providing superior protection under heavy loads and extreme pressures.",
    specs: [
      "API GL-4 and GL-5 formulations",
      "SAE 75W-90, 80W-90, 85W-140",
      "Industrial EP gear oils",
      "Synthetic gear lubricants",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.645-6.536l-1.299.75m-10.112 6.536L6.645 5.464m0 13.072l1.299-.75m10.112-6.536l1.299.75M12 3v1.5m0 15V21" />
      </svg>
    ),
  },
  {
    id: "greases",
    title: "Greases",
    description:
      "Multi-purpose and specialty greases for automotive, industrial, and heavy equipment applications.",
    specs: [
      "NLGI Grade 2 multi-purpose greases",
      "Lithium and lithium complex formulations",
      "High-temperature greases",
      "Water-resistant marine greases",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "antifreeze-coolants",
    title: "Antifreeze & Coolants",
    description:
      "Engine coolant and antifreeze formulations using OAT, HOAT, and IAT technologies for all vehicle applications.",
    specs: [
      "OAT (Organic Acid Technology) extended-life coolants",
      "HOAT (Hybrid OAT) coolants",
      "IAT (Inorganic Acid Technology) conventional coolants",
      "Pre-mixed and concentrate options",
      "Heavy-duty diesel coolants",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "def",
    title: "DEF (Diesel Exhaust Fluid)",
    description:
      "API-certified diesel exhaust fluid manufactured to ISO 22241 standards for SCR emission systems.",
    specs: [
      "API-certified DEF",
      "ISO 22241 compliant",
      "Available in multiple package sizes",
      "Bulk and retail packaging options",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "industrial-fluids",
    title: "Industrial Fluids",
    description:
      "Specialty industrial solutions including water-based cleaners, degreasers, and custom formulations.",
    specs: [
      "Water-based industrial cleaners",
      "Parts washing fluids",
      "Windshield washer fluid",
      "Custom water-based formulations",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-10%] right-[-5%]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/10 bottom-[-10%] left-[10%]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Product Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className="text-u1-steel-blue">Products</span>
          </h1>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg max-w-2xl mx-auto">
            Precision-formulated petroleum and water-based products manufactured to the highest industry standards.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 relative overflow-hidden ${
            index % 2 === 0 ? "bg-u1-charcoal" : "bg-u1-gray"
          }`}
        >
          {/* Subtle background decoration */}
          <div
            className={`absolute w-72 h-72 rounded-full blur-3xl opacity-100 ${
              index % 2 === 0
                ? "bg-u1-steel-blue/5 top-10 right-10"
                : "bg-u1-steel-blue/5 bottom-10 left-10"
            }`}
          />

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="service-card accent-bar bg-u1-gunmetal/50 border border-white/5 rounded-2xl p-8 sm:p-10">
                  {/* Icon and title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="icon-gradient-blue inline-flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 text-u1-steel-blue">
                      {product.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">
                        {product.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-u1-chrome/80 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Specs checklist */}
                  <ul className="space-y-3">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-u1-steel-blue to-u1-cyan flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-u1-silver">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual / decorative side */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-3xl p-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-u1-steel-blue/5 via-u1-gunmetal to-u1-gray">
                  {/* Decorative circles */}
                  <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-u1-steel-blue opacity-10" />
                  <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-u1-cyan opacity-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-u1-steel-blue/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-u1-steel-blue/5" />

                  <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-u1-steel-blue to-u1-steel-blue-dark flex items-center justify-center shadow-xl text-white">
                    {product.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 bg-u1-carbon tech-grid geometric-accent overflow-hidden">
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-20%] right-[10%]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/10 bottom-[-20%] left-[5%]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Custom Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Need a <span className="text-u1-steel-blue">Custom Formulation</span>?
          </h2>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg mb-10 max-w-2xl mx-auto">
            Our engineering team can develop custom formulations tailored to your exact specifications and industry requirements.
          </p>
          <Link href="/contact" className="btn-steel">
            Request a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
