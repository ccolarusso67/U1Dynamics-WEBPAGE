import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality & Compliance | Testing, Standards & Quality Assurance",
  description:
    "U1Dynamics maintains rigorous quality control and compliance standards across all manufacturing operations. Batch testing, raw material inspection, and industry-standard protocols.",
  alternates: {
    canonical: "/quality-compliance",
  },
};

const qcSteps = [
  {
    step: "01",
    title: "Raw Material Inspection",
    description:
      "Every base oil, additive package, and chemical raw material is sampled and tested upon arrival. We verify supplier certificates of analysis against our own in-house lab results before any material enters the blending process. Nothing gets blended until it passes.",
  },
  {
    step: "02",
    title: "In-Process Testing",
    description:
      "During blending, our lab monitors key parameters including temperature, viscosity, and additive treat rates to ensure the formulation is tracking to specification. If a blend drifts, we catch it in real time and correct before it becomes a finished product.",
  },
  {
    step: "03",
    title: "Final Product Testing",
    description:
      "Once blending is complete, every batch undergoes a full panel of finished product tests: viscosity at 40C and 100C, flash point, pour point, specific gravity, color, and additive element analysis. Only batches that meet all specification parameters move forward.",
  },
  {
    step: "04",
    title: "Documentation & Traceability",
    description:
      "Each batch is assigned a unique lot number that follows the product from raw material receipt through final shipment. Certificates of Analysis are generated for every production run and retained for full traceability. You can trace any product back to the raw materials that built it.",
  },
  {
    step: "05",
    title: "Release & Certification",
    description:
      "Products are released for filling and shipment only after quality control signs off. COAs accompany every order, and retain samples are stored for post-shipment reference. Our release process ensures nothing leaves the building without documented proof of quality.",
  },
];

const standards = [
  {
    title: "API Licensing",
    description:
      "Products formulated and tested to meet American Petroleum Institute performance categories for motor oils, gear oils, and transmission fluids.",
  },
  {
    title: "ISO 22241 (DEF)",
    description:
      "Diesel Exhaust Fluid manufactured to ISO 22241 purity standards, ensuring compliance with SCR system requirements and OEM specifications.",
  },
  {
    title: "SAE Viscosity Standards",
    description:
      "All lubricant products are formulated and verified against SAE J300 viscosity classification standards for consistent performance.",
  },
  {
    title: "ASTM Test Methods",
    description:
      "Laboratory testing follows ASTM International standard test methods for viscosity, flash point, pour point, density, and other critical parameters.",
  },
  {
    title: "GHS Labeling Compliance",
    description:
      "All product labels comply with Globally Harmonized System requirements for hazard communication, safety data, and regulatory marking.",
  },
  {
    title: "DOT & Export Compliance",
    description:
      "Packaging and shipping procedures meet Department of Transportation regulations and international export compliance requirements for hazardous materials.",
  },
];

export default function QualityCompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-4"
            style={{ color: "#2563EB" }}
          >
            Quality Assurance
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Quality & Compliance
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe quality is not something you inspect into a product at
            the end of the line. It is something you build into every step of
            the process, from the moment raw materials arrive at our door to the
            moment finished goods leave on a truck.
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
            Our Approach to Quality
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At U1Dynamics, quality is a discipline practiced by everyone on the
            production floor, not just the lab technicians. Our quality control
            program is designed to prevent defects rather than detect them after
            the fact. Every team member understands the specifications, every
            instrument is calibrated, and every process has documented
            procedures.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When partners trust us with their brand, they are trusting us to
            deliver products that perform exactly as specified, batch after
            batch. That trust is not something we take lightly. It is the
            foundation of every relationship we build and every product we ship.
          </p>
        </div>
      </section>

      {/* QC Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Quality Control Process
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Five Stages of Quality Assurance
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every product passes through five quality checkpoints before it
              reaches your hands. No shortcuts, no exceptions.
            </p>
          </div>
          <div className="space-y-8">
            {qcSteps.map((item) => (
              <div
                key={item.step}
                className="grid md:grid-cols-12 gap-6 items-start border border-gray-200 rounded-xl p-6 sm:p-8"
              >
                <div className="md:col-span-1">
                  <span
                    className="text-2xl font-black"
                    style={{ color: "#2563EB" }}
                  >
                    {item.step}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: "#2563EB" }}
            >
              Standards & Compliance
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Industry Standards We Follow
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our manufacturing processes and products align with recognized
              industry standards and regulatory frameworks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard) => (
              <div
                key={standard.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {standard.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Image */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/facility/lab-testing.jpg"
              alt="U1Dynamics quality control laboratory with testing equipment for lubricant analysis"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Our in-house laboratory tests every batch for viscosity, flash
            point, pour point, and additive chemistry before release.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Quality You Can Document and Defend
          </h2>
          <p className="text-gray-400 mb-8">
            Every product we ship comes with a Certificate of Analysis and full
            batch traceability. If your customers or regulators have questions,
            you will have answers. Let us show you what rigorous quality
            control looks like in practice.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
