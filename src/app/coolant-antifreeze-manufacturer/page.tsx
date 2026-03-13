import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Coolant & Antifreeze Manufacturer | Automotive and Heavy-Duty Formulations",
  description:
    "U1Dynamics manufactures coolants and antifreeze for automotive, heavy-duty, and industrial applications. Extended life coolants, conventional formulations, and private label programs from our Texas facility.",
  alternates: {
    canonical: "/coolant-antifreeze-manufacturer",
  },
  openGraph: {
    title:
      "Coolant & Antifreeze Manufacturer | Automotive and Heavy-Duty Formulations",
    description:
      "U1Dynamics manufactures coolants and antifreeze for automotive, heavy-duty, and industrial applications. Extended life coolants, conventional formulations, and private label programs from our Texas facility.",
    url: "https://u1dynamics.com/coolant-antifreeze-manufacturer",
  },
};

export default function CoolantAntifreezeManufacturerPage() {
  return (
    <ServicePageLayout
      badge="Coolant Manufacturing"
      title="Coolant and Antifreeze Manufacturing for Every Application"
      subtitle="From extended life automotive coolants to heavy-duty antifreeze formulations, we manufacture and package coolant products that meet the demands of modern engines and equipment."
      heroImage="/images/facility/raw-material-storage.jpg"
      heroImageAlt="Raw material storage for coolant and antifreeze manufacturing at U1Dynamics"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "OAT/HOAT", label: "Technologies" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production" },
      ]}
      capabilitiesTitle="Comprehensive Coolant Manufacturing"
      capabilitiesDescription="Our facility supports the full range of coolant technologies and formulation types for automotive, commercial, and industrial applications."
      capabilities={[
        {
          title: "Extended Life Coolants (OAT)",
          description:
            "Organic Acid Technology coolants designed for extended drain intervals in modern engines. These formulations protect against corrosion without the silicate drop-out issues found in older chemistries, making them the standard for most late-model vehicles.",
        },
        {
          title: "Hybrid Coolants (HOAT)",
          description:
            "Hybrid Organic Acid Technology blends combine the long-life benefits of OAT with supplemental additives for enhanced protection. Ideal for applications that require compatibility with older cooling system components and mixed-fleet environments.",
        },
        {
          title: "Conventional Coolants (IAT)",
          description:
            "Inorganic Acid Technology formulations for legacy vehicles and equipment that require traditional silicate-based protection. We produce both full-strength concentrates and prediluted ready-to-use formats.",
        },
        {
          title: "Heavy-Duty Coolants",
          description:
            "Purpose-built formulations for diesel engines, heavy equipment, and commercial fleets. These products include supplemental coolant additives (SCAs) that protect wet-sleeve liners against cavitation and pitting.",
        },
        {
          title: "Prediluted & Concentrate Formats",
          description:
            "We manufacture both 50/50 prediluted coolants ready for immediate use and full-strength concentrates that allow end users to mix to their preferred ratio. Both formats are available across all coolant chemistries.",
        },
        {
          title: "Private Label Coolant Programs",
          description:
            "Build your coolant brand on our manufacturing infrastructure. We handle formulation, blending, filling, and packaging while you own the brand, the customer relationships, and the margins.",
        },
      ]}
      packagingFormats={[
        "Gallon bottles",
        "Half-gallon bottles",
        "5-gallon pails",
        "55-gallon drums",
        "275-gallon totes",
        "Bulk tanker",
        "Custom formats",
      ]}
      packagingImage="/images/facility/filling-bottles.jpg"
      packagingImageAlt="Coolant bottle filling line at U1Dynamics manufacturing"
      industries={[
        "Automotive Aftermarket",
        "Heavy-Duty & Fleet",
        "Agriculture & Off-Road",
        "Marine",
        "Industrial & Manufacturing",
        "Government",
        "Retail & Distribution",
      ]}
      processSteps={[
        {
          label: "Formulation",
          description:
            "We select the right base chemistry — OAT, HOAT, or IAT — and dial in the additive package to meet your target specifications and OEM compatibility requirements.",
        },
        {
          label: "Blending",
          description:
            "Raw materials are blended in temperature-controlled mixing vessels to ensure uniform additive distribution and consistent concentration across the entire batch.",
        },
        {
          label: "Quality Testing",
          description:
            "Every batch is tested for pH, reserve alkalinity, freeze point, specific gravity, and additive concentrations before it is approved for filling.",
        },
        {
          label: "Filling",
          description:
            "Automated filling lines handle bottles, pails, drums, and totes with precision metering to maintain accurate fill volumes and prevent cross-contamination between product types.",
        },
        {
          label: "Packaging",
          description:
            "Finished products are labeled, sealed, date-coded, and palletized according to your specifications. Custom case packs and retail-ready configurations are available.",
        },
        {
          label: "Shipment",
          description:
            "Orders ship from our Pasadena, Texas facility via LTL, full truckload, or bulk tanker. Our logistics team coordinates delivery schedules to keep your inventory on track.",
        },
      ]}
      faqs={[
        {
          question: "What types of coolant do you manufacture?",
          answer:
            "We manufacture the full range of coolant technologies: OAT (Organic Acid Technology) for extended life applications, HOAT (Hybrid Organic Acid Technology) for mixed-fleet compatibility, and IAT (Inorganic Acid Technology) for conventional applications. Each is available as a concentrate or prediluted 50/50 blend in multiple colors.",
        },
        {
          question:
            "How do I know which coolant type is right for my application?",
          answer:
            "The right coolant depends on the engine manufacturer's specifications, the age of the equipment, and the operating environment. Our technical team can help you match the correct chemistry to your application. If you are building a product line, we can also help you select the formulations that cover the broadest range of your target market.",
        },
        {
          question: "Do you offer private label coolant programs?",
          answer:
            "Yes. Our private label program is one of the most popular services we offer. We work with brands, distributors, and retailers who want to sell coolant under their own name without investing in manufacturing equipment. We handle everything from formulation and blending to filling, labeling, and shipping.",
        },
        {
          question: "Can you match OEM coolant specifications?",
          answer:
            "We formulate coolants to meet or exceed a wide range of OEM specifications. Whether you need a product that aligns with a specific automaker's requirements or an industry standard like ASTM D3306 or D6210, our lab can develop and validate the formulation.",
        },
        {
          question: "What are the minimum order quantities for coolant?",
          answer:
            "MOQs vary by packaging format and product type. We serve customers ranging from regional distributors placing smaller initial orders to national accounts running full production campaigns. Reach out to our sales team and we will put together quantities and pricing that make sense for your volume.",
        },
        {
          question: "What packaging options are available for coolant?",
          answer:
            "We fill coolant into half-gallon bottles, gallon bottles, 5-gallon pails, 55-gallon drums, 275-gallon totes, and bulk tanker loads. We can also accommodate custom container shapes and sizes if you have specific retail or commercial packaging requirements.",
        },
      ]}
      ctaTitle="Need a Coolant Manufacturing Partner?"
      ctaDescription="From formulation to fulfillment, we help brands bring coolant and antifreeze products to market with confidence."
      secondaryTitle="Modern Coolant Technology for Modern Engines"
      secondaryDescription="Today's engines run hotter, last longer, and use lighter-weight materials than ever before. That means the coolant protecting them has to keep up. Our OAT and HOAT formulations are engineered for the demands of modern powertrains — delivering long-lasting corrosion protection for aluminum components, robust cavitation resistance for heavy-duty diesel liners, and stable performance across a wide temperature range. Whether you are supplying the automotive aftermarket or equipping a commercial fleet, we build coolant products that meet the specifications your customers depend on."
      secondaryImage="/images/facility/blending-vortex.jpg"
      secondaryImageAlt="Coolant blending process at U1Dynamics facility"
    />
  );
}
