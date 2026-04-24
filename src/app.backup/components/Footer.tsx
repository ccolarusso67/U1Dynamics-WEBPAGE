import Image from "next/image";
import Link from "next/link";
import EmailLink from "./EmailLink";

const serviceLinks = [
  { href: "/private-label-lubricants", label: "Private Label Lubricants" },
  { href: "/contract-lubricant-manufacturing", label: "Contract Manufacturing" },
  { href: "/toll-blending-lubricants", label: "Toll Blending" },
  { href: "/lubricant-contract-packaging", label: "Contract Packaging" },
  { href: "/diesel-exhaust-fluid-manufacturer", label: "DEF Manufacturing" },
  { href: "/coolant-antifreeze-manufacturer", label: "Coolant & Antifreeze" },
  { href: "/industrial-fluid-manufacturing", label: "Industrial Fluids" },
];

const companyLinks = [
  { href: "/manufacturing-capabilities", label: "Manufacturing Capabilities" },
  { href: "/houston-texas-facility", label: "Houston Facility" },
  { href: "/quality-compliance", label: "Quality & Compliance" },
  { href: "/packaging-formats", label: "Packaging Formats" },
  { href: "/export-logistics", label: "Export & Logistics" },
  { href: "/technical-documents", label: "Technical Documents" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-color.png"
              alt="U1Dynamics Manufacturing LLC"
              width={120}
              height={40}
              className="h-8 w-auto mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Precision Fluid Manufacturing
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              <span className="font-medium text-gray-500">Manufacturing Facility</span><br />
              4468 Genoa Red Bluff Road, Pasadena, TX 77505
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mt-2">
              <span className="font-medium text-gray-500">Corporate Offices</span><br />
              1600 Ponce De Leon Blvd STE 1108, Coral Gables, FL 33134
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="tel:+18886878521" className="hover:text-gray-900 transition-colors">
                  +1 (888) 687-8521
                </a>
              </li>
              <li>
                <EmailLink className="hover:text-gray-900 transition-colors" />
              </li>
              <li>Mon - Fri, 8:00 AM - 5:00 PM CST</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-gray-400 text-xs text-center">
            &copy; {new Date().getFullYear()} U1Dynamics Manufacturing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
