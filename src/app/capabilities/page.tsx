import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore U1Dynamics Manufacturing capabilities: blending engineering, quality lab testing, filling and packaging systems, and private label manufacturing.",
};

const services = [
  {
    id: "blending-engineering",
    title: "Blending Engineering",
    subtitle: "Precision-Calibrated Formulation Systems",
    description:
      "Our blending operations utilize precision-calibrated equipment and rigorous process controls to produce high-quality petroleum products at scale. Every batch is engineered to meet exact specifications, ensuring consistency across production runs and compliance with the most demanding industry standards.",
    features: [
      "Motor oils (conventional, synthetic blend, full synthetic)",
      "Industrial lubricants and hydraulic fluids",
      "Gear oils and transmission fluids",
      "Specialty petroleum products and greases",
      "Custom formulations to client specifications",
      "API, ILSAC, and OEM specification compliance",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    color: "red",
    image: "/images/filling-nozzles-closeup.jpeg",
  },
  {
    id: "water-based-blending",
    title: "Water-Based Product Blending",
    subtitle: "Coolants, Antifreeze & Specialty Fluids",
    description:
      "Our dedicated water-based production systems incorporate reverse osmosis purification and precision metering to deliver consistently pure formulations. From engine coolants to industrial cleaners, every product is manufactured under strict quality controls to meet OEM and industry requirements.",
    features: [
      "Engine coolants \u2014 OAT, HOAT, and IAT formulations",
      "Antifreeze and extended-life coolants",
      "Windshield washer fluids",
      "Industrial water-based cleaners and degreasers",
      "Custom water-based formulations",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    color: "blue",
    image: "/images/facility-interior-wide.jpeg",
  },
  {
    id: "contract-filling",
    title: "Contract Filling & Packaging",
    subtitle: "Automated Packaging for Any Volume",
    description:
      "Our automated filling lines are engineered for accuracy and throughput across a wide range of container formats. From quart bottles to bulk totes, we deliver professional filling, capping, labeling, and packaging services with the precision and consistency your products demand.",
    features: [
      "Bottles (quart, liter, gallon)",
      "Pails (1\u20135 gallon)",
      "Drums (55 gallon)",
      "Totes and bulk containers",
      "Custom packaging and labeling",
      "Private label packaging services",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    color: "red",
    image: "/images/filling-line-overhead.jpeg",
  },
  {
    id: "private-label",
    title: "Private Label Manufacturing",
    subtitle: "Your Brand, Our Manufacturing Expertise",
    description:
      "Partner with us to bring your branded products to market. We provide end-to-end private label manufacturing services, from initial product development and formulation through filling, packaging, and quality certification \u2014 all under your brand identity.",
    features: [
      "Complete product development",
      "Formulation and blending",
      "Filling and packaging",
      "Label design coordination",
      "Quality testing and certification",
      "Logistics and distribution support",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    color: "blue",
    image: "/images/warehouse-pallets.jpeg",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="geo-light w-96 h-96 bg-u1-steel-blue/20 top-[-10%] left-[5%] rounded-full" />
        <div className="geo-light w-72 h-72 bg-u1-red/15 bottom-[-5%] right-[10%] rounded-full" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">
            Core Operations
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Manufacturing{" "}
            <span className="text-u1-red">Capabilities</span>
          </h1>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg max-w-2xl mx-auto">
            End-to-end manufacturing solutions engineered for precision,
            scalability, and reliability.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="py-28 bg-u1-charcoal">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`${
                    service.color === "blue"
                      ? "icon-gradient-blue"
                      : "icon-gradient"
                  } inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                    service.color === "blue"
                      ? "text-u1-steel-blue"
                      : "text-u1-red"
                  }`}
                >
                  {service.icon}
                </div>
                <h2 className="text-3xl font-black text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-u1-steel-blue font-semibold mb-4 text-sm uppercase tracking-wide">
                  {service.subtitle}
                </p>
                <p className="text-u1-chrome/80 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-u1-steel-blue to-u1-cyan flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-u1-chrome/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={470}
                    className="w-full h-auto object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    service.color === "blue"
                      ? "from-u1-steel-blue/20"
                      : "from-u1-red/20"
                  } via-transparent to-transparent`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-u1-carbon tech-grid geometric-accent overflow-hidden">
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/15 top-[-15%] right-[10%] rounded-full" />
        <div className="geo-light w-64 h-64 bg-u1-red/10 bottom-[-10%] left-[15%] rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Need a{" "}
            <span className="text-u1-red">Custom-Engineered Solution</span>?
          </h2>
          <p className="text-u1-silver/70 text-lg mb-10 max-w-2xl mx-auto">
            Brief us on your project and we&apos;ll engineer your solution.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
