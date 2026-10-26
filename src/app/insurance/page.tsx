import Link from "next/link";

export default function InsurancePage() {
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
            Section 03 // Statutory &amp; Commercial Underwriting
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-stone-100 tracking-tight">
            Public Liability &amp; Professional Indemnity
          </h1>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Waterledge Consultancy maintains comprehensive commercial insurance underwritten for occupational hygiene monitoring, COSHH compliance advisory, and statutory Local Exhaust Ventilation (LEV) Thorough Examination and Testing.
          </p>
        </div>

        {/* Policy Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Public Liability */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                Public Liability (PL)
              </span>
              <span className="font-mono text-xs text-stone-400">
                On-Site Operations
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif font-light text-stone-100">
                £5,000,000 <span className="text-xs font-mono text-stone-500 uppercase">(Standard Minimum)</span>
              </p>
              <p className="text-xs text-stone-400 font-light">
                 Any one occurrence &bull; UK &amp; European Union Jurisdiction
              </p>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Covers third-party bodily injury or property damage arising during on-site occupational hygiene surveys, acoustic assessments, and LEV ductwork inspection across industrial, manufacturing, and commercial premises.
            </p>
          </div>

          {/* Professional Indemnity */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                Professional Indemnity (PI)
              </span>
              <span className="font-mono text-xs text-stone-400">
                Technical Advisory
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif font-light text-stone-100">
                £1,000,000 – £2,000,000
              </p>
              <p className="text-xs text-stone-400 font-light">
                In the aggregate / Any one claim &bull; Civil Liability Wording
              </p>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Covers professional negligence, errors, or omissions in exposure monitoring data interpretation, statutory COSHH/LEV reports, and engineering control specifications.
            </p>
          </div>
        </div>

        {/* Sole Principal EL Exemption & Equipment Note */}
        <div className="p-8 bg-[#0f1012] border border-stone-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">
              Procurement &amp; Vendor Onboarding Notice
            </span>
            <h3 className="text-xl font-serif font-light text-stone-100">
              Verification Certificates &amp; Sole-Principal Status
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              As an independent sole-principal practice with no direct employees, statutory Employers&apos; Liability (EL) exemption applies under the Employers&apos; Liability (Compulsory Insurance) Act 1969, unless specifically required by main contractor site rules. Full policy schedules for the 2027 trading period can be downloaded below.
            </p>
          </div>
          <a
            href="/documents/WL-INS-2027-Schedule.pdf"
            className="shrink-0 px-6 py-3 border border-stone-700 hover:border-[#d4af37] text-stone-200 text-[11px] font-mono uppercase tracking-widest transition"
          >
            Insurance Schedule (PDF) &darr;
          </a>
        </div>
      </main>
    </div>
  );
}