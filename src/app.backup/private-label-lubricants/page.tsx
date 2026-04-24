import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Private Label Lubricants | U.S. Manufacturing for Automotive, Fleet & Industrial Brands",
  description:
    "Launch or scale your lubricant brand with U1Dynamics private label manufacturing. Engine oils, gear oils, transmission fluids, coolants, DEF, and specialty lubricants from our 95,000 sq ft Texas facility.",
  alternates: {
    canonical: "/private-label-lubricants",
  },
  openGraph: {
    title:
      "Private Label Lubricants | U.S. Manufacturing for Automotive, Fleet & Industrial Brands",
    description:
      "Launch or scale your lubricant brand with U1Dynamics private label manufacturing. Engine oils, gear oils, transmission fluids, coolants, DEF, and specialty lubricants from our 95,000 sq ft Texas facility.",
    url: "https://u1dynamics.com/private-label-lubricants",
  },
};

export default function PrivateLabelLubricantsPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="Private Label Lubricants"
      breadcrumbHref="/private-label-lubricants"
      badge="Private Label Manufacturing"
      title="Private Label Lubricants Manufactured in Texas for Brands Ready to Scale"
      subtitle="Whether you are launching a new lubricant line or scaling an existing brand, U1Dynamics provides full-service private label manufacturing from formulation to fulfillment."
      heroImage="/images/facility/drums-usa-flag.jpg"
      heroImageAlt="Private label lubricant drums manufactured at U1Dynamics facility in Pasadena Texas"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "1,000+", label: "SKUs Produced" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production Capacity" },
      ]}
      capabilitiesTitle="Full-Service Private Label Program"
      capabilitiesDescription="From concept to shelf, we handle every step of bringing your branded lubricant products to market."
      capabilities={[
        {
          title: "Custom Formulation",
          description:
            "We develop formulations tailored to your performance requirements and target market. Whether you need a high-mileage motor oil or a specialty industrial lubricant, our R&D team builds it from scratch or optimizes an existing formula.",
        },
        {
          title: "Label Design Support",
          description:
            "Our design team works with you to create packaging that stands out on the shelf. From label layout and regulatory copy to color schemes and brand identity, we help you look like a national brand from day one.",
        },
        {
          title: "Product Testing & QC",
          description:
            "Every batch goes through rigorous quality control testing before it leaves our facility. We test viscosity, flash point, pour point, and other key parameters to ensure your product meets or exceeds industry specifications.",
        },
        {
          title: "Warehousing & Inventory",
          description:
            "Store your finished goods in our Pasadena facility and ship on demand. We manage inventory levels so you never run short on stock, and we can fulfill orders directly to your customers or distribution network.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Navigating API, ILSAC, and other industry certifications can be complex. We handle SDS documentation, GHS labeling requirements, and help you meet the regulatory standards your market demands.",
        },
        {
          title: "Direct Shipment",
          description:
            "We ship finished product directly to your customers, retailers, or distribution centers across the U.S. and to over 38 international markets. Full truckload, LTL, or container loads \u2014 we handle it all.",
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
      packagingImageAlt="Multiple filling nozzles for private label lubricant packaging"
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
          label: "Discover",
          description:
            "We start with a conversation about your brand goals, target market, performance requirements, and volume expectations.",
        },
        {
          label: "Formulate",
          description:
            "Our team develops or refines formulations to meet your exact specifications, whether that means API-certified motor oils or specialty industrial fluids.",
        },
        {
          label: "Blend",
          description:
            "Base oils and additives are precision-blended in our automated mixing systems to ensure consistency across every batch.",
        },
        {
          label: "Fill & Package",
          description:
            "Your product is filled into the packaging format you choose, labeled with your branding, and prepared for shipment.",
        },
        {
          label: "Test & QC",
          description:
            "Each batch is tested against your product specifications before release. We maintain full lot traceability and retain samples for reference.",
        },
        {
          label: "Ship & Distribute",
          description:
            "Finished goods ship from our facility directly to your warehouse, retail partners, or end customers anywhere in the world.",
        },
      ]}
      faqs={[
        {
          question: "What is the minimum order quantity for private label lubricants?",
          answer:
            "Our minimum order quantities vary by product type and packaging format. For most lubricants, we can start with runs as low as a few hundred cases. We work with brands at every stage, from startups placing their first order to established companies running tens of thousands of units per month. Contact us to discuss your specific needs and we will find a production plan that fits.",
        },
        {
          question: "What products can be private labeled?",
          answer:
            "We private label a full range of automotive and industrial fluids including conventional and synthetic motor oils, transmission fluids, gear oils, hydraulic fluids, greases, coolants, DEF (diesel exhaust fluid), brake fluids, and specialty lubricants. If you have a product category in mind that is not listed here, reach out and we will let you know if we can produce it.",
        },
        {
          question: "How long does it take to go from concept to finished product?",
          answer:
            "For standard formulations with existing packaging formats, we can typically have your first production run completed within 4 to 6 weeks from approval. Custom formulations or specialty packaging may take 8 to 12 weeks depending on complexity, testing requirements, and label development. We move fast because we know time to market matters.",
        },
        {
          question: "What packaging options are available?",
          answer:
            "We fill into quart bottles, gallon jugs, 5-quart containers, 5-gallon pails, 55-gallon drums, 275-gallon totes, and flexibags for bulk export. We also offer custom bottle shapes and sizes for brands looking for differentiated shelf presence. All packaging is available with custom labeling.",
        },
        {
          question: "Do you provide the formulations or can we use our own?",
          answer:
            "Both. We have a library of proven, high-performance formulations that you can brand as your own, or you can bring your proprietary formula and we will blend it for you. Many of our clients start with one of our established formulations and then customize over time as their brand grows. Either way, you own the brand and we handle the manufacturing.",
        },
        {
          question: "Can you help with API certification and licensing?",
          answer:
            "Yes. We have extensive experience with API, ILSAC, and OEM certification processes. Our team can guide you through the licensing requirements and help you achieve the certifications your target market demands. This is a critical step for brands selling into the automotive aftermarket, and we handle it regularly.",
        },
      ]}
      ctaTitle="Ready to Launch Your Lubricant Brand?"
      ctaDescription="Our team can help you go from concept to market with a private label program tailored to your business."
      secondaryTitle="Your Brand. Our Manufacturing Expertise."
      secondaryDescription="Building a lubricant brand takes more than a great formula. It takes a manufacturing partner you can trust to deliver consistent quality, meet deadlines, and scale with you as you grow. At U1Dynamics, we have built our entire operation around helping brands succeed. Our 95,000 square foot facility, experienced production team, and proven quality systems give you the confidence to put your name on every bottle, drum, and tote that leaves our dock. We treat your brand like our own because your success is our success."
      secondaryImage="/images/facility/labeling-machine.jpg"
      secondaryImageAlt="Automated labeling machine applying private label branding"
    />
  );
}
