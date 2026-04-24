"use client";

// Obfuscated email helper — keeps address out of raw HTML source
export function decodeEmail(): string {
  return "info" + String.fromCharCode(64) + "u1dynamics.com";
}

export default function EmailLink({ className }: { className?: string }) {
  const user = "info";
  const domain = "u1dynamics.com";
  const addr = `${user}@${domain}`;
  return (
    <a className={className} href={`mailto:${addr}`}>
      {user}&#64;{domain}
    </a>
  );
}
