import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Diesel Exhaust Fluid Manufacturer | DEF Packaging, Bulk Supply & Private Label",
  description:
    "U1Dynamics manufactures ISO 22241 compliant diesel exhaust fluid (DEF) in retail, commercial, and bulk formats. Private label DEF programs, contract packaging, and direct shipment from Pasadena, Texas.",
  alternates: {
    canonical: "/diesel-exhaust-fluid-manufacturer",
  },
  openGraph: {
    title:
      "Diesel Exhaust Fluid Manufacturer | DEF Packaging, Bulk Supply & Private Label",
    description:
      "U1Dynamics manufactures ISO 22241 compliant diesel exhaust fluid (DEF) in retail, commercial, and bulk formats. Private label DEF programs, contract packaging, and direct shipment from Pasadena, Texas.",
    url: "https://u1dynamics.com/diesel-exhaust-fluid-manufacturer",
  },
};

export default function DieselExhaustFluidManufacturerPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="DEF Manufacturing"
      breadcrumbHref="/diesel-exhaust-fluid-manufacturer"
      badge="DEF Manufacturing"
      title="Diesel Exhaust Fluid Manufacturing for Brands and Distributors"
      subtitle="ISO 22241 compliant DEF manufactured, packaged, and shipped from our Pasadena, Texas facility. From 2.5-gallon jugs to bulk totes, we supply the formats your customers need."
      heroImage="/images/facility/ibc-tank.jpg"
      heroImageAlt="IBC tote of diesel exhaust fluid at U1Dynamics DEF manufacturing facility"
      stats={[
        { value: "ISO 22241", label: "Compliant" },
        { value: "1,000+", label: "SKUs Produced" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production" },
      ]}
      capabilitiesTitle="Full-Spectrum DEF Manufacturing"
      capabilitiesDescription="From raw material sourcing to final packaging, we handle every stage of DEF production with strict quality controls."
      capabilities={[
        {
          title: "ISO 22241 Compliance",
          description:
            "Every batch of DEF we produce meets ISO 22241 standards for purity and concentration. We maintain rigorous documentation and traceability so you can sell with confidence.",
        },
        {
          title: "Retail Packaging (2.5-Gallon Jugs)",
          description:
            "Our high-speed filling lines produce shelf-ready 2.5-gallon DEF jugs for retail and convenience store distribution. Custom labeling and case configurations available.",
        },
        {
          title: "Commercial Packaging (Drums & Totes)",
          description:
            "55-gallon drums and 275/330-gallon IBC totes for fleet operators, truck stops, and commercial accounts. Palletized and ready for direct delivery.",
        },
        {
          title: "Bulk DEF Supply",
          description:
            "Tanker-load quantities for large fleet operations, fuel distributors, and industrial users. We coordinate logistics from our facility to your storage infrastructure.",
        },
        {
          title: "Private Label DEF Programs",
          description:
            "Launch your own DEF brand without building a plant. We handle formulation, filling, labeling, and fulfillment while you focus on sales and distribution.",
        },
        {
          title: "Quality Testing & Documentation",
          description:
            "In-house laboratory testing on every production run verifies urea concentration, alkalinity, and contaminant levels. Certificates of analysis accompany every shipment.",
        },
      ]}
      packagingFormats={[
        "2.5-gallon jugs",
        "1-gallon bottles",
        "55-gallon drums",
        "275-gallon totes",
        "330-gallon totes",
        "Bulk tanker",
        "Cases (retail)",
        "Custom formats",
      ]}
      packagingImage="/images/facility/warehouse-pallets.jpg"
      packagingImageAlt="DEF packaging inventory at U1Dynamics warehouse"
      industries={[
        "Trucking & Fleet",
        "Agriculture",
        "Construction",
        "Government & Military",
        "Automotive Aftermarket",
        "Retail & Convenience",
        "Industrial",
      ]}
      processSteps={[
        {
          label: "Sourcing",
          description:
            "We procure high-purity urea and deionized water from vetted suppliers, ensuring every input meets ISO 22241 raw material specifications.",
        },
        {
          label: "Purification & Mixing",
          description:
            "Urea is dissolved in deionized water at precisely controlled temperatures and ratios to achieve the 32.5% concentration required by the standard.",
        },
        {
          label: "Quality Testing",
          description:
            "Each batch undergoes laboratory analysis for urea concentration, alkalinity, biuret content, and trace metals before it moves to the filling line.",
        },
        {
          label: "Filling",
          description:
            "Automated filling lines handle everything from 1-gallon bottles to 330-gallon IBC totes with volumetric accuracy and contamination prevention protocols.",
        },
        {
          label: "Labeling & Packaging",
          description:
            "Products are labeled with your branding or ours, serialized for traceability, and palletized for efficient warehousing and transport.",
        },
        {
          label: "Distribution",
          description:
            "Finished DEF ships from our Pasadena, Texas facility via LTL, full truckload, or bulk tanker to destinations across the U.S. and internationally.",
        },
      ]}
      faqs={[
        {
          question: "What is diesel exhaust fluid (DEF)?",
          answer:
            "DEF is a high-purity solution of 32.5% urea and 67.5% deionized water. It is injected into the exhaust stream of diesel engines equipped with Selective Catalytic Reduction (SCR) systems to convert harmful nitrogen oxides into harmless nitrogen and water vapor. DEF is required by EPA emissions regulations for most modern diesel vehicles and equipment.",
        },
        {
          question: "Is your DEF ISO 22241 certified?",
          answer:
            "Yes. All DEF manufactured at our Pasadena facility complies with ISO 22241, the international standard that governs DEF purity, concentration, and contaminant limits. We test every batch in our on-site laboratory and provide certificates of analysis with each shipment.",
        },
        {
          question: "What packaging formats are available for DEF?",
          answer:
            "We offer DEF in 1-gallon bottles, 2.5-gallon jugs, 55-gallon drums, 275-gallon totes, 330-gallon totes, and bulk tanker loads. We can also configure custom retail case packs and pallet configurations to match your distribution requirements.",
        },
        {
          question: "Do you offer private label DEF programs?",
          answer:
            "Absolutely. Our private label program covers everything from product manufacturing to label design support, filling, and fulfillment. You provide your brand identity and sales channels, and we handle production and quality assurance. Many of our partners sell DEF under their own brand without operating a single piece of manufacturing equipment.",
        },
        {
          question: "What are your minimum order quantities for DEF?",
          answer:
            "Minimum order quantities depend on the packaging format and whether you are ordering under our brand or a private label program. We work with businesses of all sizes, from regional distributors to national retailers. Contact our sales team for specific MOQ details for your situation.",
        },
        {
          question: "What is the shelf life of DEF?",
          answer:
            "When stored properly between 12 and 86 degrees Fahrenheit and out of direct sunlight, DEF has a shelf life of approximately 12 months. Higher storage temperatures can reduce shelf life. We date-code every container so you and your customers always know the production date.",
        },
      ]}
      ctaTitle="Need a Reliable DEF Supply Partner?"
      ctaDescription="Whether you need private label DEF or bulk supply, our team is ready to build a program that fits your business."
      secondaryTitle="ISO 22241 Compliance at Every Stage"
      secondaryDescription="Quality is not an afterthought in DEF manufacturing — it is the entire point. Engines and SCR systems are sensitive to contamination, which means every step of our process is designed to prevent it. From the purity of our raw water supply to the cleanliness of our filling equipment, we maintain the controls that keep your product in spec and your customers' equipment running. Every batch is tested, documented, and traceable back to the raw materials that went into it."
      secondaryImage="/images/facility/lab-testing.jpg"
      secondaryImageAlt="Quality testing in U1Dynamics laboratory"
    />
  );
}
