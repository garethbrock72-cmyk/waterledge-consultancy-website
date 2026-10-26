import Link from "next/link";

export default function SafetyRamsPage() {
  const ramsDocuments = [
    {
      ref: "WL-RAMS-001",
      version: "Rev 1.0 (2027)",
      title: "Workplace Exposure & Personal Air Monitoring Surveys",
      scope:
        "Covers the fitting of personal sampling trains to operatives, static background sampling, pump calibration, handling of chemical absorption media, and non-interference with live machinery.",
      file: "/documents/WL-RAMS-001-Air-Monitoring.pdf",
    },
    {
      ref: "WL-RAMS-002",
      version: "Rev 1.0 (2027)",
      title: "Thorough Examination & Testing (TExT) of Local Exhaust Ventilation (LEV)",
      scope:
        "Covers safe access to ductwork test ports, thermal anemometry and Pitot-static traverses, qualitative smoke generation, electrical isolation awareness, and dust/ATEX zone precautions.",
      file: "/documents/WL-RAMS-002-LEV-Testing.pdf",
    },
    {
      ref: "WL-RAMS-003",
      version: "Rev 1.0 (2027)",
      title: "Occupational Noise & Hand-Arm / Whole-Body Vibration Assessments",
      scope:
        "Covers stand-off Class 1 sound level meter operation, personal noise dosimeter placement, triaxial accelerometer mounting, and maintaining safe exclusion zones around mobile plant and rotating equipment.",
      file: "/documents/WL-RAMS-003-Noise-Vibration.pdf",
    },
  ];

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

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Page Heading */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#d4af37]">
            Section 02 // Operational Field Safety
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-stone-100 tracking-tight">
            Risk Assessments, Method Statements &amp; Site Safety
          </h1>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            All field consultancy activities are governed by robust Risk Assessments and Method Statements (RAMS). Generic baseline RAMS are available below for client H&amp;S review and are adapted into site-specific documentation prior to survey mobilisation.
          </p>
        </div>

        {/* Operational Safety Commitments */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              ATEX / DSEAR Compliance
            </span>
            <h3 className="text-lg font-serif font-light text-stone-100">
              Intrinsically Safe Instrumentation
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Where flammable vapours, gases, or combustible dusts (e.g., wood dust, flour, solvent booths) present explosive atmosphere risks, intrinsically safe (IS / ATEX-certified) personal sampling pumps are deployed as standard.
            </p>
          </div>

          <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              PPE &amp; RPE Readiness
            </span>
            <h3 className="text-lg font-serif font-light text-stone-100">
              Self-Sufficient Site Provision
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              The Principal Consultant arrives on site equipped with face-fit tested RPE (FFP3 / half-mask / powered air), hearing protection, safety footwear, high-visibility clothing, and industrial head/eye protection.
            </p>
          </div>

          <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              Site Induction &amp; Permits
            </span>
            <h3 className="text-lg font-serif font-light text-stone-100">
              Permit-to-Work Integration
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Full compliance with client Permit-to-Work (PTW) systems, Lockout/Tagout (LOTO) verification prior to internal LEV plant inspection, and dynamic point-of-work risk assessment before testing commences.
            </p>
          </div>
        </section>

        {/* Downloadable RAMS Schedule */}
        <section className="space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <h2 className="text-2xl font-serif font-light text-stone-100">
              Baseline RAMS Document Schedule
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light mt-1">
              Place your finalised PDF files in <code className="text-stone-300">/public/documents/</code> to activate direct downloads.
            </p>
          </div>

          <div className="space-y-4">
            {ramsDocuments.map((doc) => (
              <div
                key={doc.ref}
                className="p-8 bg-[#0f1012] border border-stone-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase">
                      {doc.ref}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      &bull; {doc.version}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-light text-stone-100">
                    {doc.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                    {doc.scope}
                  </p>
                </div>

                <a
                  href={doc.file}
                  className="shrink-0 px-6 py-3 border border-stone-700 hover:border-stone-200 hover:bg-stone-100 hover:text-stone-950 text-stone-200 text-[11px] font-mono uppercase tracking-widest transition"
                >
                  Download PDF &darr;
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}