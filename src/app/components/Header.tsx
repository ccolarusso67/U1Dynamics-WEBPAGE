"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const servicesTimeout = useRef<NodeJS.Timeout>(undefined);
  const companyTimeout = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isServicePage = serviceLinks.some((l) => pathname === l.href);
  const isCompanyPage = companyLinks.some((l) => pathname === l.href);

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setCompanyOpen(false);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const handleCompanyEnter = () => {
    clearTimeout(companyTimeout.current);
    setCompanyOpen(true);
    setServicesOpen(false);
  };
  const handleCompanyLeave = () => {
    companyTimeout.current = setTimeout(() => setCompanyOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-sm border-b border-gray-200" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-color.png"
              alt="U1Dynamics Manufacturing LLC - Lubricant Blending and Private Label Manufacturing"
              width={220}
              height={73}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
              style={pathname === "/" ? { color: "#2563EB" } : {}}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                  isServicePage ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                style={isServicePage ? { color: "#2563EB" } : {}}
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === link.href
                            ? "font-semibold bg-blue-50"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                        style={pathname === link.href ? { color: "#2563EB" } : {}}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/products" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
              style={pathname === "/products" ? { color: "#2563EB" } : {}}
            >
              Products
            </Link>

            {/* Company Dropdown */}
            <div
              ref={companyRef}
              className="relative"
              onMouseEnter={handleCompanyEnter}
              onMouseLeave={handleCompanyLeave}
            >
              <button
                className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                  isCompanyPage ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                style={isCompanyPage ? { color: "#2563EB" } : {}}
              >
                Company
                <svg className={`w-3.5 h-3.5 transition-transform ${companyOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === link.href
                            ? "font-semibold bg-blue-50"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                        style={pathname === link.href ? { color: "#2563EB" } : {}}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="btn btn-primary text-sm !py-2.5 !px-5"
            >
              Contact Us
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-600 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === "/" ? "text-gray-900 bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}>
              Home
            </Link>

            <div className="px-3 pt-3 pb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Services</span>
            </div>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === link.href ? "font-medium text-gray-900 bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/products" className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === "/products" ? "text-gray-900 bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}>
              Products
            </Link>

            <div className="px-3 pt-3 pb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Company</span>
            </div>
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === link.href ? "font-medium text-gray-900 bg-gray-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 px-3">
              <Link href="/contact" className="btn btn-primary w-full text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
