"use client";

import { useState, useEffect } from "react";

// Email stored as character codes — never appears as plain text in HTML source
// This prevents automated email scrapers/bots from harvesting the address
const _c = [115, 97, 108, 101, 115, 64, 117, 108, 116, 114, 97, 49, 112, 108, 117, 115, 46, 99, 111, 109];

export function decodeEmail(): string {
  return _c.map((c) => String.fromCharCode(c)).join("");
}

interface EmailLinkProps {
  className?: string;
}

export default function EmailLink({ className }: EmailLinkProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  if (!email) {
    return <span className={className}>Contact us for email</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
