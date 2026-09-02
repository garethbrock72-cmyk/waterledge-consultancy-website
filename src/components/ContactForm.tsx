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
    <div id="contact" className="w-full max-w-2xl mx-auto bg-slate-900/80 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-800 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-slate-400 text-sm">
          Discuss early 2027 project availability, workplace air monitoring requirements, or digital compliance solutions.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-emerald-950/40 border border-emerald-800 rounded-lg text-center space-y-2">
          <p className="font-semibold text-emerald-400 text-lg">Message sent successfully</p>
          <p className="text-sm text-slate-300">
            Thank you for reaching out. We will review your enquiry and respond promptly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                placeholder="john@example.co.uk"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                placeholder="07123 456789"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                placeholder="Acme Manufacturing Ltd"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Enquiry Details *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
              placeholder="Outline your requirements (e.g., workplace air monitoring, LEV testing, noise assessment)..."
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-rose-950/50 border border-rose-800 rounded-lg text-sm text-rose-300">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-6 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 text-slate-950 font-bold rounded-lg shadow-lg hover:shadow-sky-500/20 transition duration-150"
          >
            {status === "loading" ? "Submitting enquiry..." : "Send Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}