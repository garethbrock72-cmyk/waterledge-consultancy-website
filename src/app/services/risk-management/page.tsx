import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupational Hygiene Risk Management & Governance | Waterledge Consultancy",
  description:
    "Closed-loop occupational hygiene risk governance, ALARP verification, and multi-disciplinary exposure control across COSHH, noise, vibration, thermal environments, and LEV.",
};

const hierarchySteps = [
  {
    step: "01",
    title: "Elimination",
    subtitle: "Process Redesign & Automation",
    accent: "text-sky-400 border-sky-500/30",
    description:
      "Permanently removing the hazardous substance, excessive noise source, or mechanical vibration process at the design stage.",
  },
  {
    step: "02",
    title: "Substitution",
    subtitle: "Low-Emission Plant & Materials",
    accent: "text-teal-400 border-teal-500/30",
    description:
      "Replacing high-risk agents with low-volatility materials, quiet-by-design machinery, or low-vibration tooling prior to operational deployment.",
  },
  {
    step: "03",
    title: "Engineering Controls",
    subtitle: "Containment, LEV & Acoustic Damping",
    accent: "text-emerald-400 border-emerald-500/30",
    description:
      "Isolating, enclosing, extracting, or damping energy at source—including HSG258 rim-slot LEV, acoustic enclosures, and elastomeric vibration mounts.",
  },
  {
    step: "04",
    title: "Administrative Controls",
    subtitle: "Exposure Duration & Safe Systems of Work",
    accent: "text-[#d4af37] border-[#d4af37]/40",
    description:
      "Managing residual exposure through HAVS trigger-time limits, thermal work-rest regimes, task rotation, and targeted health surveillance.",
  },
  {
    step: "05",
    title: "RPE / PPE",
    subtitle: "Verified Personal Protection",
    accent: "text-amber-500 border-amber-600/40",
    description:
      "Specifying face-fit tested respiratory protection (HSG53), SNR-matched hearing protection, and thermal PPE strictly as a secondary defence.",
  },
];

const governancePillars = [
  {
    code: "PHASE 01",
    title: "Multi-Hazard Identification",
    body: "Systematic characterisation of airborne contaminants (vapours, dusts, fumes), physical agents (noise, HAVS/WBV), and thermal stressors across operational groups.",
    standards: "COSHH Reg 6 • Noise Regs 2005 • Vibration Regs 2005",
  },
  {
    code: "PHASE 02",
    title: "Control Specification",
    body: "Engineering-led selection of source containment, local exhaust ventilation (LEV), acoustic attenuation, and vibration isolation proportional to hazard severity.",
    standards: "COSHH Reg 7 • HSG258 • BS EN ISO 11690",
  },
  {
    code: "PHASE 03",
    title: "Quantitative Verification",
    body: "Empirical workplace monitoring—personal air sampling, octave-band noise dosimetry, tri-axial HAVS measurement, and thorough LEV commissioning.",
    standards: "BS EN 689 • BS EN ISO 9612 • BS EN ISO 5349",
  },
  {
    code: "PHASE 04",
    title: "ALARP Assurance & Audit",
    body: "Board-level risk registers, statutory compliance auditing, and long-term exposure tracking demonstrating risk reduction to As Low As Reasonably Practicable.",
    standards: "COSHH Reg 9 & 10 • ISO 45001 • HSG65",
  },
];

export default function RiskManagementPage() {
  return (
    <main className="min-h-screen bg-[#0c0d0e] text-stone-200 selection:bg-[#d4af37]/20 selection:text-[#d4af37]">
      {/* Hero Section */}
      <section className="relative border-b border-stone-800/80 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heritage Notice Pill Badge */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-800 bg-stone-900/90 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-stone-300 uppercase">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
              Practice Launching Early 2027 • Scheduling Open
            </div>
            <span className="rounded-full border border-[#876441]/40 bg-[#0f1012] px-3.5 py-1 text-[11px] font-medium tracking-[0.18em] text-[#d4af37] uppercase">
              MSc • CertOH • CoC Control • LFOH
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
              Strategic Occupational Hygiene • Statutory Assurance
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-100 sm:text-5xl lg:text-6xl">
              Occupational Hygiene{" "}
              <span className="text-[#d4af37]">Risk Governance</span> &amp; ALARP Verification
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-400 sm:text-lg">
              Effective exposure governance extends beyond isolated compliance checks. We build
              closed-loop risk management frameworks that integrate chemical (COSHH), physical
              (noise, hand-arm and whole-body vibration), thermal, and ventilation engineering
              controls into a single auditable assurance cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Diagram & Governance Architecture */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left 7 Columns: Refined Multi-Disciplinary Governance Schematic */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-[#876441]/50 bg-[#0c0d0e] shadow-2xl">
                <div className="flex items-center justify-between border-b border-stone-800/80 bg-[#0f1012] px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    <span className="text-xs font-semibold tracking-[0.18em] text-stone-200 uppercase">
                      Fig. 01 — Multi-Disciplinary Risk Governance Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#d4af37]">
                    COSHH • NOISE • VIBRATION • THERMAL • LEV
                  </span>
                </div>

                <div className="relative aspect-square w-full bg-[#0c0d0e] p-2 sm:p-4">
                  <Image
                    src="/occupational-hygiene-risk-governance.webp"
                    alt="Occupational Hygiene Risk Governance diagram showing the 5-tier Hierarchy of Control and the 4-stage Closed-Loop Regulatory Verification Cycle across COSHH, noise, vibration, thermal, and LEV hazards."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
                  />
                </div>

                <div className="border-t border-stone-800/80 bg-[#0f1012] px-5 py-3 text-xs text-stone-400">
                  Closed-loop integration of the Hierarchy of Control with quantitative exposure
                  monitoring (WELs, Exposure Action &amp; Limit Values) to verify ALARP performance.
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Hierarchy of Control Breakdown Cards */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="mb-2">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#d4af37] uppercase">
                  Source-First Engineering Priority
                </p>
                <h2 className="mt-1 font-serif text-2xl font-semibold text-stone-100 sm:text-3xl">
                  The Multi-Hazard Hierarchy
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  Applied consistently across airborne substances, acoustic energy, mechanical
                  vibration, and thermal environments:
                </p>
              </div>

              {hierarchySteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-stone-800/90 bg-[#0f1012] p-4 transition-colors hover:border-[#876441]/60"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold tracking-wide text-stone-100 uppercase">
                      <span className="mr-2 font-mono text-[#d4af37]">{item.step}.</span>
                      {item.title}
                    </h3>
                    <span
                      className={`rounded border px-2 py-0.5 text-[11px] font-medium ${item.accent}`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-stone-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Closed-Loop Verification Cycle */}
      <section className="border-t border-stone-800/80 bg-[#0f1012]/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#d4af37] uppercase">
              Closed-Loop Regulatory Assurance
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-stone-100 sm:text-4xl">
              Quantitative Verification Cycle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
              Controls cannot be assumed effective by installation alone. Governance requires
              scientific verification against UK Workplace Exposure Limits (EH40) and Physical
              Agents Exposure Action and Limit Values.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governancePillars.map((pillar) => (
              <div
                key={pillar.code}
                className="flex flex-col justify-between rounded-xl border border-stone-800/90 bg-[#0c0d0e] p-6 transition-colors hover:border-[#876441]"
              >
                <div>
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#d4af37]">
                    {pillar.code}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-stone-100">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{pillar.body}</p>
                </div>
                <div className="mt-6 border-t border-stone-800/80 pt-3">
                  <span className="text-[11px] font-mono tracking-wider text-stone-400">
                    {pillar.standards}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone-800/80 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-stone-100">
              Establish Defensible Occupational Hygiene Governance
            </h2>
            <p className="mt-1 text-sm text-stone-400">
              Supporting industrial, manufacturing, and engineering operations across the South West,
              Midlands, and London.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-md bg-[#d4af37] px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-[#0c0d0e] uppercase transition hover:bg-[#e3be42]"
            >
              Enquire for 2027 Scheduling
            </Link>
            <Link
              href="/services/coshh-exposure-assessment"
              className="inline-flex items-center rounded-md border border-stone-700 bg-stone-900/80 px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-stone-200 uppercase transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              View COSHH Engineering Controls
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}