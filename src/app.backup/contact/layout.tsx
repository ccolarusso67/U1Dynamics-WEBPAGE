import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact U1Dynamics Manufacturing LLC for contract lubricant blending, private label programs, DEF production, and coolant manufacturing. Manufacturing facility in Pasadena, Texas. Corporate offices in Coral Gables, Florida.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact U1Dynamics Manufacturing",
    description:
      "Get in touch with our team to discuss contract manufacturing, private label lubricants, and custom formulations.",
    url: "https://u1dynamics.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
