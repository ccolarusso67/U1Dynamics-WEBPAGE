import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Houston Texas Manufacturing Facility | Pasadena TX Lubricant Plant",
  description:
    "Tour U1Dynamics 95,000 sq ft lubricant manufacturing facility in Pasadena, Texas. State-of-the-art blending, filling, packaging, and warehousing operations serving domestic and international markets.",
  alternates: {
    canonical: "/houston-texas-facility",
  },
};

const galleryImages = [
  {
    src: "/images/facility/aerial-angle.jpg",
    alt: "Aerial angle view of U1Dynamics manufacturing facility in Pasadena Texas",
  },
  {
    src: "/images/facility/interior-wide.jpg",
    alt: "Interior wide shot of U1Dynamics lubricant production floor",
  },
  {
    src: "/images/facility/production-line-overview.jpg",
    alt: "Overview of lubricant production line at U1Dynamics facility",
  },
  {
    src: "/images/facility/warehouse-aisle.jpg",
    alt: "Warehouse aisle with palletized lubricant inventory at U1Dynamics",
  },
  {
    src: "/images/facility/production-team.jpg",
    alt: "U1Dynamics production team on the manufacturing floor",
  },
  {
    src: "/images/facility/blending-vortex.jpg",
    alt: "Lubricant blending vortex in mixing vessel at U1Dynamics facility",
  },
  {
    src: "/images/facility/forklift-warehouse.jpg",
    alt: "Forklift moving pallets in U1Dynamics warehouse",
  },
  {
    src: "/images/facility/drums-usa-workers.jpg",
    alt: "Workers with drums of lubricant at U1Dynamics American manufacturing facility",
  },
];

const advantages = [
  {
    title: "Port of Houston Access",
    description:
      "Our Pasadena location puts us minutes from the Port of Houston, one of the busiest ports in the United States. This proximity gives our export partners faster container loading, shorter drayage costs, and direct access to shipping lanes serving Latin America, Africa, the Middle East, and Asia.",
  },
  {
    title: "Central U.S. Shipping",
    description:
      "Texas sits at the crossroads of major interstate highways and rail corridors. We ship via LTL and full truckload to customers across the continental United States with competitive transit times. Most domestic orders reach their destination within days, not weeks.",
  },
  {
    title: "Rail & Intermodal Proximity",
    description:
      "The Houston metro area is one of the largest rail hubs in North America. Our facility has access to intermodal terminals for rail-to-truck transfers, giving customers additional freight options for high-volume and long-distance shipments.",
  },
  {
    title: "Petrochemical Supply Chain",
    description:
      "Houston is the petrochemical capital of the United States. Our location gives us direct access to base oil refineries, additive suppliers, and packaging manufacturers, which means shorter lead times on raw materials and lower inbound freight costs.",
  },
];

export default function HoustonTexasFacilityPage() {
  return (
    <>
      {/* Hero with Aerial Image */}
      <section className="relative pt-28 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-4"
                style={{ color: "#2563EB" }}
              >
                Pasadena, Texas
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Our Houston-Area Manufacturing Facility
              </h1>
              <p className="text-gray-400 leading-relaxed mb-4">
                Everything we build starts here: a 95,000 square foot
                manufacturing facility in Pasadena, Texas, just minutes from
                the Port of Houston. This is where lubricants, coolants, DEF,
                and industrial fluids are blended, filled, packaged, and
                shipped to partners across the United States and 38+
                international markets.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our facility was purpose-built for high-volume fluid
                manufacturing with the flexibility to handle everything from
                small private label runs to full container loads for export.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/facility/aerial-hero.jpg"
                alt="Aerial view of U1Dynamics 95,000 sq ft lubricant manufacturing facility in Pasadena Texas"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Overview Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95,000", label: "Sq Ft Facility" },
              { value: "Pasadena", label: "Texas, USA" },
              { value: "24/7", label: "Production Capacity" },
              { value: "2012", label: "Established" },
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

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Inside the Facility
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              A Look at Our Operations
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From blending floors and filling lines to warehouse aisles and
              loading docks, here is what 95,000 square feet of manufacturing
              capability looks like.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Facility Tour
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              See Our Facility in Action
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Take a virtual walk through our blending, filling, packaging,
              and warehousing operations.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="U1Dynamics Manufacturing Facility Tour"
              src="https://www.youtube.com/embed/QM8CQ6vG3Gw"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Strategic Location
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Why Houston Matters
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our Pasadena, Texas location is not an accident. It is a
              strategic advantage for every partner we serve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="border border-gray-200 rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {adv.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Find Us
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              4468 Genoa Red Bluff Road, Pasadena, TX 77505
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Located in the heart of the Houston petrochemical corridor, just
              minutes from the Port of Houston and major highway interchanges.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="U1Dynamics Facility Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.123!2d-95.1513!3d29.6633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640987c29d8f46f!2s4468+Genoa+Red+Bluff+Rd!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Want to Visit or Start a Conversation?
          </h2>
          <p className="text-gray-400 mb-8">
            We welcome facility visits from potential partners and customers.
            See our operations firsthand, meet the team, and learn how we can
            support your lubricant manufacturing needs. Reach out and we will
            set it up.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
