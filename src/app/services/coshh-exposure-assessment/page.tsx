import Link from "next/link";

export const metadata = {
  title: "COSHH Exposure Assessment & Control (Regs 6–12 & ACoP L5) | Waterledge Consultancy",
  description:
    "Specialist occupational hygiene COSHH assessments compliant with the Control of Substances Hazardous to Health Regulations 2002 (Regulations 6 to 12), HSE ACoP L5, EH40 WELs, and BS EN 689.",
};

export default function CoshhExposureAssessmentPage() {
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
              href="/services/health-risk-assessment"
              className="hidden sm:inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-stone-400 hover:text-[#d4af37] transition"
            >
              Total HRA &rarr;
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
        
        {/* Hero Section */}
        <section className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            Practice Launching Early 2027 &bull; Scheduling Open
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                01 // Chemical &amp; Biological Agents
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-2.5 py-0.5">
                COSHH 2002 (Regs 6–12) &bull; HSE ACoP L5 &bull; EH40/2005
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 tracking-tight leading-[1.15]">
              COSHH Exposure Assessment &amp; Control
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-stone-300 font-serif italic leading-relaxed font-light">
            Scientific evaluation and control of workplace hazardous substances aligned with the Control of Substances Hazardous to Health Regulations 2002 and Approved Code of Practice L5.
          </p>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            A legally defensible COSHH assessment extends far beyond compiling Safety Data Sheets (SDS). Under the <strong>HSE Approved Code of Practice (ACoP) L5</strong>, dutyholders must evaluate how substances are actually used, generated, or released in the workplace—accounting for airborne physical states (dusts, fumes, mists, vapours, gases), dermal absorption pathways, and synergistic task variables. Waterledge Consultancy delivers rigorous occupational hygiene appraisals covering the complete regulatory lifecycle from <strong>Regulation 6 through Regulation 12</strong>.
          </p>

          {/* Quick Jump Regulatory Bar */}
          <div className="pt-4 space-y-3">
            <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-stone-400">
              Statutory COSHH Framework &amp; ACoP L5 Architecture
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="#reg-6"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 6: Risk Assessment
              </a>
              <a
                href="#reg-7"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 7: Prevention &amp; Control
              </a>
              <a
                href="#reg-8"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 8: Use of Controls
              </a>
              <a
                href="#reg-9"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 9: Maintenance &amp; TExT
              </a>
              <a
                href="#reg-10"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 10: Exposure Monitoring
              </a>
              <a
                href="#reg-11"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 11: Health Surveillance
              </a>
              <a
                href="#reg-12"
                className="px-3.5 py-2 bg-[#0f1012] border border-stone-800 hover:border-[#d4af37] text-[10px] font-mono tracking-wider uppercase text-stone-200 hover:text-[#d4af37] transition"
              >
                Reg 12: Information &amp; Training
              </a>
            </div>
          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 1: Scope of Substances Hazardous to Health */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
              Hazard Identification &bull; Regulation 2 &amp; ACoP L5
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              What Constitutes a Substance Hazardous to Health?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Occupational hygiene assessments evaluate both proprietary chemical products and process-generated emissions that have no Safety Data Sheet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                01 // CLP Classified &amp; WEL Substances
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Chemical Inventories &amp; EH40 Limits
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                Substances classified as acute toxins, skin/respiratory sensitizers (H317/H334), corrosives, or specific target organ toxicants under GB CLP, alongside any substance assigned a Long-Term (8-hr TWA) or Short-Term (15-min STEL) Workplace Exposure Limit (WEL) in <strong>HSE EH40/2005</strong>.
              </p>
            </div>

            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                02 // Process-Generated Contaminants
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Fumes, Dusts, Mists &amp; Vapours
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                By-products arising from mechanical or thermal industrial processes: mild and stainless steel welding fume, Respirable Crystalline Silica (RCS), hardwood/softwood dusts, water-mix metalworking fluid (MWF) mists, diesel engine exhaust emissions (DEEE), and thermal degradation products (isocyanates, vulcanisation fumes).
              </p>
            </div>

            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-3">
              <div className="font-mono text-xs text-[#d4af37] uppercase tracking-widest">
                03 // Schedule 1 &amp; Biological Agents
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Carcinogens, Mutagens &amp; Asthmagens
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                High-consequence substances carrying H350/H350i (carcinogenic) or H340 (mutagenic) hazard statements (e.g., hexavalent chromium, cadmium, nickel oxides, benzene), respiratory asthmagens, and workplace biological agents (Hazard Groups 2–4, legionella, organic bioaerosols, and endotoxins in MWF sumps).
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 2: Comprehensive Breakdown of Regulations 6 to 12 & ACoP L5 */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
              Statutory Compliance Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              COSHH Regulations 6 to 12 &amp; ACoP L5 Requirements
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Approved Code of Practice L5 holds special legal status under Section 17 of the Health and Safety at Work etc. Act 1974. Below is how our occupational hygiene consultancy addresses each statutory regulation in practice.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Regulation 6 */}
            <div
              id="reg-6"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 6 // Foundation of Compliance
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Suitable and Sufficient Assessment of the Risk to Health
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 6(1)–(4) &bull; ACoP L5 Paras 50–103
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Employers must not carry out work liable to expose employees to any substance hazardous to health unless a <strong>suitable and sufficient assessment</strong> of the risk created by that work—and the steps needed to meet COSHH—has been made. Under ACoP L5, the assessment must systematically consider the hazardous properties of the substance, level/type/duration of exposure, physical state/volatility, routes of uptake (inhalation, dermal, ingestion, injection), combined exposures, and the results of any previous exposure monitoring or health surveillance.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Task-based Similar Exposure Group (SEG) profiling rather than generic SDS transcription.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Appraisal of non-routine tasks: maintenance, filter change-outs, vessel entry, and spill response.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Defined review triggers: process change, engineering modification, adverse air monitoring results, or confirmed cases of occupational disease.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regulation 7 */}
            <div
              id="reg-7"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 7 &amp; Schedule 2A // Hierarchy of Control
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Prevention or Control of Exposure &amp; The Eight Principles of Good Practice
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 7(1)–(11) &bull; ACoP L5 Paras 104–169
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Every employer must ensure that exposure is either <strong>prevented</strong> (via elimination or substitution to a safer substance or physical form, such as pellets instead of fine powder) or, where not reasonably practicable, <strong>adequately controlled</strong>. Under Reg 7(7), control is only considered adequate if: (a) the <strong>Eight Principles of Good Control Practice (Schedule 2A)</strong> are applied; (b) any Workplace Exposure Limit (WEL) is not exceeded; and (c) for carcinogens (Reg 7(5)), mutagens, and asthmagens, exposure is reduced to <strong>as low a level as is reasonably practicable (ALARP)</strong> below the WEL.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Technical substitution feasibility audits (vapour pressure vs. toxicity benchmarking).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Specification of total enclosure, partial containment, and Local Exhaust Ventilation (LEV) prior to administrative or PPE reliance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Quantitative Assigned Protection Factor (APF) vs. Effective Protection Factor verification, face-fit testing governance (INDG 479), and chemical permeation breakthrough profiling (EN ISO 374) for RPE and gloves.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regulation 8 */}
            <div
              id="reg-8"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 8 // Operational Discipline
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Use of Control Measures (Employer &amp; Employee Duties)
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 8(1)–(2) &bull; ACoP L5 Paras 170–178
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Providing engineering controls or PPE on paper does not satisfy COSHH. Regulation 8(1) requires the employer to take all reasonable steps to ensure that control measures, PPE, and facilities are <strong>properly used or applied</strong>. Regulation 8(2) places a direct duty on employees to make full and proper use of controls, return PPE to designated accommodation after use, and immediately report any discovered defect.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Shop-floor behavioural and ergonomic audits of actual control usage (e.g., verifying hinged LEV capture hoods are positioned within the capture zone during active welding/grinding).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Inspection of clean/contaminated PPE segregation, battery charging regimes for Powered Air Purifying Respirators (PAPR), and defect reporting workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regulation 9 */}
            <div
              id="reg-9"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 9 &amp; Schedule 4 // Engineering Integrity
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Maintenance, Examination and Testing of Control Measures
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 9(1)–(5) &bull; ACoP L5 Paras 179–201 &bull; HSG 258
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Every control measure must be maintained in an <strong>efficient state, in efficient working order, in good repair, and in a clean condition</strong>. Under Reg 9(2), Local Exhaust Ventilation (LEV) plant must undergo a statutory <strong>Thorough Examination and Test (TExT)</strong> at least once every <strong>14 months</strong> (or shorter intervals specified in Schedule 4: <strong>1 month</strong> for grit/shot blasting of castings; <strong>6 months</strong> for non-ferrous foundry processes, cotton/jute opening, and specified lead/electroplating operations). Non-disposable RPE must undergo thorough examination and testing at least once every month. Records must be retained for at least <strong>5 years</strong>.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>BOHS CoC (Control) certified commissioning and statutory TExT inspections strictly aligned with HSE HSG 258.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Design of user logbooks, hood static pressure gauge specifications, and weekly operator check protocols.</span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/services/lev"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0c0d0e] border border-stone-700 hover:border-[#d4af37] text-[10px] font-medium tracking-[0.2em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                    >
                      View LEV Testing &amp; Engineering Control Comparison &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulation 10 */}
            <div
              id="reg-10"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 10 &amp; Schedule 5 // Quantitative Validation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Monitoring Exposure at the Workplace
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 10(1)–(7) &bull; ACoP L5 Paras 202–217 &bull; BS EN 689
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Under Reg 10 and ACoP L5, workplace exposure monitoring is mandatory where: (a) failure or deterioration of control measures could result in a <strong>serious health effect</strong> (due to high toxicity or rapid onset); (b) measurement is necessary to ensure a <strong>Workplace Exposure Limit (WEL)</strong> or Biological Monitoring Guidance Value (BMGV) is not exceeded; (c) required to verify the continued effectiveness of engineering controls following process change; or (d) specified in Schedule 5 (vinyl chloride monomer and hexavalent chromium electroplating mists). General area/SEG monitoring records must be kept for at least <strong>5 years</strong>, and personal exposure records linked to identifiable individuals for at least <strong>40 years</strong>.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Personal breathing-zone sampling conducted to <strong>BS EN 689:2018+A1:2019</strong>, HSE <strong>MDHS 14/4</strong> (inhalable and respirable aerosols), and <strong>HSG 173</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Statistical compliance testing (Preliminary Test &amp; 95th percentile 70% Upper Confidence Limit U<sub>T</sub> calculations) alongside UKAS-accredited laboratory analysis and biological monitoring.</span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/services/personal-sampling"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0c0d0e] border border-stone-700 hover:border-[#d4af37] text-[10px] font-medium tracking-[0.2em] uppercase text-stone-200 hover:text-[#d4af37] transition"
                    >
                      Explore Personal Air &amp; Biological Sampling &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulation 11 */}
            <div
              id="reg-11"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 11 &amp; Schedule 6 // Clinical &amp; Biological Feedback
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Health Surveillance
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 11(1)–(11) &bull; ACoP L5 Paras 218–252
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Appropriate health surveillance is required where employees are exposed to substances listed in <strong>Schedule 6</strong> (under statutory medical surveillance by an HSE Appointed Doctor) OR where the Reg 6 assessment identifies that: (a) exposure is linked to an <strong>identifiable disease or adverse health effect</strong> (e.g., occupational asthma from sensitizers/isocyanates/flour/wood dust, occupational dermatitis, or silicosis); (b) there is a reasonable likelihood the condition may occur under the working conditions; and (c) valid techniques exist to detect indications of the disease. Individual health records (containing fitness outcomes, not clinical confidential data) must be retained for <strong>40 years</strong>.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Clear definition in the COSHH report of which SEGs require baseline and periodic spirometry (lung function), respiratory questionnaires, skin inspections, or biological effect monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Investigation of adverse health surveillance trends under Reg 11(8)—automatically triggering a Reg 6 assessment review and engineering control audit.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regulation 12 */}
            <div
              id="reg-12"
              className="p-8 sm:p-10 bg-[#0f1012] border border-stone-800/80 hover:border-[#d4af37]/60 transition duration-300 space-y-6 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5">
                <div>
                  <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                    Regulation 12 // Workforce Competence
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 mt-1">
                    Information, Instruction and Training
                  </h3>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 border border-stone-800 px-3 py-1 self-start md:self-auto">
                  COSHH Reg 12(1)–(5) &bull; ACoP L5 Paras 253–269
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 font-light leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Statutory &amp; ACoP L5 Requirement
                  </h4>
                  <p>
                    Employers must provide employees (and contractor personnel on site) with suitable and sufficient information, instruction, and training so they know: (a) the <strong>names of the substances</strong> they work with or generate and their risks to health; (b) access to relevant Safety Data Sheets; (c) the <strong>main findings of the Reg 6 risk assessment</strong>; (d) the precautions they must take and how to use LEV and RPE correctly; (e) the <strong>results of any Reg 10 exposure monitoring</strong> (especially immediately if a WEL is exceeded); and (f) the collective (anonymised) results of Reg 11 health surveillance.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-stone-100 font-medium tracking-wide uppercase text-xs font-mono">
                    Waterledge Hygiene Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Clear, operator-facing task control sheets and visual Safe Systems of Work (SSoW) translated from complex technical reports.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] font-mono">&bull;</span>
                      <span>Bespoke tool-box briefings explaining air sampling results, LEV hood positioning, and early symptom recognition for asthma and dermatitis.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="h-px bg-stone-800/80 w-full" />

        {/* Section 3: Schedule 2A - The Eight Principles of Good Control Practice */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
              COSHH Schedule 2A &bull; Regulation 7(7)(a)
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              The Eight Principles of Good Control Practice
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Compliance with a Workplace Exposure Limit (WEL) is never sufficient in isolation. Under COSHH Regulation 7(7), exposure is only legally &ldquo;adequately controlled&rdquo; when all eight principles of Schedule 2A are demonstrably applied:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "Principle 01",
                title: "Design & Operate Processes",
                desc: "Design and operate processes and activities to minimise emission, release, and spread of substances hazardous to health.",
              },
              {
                num: "Principle 02",
                title: "All Routes of Exposure",
                desc: "Take into account all relevant routes of exposure—inhalation, skin absorption, and ingestion—when developing control measures.",
              },
              {
                num: "Principle 03",
                title: "Proportionate Control",
                desc: "Control exposure by measures that are proportionate to the health risk, prioritising high-consequence carcinogens and sensitizers.",
              },
              {
                num: "Principle 04",
                title: "Most Effective & Reliable",
                desc: "Choose the most effective and reliable control options which minimise the escape and spread of substances (containment & LEV).",
              },
              {
                num: "Principle 05",
                title: "Personal Protective Equipment",
                desc: "Where adequate control cannot be achieved by other means alone, provide suitable PPE in combination with other controls.",
              },
              {
                num: "Principle 06",
                title: "Review & Check Controls",
                desc: "Check and review regularly all elements of control measures for their continuing effectiveness (Reg 9 TExT & Reg 10 monitoring).",
              },
              {
                num: "Principle 07",
                title: "Inform & Train Employees",
                desc: "Inform and train all employees on the hazards and risks from the substances with which they work and the use of control measures.",
              },
              {
                num: "Principle 08",
                title: "No New Risks Introduced",
                desc: "Ensure that the introduction of control measures does not increase the overall risk to health and safety (e.g., ergonomic or explosive hazards).",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 bg-[#0f1012] border border-stone-800/80 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-[#d4af37] uppercase tracking-widest">
                    {item.num}
                  </span>
                  <h3 className="text-base font-serif font-light text-stone-100">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border border-stone-800/80 bg-[#0f1012] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#d4af37] tracking-[0.2em] uppercase">
              Commission an Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100">
              Schedule a COSHH Hygiene Assessment for 2027
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Whether you require a site-wide Regulation 6 appraisal, quantitative BS EN 689 air monitoring, or Regulation 9 LEV testing, contact Waterledge Consultancy to discuss your requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Link
              href="/#contact"
              className="text-center px-8 py-3.5 bg-stone-100 hover:bg-white text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              Enquire Now &rarr;
            </Link>
            <Link
              href="/services/lev"
              className="text-center px-8 py-3.5 bg-transparent hover:bg-stone-900 text-stone-200 border border-stone-700 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              LEV Engineering Page &rarr;
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
            <Link href="/services/health-risk-assessment" className="hover:text-stone-200 transition">
              Health Risk Assessment
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