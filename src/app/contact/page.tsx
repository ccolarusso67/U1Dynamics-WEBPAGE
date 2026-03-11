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

  const contactInfo = [
    {
      title: "Address",
      value: "4468 Genoa Red Bluff Road\nPasadena, Texas 77505",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: "https://maps.google.com/?q=4468+Genoa+Red+Bluff+Road+Pasadena+TX+77505",
    },
    {
      title: "Phone",
      value: "+1 (888) 687-8521",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: "tel:+18886878521",
    },
    {
      title: "Email",
      value: email || "Contact us",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: email ? `mailto:${email}` : undefined,
    },
    {
      title: "Hours",
      value: "Monday - Friday\n8:00 AM - 5:00 PM CST",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: undefined,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toEmail = decodeEmail();
    const subject = encodeURIComponent(
      `Website Inquiry from ${formData.name} - ${formData.company || "N/A"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-u1-carbon tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />
        <div className="geo-light w-80 h-80 bg-u1-steel-blue/20 top-[-10%] left-[20%]" />
        <div className="geo-light w-64 h-64 bg-u1-silver/10 bottom-[-15%] right-[10%]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">Connect With Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Contact <span className="text-u1-red">Us</span>
          </h1>
          <div className="section-divider" />
          <p className="text-u1-silver/70 text-lg max-w-2xl mx-auto">
            Ready to optimize your manufacturing? Reach out and
            let&apos;s engineer your solution.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-28 bg-u1-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-u1-silver/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Start a Conversation</p>
              <h2 className="text-3xl font-black text-white mb-2">
                How Can We <span className="text-u1-red">Help</span>?
              </h2>
              <p className="text-u1-chrome/70 mb-8">
                Fill out the form below and we&apos;ll respond promptly.
              </p>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-10 text-center">
                  <div className="icon-gradient inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 text-green-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    Message Prepared!
                  </h3>
                  <p className="text-green-300/80">
                    Your email client should have opened with your message.
                    Please send the email to complete your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-green-600 text-white font-bold rounded-sm uppercase tracking-wider hover:bg-green-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-u1-silver mb-2">
                        Full Name <span className="text-u1-red">*</span>
                      </label>
                      <input type="text" id="name" required className="form-input" placeholder="John Doe"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-u1-silver mb-2">
                        Email Address <span className="text-u1-red">*</span>
                      </label>
                      <input type="email" id="email" required className="form-input" placeholder="john@company.com"
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-u1-silver mb-2">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" className="form-input" placeholder="+1 (555) 000-0000"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-u1-silver mb-2">
                        Company Name
                      </label>
                      <input type="text" id="company" className="form-input" placeholder="Your Company LLC"
                        value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-u1-silver mb-2">
                      Service Interested In
                    </label>
                    <select id="service" className="form-input" value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      <option value="Blending Engineering">Blending Engineering</option>
                      <option value="Water-Based Formulations">Water-Based Formulations</option>
                      <option value="Contract Filling and Packaging">Contract Filling and Packaging</option>
                      <option value="Private Label Manufacturing">Private Label Manufacturing</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-u1-silver mb-2">
                      Message <span className="text-u1-red">*</span>
                    </label>
                    <textarea id="message" required rows={5} className="form-input resize-none"
                      placeholder="Tell us about your project, product requirements, or any questions you have..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Submit Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">Contact Info</p>
              <h2 className="text-2xl font-black text-white mb-8">
                Get in <span className="text-u1-red">Touch</span>
              </h2>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4 p-4 rounded-xl bg-u1-gray hover:bg-u1-gunmetal transition-all duration-300 group">
                    <div className="icon-gradient flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-u1-red">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-u1-chrome/70 text-sm hover:text-u1-red transition-colors whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-u1-chrome/70 text-sm whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Card */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/5">
                <iframe
                  title="U1Dynamics Manufacturing LLC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.123!2d-95.1513!3d29.6633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640987c29d8f46f!2s4468+Genoa+Red+Bluff+Rd!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The U1Dynamics Advantage */}
      <section className="py-28 bg-u1-gray relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-u1-red/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-u1-steel-blue font-semibold text-sm uppercase tracking-widest mb-3">The U1Dynamics Advantage</p>
            <h2 className="text-3xl font-black text-white mb-4">
              The U1Dynamics <span className="text-u1-red">Advantage</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Turnaround",
                desc: "Efficient production processes and strategic positioning deliver rapid turnaround times for every order.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "silver",
              },
              {
                title: "Flexible Volumes",
                desc: "From small startup batches to large-scale production runs, we accommodate orders of any size.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                color: "red",
              },
              {
                title: "Industry-Leading Quality",
                desc: "Rigorous quality control testing at every stage of production ensures your products meet industry-leading standards.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "silver",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-u1-gunmetal rounded-xl p-8 service-card text-center"
              >
                <div className={`icon-gradient inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                  item.color === "silver" ? "text-u1-silver" : "text-u1-red"
                }`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-u1-chrome/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
