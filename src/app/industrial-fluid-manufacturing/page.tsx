import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Industrial Fluid Manufacturing | Hydraulic Oils, Specialty Fluids & Custom Programs",
  description:
    "U1Dynamics manufactures industrial fluids including hydraulic oils, compressor oils, metalworking fluids, degreasers, and specialty formulations. Contract manufacturing and private label programs available.",
  alternates: {
    canonical: "/industrial-fluid-manufacturing",
  },
  openGraph: {
    title:
      "Industrial Fluid Manufacturing | Hydraulic Oils, Specialty Fluids & Custom Programs",
    description:
      "U1Dynamics manufactures industrial fluids including hydraulic oils, compressor oils, metalworking fluids, degreasers, and specialty formulations. Contract manufacturing and private label programs available.",
    url: "https://u1dynamics.com/industrial-fluid-manufacturing",
  },
};

export default function IndustrialFluidManufacturingPage() {
  return (
    <ServicePageLayout
      badge="Industrial Fluids"
      title="Industrial Fluid Manufacturing for Demanding Applications"
      subtitle="Hydraulic oils, compressor oils, metalworking fluids, and specialty industrial formulations manufactured to your specifications at our Pasadena, Texas facility."
      heroImage="/images/facility/warehouse-crane.jpg"
      heroImageAlt="U1Dynamics warehouse with industrial fluid drum storage and overhead crane"
      stats={[
        { value: "95,000", label: "Sq Ft Facility" },
        { value: "Custom", label: "Formulations" },
        { value: "38+", label: "Export Markets" },
        { value: "24/7", label: "Production" },
      ]}
      capabilitiesTitle="Industrial Fluid Capabilities"
      capabilitiesDescription="We manufacture a broad range of industrial fluids for OEMs, distributors, and fleet operators who need reliable, high-performance products."
      capabilities={[
        {
          title: "Hydraulic Oils",
          description:
            "Anti-wear hydraulic fluids formulated to deliver consistent performance across a wide range of operating pressures and temperatures. Available in ISO viscosity grades from 32 to 68 and beyond, with options for zinc-free and biodegradable formulations.",
        },
        {
          title: "Compressor Oils",
          description:
            "Rotary screw, reciprocating, and centrifugal compressor oils designed for long drain intervals and excellent oxidation stability. We formulate with both mineral and synthetic base stocks to match your equipment requirements.",
        },
        {
          title: "Metalworking Fluids",
          description:
            "Cutting fluids, grinding oils, and forming lubricants that extend tool life and improve surface finish quality. Soluble oils, semi-synthetics, and full synthetics available for ferrous and non-ferrous applications.",
        },
        {
          title: "Industrial Cleaners & Degreasers",
          description:
            "Water-based and solvent-based cleaning solutions for parts washing, equipment maintenance, and facility cleaning. We can formulate to meet specific environmental or safety requirements for your operation.",
        },
        {
          title: "Specialty Formulations",
          description:
            "Transformer oils, heat transfer fluids, chain lubricants, way oils, and other niche industrial products. If your application has specific performance demands, our lab can develop a formulation to meet them.",
        },
        {
          title: "Custom Development",
          description:
            "When off-the-shelf products do not fit, our technical team works with you to develop a custom formulation from the ground up. We handle base stock selection, additive engineering, testing, and scale-up to full production.",
        },
      ]}
      packagingFormats={[
        "Quart bottles",
        "Gallon containers",
        "5-gallon pails",
        "55-gallon drums",
        "275-gallon totes",
        "Bulk tanker",
        "Custom formats",
      ]}
      packagingImage="/images/facility/drums-closeup.jpg"
      packagingImageAlt="Industrial fluid drums at U1Dynamics manufacturing facility"
      industries={[
        "Manufacturing & Processing",
        "Mining & Extraction",
        "Construction & Earthmoving",
        "Marine & Offshore",
        "Government & Military",
        "Fleet & Transportation",
        "Agriculture",
      ]}
      processSteps={[
        {
          label: "Specification Review",
          description:
            "We start by understanding your performance requirements, equipment compatibility needs, and regulatory considerations. This ensures the final product fits your application from day one.",
        },
        {
          label: "Formulation",
          description:
            "Our lab selects the optimal base stocks and additive packages to meet your target specifications. For custom products, this includes prototype development and bench testing.",
        },
        {
          label: "Blending",
          description:
            "Raw materials are blended in dedicated mixing vessels with precise temperature and agitation controls to produce a homogeneous, consistent product at scale.",
        },
        {
          label: "Testing",
          description:
            "Every batch undergoes laboratory analysis for viscosity, flash point, pour point, and application-specific properties before it is cleared for packaging.",
        },
        {
          label: "Packaging",
          description:
            "Finished product is filled into your chosen format — from quart bottles to bulk tankers — labeled, sealed, and palletized for shipment.",
        },
        {
          label: "Delivery",
          description:
            "Orders ship from Pasadena, Texas via your preferred carrier or our logistics network. We coordinate scheduling to match your production timelines and inventory needs.",
        },
      ]}
      faqs={[
        {
          question: "What types of industrial fluids do you manufacture?",
          answer:
            "We manufacture hydraulic oils, compressor oils, metalworking fluids, industrial cleaners and degreasers, transformer oils, heat transfer fluids, chain lubricants, way oils, and a range of other specialty industrial products. If it is a fluid used in an industrial setting, there is a good chance we can make it.",
        },
        {
          question: "Can you develop custom industrial fluid formulations?",
          answer:
            "Yes. Custom development is a core part of what we do. Our technical team works directly with you to understand the application, select appropriate base stocks and additives, produce prototypes, and validate performance before scaling to full production. Many of our longest-running customer relationships started with a custom formulation project.",
        },
        {
          question:
            "What are the minimum order quantities for industrial fluids?",
          answer:
            "MOQs vary depending on the product type, packaging format, and whether the formulation is standard or custom. We work with a range of order sizes, from initial trial quantities for new products to ongoing production runs for established brands. Contact our team to discuss volumes for your specific requirements.",
        },
        {
          question:
            "What quality standards do your industrial fluids meet?",
          answer:
            "Our products are manufactured to meet applicable ASTM, ISO, and OEM specifications. We maintain full batch traceability and provide certificates of analysis with every shipment. Our quality management system covers raw material inspection, in-process monitoring, and final product testing.",
        },
        {
          question:
            "What packaging options are available for industrial fluids?",
          answer:
            "We fill into quart bottles, gallon containers, 5-gallon pails, 55-gallon drums, 275-gallon totes, and bulk tanker loads. Custom packaging formats are also available. Our team can recommend the right packaging for your distribution channel and end-user requirements.",
        },
        {
          question: "What are typical lead times for industrial fluid orders?",
          answer:
            "Lead times depend on the product, order volume, and packaging format. Standard formulations in stock packaging typically ship within one to two weeks. Custom formulations or specialty packaging may require additional time for development and sourcing. We provide clear timelines at the quoting stage so you can plan accordingly.",
        },
      ]}
      ctaTitle="Need Industrial Fluids Manufactured?"
      ctaDescription="Our team can develop and produce industrial fluid products tailored to your exact requirements."
      secondaryTitle="Formulations Built for Performance"
      secondaryDescription="Industrial equipment operates in some of the harshest environments imaginable — extreme pressures, high temperatures, heavy loads, and continuous duty cycles. The fluids that protect this equipment need to be engineered with the same seriousness. Our formulations are built on proven base stock and additive technologies, tested against real-world performance criteria, and manufactured under controls that ensure consistency from the first drum to the last. Whether you need a standard hydraulic oil or a specialty product for a unique application, we bring the technical depth and production capability to get it done right."
      secondaryImage="/images/facility/pails-gear-oil.jpg"
      secondaryImageAlt="Industrial gear oil pails manufactured at U1Dynamics"
    />
  );
}
