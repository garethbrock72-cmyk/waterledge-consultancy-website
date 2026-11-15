import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Local Exhaust Ventilation (LEV) Examination & Testing | Waterledge Consultancy",
  description:
    "Thorough Examination and Testing (TExT) and aerodynamic design appraisal of LEV systems compliant with HSE HSG 258, COSHH Regulation 9, and BS EN ISO 21904.",
};

export default function LEVServicePage() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-stone-200 flex flex-col justify-between selection:bg-stone-200 selection:text-stone-900 font-sans antialiased relative">
      {/* Subtle Atmospheric Top Vignette */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 197, 169, 0.08), transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.08em] text-stone-100 uppercase group-hover:text-[#d4af37] transition">
              Waterledge
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-medium">
              Consultancy
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/services/coshh-exposure-assessment"
              className="hidden sm:inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-stone-400 hover:text-[#d4af37] transition"
            >
              COSHH Regs 6–12 &rarr;
            </Link>
            <Link
              href="/#services"
              className="px-5 py-2.5 bg-transparent hover:bg-stone-100 hover:text-stone-950 text-stone-200 border border-stone-700 text-[11px] font-medium tracking-[0.25em] transition duration-200 uppercase"
            >
              &larr; All Services
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto w-full space-y-24">
        
        {/* Hero Header Section */}
        <section className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            Practice Launching Early 2027 &bull; Scheduling Open
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                02 // Engineering Control
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                COSHH Reg 9 &bull; HSE HSG 258 &bull; BS EN ISO 21904
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 tracking-tight leading-[1.15]">
              Local Exhaust Ventilation (LEV) Testing &amp; Design Appraisal
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-stone-300 font-serif italic leading-relaxed font-light">
            Statutory Thorough Examination and Testing (TExT), commissioning verification, and aerodynamic capture profiling conducted by a BOHS Certificate of Competence in Control holder.
          </p>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            Statutory Thorough Examination and Testing (TExT) compliant with <strong>HSE HSG 258</strong> and <strong>COSHH Regulation 9</strong>. We deliver quantitative aerodynamic assessments, capture velocity profiling, static pressure diagnostics, and engineering control validation for industrial extraction systems.
          </p>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 1: Relocated Engineering Control Comparison (Good vs. Poor Control) */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-stone-900/90 text-xs text-stone-300 font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              HSG 258 &amp; COSHH REG 7 / REG 9 LEV DESIGN AUDIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              Engineering Control Comparison: Volatile Vapour Release from Small-Scale Mixing
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Comparing a theoretical concept for effective Local Exhaust Ventilation (LEV) control of volatile vapour release against a similar but ineffective overhead canopy design. All LEV systems require expert engineering design input and tailored aerodynamic evaluation.
            </p>
          </div>

          {/* Comparative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Good Control (Rim-Slot Hood) */}
            <div className="border border-[#415a69]/60 bg-[#0f1012] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    Good Control
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Fig. 01 &mdash; Source Capture
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Rim-Slot Hood &amp; Mechanical Agitation
                </h3>
                <p className="text-sm text-stone-400 font-light mt-2 mb-6 leading-relaxed">
                  Enclosing rim-slot hood with increased freeboard height and lidded aperture to minimise cross-draught disturbance and capture vapour laterally before it rises.
                </p>
              </div>

              <div className="relative aspect-square w-full overflow-hidden border border-stone-800 bg-[#0c0d0e]">
                <Image
                  src="/coshh-exposure-assessment.webp"
                  alt="Compliant Rim Slot Hood Extraction"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <ul className="mt-6 space-y-2 text-xs text-stone-300 font-mono">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-400">&check;</span> Effective containment and inward capture velocity at source
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-400">&check;</span> Operator breathing zone protected from rising vapour path
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-400">&check;</span> Automated stirrer prevents manual leaning over open vessel
                </li>
              </ul>
            </div>

            {/* Card 2: Poor Control Example */}
            <div className="border border-rose-950/60 bg-[#0f1012] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider bg-rose-950/80 text-rose-400 border border-rose-800/60">
                    Poor Control
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Fig. 02 &mdash; Ineffective Hood Design
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Ineffective High-Canopy Extraction
                </h3>
                <p className="text-sm text-stone-400 font-light mt-2 mb-6 leading-relaxed">
                  High overhead canopy hood draws fugitive solvent vapour directly through the operator&apos;s breathing zone and loses capture envelope due to rapid velocity decay.
                </p>
              </div>

              <div className="relative aspect-square w-full overflow-hidden border border-stone-800 bg-[#0c0d0e]">
                <Image
                  src="/coshh-poor-practice-canopy.webp"
                  alt="Ineffective hood extraction example"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <ul className="mt-6 space-y-2 text-xs text-stone-300 font-mono">
                <li className="flex items-center gap-2.5">
                  <span className="text-rose-400">&#10005;</span> Fugitive loss of vapour control due to cross-draughts
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-rose-400">&#10005;</span> Contaminant plume drawn directly past operator breathing zone
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-rose-400">&#10005;</span> Over-reliance on RPE which fails to danger condition
                </li>
              </ul>
            </div>

          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 2: Walk-In Welding Booth Diagram */}
        <section className="bg-[#0f1012] border border-stone-800/80 p-6 sm:p-10 space-y-6">
          <div className="space-y-2 max-w-3xl">
            <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
              Aerodynamic Capture &bull; HSG 258 &amp; BS EN ISO 21904
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100">
              System Design &amp; Capture Dynamics: Walk-In Welding Booth
            </h2>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Correct aerodynamic capture requires tailored hood geometry, uniform face velocity across the working plane, and optimised operator positioning (turntable manipulation) to prevent boundary-layer separation and body-wake eddy formation.
            </p>
          </div>

          <figure className="relative w-full overflow-hidden border border-stone-800 bg-[#0c0d0e]">
            <Image
              src="/images/Weld-booth-LEV.webp"
              alt="Walk-in welding booth with backdraft LEV extraction adhering to HSG 258 and BS EN ISO 21904"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto object-contain mx-auto"
            />
            <figcaption className="p-4 text-center text-xs font-mono text-stone-400 bg-[#090a0b] border-t border-stone-800">
              Fig. 03 &mdash; Walk-In Booth Backdraft Extraction: Airflow vectors, rear distribution plenum, rotatable turntable, and lateral operator stance (HSG 258 Fig. 20 Position B) with supplemental PAPR protection.
            </figcaption>
          </figure>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 3: Core Deliverables Grid */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
              Regulation 9 Compliance
            </span>
            <h2 className="text-3xl font-serif font-light text-stone-100">
              Core LEV Engineering Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0f1012] p-8 border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                01 // Statutory TExT
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Statutory TExT Reports
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Full 14-month (or Schedule 4 1-month / 6-month) regulatory compliance examinations, qualitative smoke tracer visualisation, dust lamp Tyndall illumination, and multi-point pitot-static duct traverses.
              </p>
            </div>

            <div className="bg-[#0f1012] p-8 border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                02 // Commissioning
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Commissioning &amp; Baseline
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Establishing initial aerodynamic benchmarks, hood static pressure operating envelopes, transport velocity verification, and user logbook specifications for newly installed extraction plant.
              </p>
            </div>

            <div className="bg-[#0f1012] p-8 border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                03 // Design Appraisal
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Remediation Guidance
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Pragmatic engineering modifications for poorly performing capture hoods, excessive duct system resistance (losses at tight bends/dampers), or unbalanced multi-branch extraction networks.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-800/80 bg-[#090a0b] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <p className="font-serif tracking-widest text-stone-300 uppercase">
            Waterledge Consultancy
          </p>
          <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-widest text-stone-400">
            <Link href="/#services" className="hover:text-stone-200 transition">
              All Services
            </Link>
            <Link href="/services/health-risk-assessment" className="hover:text-stone-200 transition">
              Health Risk Assessment
            </Link>
            <Link href="/services/coshh-exposure-assessment" className="hover:text-stone-200 transition">
              COSHH
            </Link>
            <Link href="/services/personal-sampling" className="hover:text-stone-200 transition">
              Personal Sampling
            </Link>
            <Link href="/services/risk-management" className="hover:text-stone-200 transition">
              Risk Management
            </Link>
          </div>
          <p className="text-[11px] text-stone-600">
            &copy; {new Date().getFullYear()} Waterledge Consultancy
          </p>
        </div>
      </footer>
    </div>
  );
}