import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "API-Certified DEF Manufacturer | ISO 22241-1 Diesel Exhaust Fluid, Virgin Urea, Private Label",
  description:
    "U1Dynamics blends API-certified, ISO 22241-1 compliant diesel exhaust fluid from industrial premium virgin urea only. Sub-pallet MOQs, sub-week lead times, jug-to-tanker packaging. Pasadena, TX.",
  alternates: {
    canonical: "/diesel-exhaust-fluid-manufacturer",
  },
  openGraph: {
    title:
      "API-Certified DEF Manufacturer | ISO 22241-1 Virgin Urea Diesel Exhaust Fluid",
    description:
      "API-certified and ISO 22241-1 compliant DEF, blended only from industrial-grade virgin urea. Sub-pallet MOQs. Sub-week turnaround. Private label welcome.",
    url: "https://u1dynamics.com/diesel-exhaust-fluid-manufacturer",
  },
};

export default function DieselExhaustFluidManufacturerPage() {
  return (
    <ServicePageLayout
      breadcrumbLabel="DEF Manufacturing"
      breadcrumbHref="/diesel-exhaust-fluid-manufacturer"
      badge="API CERTIFIED · ISO 22241-1"
      title="API-Certified Diesel Exhaust Fluid. Industrial Virgin Urea Only."
      subtitle="We blend DEF the way the spec sheet was written — from industrial premium virgin urea and ultra-pure deionized water, tested batch-by-batch, and API-certified for every shipment. Sub-pallet MOQs. Sub-week turnaround. Jug to tanker."
      heroImage="/images/facility/ibc-tank.jpg"
      heroImageAlt="IBC tote of API-certified DEF at U1Dynamics' Pasadena, TX blending facility"
      stats={[
        { value: "API", label: "Certified Blender" },
        { value: "ISO 22241-1", label: "Compliant" },
        { value: "< 1 WEEK", label: "Lead Time" },
        { value: "< 1 PALLET", label: "Private-Label MOQ" },
      ]}
      capabilitiesTitle="DEF, Built On Purity"
      capabilitiesDescription="Most of what goes wrong with DEF happens upstream of the filling line. Our program is engineered around raw-material control, batch-level documentation, and the kind of lab discipline that keeps SCR systems alive."
      capabilities={[
        {
          title: "Industrial Premium Virgin Urea — Not Reclaimed",
          description:
            "We source only industrial premium virgin urea. No reclaimed, no fertilizer-grade, no off-spec. The urea going into your DEF is the same material specified for heavy-duty on-highway engines by the OEMs that set the standard.",
        },
        {
          title: "API Certification — On Every Lot",
          description:
            "API certification is not a one-time audit at U1Dynamics — it is a production discipline. Every lot we blend is documented, sampled, and traceable to the certification framework that fleet operators, truck stops, and retailers trust.",
        },
        {
          title: "ISO 22241-1 Compliance, Batch by Batch",
          description:
            "32.5% urea, 67.5% deionized water, and a contaminant ceiling the international standard spells out to the ppm. Every batch is analyzed in-house for urea concentration, alkalinity, biuret, and trace metals before it touches a filling head.",
        },
        {
          title: "Jug to Tanker — One Facility",
          description:
            "1 gal and 2.5 gal retail jugs, 2.5 gal jugs with integrated spout, 5 gal pails, 55 gal drums, 275 and 330 gal IBC totes, and bulk tanker delivery. Every format, same lot integrity, same documentation.",
        },
        {
          title: "Private-Label DEF from < 1 Pallet",
          description:
            "Most API-certified blenders won't quote you under a full tanker. We will. Launch your own DEF line with sub-pallet MOQs, existing-label turnaround under a week, and packaging mix-and-match across every format we run.",
        },
        {
          title: "Certificates of Analysis With Every Shipment",
          description:
            "Every drum, tote, and tanker ships with a batch-referenced Certificate of Analysis. Date-coded containers. Lot-level traceability. Retained samples. If there is ever a question about what is in the bottle, the paperwork answers it.",
        },
      ]}
      packagingFormats={[
        "1 gal jugs",
        "2.5 gal jugs",
        "2.5 gal w/ integrated spout",
        "5 gal pails",
        "55 gal drums",
        "275 gal IBC totes",
        "330 gal IBC totes",
        "Bulk tanker",
      ]}
      packagingImage="/images/facility/warehouse-pallets.jpg"
      packagingImageAlt="Palletized API-certified DEF inventory at U1Dynamics warehouse"
      industries={[
        "Retail Chains (Auto Parts, Truck Stops)",
        "Fleet Operators (Trucking, Logistics)",
        "Agricultural Co-ops",
        "Fuel Distributors",
        "Industrial / Off-Highway",
        "Private-Label Brand Owners",
        "Export Customers (38+ Markets)",
      ]}
      processSteps={[
        {
          label: "Raw Material Sourcing",
          description:
            "Industrial premium virgin urea, sourced from vetted upstream producers. Deionized water generated in-house to meet ISO 22241-1's ppm-level contaminant limits. Every incoming lot is sampled before it is allowed onto the blending floor.",
        },
        {
          label: "Precision Blending",
          description:
            "Urea is dissolved into ultra-pure deionized water at controlled temperature and ratio to hit the 32.5% concentration target the standard requires. Closed-system transfer, stainless contact surfaces, no cross-product exposure.",
        },
        {
          label: "In-House Laboratory Analysis",
          description:
            "Every batch is analyzed for urea concentration, alkalinity, biuret, aldehyde, insoluble matter, and trace metals (Ca, Fe, Cu, Zn, Cr, Ni, Al, Mg, Na, K, P). No batch moves to fill until the analysis is signed off.",
        },
        {
          label: "Automated Filling",
          description:
            "Dedicated DEF filling lines, isolated from lubricant production, handle everything from 1 gal retail jugs to 330 gal IBCs with volumetric accuracy and contamination-prevention protocols built in.",
        },
        {
          label: "Labeling & Documentation",
          description:
            "Your label or ours. Date-coded containers for shelf-life traceability. Case configurations built to retail planogram or fleet-yard spec. Certificate of Analysis attached to every outbound lot.",
        },
        {
          label: "Distribution",
          description:
            "LTL, full-truckload, and bulk tanker shipping from our Pasadena, TX facility. Direct port access for export programs. 38+ international markets served today.",
        },
      ]}
      faqs={[
        {
          question:
            "What makes virgin urea different from reclaimed or fertilizer-grade urea?",
          answer:
            "Industrial premium virgin urea is manufactured to the purity specification that DEF and SCR systems actually require — biuret controlled, trace metals controlled, aldehyde controlled. Fertilizer-grade urea is produced to agricultural targets and routinely contains contaminants (iron, phosphorus, sulfates) at levels that will poison an SCR catalyst over time. Reclaimed urea can vary shipment to shipment. We only use virgin. It is the single most important decision in DEF manufacturing.",
        },
        {
          question: "Are you API certified for DEF?",
          answer:
            "Yes. U1Dynamics is API-certified under the API Diesel Exhaust Fluid Certification Program, which is the most trusted third-party certification mark in the U.S. DEF market. API certification verifies that our DEF meets ISO 22241 purity and concentration requirements and that our production, packaging, and handling systems are audited to maintain that compliance through to the end customer.",
        },
        {
          question: "What is ISO 22241-1 and why does it matter?",
          answer:
            "ISO 22241-1 is the international standard that defines what diesel exhaust fluid actually is — a 32.5% solution of urea in deionized water, with strict limits on alkalinity, biuret, aldehydes, insoluble matter, and a long list of trace metals. If DEF falls outside those limits, the SCR catalyst in the truck can be damaged permanently. Every batch we produce is tested against ISO 22241-1 in our on-site lab before it ships.",
        },
        {
          question:
            "What is your minimum order quantity for private-label DEF?",
          answer:
            "We regularly run private-label DEF programs starting at under a full pallet. Most API-certified blenders will not quote you below a tanker; we built our operation specifically to accommodate brands, distributors, and regional retailers who need smaller starting volumes and the ability to scale up without changing vendors. Call us and describe the program — we will tell you exactly what minimums look like for your packaging mix.",
        },
        {
          question: "How fast can you turn around a DEF order?",
          answer:
            "Orders against an existing label typically ship inside a week — sometimes inside 48 hours if we have stock on hand. New private-label programs (new art, new case configuration, new SKU) usually run two to three weeks depending on packaging. If you have a hard deadline, tell us up front and we will back into the schedule.",
        },
        {
          question: "What packaging formats do you offer?",
          answer:
            "Everything from a 1-gallon retail jug to a bulk tanker: 1 gal, 2.5 gal (plain or integrated-spout), 5 gal pails, 55 gal drums, 275 gal and 330 gal IBC totes, and tanker quantities. We can mix formats within a single purchase order and configure retail case packs and pallet patterns to match your distribution requirements.",
        },
        {
          question: "Is DEF the same thing as AdBlue?",
          answer:
            "Yes — DEF and AdBlue are the same product, sold under different names in different markets. AdBlue is the trademarked name used primarily in Europe by VDA-licensed producers; DEF is the name used in North America. Both are 32.5% high-purity urea in deionized water, and both are defined by ISO 22241. We produce under the DEF name for domestic and export customers.",
        },
        {
          question: "What is the shelf life of DEF?",
          answer:
            "Approximately 12 months when stored between 12 F and 86 F (about -11 C to 30 C) and out of direct sunlight. Higher storage temperatures accelerate degradation and shorten shelf life. Every container we ship is date-coded so you and your customers always know when it was produced.",
        },
        {
          question: "Do you ship DEF internationally?",
          answer:
            "Yes. We serve customers in 38+ international markets from our Pasadena, TX facility, which has direct access to Gulf Coast ports. We handle export documentation, container loading, and packaging adjustments for destination-market requirements. If you are building an export program, start by telling us the market and the format.",
        },
      ]}
      ctaTitle="Build a DEF Program Around Purity."
      ctaDescription="Private label, bulk supply, retail, fleet, export — every program starts the same way: a conversation about volumes, formats, and timing. Reach out and we will put together a quote."
      secondaryTitle="Purity Starts Upstream. Everything Else Is Downstream."
      secondaryDescription="DEF is a deceptively simple product. Two ingredients, one ratio, one international standard. The thing that separates a great blender from a merely compliant one is what happens before the filling line — the urea you choose to buy, the water you choose to purify, and the discipline with which you refuse every shortcut. We blend DEF the way the OEMs specified it, not the way a spreadsheet says we could. That is why fleet operators trust our label. That is why retail chains put us on the pallet. That is why the Certificate of Analysis means something when it shows up with your order."
      secondaryImage="/images/facility/lab-testing.jpg"
      secondaryImageAlt="In-house laboratory analysis of DEF at U1Dynamics"
    />
  );
}
