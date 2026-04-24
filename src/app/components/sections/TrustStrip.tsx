export default function TrustStrip() {
  return (
    <>
      <section className="trust-strip" aria-label="Certifications and standards">
        <div className="trust-inner">
          <div className="trust-label">Certifications · Standards · Verifications</div>
          <div className="trust-row">
            <div className="trust-item"><img src="/images/trust/cert-2.png" alt="API" /><div className="trust-caption">American Petroleum<br/>Institute</div></div>
            <div className="trust-item"><img src="/images/trust/cert-3.png" alt="ILMA" /><div className="trust-caption">Independent Lubricant<br/>Manufacturers Assoc.</div></div>
            <div className="trust-item"><img src="/images/trust/cert-4.png" alt="PQIA" /><div className="trust-caption">Petroleum Quality<br/>Institute of America</div></div>
            <div className="trust-item"><img src="/images/trust/cert-5.png" alt="US Verified Vendor" /><div className="trust-caption">U.S. Verified<br/>Vendor</div></div>
            <div className="trust-item"><img src="/images/trust/cert-6.png" alt="NMMA" /><div className="trust-caption">National Marine<br/>Manufacturers Assoc.</div></div>
            <div className="trust-item"><img src="/images/trust/cert-7.png" alt="SAE" /><div className="trust-caption">Society of<br/>Automotive Engineers</div></div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Retail partners">
        <div className="trust-inner">
          <div className="trust-label">Shipped to 32 countries · Stocked at major retailers</div>
          <div className="trust-row">
            <div className="trust-item retail"><img src="/images/trust/retail-amazon.png" alt="Amazon" /></div>
            <div className="trust-item retail"><img src="/images/trust/retail-autozone.png" alt="AutoZone" /></div>
            <div className="trust-item retail"><img src="/images/trust/retail-walmart.png" alt="Walmart" /></div>
            <div className="trust-item retail"><img src="/images/trust/retail-tractor.png" alt="Tractor Supply" /></div>
            <div className="trust-item retail"><img src="/images/trust/retail-northern.png" alt="Northern Tool" /></div>
            <div className="trust-item retail"><img src="/images/trust/retail-ebay.png" alt="eBay" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
