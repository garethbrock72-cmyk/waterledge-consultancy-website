"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      let result: any = {};
      if (contentType && contentType.includes("application/json")) {
        result = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned HTTP ${res.status}: ${text || res.statusText}`);
      }

      if (!res.ok) {
        const errorDetail = result?.error?.message || (typeof result?.error === "string" ? result.error : JSON.stringify(result?.error));
        throw new Error(errorDetail || `Request failed with status ${res.status}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0f1012] p-8 sm:p-12 border border-stone-800/80 shadow-2xl">
      {status === "success" ? (
        <div className="p-8 bg-[#0c0d0e] border border-[#d4af37]/40 text-center space-y-4">
          <p className="font-serif text-lg text-stone-100 tracking-wide">
            Enquiry Dispatched Successfully
          </p>
          <p className="text-sm font-light text-stone-400 max-w-md mx-auto leading-relaxed">
            Thank you for getting in touch. Your project parameters have been received and will be reviewed directly by the Principal Consultant.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 border border-stone-700 hover:border-stone-400 text-stone-300 hover:text-white text-[11px] font-mono tracking-widest uppercase transition duration-200"
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0d0e] border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] text-sm font-light transition"
                placeholder="Full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                Work Email *
              </label>
              <input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0d0e] border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] text-sm font-light transition"
                placeholder="client@organization.co.uk"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                Contact Telephone
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0d0e] border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] text-sm font-light transition"
                placeholder="07XXX XXXXXX"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
                Organization / Practice
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0d0e] border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] text-sm font-light transition"
                placeholder="Company / Facility"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2">
              Engagement Scope &amp; Timing *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-[#0c0d0e] border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] text-sm font-light leading-relaxed transition"
              placeholder="Outline your monitoring, LEV TExT, or advisory scope..."
            />
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-950/30 border border-red-900/60 text-xs font-mono text-red-300">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 px-6 bg-stone-100 hover:bg-white text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition duration-200 disabled:opacity-50 cursor-pointer"
          >
            {status === "loading" ? "Transmitting Enquiry..." : "Send Project Enquiry \u2192"}
          </button>
        </form>
      )}
    </div>
  );
}