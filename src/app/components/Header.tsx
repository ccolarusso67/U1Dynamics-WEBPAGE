"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/#facility", label: "Facility" },
  { href: "/#industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"chrome" + (scrolled ? " is-scrolled" : "")} role="banner">
      <Link href="/" className="wordmark" aria-label="U1Dynamics home">
        <Image
          src="/images/logo-white.png"
          alt="U1Dynamics"
          width={111}
          height={72}
          priority
          style={{ height: 72, width: "auto", display: "block" }}
        />
      </Link>
      <nav className="chrome-nav" aria-label="Primary">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="chrome-cta">
        <a className="chrome-phone" href="tel:+18886878521">
          +1 888 687 8521
        </a>
        <Link className="chrome-btn" href="/contact">
          Start a program <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="chrome-phone md:hidden"
          aria-label="Toggle menu"
          style={{ display: "none" }}
        >
          ≡
        </button>
      </div>
    </header>
  );
}
