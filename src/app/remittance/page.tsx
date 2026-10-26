"use client";

import Link from "next/link";
import { useState } from "react";

export default function RemittancePage() {
  const [copied, setCopied] = useState(false);

  // Replace placeholders below with your actual business bank details when ready
  const bankingDetails = {
    accountName: "Waterledge Consultancy (Gareth Brock)",
    bankName: "[Insert Dedicated Business Bank Name]",
    sortCode: "XX-XX-XX",
    accountNumber: "XXXXXXXX",
    paymentReference: "Invoice Number (e.g., WL-2027-001)",
    remittanceEmail: "info@waterledgeconsultancy.co.uk",
    settlementTerms: "Strictly 30 Days Net from Invoice Date",
  };

  const handleCopyDetails = () => {
    const text = `Account Name: ${bankingDetails.accountName}\nBank: ${bankingDetails.bankName}\nSort Code: ${bankingDetails.sortCode}\nAccount No: ${bankingDetails.accountNumber}\nRemittance Email: ${bankingDetails.remittanceEmail}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-stone-200 font-sans antialiased">
      {/* Sub-page Header */}
      <header className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-lg font-light tracking-[0.08em] text-stone-100 uppercase">
              Waterledge
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium">
              Consultancy
            </span>
          </Link>
          <Link
            href="/#governance"
            className="text-[11px] font-medium tracking-[0.22em] uppercase text-stone-400 hover:text-stone-100 transition"
          >
            &larr; Return to Main Page
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#d4af37]">
            Section 04 // Commercial Onboarding &amp; Settlement
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-stone-100 tracking-tight">
            Business Banking &amp; Remittance
          </h1>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Vendor setup information, dedicated business banking details, and standard settlement terms for client procurement and Accounts Payable departments.
          </p>
        </div>

        {/* Dedicated Business Bank Account Card */}
        <section className="p-10 bg-[#0f1012] border border-stone-800/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest block mb-1">
                UK BACS / Faster Payments / CHAPS
              </span>
              <h2 className="text-2xl font-serif font-light text-stone-100">
                Dedicated Business Bank Account
              </h2>
            </div>
            <button
              onClick={handleCopyDetails}
              className="px-5 py-2.5 border border-stone-700 hover:border-stone-200 text-stone-200 text-[11px] font-mono uppercase tracking-widest transition cursor-pointer"
            >
              {copied ? "Copied to Clipboard ✓" : "Copy Remittance Details"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Account Name
              </span>
              <p className="text-base font-mono text-stone-100">
                {bankingDetails.accountName}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Bank Institution
              </span>
              <p className="text-base font-mono text-stone-100">
                {bankingDetails.bankName}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Sort Code
              </span>
              <p className="text-base font-mono text-[#d4af37]">
                {bankingDetails.sortCode}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Account Number
              </span>
              <p className="text-base font-mono text-[#d4af37]">
                {bankingDetails.accountNumber}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Remittance Advice Email
              </span>
              <p className="text-sm font-mono text-stone-200">
                {bankingDetails.remittanceEmail}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                Standard Payment Terms
              </span>
              <p className="text-sm font-mono text-stone-200">
                {bankingDetails.settlementTerms}
              </p>
            </div>
          </div>
        </section>

        {/* Commercial Terms & Anti-Fraud Protocol */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              Purchase Orders &amp; Invoicing
            </span>
            <h3 className="text-xl font-serif font-light text-stone-100">
              Engagement &amp; Billing Protocol
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Formal project commissions require a written Purchase Order (PO) or signed proposal acceptance prior to site attendance. Invoices are issued electronically in PDF format upon delivery of the final technical report (or staged as agreed for multi-site programmes) and include a full breakdown of professional day rates and accredited laboratory analytical disbursements.
            </p>
          </div>

          <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              Financial Security Notice
            </span>
            <h3 className="text-xl font-serif font-light text-stone-100">
              Bank Mandate Verification
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Waterledge Consultancy will never notify clients of a change in bank account details via unverified email. All remittance details match the dedicated business account printed on official invoices, and a signed bank letterhead mandate can be supplied directly for new supplier onboarding portals.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}