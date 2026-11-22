import Link from "next/link";

export const metadata = {
  title: "Health Risk Assessment (HRA) | Waterledge Consultancy",
  description:
    "Comprehensive workplace Health Risk Assessments (HRA) integrating COSHH chemical exposure, noise, hand-arm and whole-body vibration, thermal environments, and ergonomics.",
};

export default function HealthRiskAssessmentPage() {
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

          <Link
            href="/#services"
            className="px-5 py-2.5 bg-transparent hover:bg-stone-100 hover:text-stone-950 text-stone-200 border border-stone-700 text-[11px] font-medium tracking-[0.25em] transition duration-200 uppercase"
          >
            &larr; All Services
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto w-full space-y-24">
        
        {/* Hero Section */}
        <section className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            Practice Launching Early 2027 &bull; Scheduling Open
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                06 // Holistic Appraisal
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                MHSWR 1999 &bull; COSHH 2002 &bull; CONAWR 2005 &bull; COVAWR 2005
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 tracking-tight leading-[1.15]">
              Workplace Health Risk Assessment
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-stone-300 font-serif italic leading-relaxed font-light">
            A unified, multi-disciplinary methodology evaluating the totality of chemical, physical, biological, and ergonomic health stressors across your operational workforce.
          </p>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            Industrial processes rarely present a single isolated hazard. A welder or foundry operator may be simultaneously exposed to carcinogenic metal fumes, high-frequency grinding noise, hand-arm vibration, radiant heat stress, and awkward postural loading. Rather than treating statutory regulations in disconnected silos, a comprehensive Health Risk Assessment (HRA) establishes a structured baseline across all occupational hygiene disciplines—partitioning the workforce into Similar Exposure Groups (SEGs), quantifying priority exposures, and engineering cohesive control strategies.
          </p>

          {/* Direct Sub-Discipline Quick Navigation Bar */}
          <div className="pt-4 space-y-3">
            <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-stone-400">
              Integrated Specialist Disciplines &amp; Screening Scope
            </span>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/services/coshh-exposure-assessment"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                01. Chemical Agents (COSHH) &rarr;
              </Link>
              <Link
                href="/services/physical-agents-noise"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                02. Workplace Noise &rarr;
              </Link>
              <Link
                href="/services/physical-agents-vibration"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                03. Vibration (HAVS / WBV) &rarr;
              </Link>
              <Link
                href="/services/physical-agents-thermal"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                04. Thermal Environments &rarr;
              </Link>
              <a
                href="#ergonomics"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                05. Ergonomics &amp; Human Factors &darr;
              </a>
              <a
                href="#radiation-emf"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 hover:text-[#d4af37] transition"
              >
                06. Radiation &amp; EMF (Screening) &darr;
              </a>
              <a
                href="#legionella"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 hover:text-[#d4af37] transition"
              >
                07. Legionella (Screening) &darr;
              </a>
              <a
                href="#asbestos"
                className="px-4 py-2.5 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 hover:text-[#d4af37] transition"
              >
                08. Asbestos (Screening) &darr;
              </a>
            </div>
          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 1: The Total HRA Methodology (5-Stage Architecture) */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
              Methodological Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              The 5-Stage Total Health Risk Assessment Framework
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Structured in accordance with the Management of Health and Safety at Work Regulations 1999 (Reg 3), BOHS/IOHA good practice guidelines, and UK HSE regulatory frameworks, our HRA methodology systematically converts complex workplace observations into defensible compliance roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Stage 1 */}
            <div className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                    Stage 01
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase">
                    Scoping
                  </span>
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Process &amp; SEG Structuring
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  Walkthrough survey of plant operations, shift patterns, and task cycles. Division of the workforce into statistically valid Similar Exposure Groups (SEGs) sharing identical hazard profiles.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/60 font-mono text-[10px] text-stone-400 uppercase">
                BS EN 689 &bull; HSG 173
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                    Stage 02
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase">
                    Inventory
                  </span>
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Multi-Agent Hazard Profiling
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  Systematic identification of airborne substances, dermal sensitizers, process-generated fumes, acoustic sources, vibrating tools, radiant heat loads, and biomechanical stressors per SEG.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/60 font-mono text-[10px] text-stone-400 uppercase">
                SDS &bull; Source Mapping
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                    Stage 03
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase">
                    Appraisal
                  </span>
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Qualitative &amp; Quantitative Tiering
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  Initial qualitative risk rating (Basic Characterization) to filter low-risk tasks and target quantitative personal sampling, dosimetry, and environmental logging where uncertainty or high consequence exists.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/60 font-mono text-[10px] text-stone-400 uppercase">
                WEL &bull; EAV/ELV &bull; WBGT
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                    Stage 04
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase">
                    Interactions
                  </span>
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Combined &amp; Synergistic Effects
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  Evaluation of cross-disciplinary interactions—such as ototoxic solvents compounding noise-induced hearing loss, cold environments accelerating HAVS vascular blanching, or high physical exertion increasing inhalation uptake.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/60 font-mono text-[10px] text-stone-400 uppercase">
                Additive &amp; Synergistic Risk
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                    Stage 05
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase">
                    Governance
                  </span>
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Control &amp; Health Surveillance
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  Prioritised Hierarchy of Control intervention plan, LEV engineering specification, RPE/HPD compatibility verification, and targeted occupational health surveillance schedules (audiometry, spirometry, HAVS Tier 1–4).
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800/60 font-mono text-[10px] text-stone-400 uppercase">
                ALARP &bull; Reg 9 &amp; Reg 11
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 2: Discipline Integration Cards */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
              Multi-Disciplinary Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              Incorporating Specialist Hygiene Disciplines into the HRA
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Each occupational hygiene discipline feeds structured empirical data into the overarching Health Risk Assessment matrix. Explore how individual hazard domains are evaluated and linked to our specialist assessment pages below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 01: Chemical Agents (COSHH) */}
            <div className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 01 // Chemical &amp; Biological Agents
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                    COSHH 2002 &bull; EH40
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  COSHH Exposure Assessment &amp; Control
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Within the Total HRA, chemical and biological hazards are evaluated across all routes of entry—inhalation, dermal absorption, and ingestion. Substances are inventoried alongside process-generated contaminants (welding fume, respirable crystalline silica, wood dust, metalworking fluid mist, and isocyanates).
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">HRA Integration:</strong> Connects qualitative COSHH Reg 6 risk banding with quantitative personal air sampling (BS EN 689) and biological monitoring (EH40 BMGVs).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Synergistic Check:</strong> Evaluates physical workload (minute ventilation rate) on inhaled dose and identifies ototoxic substances (e.g., toluene, styrene, xylene) that exacerbate noise risk.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap gap-4 items-center justify-between">
                <Link
                  href="/services/coshh-exposure-assessment"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                >
                  COSHH Exposure Page &rarr;
                </Link>
                <div className="flex gap-2">
                  <Link
                    href="/services/personal-sampling"
                    className="px-3 py-1.5 bg-[#0c0d0e] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono uppercase text-stone-400 hover:text-[#d4af37] transition"
                  >
                    Personal Sampling &rarr;
                  </Link>
                  <Link
                    href="/services/lev"
                    className="px-3 py-1.5 bg-[#0c0d0e] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono uppercase text-stone-400 hover:text-[#d4af37] transition"
                  >
                    LEV Control &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* 02: Workplace Noise */}
            <div className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 02 // Physical Agents — Acoustic
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                    CONAWR 2005 &bull; ISO 9612
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Workplace Noise Exposure &amp; Control
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Acoustic hazards are mapped across fixed plant zones and mobile SEGs to determine daily/weekly personal noise exposure levels (L<sub>EP,d</sub> / L<sub>EP,w</sub>) and peak sound pressures (L<sub>Cpeak</sub>) against the 80 dB(A) Lower and 85 dB(A) Upper Exposure Action Values.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">HRA Integration:</strong> Incorporates octave-band frequency analysis to engineer noise control at source and prevent over-protection (&lt;70 dB(A) at the ear) that masks audible safety alarms.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Multi-PPE Compatibility:</strong> Verifies physical seal compatibility when earmuffs are worn concurrently with tight-fitting RPE, safety eyewear, or welding visors.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <Link
                  href="/services/physical-agents-noise"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                >
                  Workplace Noise Page &rarr;
                </Link>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  BS EN ISO 9612 &bull; BS 4142
                </span>
              </div>
            </div>

            {/* 03: Vibration (HAVS & WBV) */}
            <div className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 03 // Physical Agents — Mechanical
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                    COVAWR 2005 &bull; ISO 5349
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Hand-Arm (HAV) &amp; Whole-Body Vibration (WBV)
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Triaxial accelerometer measurement of rotary, percussive, and grinding equipment alongside mobile plant seating to quantify daily vibration exposure A(8) in m/s&sup2; and HSE Exposure Points against statutory EAV and ELV thresholds.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">HRA Integration:</strong> Connects tool trigger-time diagnostics with consumable selection, tool maintenance regimes, and Tier 1–4 HAVS health surveillance triggers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Cross-Stressor Link:</strong> Assesses high grip forces, awkward wrist postures (ergonomics), and low ambient workplace temperatures (thermal) which accelerate Raynaud&apos;s phenomenon / vascular blanching.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <Link
                  href="/services/physical-agents-vibration"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                >
                  Vibration (HAVS / WBV) Page &rarr;
                </Link>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  ISO 5349 &bull; ISO 2631
                </span>
              </div>
            </div>

            {/* 04: Thermal Environment */}
            <div className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 04 // Physical Agents — Microclimate
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                    ISO 7243 &bull; ISO 7933
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Thermal Stress &amp; Microclimate Evaluation
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Quantitative monitoring of air temperature, radiant globe temperature, relative humidity, and air velocity in foundries, bakeries, kilns, cold stores, and outdoor operations using Wet Bulb Globe Temperature (WBGT) and Predicted Heat Strain (PHS) indices.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">HRA Integration:</strong> Incorporates metabolic work rates (ISO 8996) and Clothing Adjustment Factors (CAF) for chemical protective coveralls and RPE ensembles.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Cross-Stressor Link:</strong> Accounts for elevated core temperatures and sweating rates that increase percutaneous absorption of dermal chemical hazards and decrease PPE compliance.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <Link
                  href="/services/physical-agents-thermal"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                >
                  Thermal Risk Page &rarr;
                </Link>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  ISO 7243 &bull; ISO 7730
                </span>
              </div> {/* Closes Card 04 footer bar */}
            </div> {/* Closes Card 04 only — grid stays open */}

            {/* 05: Ergonomics & Human Factors */}
            <div
              id="ergonomics"
          
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8 scroll-mt-32"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 05 // Biomechanical &amp; Human Factors
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5 shrink-0">
                    MHOR 1992 &bull; MAC &bull; ART
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Workplace Ergonomics &amp; Human Factors
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Structured evaluation of manual handling, repetitive upper-limb tasks, workstation anthropometrics, and human-control interfaces using HSE MAC, ART, RAPP, and RULA/REBA screening methodologies.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Engineering Control Usability:</strong> Integrates operator posture and line-of-sight with HSG 258 LEV hood design so controls support natural work patterns rather than prompting bypasses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Physiological Uptake Link:</strong> Accounts for elevated metabolic load and pulmonary ventilation (from ~10 L/min at rest to &gt;40 L/min under heavy work), preventing underestimation of inhaled chemical dose and thermal strain.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap gap-3 items-center justify-between">
                <Link
                  href="/services/risk-management"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                >
                  Risk Governance &rarr;
                </Link>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  MHOR 1992 &bull; HSG 60 &bull; INDG 171
                </span>
              </div>
            </div>

            {/* 06: Ionising, Non-Ionising Radiation & EMF (Initial Screening) */}
            <div
              id="radiation-emf"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8 scroll-mt-32"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 06 // Radiation &amp; EMF Screening
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5 shrink-0">
                    IRR17 &bull; CEMFAW 2016
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Ionising, Non-Ionising Radiation &amp; EMF
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Walkthrough source screening within the HRA to identify whether ionising radiation (e.g., X-ray, gauges, NDT), artificial optical radiation (lasers, UV/IR welding arcs), or Electromagnetic Fields (EMF) from induction heating, resistance welding, or high-current plant are relevant to site SEGs.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Preliminary Survey Scope:</strong> Identifies potential radiation or EMF emitters, flags active medical implant considerations, and checks whether existing statutory assessments are in place—does not replace quantitative measurement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Specialist Referral:</strong> Where relevant sources are confirmed, we recommend appointing an accredited Radiation Protection Adviser (RPA), Laser Protection Adviser (LPA), or qualified EMF specialist for detailed statutory assessment.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#d4af37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  Initial Screening &amp; Specialist Referral
                </span>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  IRR17 &bull; CEMFAW &bull; AOR 2010
                </span>
              </div>
            </div>

            {/* 07: Legionella Risk Screening */}
            <div
              id="legionella"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8 scroll-mt-32"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 07 // Water Systems Screening
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5 shrink-0">
                    ACOP L8 &bull; HSG 274
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Legionella Risk Identification
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  High-level walkthrough screening to identify water systems capable of generating inhalable aerosols—including cooling towers, evaporative condensers, humidifiers, process spray/wash systems, safety showers, and low-turnover domestic water circuits.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Preliminary Survey Scope:</strong> Establishes whether Legionella risk systems are present across site operations and verifies whether a current site-specific risk assessment and written control scheme exist.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Specialist Referral:</strong> Does not constitute a formal ACOP L8 / BS 8580-1 water hygiene risk assessment; where risk systems or governance gaps are identified, we recommend a Legionella Control Association (LCA) registered specialist.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#d4af37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  Initial Screening &amp; Specialist Referral
                </span>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  ACOP L8 &bull; BS 8580-1
                </span>
              </div>
            </div>

            {/* 08: Asbestos Management Screening */}
            <div
              id="asbestos"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 flex flex-col justify-between space-y-8 scroll-mt-32"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Discipline 08 // Building Fabric Screening
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5 shrink-0">
                    CAR 2012 &bull; HSG 264
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-stone-100">
                  Asbestos Duty-to-Manage Screening
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Preliminary desktop and walkthrough review for pre-2000 non-domestic premises to determine whether potential Asbestos-Containing Materials (ACMs) or planned maintenance/plant installation works present an unmanaged exposure interface for operational SEGs.
                </p>

                <ul className="space-y-2 text-xs text-stone-300 font-light pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Preliminary Survey Scope:</strong> Verifies the existence and review currency of the site Asbestos Register and Management Plan (CAR 2012 Reg 4) without conducting physical sampling or intrusive inspection.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-mono">&bull;</span>
                    <span>
                      <strong className="text-stone-100 font-medium">Specialist Referral:</strong> Where surveys are absent, outdated, or refurbishment/demolition works are planned, we recommend appointing a UKAS-accredited inspection body (ISO/IEC 17020) and BOHS P402-qualified surveyor.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#d4af37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  Initial Screening &amp; Specialist Referral
                </span>
                <span className="font-mono text-[10px] text-stone-500 uppercase">
                  CAR 2012 &bull; HSG 264
                </span>
              </div> {/* 1. Closes Card 08 footer bar */}
            </div> {/* 2. Closes Card 08 */}
          </div> {/* 3. Closes the 2-column grid */}
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 3: HRA Deliverables & Matrix Summary */}
        <section className="border border-stone-800/80 bg-[#0f1012] p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
              Client Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100">
              What a Waterledge Health Risk Assessment Delivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0c0d0e] border border-stone-800 space-y-2">
              <div className="font-mono text-[11px] text-[#d4af37] uppercase tracking-wider">
                01 // SEG Risk Register
              </div>
              <h3 className="text-lg font-serif font-light text-stone-100">
                Site-Wide Exposure Matrix
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed font-light">
                A comprehensive register mapping every Similar Exposure Group against chemical, noise, vibration, thermal, and ergonomic hazards—complete with exposure ratings, uncertainty flags, and regulatory compliance status.
              </p>
            </div>

            <div className="p-6 bg-[#0c0d0e] border border-stone-800 space-y-2">
              <div className="font-mono text-[11px] text-[#d4af37] uppercase tracking-wider">
                02 // Sampling Strategy
              </div>
              <h3 className="text-lg font-serif font-light text-stone-100">
                Targeted Monitoring Programme
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed font-light">
                A cost-effective quantitative sampling schedule (BS EN 689 / ISO 9612 / ISO 5349) focusing analytical resource strictly on SEGs where exposure approaches action levels or where control adequacy requires empirical verification.
              </p>
            </div>

            <div className="p-6 bg-[#0c0d0e] border border-stone-800 space-y-2">
              <div className="font-mono text-[11px] text-[#d4af37] uppercase tracking-wider">
                03 // Control &amp; Surveillance
              </div>
              <h3 className="text-lg font-serif font-light text-stone-100">
                Prioritised Action Plan
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed font-light">
                Pragmatic engineering and administrative control recommendations aligned with the Hierarchy of Control, integrated PPE compatibility matrices, and occupational health surveillance specifications.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-800/80">
            <p className="text-stone-400 text-xs sm:text-sm font-light">
              Ready to commission a site-wide Health Risk Assessment or discuss a targeted multi-agent hygiene survey for 2027?
            </p>
            <Link
              href="/#contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-stone-100 hover:bg-white text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition duration-200 shrink-0"
            >
              Enquire for 2027 &rarr;
            </Link>
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
            <Link href="/services/coshh-exposure-assessment" className="hover:text-stone-200 transition">
              COSHH
            </Link>
            <Link href="/services/lev" className="hover:text-stone-200 transition">
              LEV
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