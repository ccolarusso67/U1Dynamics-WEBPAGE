import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Blending Engineering",
    description: "Precision-calibrated systems for petroleum lubricants and specialty products.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Water-Based Blending",
    description: "Coolants, antifreeze, windshield fluid, and industrial cleaners.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Contract Filling",
    description: "High-speed automated lines for bottles, pails, drums, and totes.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
  {
    title: "Private Label",
    description: "End-to-end product development, filling, packaging, and labeling.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
  },
];

const stats = [
  { value: "95,000", label: "Sq Ft Facility" },
  { value: "1,000+", label: "SKUs Manufactured" },
  { value: "15+", label: "Export Markets" },
  { value: "24/7", label: "Production Ready" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/facility/aerial-hero.jpg"
          alt="U1Dynamics Manufacturing Facility"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-5">
              Precision Manufacturing. Delivered.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Petroleum and water-based product blending, contract filling, and private label manufacturing from our 95,000 sq ft facility in Pasadena, Texas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">Our Products</Link>
              <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-3">What We Do</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              End-to-end manufacturing from formulation to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 text-accent mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Our Facility</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              95,000 square feet of advanced manufacturing in the Houston petrochemical corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { src: "/images/facility/production-team.jpg", alt: "Production team" },
              { src: "/images/facility/drums-usa-workers.jpg", alt: "Drum filling line" },
              { src: "/images/facility/team-packing.jpg", alt: "Order fulfillment" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/QM8CQ6vG3Gw"
              title="U1Dynamics Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you need petroleum blending, water-based formulations, or complete private label solutions.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
