"use client";

import { useState, useEffect } from "react";
import { decodeEmail } from "../components/EmailLink";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toEmail = decodeEmail();
    const subject = encodeURIComponent(
      `Website Inquiry from ${formData.name} - ${formData.company || "N/A"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ready to get started? Reach out and let&apos;s talk.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Message prepared!</h3>
                  <p className="text-green-700 text-sm mb-6">
                    Your email client should have opened. Please send the email to complete your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline text-green-700 border-green-300 hover:border-green-500"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1.5">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input type="text" id="name" required className="form-input" placeholder="John Doe"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input type="email" id="email" required className="form-input" placeholder="john@company.com"
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1.5">Phone</label>
                      <input type="tel" id="phone" className="form-input" placeholder="+1 (555) 000-0000"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1.5">Company</label>
                      <input type="text" id="company" className="form-input" placeholder="Your Company LLC"
                        value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-1.5">Service</label>
                    <select id="service" className="form-input" value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      <option value="Blending Engineering">Blending Engineering</option>
                      <option value="Water-Based Formulations">Water-Based Formulations</option>
                      <option value="Contract Filling and Packaging">Contract Filling & Packaging</option>
                      <option value="Private Label Manufacturing">Private Label Manufacturing</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea id="message" required rows={5} className="form-input resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-sm text-gray-400">
                    4468 Genoa Red Bluff Road<br />Pasadena, Texas 77505
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+18886878521" className="text-sm text-gray-400 hover:text-accent transition-colors">
                    +1 (888) 687-8521
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-sm text-gray-400">
                    {email || "Loading..."}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Hours</h3>
                  <p className="text-sm text-gray-400">Mon - Fri, 8:00 AM - 5:00 PM CST</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="U1Dynamics Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.123!2d-95.1513!3d29.6633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640987c29d8f46f!2s4468+Genoa+Red+Bluff+Rd!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
