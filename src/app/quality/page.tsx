import Link from "next/link";

export default function QualityAndStandardsPage() {
  const standards = [
    {
      code: "BS EN 689:2018+A1:2019",
      authority: "BSI / CEN",
      title: "Workplace Exposure — Measurement of Exposure by Inhalation to Chemical Agents",
      description:
        "Strategy for testing compliance with occupational exposure limit values (OELVs). Incorporates Basic Characterization, constitution of Similar Exposure Groups (SEGs), Preliminary Testing, and statistical 70% confidence evaluation of the 95th percentile.",
    },
    {
      code: "MDHS 14/4",
      authority: "UK Health & Safety Executive (HSE)",
      title: "General Methods for Sampling and Gravimetric Analysis of Respirable, Thoracic and Inhalable Aerosols",
      description:
        "Strict adherence to cyclone/IOM sampler selection, pre- and post-sampling flow rate calibration within ±5%, field blank deployment, and gravimetric analytical chain of custody.",
    },
    {
      code: "Additional HSE MDHS Series",
      authority: "UK Health & Safety Executive (HSE)",
      title: "Substance-Specific Methods for the Determination of Hazardous Substances",
      description:
        "Deployment of validated HSE methods including MDHS 25/4 (Organic Isocyanates), MDHS 88 (Volatile Organic Compounds), MDHS 91 (Metals & Metalloids in Air by ICP-AES/MS), and MDHS 101 (Crystalline Silica in Respirable Airborne Dusts).",
    },
    {
      code: "HSG 173",
      authority: "UK Health & Safety Executive (HSE)",
      title: "Monitoring Strategies for Toxic Substances",
      description:
        "Structured framework governing initial appraisal, worst-case screening vs. representative personal monitoring, and the integration of biological monitoring or dermal assessment where appropriate.",
    },
    {
      code: "HSG 258",
      authority: "UK Health & Safety Executive (HSE)",
      title: "Controlling Airborne Contaminants at Work: A Guide to Local Exhaust Ventilation (LEV)",
      description:
        "Statutory Thorough Examination and Testing (TExT) under COSHH Regulation 9. Covers hood capture/receiving aerodynamic appraisal, duct transport velocities, static pressure differentials, qualitative smoke visualization, and commissioning benchmark verification.",
    },
    {
      code: "NIOSH (NMAM) & OSHA Methods",
      authority: "NIOSH / US Dept. of Labor (OSHA)",
      title: "International Validated Sampling & Analytical Methodologies",
      description:
        "Utilisation of NIOSH Manual of Analytical Methods (e.g., NMAM 0500, 0600, 7300, 1501) and OSHA Partially/Fully Validated Methods where UK MDHS protocols are superseded or where specific sorbent/filter media combinations offer superior Limits of Quantification (LOQ).",
    },
    {
      code: "ACGIH TLVs® & BEIs®",
      authority: "American Conference of Governmental Industrial Hygienists",
      title: "Threshold Limit Values & Industrial Ventilation Benchmarks",
      description:
        "Referenced alongside UK EH40 Workplace Exposure Limits (WELs) to provide state-of-the-art toxicological benchmarking where UK statutory limits are absent, outdated, or require supplementary hygiene context.",
    },
  ];

  const qmsPillars = [
    {
      ref: "QMS-01",
      title: "Document & Data Control",
      detail:
        "Version-controlled survey templates, raw field data logs, and peer-reviewed statutory reporting protocols retained securely for a minimum of 40 years in compliance with COSHH Regulation 9 & 10 record-keeping duties.",
    },
    {
      ref: "QMS-02",
      title: "Metrological Traceability & Calibration",
      detail:
        "All primary flow calibrators, personal air sampling pumps, micromanometers, thermoanemometers, and Class 1 acoustic instrumentation hold current certificates of calibration traceable to UKAS / National Physical Laboratory (NPL) standards.",
    },
    {
      ref: "QMS-03",
      title: "UKAS / ISO 17025 Analytical Subcontracting",
      detail:
        "All collected filter cassettes, sorbent tubes, and impinger media are dispatched under strict Chain of Custody (CoC) exclusively to UKAS-accredited (ISO/IEC 17025) partner laboratories participating in AIR PT / WASP proficiency schemes.",
    },
    {
      ref: "QMS-04",
      title: "Impartiality & Sole-Principal Governance",
      detail:
        "Operating as an independent consultancy free from equipment supply or abatement installation conflicts of interest. All control recommendations follow the statutory COSHH Hierarchy of Control.",
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
        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#d4af37]">
            Section 01 // Quality Assurance &amp; Technical Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-stone-100 tracking-tight">
            Quality Management &amp; Methodological Framework
          </h1>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Waterledge Consultancy operates an internal Quality Management System (QMS) structured in alignment with <strong className="text-stone-200 font-normal">BS EN ISO 9001:2015</strong> principles, tailored specifically for an independent principal occupational hygiene practice.
          </p>
        </div>

        {/* ISO 9001 Sole-Principal QMS Architecture */}
        <section className="space-y-8">
          <div className="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif font-light text-stone-100">
                ISO 9001-Aligned Quality Control Architecture
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm font-light mt-1">
                Proportionate quality governance ensuring repeatability, metrological validity, and defensible compliance reporting.
              </p>
            </div>
            <a
              href="/documents/WL-QMS-001-Quality-Policy.pdf"
              className="inline-block px-5 py-2.5 border border-stone-700 hover:border-[#d4af37] text-stone-200 text-[11px] font-mono uppercase tracking-widest transition"
            >
              Download Quality Policy (PDF) &darr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qmsPillars.map((pillar) => (
              <div key={pillar.ref} className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
                <span className="text-xs font-mono text-[#d4af37] tracking-widest uppercase">
                  {pillar.ref}
                </span>
                <h3 className="text-xl font-serif font-light text-stone-100">
                  {pillar.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statutory & International Methodologies */}
        <section className="space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <h2 className="text-2xl font-serif font-light text-stone-100">
              Core Occupational Hygiene Standards &amp; Methodologies
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light mt-1">
              All field investigations, air sampling strategies, and engineering control appraisals are executed in strict accordance with the following standards:
            </p>
          </div>

          <div className="space-y-4">
            {standards.map((std) => (
              <div
                key={std.code}
                className="p-8 bg-[#0f1012] border border-stone-800/80 flex flex-col md:flex-row gap-6 justify-between"
              >
                <div className="md:w-1/3 space-y-1">
                  <span className="font-mono text-sm text-[#d4af37] tracking-wider block">
                    {std.code}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 block">
                    {std.authority}
                  </span>
                </div>
                <div className="md:w-2/3 space-y-2">
                  <h3 className="text-lg font-serif font-light text-stone-100">
                    {std.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                    {std.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}