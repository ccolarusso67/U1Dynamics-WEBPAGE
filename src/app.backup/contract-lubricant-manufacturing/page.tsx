import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Contract Lubricant Manufacturing | Scale Production with U1Dynamics",
  description:
    "Outsource lubricant production to U1Dynamics Manufacturing LLC. Contract blending, filling, and packaging for engine oils, gear oils, hydraulic fluids, coolants, and DEF at our Pasadena, Texas facility.",
  alternates: {
    canonical: "/contract-lubricant-manufacturing",
  },
  openGraph: {
    title:
      "Contract Lubricant Manufacturing | Scale Production with U1Dynamics",
    description:
      "Outsource lubricant production to U1Dynamics Manufacturing LLC. Contract blending, filling, and packaging for engine oils, gear oils, hydraulic fluids, coolants, and DEF at our Pasadena, Texas facility.",
    url: "https://u1dynamics.com/contract-lubricant-manufacturing",
  },
};

export default function ContractLubricantManufacturingPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Contract Manufacturing"
      breadcrumbHref="/contract-lubricant-manufacturing"
      badge="Contract Manufacturing"
      title="Contract Lubricant Manufacturing Built for Scale and Precision"
      subtitle="For brands that need reliable production capacity without building their own plant, U1Dynamics offers contract manufacturing with the quality, flexibility, and speed your business demands."
      heroImage="/images/facility/production-line-overview.jpg"
      heroImageAlt="U1Dynamics contract lubricant manufacturing production line"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "1,000+", label: "SKUs Produced" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production Capacity" },
      ]}
      capabilitiesTitle="End-to-End Manufacturing Solutions"
      capabilitiesDescription="We manage the entire production lifecycle so you can focus on growing your brand and serving your customers."
      capabilities={[
        {
          title: "Blending & Mixing",
          description:
            "Our automated blending systems handle everything from small specialty batches to high-volume production runs. We blend conventional and synthetic motor oils, gear lubricants, hydraulic fluids, coolants, and industrial fluids with precision and consistency.",
        },
        {
          title: "Filling Lines",
          description:
            "Multiple automated filling lines allow us to run different products and packaging formats simultaneously. From quart bottles to 275-gallon totes, our equipment is calibrated for accuracy and speed without sacrificing quality.",
        },
        {
          title: "Quality Assurance",
          description:
            "Every batch is tested in our on-site laboratory before release. We perform viscosity, density, flash point, and other critical tests to ensure every product leaving our facility meets the exact specifications required.",
        },
        {
          title: "Packaging & Labeling",
          description:
            "We handle complete packaging operations including container filling, capping, labeling, shrink wrapping, and palletizing. Your products arrive shelf-ready with the professional finish your brand demands.",
        },
        {
          title: "Warehousing",
          description:
            "Our facility includes dedicated warehousing space for raw materials and finished goods. We can hold inventory and release shipments on your schedule, reducing your need for separate storage and logistics coordination.",
        },
        {
          title: "Logistics & Shipping",
          description:
            "We coordinate domestic and international shipping from our Pasadena, Texas location. Full truckload, LTL, ocean freight, and container loading are all handled in-house so your products reach any destination efficiently.",
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
      packagingImageAlt="Multiple filling nozzles for contract lubricant manufacturing"
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
          label: "Consultation",
          description:
            "We discuss your product requirements, volume needs, packaging preferences, and timeline to build a manufacturing plan that fits your business.",
        },
        {
          label: "Planning",
          description:
            "Our team maps out the production schedule, sources raw materials, and prepares formulation and packaging specifications for your approval.",
        },
        {
          label: "Production",
          description:
            "Base oils and additives are blended according to your specifications in our automated systems, ensuring batch-to-batch consistency at any volume.",
        },
        {
          label: "Quality Testing",
          description:
            "Each batch is tested in our on-site lab against your product specifications. We hold production until every parameter is confirmed within tolerance.",
        },
        {
          label: "Packaging",
          description:
            "Finished product is filled, capped, labeled, and palletized on our automated lines. Every unit is inspected before moving to the warehouse.",
        },
        {
          label: "Delivery",
          description:
            "We coordinate shipment to your warehouse, distribution centers, or directly to your customers via truck, rail, or ocean container.",
        },
      ]}
      faqs={[
        {
          question: "What is contract lubricant manufacturing?",
          answer:
            "Contract manufacturing means you outsource the production of your lubricant products to a facility like ours. You maintain control of your brand, formulations, and sales channels while we handle the blending, filling, packaging, and quality testing. It allows you to scale production without investing millions in your own plant, equipment, and staff.",
        },
        {
          question: "What types of fluids can you manufacture?",
          answer:
            "We manufacture a full range of automotive and industrial fluids including conventional and synthetic motor oils, gear oils, automatic and manual transmission fluids, hydraulic oils, greases, antifreeze and coolants, diesel exhaust fluid, brake fluid, and specialty industrial lubricants. If you have a product that is not on this list, contact us to discuss whether we can produce it.",
        },
        {
          question: "What is your production capacity?",
          answer:
            "Our 95,000 square foot facility operates around the clock with multiple blending tanks and filling lines running simultaneously. We produce over 1,000 SKUs for clients across the U.S. and more than 38 international markets. Whether you need a few hundred cases per month or full container loads weekly, we have the capacity to handle it.",
        },
        {
          question: "How do you ensure quality and consistency?",
          answer:
            "Quality is built into every step of our process. We test incoming raw materials, monitor blending parameters in real time, and perform comprehensive lab testing on every finished batch. Our facility maintains full lot traceability, and we retain samples from every production run. If a product does not meet spec, it does not ship.",
        },
        {
          question: "What are typical lead times for contract manufacturing?",
          answer:
            "For standard products with materials in stock, typical production lead times are 2 to 4 weeks from order confirmation. Custom formulations or specialty packaging may require additional time for material sourcing and setup. We work closely with our clients on production planning to ensure on-time delivery, and we prioritize clear communication if anything affects the schedule.",
        },
        {
          question: "Is there a minimum order quantity?",
          answer:
            "Minimum order quantities depend on the product type and packaging format. We work with companies of all sizes, from growing brands placing their first production order to established distributors running large volumes every month. Contact our team to discuss your requirements and we will put together a plan that makes sense for your current volume and growth trajectory.",
        },
      ]}
      ctaTitle="Scale Your Production with Confidence"
      ctaDescription="Outsource your lubricant production to a facility built for precision, speed, and reliability. Let us handle manufacturing so you can focus on growing your business."
      secondaryTitle="Manufacturing Capacity Without the Capital Investment"
      secondaryDescription="Building your own lubricant manufacturing facility requires millions in equipment, real estate, and staffing before you produce a single gallon. With U1Dynamics as your contract manufacturer, you get immediate access to a fully equipped 95,000 square foot production facility, experienced operators, automated filling lines, and an on-site quality lab. You get the production capacity of a major manufacturer without the overhead. Our team becomes an extension of yours, and we are invested in your success because long-term partnerships are how we have built this business."
      secondaryImage="/images/facility/interior-wide.jpg"
      secondaryImageAlt="Interior of U1Dynamics manufacturing facility"
    />
  );
}
