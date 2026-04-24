import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Toll Blending Lubricants | Custom Formulation, Blending & Packaging",
  description:
    "U1Dynamics provides toll blending services for lubricant companies with proprietary formulations. Custom blending, filling, and packaging from our 95,000 sq ft manufacturing facility in Pasadena, Texas.",
  alternates: {
    canonical: "/toll-blending-lubricants",
  },
  openGraph: {
    title:
      "Toll Blending Lubricants | Custom Formulation, Blending & Packaging",
    description:
      "U1Dynamics provides toll blending services for lubricant companies with proprietary formulations. Custom blending, filling, and packaging from our 95,000 sq ft manufacturing facility in Pasadena, Texas.",
    url: "https://u1dynamics.com/toll-blending-lubricants",
  },
};

export default function TollBlendingLubricantsPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Toll Blending"
      breadcrumbHref="/toll-blending-lubricants"
      badge="Toll Blending Services"
      title="Toll Blending for Lubricant Companies with Proprietary Formulations"
      subtitle="Bring your formula. We bring the facility, the equipment, and the expertise to blend it at scale with precision and consistency."
      heroImage="/images/facility/blending-vortex.jpg"
      heroImageAlt="Lubricant toll blending vortex during custom formulation manufacturing"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "1,000+", label: "SKUs Produced" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production Capacity" },
      ]}
      capabilitiesTitle="Precision Toll Blending Services"
      capabilitiesDescription="We handle your proprietary formulations with strict protocols, precise measurement, and complete confidentiality at every stage of production."
      capabilities={[
        {
          title: "Formula Confidentiality",
          description:
            "Your formulations are your competitive advantage, and we treat them accordingly. We implement strict confidentiality protocols, limit access to authorized personnel only, and can execute non-disclosure agreements before any formula is shared. Your intellectual property stays yours.",
        },
        {
          title: "Batch Blending",
          description:
            "Our blending systems are calibrated for precision across a wide range of batch sizes and viscosity grades. We follow your exact formula specifications for base oils, additives, and treat rates to deliver consistent results every time.",
        },
        {
          title: "Small & Large Runs",
          description:
            "Whether you need a single tank of a specialty product or ongoing production of your core line, our facility is built to flex. We run small test batches with the same attention to detail we give high-volume orders.",
        },
        {
          title: "Raw Material Sourcing",
          description:
            "We can source base oils, additive packages, and specialty chemicals through our established supplier network, or we can work with materials you supply. Either way, we verify incoming material quality before it enters the blending process.",
        },
        {
          title: "Dedicated Equipment",
          description:
            "For clients with cross-contamination concerns or unique product requirements, we can dedicate specific blending tanks and filling lines to your products. This ensures product purity and eliminates any risk of contamination between runs.",
        },
        {
          title: "Batch Documentation",
          description:
            "Every toll blending run is fully documented with batch records, raw material lot numbers, blending parameters, and quality test results. You receive complete documentation for every production run for your internal records and regulatory requirements.",
        },
      ]}
      packagingFormats={[
        "Quart bottles",
        "Gallon containers",
        "5-quart jugs",
        "5-gallon pails",
        "55-gallon drums",
        "275-gallon totes",
        "Flexibags",
        "Custom formats",
      ]}
      packagingImage="/images/facility/filling-nozzles.jpg"
      packagingImageAlt="Filling nozzles for toll blended lubricant packaging"
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
          label: "Formula Review",
          description:
            "We review your proprietary formulation, discuss production requirements, and confirm that our equipment and capabilities are the right fit for your product.",
        },
        {
          label: "Material Sourcing",
          description:
            "We source the required base oils, additive packages, and specialty components through our supplier network, or receive materials you provide directly.",
        },
        {
          label: "Blending",
          description:
            "Your formula is blended in our automated systems following your exact specifications for temperatures, mixing times, and treat rates.",
        },
        {
          label: "Quality Verification",
          description:
            "Each batch is tested in our lab against your product specifications. We verify viscosity, density, flash point, and any other parameters you require before release.",
        },
        {
          label: "Filling",
          description:
            "Approved product is filled into your chosen packaging format, labeled, capped, and palletized on our automated lines.",
        },
        {
          label: "Shipment",
          description:
            "Finished goods are shipped to your facility, distribution centers, or directly to your customers via your preferred logistics method.",
        },
      ]}
      faqs={[
        {
          question: "What is the difference between toll blending and contract manufacturing?",
          answer:
            "In toll blending, you provide the formulation and we blend it for you using our facility and equipment. You own the formula and the intellectual property. In contract manufacturing, we may develop the formulation for you as part of a broader manufacturing agreement. Toll blending is ideal for companies that have their own R&D and proprietary formulas but need production capacity.",
        },
        {
          question: "How do you protect our proprietary formulations?",
          answer:
            "We take formula confidentiality seriously. Access to your formulation data is restricted to authorized production personnel only. We execute non-disclosure agreements before any formulas are shared, and we maintain strict information security protocols throughout our facility. Your formula is your business, and we treat it that way.",
        },
        {
          question: "What batch sizes can you handle?",
          answer:
            "We can blend batches ranging from a few hundred gallons for specialty products up to large-volume runs for high-demand SKUs. Our multiple blending tanks of varying sizes allow us to match the right equipment to your batch requirements, which means you are not paying for excess capacity on smaller runs.",
        },
        {
          question: "Do we need to supply our own raw materials?",
          answer:
            "Either way works. We can source base oils, additive packages, and other raw materials through our established supplier network, or you can ship your own materials to our facility. Many clients prefer that we handle sourcing for convenience, while others supply specific proprietary additives. We are flexible and will work with whatever approach fits your business.",
        },
        {
          question: "What is the typical turnaround time for toll blending?",
          answer:
            "For standard products with available materials, turnaround is typically 2 to 3 weeks from the time materials are on hand. Initial runs for new products may take slightly longer as we dial in the process and confirm quality parameters. We plan production schedules collaboratively with our clients and prioritize on-time delivery.",
        },
        {
          question: "Can you fill into packaging we supply?",
          answer:
            "Yes. We can fill into containers, bottles, pails, drums, or totes that you supply, or we can source packaging on your behalf. If you are supplying your own packaging, we will work with you on specifications to make sure it is compatible with our filling lines and meets quality standards.",
        },
      ]}
      ctaTitle="Your Formula. Our Facility."
      ctaDescription="Bring your proprietary formulations to a facility built for precision toll blending. We handle production so you can focus on your customers and your business."
      secondaryTitle="Your Intellectual Property Is Protected"
      secondaryDescription="When you trust a toll blender with your proprietary formulation, you need to know it is in safe hands. At U1Dynamics, we have built our processes around protecting our clients' intellectual property. From restricted access controls and NDA-backed confidentiality agreements to dedicated equipment options and secure batch documentation, every aspect of our toll blending program is designed to keep your formulations confidential. We have earned the trust of lubricant brands across the U.S. and internationally, and we understand that protecting your competitive advantage is not optional. It is fundamental to the partnership."
      secondaryImage="/images/facility/blending-composite.jpg"
      secondaryImageAlt="Lubricant blending equipment at U1Dynamics"
    />
  );
}
