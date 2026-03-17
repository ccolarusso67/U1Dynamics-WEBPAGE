import Image from "next/image";
import Link from "next/link";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-black.png"
              alt="U1Dynamics"
              width={120}
              height={40}
              className="h-8 w-auto mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision manufacturing in Pasadena, Texas.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              4468 Genoa Red Bluff Road<br />
              Pasadena, TX 77505
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gray-900 transition-colors text-sm"
                  >
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
