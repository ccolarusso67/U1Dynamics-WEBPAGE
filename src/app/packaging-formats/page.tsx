import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Packaging Formats | Bottles, Pails, Drums, Totes & Custom Packaging",
  description:
    "U1Dynamics fills and packages lubricants, DEF, coolants, and industrial fluids in quarts, gallons, pails, drums, totes, flexibags, and custom formats.",
  alternates: {
    canonical: "/packaging-formats",
  },
};

const formats = [
  {
    title: "Quart Bottles",
    description:
      "Retail-ready quart packaging for motor oils, transmission fluids, and specialty products. Ideal for auto parts stores, retail chains, and convenience outlets.",
  },
  {
    title: "Gallon Bottles",
    description:
      "Single-gallon containers for consumer and light commercial use. Popular for engine oils, coolants, and DEF sold through retail and wholesale channels.",
  },
  {
    title: "5-Quart Jugs",
    description:
      "The go-to format for DIY oil changes and service shops. 5-quart jugs offer convenience and value for high-volume motor oil and fluid products.",
  },
  {
    title: "5-Gallon Pails",
    description:
      "Durable pail packaging for fleet maintenance, workshops, and industrial applications. Available with pour spouts and resealable lids for easy handling.",
  },
  {
    title: "55-Gallon Drums",
    description:
      "Industry-standard steel and poly drums for bulk lubricants, hydraulic oils, gear oils, and industrial fluids. Banded and palletized for safe transport.",
  },
  {
    title: "275-Gallon Totes",
    description:
      "IBC totes for high-volume users who need bulk supply without tanker delivery. Stackable, forklift-accessible, and ideal for production floor use.",
  },
  {
    title: "Flexibags",
    description:
      "Flexible bulk containers fitted inside standard 20-foot shipping containers. Cost-effective for international export shipments of non-hazardous fluids.",
  },
  {
    title: "Custom Formats",
    description:
      "Need a non-standard size or specialty container? We work with partners to develop custom packaging solutions tailored to unique market requirements.",
  },
];

export default function PackagingFormatsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Company", href: "/manufacturing-capabilities" },
        { name: "Packaging Formats", href: "/packaging-formats" },
      ]} />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-4"
            style={{ color: "#2563EB" }}
          >
            Filling & Packaging
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Packaging Formats
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From single quarts on retail shelves to 275-gallon totes on
            production floors, we fill and package lubricants, DEF, coolants,
            and industrial fluids in the format your market demands. Every line
            is built for accuracy, speed, and clean presentation.
          </p>
        </div>
      </section>

      {/* Packaging Format Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format) => (
              <div
                key={format.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {format.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filling Line Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Filling Line Capabilities
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Built for Speed and Precision
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our facility operates multiple dedicated filling lines, each
                engineered for a specific packaging format. Bottle lines run
                with automated capping, induction sealing, labeling, and case
                packing. Drum lines handle steel and poly drums with automated
                filling, capping, banding, and palletizing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Changeovers between products and label configurations are fast
                and clean, which means we can run short private label orders
                alongside large-scale production without sacrificing accuracy
                or turnaround time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/facility/bottles-line.jpg"
                  alt="Bottle filling line at U1Dynamics lubricant manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/facility/filling-closeup.jpg"
                  alt="Close-up of precision filling operation for lubricant bottles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/facility/drums-line-worker.jpg"
                  alt="Worker operating drum filling line at U1Dynamics facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/facility/pails-gear-oil.jpg"
                  alt="5-gallon pails of gear oil packaged at U1Dynamics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packaging */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/labeling-machine.jpg"
                alt="Automated labeling machine applying custom labels to lubricant bottles"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Custom Solutions
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Your Brand, Your Packaging
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Not every product fits a standard container. Some markets need
                unique bottle shapes, specialty closures, or multi-pack
                configurations that stand out on the shelf. We work with
                partners to source, test, and fill custom packaging formats
                that match their brand vision.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our label design and application capabilities support
                front-and-back labels, wraparound labels, shrink sleeves, and
                regulatory markings for both domestic and international
                markets. We handle the details so your product looks
                professional from the first unit off the line.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Custom bottle shapes",
                  "Shrink sleeve labels",
                  "Multi-pack configurations",
                  "Export-grade palletizing",
                  "Specialty closures",
                  "Bilingual labeling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="#2563EB"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Need a Packaging Format We Have Not Listed?
          </h2>
          <p className="text-gray-400 mb-8">
            We are always open to exploring new formats and configurations. If
            you have a packaging requirement that does not fit the standard
            options, talk to our team. Chances are, we have done it before or
            can figure it out.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
