import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | 95,000 Sq Ft Lubricant Blending Facility",
  description:
    "Explore U1Dynamics manufacturing capabilities: lubricant blending, automated filling lines, quality testing, packaging, warehousing, and distribution from our 95,000 sq ft Pasadena, Texas facility.",
  alternates: {
    canonical: "/manufacturing-capabilities",
  },
};

const capabilities = [
  {
    title: "High-Shear Blending",
    description:
      "Multiple blending vessels with high-shear mixing technology for consistent, homogeneous formulations across all viscosity grades.",
  },
  {
    title: "Automated Filling Lines",
    description:
      "Precision filling systems for bottles, pails, drums, and totes with volumetric and gravimetric accuracy controls.",
  },
  {
    title: "In-House Laboratory",
    description:
      "Fully equipped QC lab for viscosity, flash point, pour point, density, and additive concentration testing on every batch.",
  },
  {
    title: "Custom Label & Packaging",
    description:
      "High-speed labeling, shrink-wrapping, and case packing with the flexibility to support private label and co-branded programs.",
  },
  {
    title: "Bulk Storage & Handling",
    description:
      "Large-capacity tank farm and raw material storage for base oils, additives, and finished goods ready for immediate dispatch.",
  },
  {
    title: "Drum & IBC Filling",
    description:
      "Dedicated drum and IBC tote filling stations with automated capping, banding, and palletizing for industrial-scale orders.",
  },
  {
    title: "Export Packaging",
    description:
      "Container loading, export-grade palletizing, and compliance packaging for shipments to 38+ international markets.",
  },
  {
    title: "Warehousing & Distribution",
    description:
      "On-site warehousing with inventory management, order staging, and direct shipping via LTL, FTL, and intermodal freight.",
  },
];

export default function ManufacturingCapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-4"
            style={{ color: "#2563EB" }}
          >
            Our Facility
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Manufacturing Capabilities
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From our 95,000 square foot facility in Pasadena, Texas, we blend,
            fill, package, and ship lubricants, coolants, DEF, and industrial
            fluids for partners across the globe. Every square foot is built for
            precision, speed, and scale.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95,000", label: "Sq Ft Facility" },
              { value: "1,000+", label: "SKUs Produced" },
              { value: "38+", label: "Export Markets" },
              { value: "24/7", label: "Production Capacity" },
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

      {/* Blending & Formulation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/blending-composite.jpg"
                alt="Lubricant blending and formulation process at U1Dynamics manufacturing facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Blending & Formulation
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Precision Blending at Scale
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our blending operations are the backbone of everything we
                produce. We operate multiple blending vessels ranging from
                small-batch reactors to high-capacity tanks, giving us the
                flexibility to run pilot batches for new formulations or
                full-scale production runs for established product lines.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every formulation is built to meet or exceed industry
                specifications, whether we are producing API-licensed motor
                oils, heavy-duty gear lubricants, or custom industrial fluids.
                Our team controls temperature, mix times, and additive treat
                rates with the precision your products demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filling & Packaging */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Filling & Packaging
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Multiple Lines, Endless Configurations
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We run dedicated filling lines for bottles, pails, drums, and
                totes, each calibrated for the specific demands of the format.
                Our bottle lines handle quarts through gallons with automated
                capping, labeling, and case packing in a single pass.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For industrial customers, our drum and IBC filling stations
                deliver high-volume throughput with automated banding and
                palletizing. Whether you need 500 cases or 5,000 drums, our
                filling operations adapt to your timeline and order size.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/facility/filling-nozzles.jpg"
                alt="Automated filling nozzles on U1Dynamics lubricant production line"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/lab-testing.jpg"
                alt="Quality control laboratory testing at U1Dynamics manufacturing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Quality Control
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Tested Before It Leaves the Building
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Quality is not a department here — it is a discipline that
                touches every stage of production. Our in-house lab tests raw
                materials on receipt, monitors blends during production, and
                verifies finished products before release.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We measure viscosity, flash point, pour point, specific
                gravity, color, and additive concentration on every batch.
                Certificates of Analysis are generated automatically and
                available with every shipment, giving you and your customers
                full traceability and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehousing & Logistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Warehousing & Logistics
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Stored, Staged, and Shipped on Your Schedule
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our facility includes dedicated warehousing space for raw
                materials, work-in-progress, and finished goods. Products are
                organized by SKU and lot number for fast retrieval and accurate
                order fulfillment.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Located minutes from the Port of Houston and major interstate
                corridors, we ship via LTL, full truckload, flatbed, and
                intermodal container to domestic and international destinations.
                Our logistics team coordinates pickup schedules, container
                loading, and export documentation so your products arrive on
                time, every time.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/facility/warehouse-wide.jpg"
                alt="U1Dynamics warehouse facility with palletized lubricant inventory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              What We Bring to the Table
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              End-to-End Manufacturing Under One Roof
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything from formulation to fulfillment happens in our
              Pasadena, Texas facility. No outsourcing, no middlemen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Ready to See What We Can Build for You?
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you need contract blending, private label manufacturing, or
            a custom packaging solution, our team is ready to talk. Let us show
            you what 95,000 square feet of capability looks like in action.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
