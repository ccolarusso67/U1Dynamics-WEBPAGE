import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about U1Dynamics Manufacturing LLC — a leading petroleum and water-based product blending facility in Pasadena, Texas, serving customers worldwide.",
};

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "Rigorous quality control at every stage ensures consistent, high-performance products that meet and exceed industry standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Customer Focus",
    description:
      "Every project is tailored to meet specific client requirements, from formulation to final packaging and labeling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "red",
  },
  {
    title: "Engineering Innovation",
    description:
      "We invest in the latest blending and filling technologies to deliver efficient, precise manufacturing at competitive costs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Operational Reliability",
    description:
      "Consistent on-time delivery and dependable supply chain management keep your operations running without interruption.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "red",
  },
];

const teamMembers = [
  {
    initials: "CC",
    name: "Carmine Colarusso",
    title: "CEO",
    description: "Founding vision and strategic direction for U1Dynamics Manufacturing, driving growth and operational excellence.",
  },
  {
    initials: "RC",
    name: "Ramon Chang",
    title: "Chief Manufacturing Officer",
    description: "Oversees all manufacturing processes, ensuring precision blending and formulation standards across product lines.",
  },
  {
    initials: "DC",
    name: "Diego Castro",
    title: "Chief Operations Officer",
    description: "Leads day-to-day operations, optimizing production workflows and cross-functional coordination.",
  },
  {
    initials: "EP",
    name: "Eugenio Piratelli",
    title: "Plant Manager",
    description: "Manages facility operations, equipment maintenance schedules, and production floor efficiency.",
  },
  {
    initials: "YR",
    name: "Ybeth Ramirez",
    title: "Operations & Production Coordinator",
    description: "Coordinates production scheduling, inventory management, and order fulfillment timelines.",
  },
  {
    initials: "RS",
    name: "Ricardo Sama",
    title: "Procurement & Cost Analysis",
    description: "Manages raw material sourcing, supplier relationships, and cost optimization strategies.",
  },
  {
    initials: "EA",
    name: "Elvin Aponte",
    title: "Maintenance Manager",
    description: "Ensures all equipment and systems operate at peak performance through preventive and corrective maintenance programs.",
  },
  {
    initials: "MS",
    name: "Marcos Sama",
    title: "Quality & Lab Manager",
    description: "Directs quality control laboratory operations, testing protocols, and product certification processes.",
  },
];

const partnerships = [
  {
    title: "Additive Suppliers",
    description: "Strategic relationships with leading additive manufacturers ensure access to premium performance chemicals and specialized formulation components.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Base Oil & Raw Materials",
    description: "Direct sourcing partnerships with Gulf Coast refineries and chemical producers for competitive pricing and reliable supply of base oils and raw materials.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Packaging Solutions",
    description: "Collaborative partnerships with packaging suppliers providing bottles, pails, drums, totes, and custom labeling solutions for diverse product lines.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
  {
    title: "Logistics & Distribution",
    description: "Integrated logistics network leveraging Houston's transportation infrastructure for efficient domestic and international product distribution.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-10%] right-[5%]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Our Foundation</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            About <span className="text-u1-red">U1Dynamics</span>
          </h1>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg max-w-2xl mx-auto">
            A trusted name in petroleum and water-based product manufacturing,
            engineered from the heart of Texas.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-black text-white mb-4 red-accent">
                Built for Excellence
              </h2>
              <div className="space-y-4 text-u1-chrome/80 leading-relaxed mt-8">
                <p>
                  U1Dynamics Manufacturing LLC was founded with a clear mission:
                  to provide high-quality petroleum and water-based product
                  manufacturing services to businesses of all sizes. Based in
                  Pasadena, Texas, we operate at the epicenter of America&apos;s
                  petrochemical industry.
                </p>
                <p>
                  Our strategically located facility at 4468 Genoa Red Bluff
                  Road gives us direct access to major refineries, the Houston
                  Ship Channel, and global distribution networks. This
                  positioning allows us to source raw materials efficiently and
                  deliver finished products to customers worldwide.
                </p>
                <p>
                  From custom petroleum lubricant blending to water-based
                  coolant formulation, contract filling, and complete private
                  label solutions, we serve as a one-stop manufacturing partner
                  for companies looking to bring quality products to market.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-u1-steel-blue/20 to-u1-red/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <Image
                    src="/images/facility-aerial.jpeg"
                    alt="U1Dynamics Manufacturing Facility - Pasadena, Texas"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/20 top-[-10%] left-[20%]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Our Purpose</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Our Mission</h2>
          <div className="section-divider" />
          <p className="text-xl text-u1-silver/80 leading-relaxed">
            To deliver precision-engineered petroleum and water-based manufacturing
            solutions that position our customers ahead in their markets, while
            maintaining the highest standards of quality, safety, and
            environmental responsibility.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Our Principles</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Our <span className="text-u1-red">Values</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-u1-gunmetal rounded-2xl p-8 text-center service-card shadow-sm"
              >
                <div className={`icon-gradient inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  value.color === "blue" ? "text-u1-silver" : "text-u1-red"
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location advantage */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-u1-red/5 rounded-full blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Our Advantage</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Strategic <span className="text-u1-red">Location</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Houston Petrochemical Hub",
                desc: "Direct access to the largest concentration of refineries and chemical plants in the United States.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Global Logistics",
                desc: "Proximity to the Houston Ship Channel, major highways, and international airports for efficient worldwide distribution.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Supply Chain Advantage",
                desc: "Sourcing base oil, additives, and raw materials from nearby suppliers reduces costs and lead times.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="service-card bg-u1-gray rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="icon-gradient inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-u1-red">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Leadership */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Engineering Team</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Manufacturing <span className="text-u1-red">Leadership</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.initials}
                className="service-card bg-u1-gunmetal rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-u1-steel-blue to-u1-steel-blue-dark mb-5">
                  <span className="text-white font-black text-lg">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-u1-red text-sm font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-u1-chrome/60 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Partnership Network</p>
            <h2 className="text-3xl font-black text-white mb-4">
              Strategic <span className="text-u1-red">Partnerships</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner) => (
              <div
                key={partner.title}
                className="service-card bg-u1-gunmetal rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="icon-gradient inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-u1-red">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={partner.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {partner.title}
                </h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-64 h-64 bg-u1-steel-blue/20 top-[-10%] right-[20%]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Ready to <span className="text-u1-red">Partner</span> With Us?
          </h2>
          <p className="text-u1-silver/70 text-lg mb-10 max-w-2xl mx-auto">
            Discover how our manufacturing capabilities can support your product line.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Facility Tour
          </Link>
        </div>
      </section>
    </>
  );
}
