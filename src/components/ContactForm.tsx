"use client";

import { useState } from "react";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted-2">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-highlight shrink-0">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // mailto fallback — opens user's email client with form data
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Contact from ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@andykgroupinternational.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="relative py-20 px-8">
      <div className="max-w-[720px] mx-auto">
        <div className="border border-grid-300 rounded-2xl p-8 sm:p-10 bg-white shadow-sm">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold tracking-tight text-foreground mb-2">
              Send Us a Message
            </h2>
            <p className="text-sm text-muted">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-highlight">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Message prepared</h3>
              <p className="text-sm text-muted">Your email client should have opened. If not, email us directly at info@andykgroupinternational.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-rose-dark">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <UserIcon />
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full h-11 pl-10 pr-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-rose-dark">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <MailIcon />
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full h-11 pl-10 pr-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <BuildingIcon />
                  </div>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full h-11 pl-10 pr-4 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-rose-dark">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3">
                    <MessageIcon />
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business goals and how we can help..."
                    className="w-full pl-10 pr-4 py-3 text-sm border border-grid-500 rounded-lg bg-white text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Privacy notice */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-highlight/5 border border-highlight/10">
                <ShieldIcon />
                <div>
                  <p className="text-sm font-medium text-highlight mb-0.5">We respect your privacy</p>
                  <p className="text-xs text-muted leading-relaxed">
                    Your information will be used solely to respond to your inquiry and provide our services. We comply with GDPR and UK data protection laws.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 text-sm font-medium text-white bg-highlight rounded-lg hover:bg-highlight/90 transition-colors"
              >
                <SendIcon />
                Send Message
              </button>

              <p className="text-xs text-center text-muted-2">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
