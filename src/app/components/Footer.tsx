import Image from "next/image";
import Link from "next/link";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-u1-red/50 to-transparent" />
      <div className="geo-light w-72 h-72 bg-u1-steel-blue/10 top-[-20%] right-[10%]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.png"
              alt="U1Dynamics Manufacturing LLC"
              width={160}
              height={53}
              className="h-10 w-auto mb-4"
            />
            <p className="text-u1-chrome/60 text-sm leading-relaxed mb-6">
              Precision-engineered petroleum and water-based product
              manufacturing. Your high-performance manufacturing partner in
              Pasadena, Texas.
            </p>
            <div className="flex gap-1">
              <span className="w-8 h-1 bg-u1-red rounded-full" />
              <span className="w-8 h-1 bg-u1-steel-blue rounded-full" />
              <span className="w-8 h-1 bg-u1-silver rounded-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-u1-red mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/capabilities", label: "Capabilities" },
                { href: "/products", label: "Products" },
                { href: "/facility", label: "Facility" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-u1-chrome/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-u1-red transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-u1-red mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {[
                "Blending Engineering",
                "Quality & Lab Testing",
                "Filling & Packaging Systems",
                "Private Label Manufacturing",
              ].map((capability) => (
                <li key={capability}>
                  <Link
                    href="/capabilities"
                    className="text-u1-chrome/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-u1-red transition-all duration-300 rounded-full" />
                    {capability}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-u1-red mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-u1-chrome/60">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-u1-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>
                  4468 Genoa Red Bluff Road
                  <br />
                  Pasadena, Texas 77505
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-u1-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+18886878521" className="hover:text-white transition-colors">
                  +1 (888) 687-8521
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-u1-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <EmailLink className="hover:text-white transition-colors" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-u1-chrome/40 text-sm">
            &copy; {new Date().getFullYear()} U1Dynamics Manufacturing LLC. All
            rights reserved.
          </p>
          <p className="text-u1-chrome/40 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-u1-red" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Engineered in Pasadena, Texas, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
