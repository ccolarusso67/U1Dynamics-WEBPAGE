import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Export & Logistics | International Lubricant Shipping & Distribution",
  description:
    "U1Dynamics ships lubricants, DEF, and industrial fluids to 38+ countries. Export packaging, documentation, container loading, and logistics coordination from our Houston-area facility.",
  alternates: {
    canonical: "/export-logistics",
  },
};

const services = [
  {
    title: "Export Documentation",
    description:
      "We prepare commercial invoices, packing lists, certificates of origin, safety data sheets, and all required export paperwork so your shipments clear customs without delays.",
  },
  {
    title: "Container Loading",
    description:
      "Our facility handles full container load (FCL) preparation, including palletizing, bracing, and securing cargo inside 20-foot and 40-foot shipping containers for ocean freight.",
  },
  {
    title: "Customs Compliance",
    description:
      "We ensure every export shipment meets U.S. customs regulations, including proper HTS classification, export licensing requirements, and destination country import protocols.",
  },
  {
    title: "International Packaging",
    description:
      "Products destined for international markets receive export-grade packaging including reinforced palletizing, stretch wrapping, and labeling in the destination country language.",
  },
  {
    title: "Freight Coordination",
    description:
      "Our logistics team coordinates with freight forwarders, ocean carriers, and inland trucking partners to manage the full supply chain from our dock to your destination port.",
  },
  {
    title: "Port of Houston Access",
    description:
      "Located minutes from the Port of Houston, we offer short drayage times and direct access to shipping lanes serving Latin America, the Caribbean, West Africa, the Middle East, and Asia.",
  },
];

export default function ExportLogisticsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Company", href: "/manufacturing-capabilities" },
        { name: "Export & Logistics", href: "/export-logistics" },
      ]} />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-4"
            style={{ color: "#2563EB" }}
          >
            Global Distribution
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Export & Logistics
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We do not just manufacture lubricants — we get them where they need
            to go. From our Pasadena, Texas facility, we ship to partners and
            distributors across 38+ countries on six continents. Our team
            handles the documentation, packaging, and freight coordination so
            you can focus on selling.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "38+", label: "Countries Served" },
              { value: "6", label: "Continents Reached" },
              { value: "Port of Houston", label: "Minutes Away" },
              { value: "FCL", label: "Full Container Loads" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{ color: "#2563EB" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
            Built for International Business
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Export is not a side project for us — it is a core part of our
            business. We have shipped lubricants, coolants, DEF, and industrial
            fluids to markets across Latin America, the Caribbean, West Africa,
            East Africa, the Middle East, Southeast Asia, and beyond. We
            understand the documentation, labeling, and packaging requirements
            that vary from country to country, and we build those details into
            every order.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you are a distributor placing your first container order or
            an established importer looking for a more reliable manufacturing
            partner, our export team has the experience and infrastructure to
            support your growth. We work on FOB, CIF, and EXW terms depending
            on your preference and handle the logistics accordingly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Export Services
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              What We Handle for You
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From the moment your order is confirmed to the moment it arrives
              at the destination port, our team manages every detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/branded-truck.jpg"
                alt="Ultra1Plus branded delivery truck at U1Dynamics manufacturing facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/truck-loading.jpg"
                alt="Truck loading dock at U1Dynamics facility for lubricant distribution"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Products are loaded and shipped from our Pasadena, Texas facility
            to domestic and international destinations daily.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Ready to Bring American-Made Lubricants to Your Market?
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you are importing lubricants for the first time or looking
            for a manufacturing partner that understands international trade,
            we are ready to talk. Tell us about your market, your volumes, and
            your timeline, and we will put together a plan.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
