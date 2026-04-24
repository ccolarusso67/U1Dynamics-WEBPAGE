import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Lubricant Contract Packaging | Quarts, Gallons, Pails, Drums, Totes & Flexibags",
  description:
    "U1Dynamics offers contract packaging services for lubricants, DEF, coolants, and industrial fluids. Multiple filling lines for quarts, gallons, pails, drums, totes, and flexibags.",
  alternates: {
    canonical: "/lubricant-contract-packaging",
  },
  openGraph: {
    title:
      "Lubricant Contract Packaging | Quarts, Gallons, Pails, Drums, Totes & Flexibags",
    description:
      "U1Dynamics offers contract packaging services for lubricants, DEF, coolants, and industrial fluids. Multiple filling lines for quarts, gallons, pails, drums, totes, and flexibags.",
    url: "https://u1dynamics.com/lubricant-contract-packaging",
  },
};

export default function LubricantContractPackagingPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Contract Packaging"
      breadcrumbHref="/lubricant-contract-packaging"
      badge="Contract Packaging"
      title="Lubricant Contract Packaging from Quarts to Flexibags"
      subtitle="Our filling facility handles diverse packaging formats with automated lines built for speed, accuracy, and flexibility."
      heroImage="/images/facility/filling-closeup.jpg"
      heroImageAlt="Precision lubricant bottle filling at U1Dynamics contract packaging facility"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "1,000+", label: "SKUs Produced" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production Capacity" },
      ]}
      capabilitiesTitle="Comprehensive Packaging Solutions"
      capabilitiesDescription="Our flexible packaging capabilities let you choose the right format for your market, whether that is retail shelves, fleet service bays, or industrial bulk delivery."
      capabilities={[
        {
          title: "Bottle Filling",
          description:
            "High-speed automated filling lines for quart, gallon, and 5-quart bottles. Our equipment handles a range of bottle shapes and sizes with precise fill volumes and consistent torque on every cap.",
        },
        {
          title: "Pail & Drum Filling",
          description:
            "Dedicated filling stations for 5-gallon pails and 55-gallon drums. We handle open-head and tight-head drums with accurate fills, proper sealing, and labeling for commercial and industrial distribution.",
        },
        {
          title: "Tote & Bulk Filling",
          description:
            "275-gallon IBC totes and flexibag filling for bulk shipments and export markets. Our bulk filling operations are designed for speed and accuracy on large-volume orders heading to domestic or international destinations.",
        },
        {
          title: "Labeling & Shrink Wrap",
          description:
            "Automated labeling systems apply front, back, and wraparound labels with precision alignment. Shrink wrap and tamper-evident seals are applied inline to give your product a professional, retail-ready finish.",
        },
        {
          title: "Palletizing",
          description:
            "Finished products are palletized to your specifications, stretch wrapped, and staged for shipment. We follow standard pallet configurations or custom stacking patterns based on your distribution requirements.",
        },
        {
          title: "Custom Packaging",
          description:
            "Need a unique bottle shape, a specialty container, or non-standard packaging for a specific market? We work with packaging suppliers to source custom formats and configure our lines to handle them efficiently.",
        },
      ]}
      packagingFormats={[
        "Quart bottles",
        "Gallon containers",
        "5-quart jugs",
        "5-gallon pails",
        "55-gallon drums",
        "275-gallon totes",
        "330-gallon totes",
        "Flexibags",
        "Bag-in-box",
        "Custom bottles",
        "Aerosol cans",
        "Custom formats",
      ]}
      packagingImage="/images/facility/filling-nozzles.jpg"
      packagingImageAlt="Automated filling nozzles at U1Dynamics packaging facility"
      industries={[
        "Automotive Aftermarket",
        "Heavy-Duty & Fleet",
        "Agriculture & Construction",
        "Marine",
        "Industrial & Manufacturing",
        "Government & Military",
        "Retail & Distribution",
      ]}
      processSteps={[
        {
          label: "Specification",
          description:
            "We review your product specifications, packaging requirements, labeling artwork, and volume needs to build a detailed packaging plan.",
        },
        {
          label: "Line Setup",
          description:
            "Our team configures the appropriate filling line for your container type, calibrates fill volumes, and runs test units to confirm accuracy before production begins.",
        },
        {
          label: "Filling",
          description:
            "Product is filled into your chosen containers at high speed with automated volume controls that ensure every unit meets your fill specification.",
        },
        {
          label: "Labeling",
          description:
            "Labels are applied with precision alignment on automated labeling equipment. Caps are torqued, tamper seals applied, and each unit is inspected inline.",
        },
        {
          label: "Palletizing",
          description:
            "Finished units are case-packed or tray-packed, palletized to your configuration, and stretch wrapped for secure transit.",
        },
        {
          label: "Shipping",
          description:
            "Palletized product is staged in our warehouse and shipped on your schedule via full truckload, LTL, or container load to any destination.",
        },
      ]}
      faqs={[
        {
          question: "What packaging formats do you offer?",
          answer:
            "We fill quart bottles, gallon jugs, 5-quart containers, 5-gallon pails, 55-gallon drums, 275-gallon and 330-gallon IBC totes, flexibags for bulk export, and custom packaging formats. If you have a specific container or format in mind, let us know and we will confirm whether our lines can handle it or help you find a solution that works.",
        },
        {
          question: "What is the minimum order quantity per packaging format?",
          answer:
            "MOQs vary by format. Bottle runs typically start at a few hundred cases, while drum and tote orders can be as low as a single pallet. We understand that different products and markets have different volume needs, so we work with you to find production minimums that make economic sense without requiring you to overcommit on inventory.",
        },
        {
          question: "Can you fill into custom bottles or containers we supply?",
          answer:
            "Yes. We regularly fill into customer-supplied bottles, pails, drums, and totes. If you are providing your own packaging, we will review the specifications to ensure compatibility with our filling lines. We recommend sending samples before the first production run so we can test and calibrate the line for your specific container.",
        },
        {
          question: "Do you handle labeling and label printing?",
          answer:
            "We handle label application on our automated labeling lines. For label printing, we work with trusted printing partners and can manage the entire process on your behalf, from artwork preparation to printed label delivery. Many of our clients provide their own printed labels, and we apply them with consistent alignment and placement.",
        },
        {
          question: "What is the typical turnaround time for a packaging order?",
          answer:
            "Standard packaging runs are typically completed within 1 to 3 weeks depending on volume, format, and material availability. If we are filling product that is already blended and packaging materials are on hand, turnaround can be even faster. We schedule production in advance and communicate timelines clearly so there are no surprises.",
        },
        {
          question: "Can you package products we have already blended elsewhere?",
          answer:
            "Absolutely. We offer packaging-only services for companies that handle their own blending but need a professional filling and packaging operation. You ship us bulk product, and we fill, label, palletize, and ship the finished goods to your specifications. This is a common arrangement for companies expanding into new packaging formats without investing in their own filling equipment.",
        },
      ]}
      ctaTitle="Need Contract Packaging?"
      ctaDescription="From quart bottles to flexibags, our filling facility is built to handle your packaging needs with speed, precision, and the flexibility to scale with your business."
      secondaryTitle="Multiple Filling Lines. One Reliable Partner."
      secondaryDescription="Running multiple packaging formats efficiently requires the right equipment, the right people, and the right systems. At U1Dynamics, our facility houses multiple automated filling lines that can run different products and container types simultaneously. That means we can fill your quart bottles on one line while packaging drums on another, all under the same roof with the same quality standards. Our team has decades of combined experience in lubricant packaging, and we have built our operation to be the kind of partner you can rely on for consistent quality, on-time delivery, and the flexibility to handle whatever your business throws at us."
      secondaryImage="/images/facility/bottles-line.jpg"
      secondaryImageAlt="Automated bottle filling line at U1Dynamics"
    />
  );
}
