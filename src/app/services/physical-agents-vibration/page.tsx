import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand-Arm (HAVS) & Whole-Body Vibration Assessment | Waterledge Consultancy",
  description:
    "BOHS-qualified occupational hygiene Hand-Arm Vibration (HAVS) and Whole-Body Vibration (WBV) assessments across South West England, the Midlands, and London. Control of Vibration at Work Regulations 2005, BS EN ISO 5349, and BS EN ISO 2631.",
};

const coreStandards = [
  {
    code: "CVWR 2005 (HSE L140 / L141)",
    title: "Control of Vibration at Work",
    summary:
      "Statutory exposure assessments against daily Exposure Action Values (EAV) and Exposure Limit Values (ELV) for both Hand-Arm Vibration and Whole-Body Vibration.",
  },
  {
    code: "BS EN ISO 5349-1 & 5349-2",
    title: "Hand-Arm Vibration (HAV)",
    summary:
      "Triaxial (x, y, z) W_h frequency-weighted acceleration measurement at tool grip zones, including dual-accelerometer measurement on two-handed rotating and percussive power tools.",
  },
  {
    code: "BS EN ISO 2631-1",
    title: "Whole-Body Vibration (WBV)",
    summary:
      "Seat-pad triaxial (W_d and W_k weighted) root-mean-square acceleration and Vibration Dose Value (VDV) evaluation for mobile plant, forklifts, and off-road haulage vehicles.",
  },
  {
    code: "BS EN ISO 8041",
    title: "Human Response Instrumentation",
    summary:
      "Deployment of calibrated piezo-electric and MEMS triaxial accelerometers secured via rigid mechanical mounts to prevent low-frequency signal distortion or DC shift.",
  },
];

const deliverables = [
  {
    number: "01",
    title: "In-Situ Triaxial Tool & Plant Measurement",
    description:
      "Real-world triaxial accelerometer profiling (ahv) on grinders, breakers, fettling tools, and compactors under actual workpiece loading—avoiding reliance on unrepresentative manufacturer declared emission values.",
  },
  {
    number: "02",
    title: "A(8) Daily Exposure & HSE Points System Modelling",
    description:
      "Calculation of 8-hour energy-equivalent daily exposure A(8) in m/s² and corresponding HSE exposure points per hour across multi-tool operator schedules, identifying critical time-to-EAV (100 pts) and time-to-ELV (400 pts).",
  },
  {
    number: "03",
    title: "Whole-Body Vibration (WBV) & Shock Crest Analysis",
    description:
      "Triaxial seat-pad evaluation on industrial trucks and quarry/construction plant, quantifying highest single-axis acceleration (1.4 awx, 1.4 awy, 1.0 awz) and impulsive Vibration Dose Values (VDV) over rough haul roads.",
  },
  {
    number: "04",
    title: "Engineering Substitution & Tool Register Governance",
    description:
      "Development of live site tool registers, trigger-time tagging systems, abrasive/consumable matching, anti-vibration tool substitution roadmaps, and Tier 1–4 HAVS health surveillance integration.",
  },
];

export default function PhysicalAgentsVibrationPage() {
  return (
    <main className="min-h-screen bg-[#0c0d0e] text-stone-200 selection:bg-[#d4af37]/30 selection:text-stone-100">
      {/* Subtle Top Border Line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 lg:px-8 lg:pt-20">
        {/* Breadcrumb & Physical Agents Cross-Links */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-800/80 pb-4 text-xs tracking-[0.2em] uppercase text-stone-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-[#d4af37]">
              Home
            </Link>
            <span className="text-stone-600">/</span>
            <Link
              href="/services/risk-management"
              className="transition-colors hover:text-[#d4af37]"
            >
              Services
            </Link>
            <span className="text-stone-600">/</span>
            <span className="text-[#d4af37]">Physical Agents: Vibration</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-stone-500">Physical Agents Suite:</span>
            <span className="border-b border-[#d4af37] pb-0.5 font-medium text-stone-100">
              Vibration (HAVS / WBV)
            </span>
            <Link
              href="/services/physical-agents-noise"
              className="text-stone-400 transition-colors hover:text-[#d4af37]"
            >
              Workplace Noise →
            </Link>
            <Link
              href="/services/physical-agents-thermal"
              className="text-stone-400 transition-colors hover:text-[#d4af37]"
            >
              Thermal Risk →
            </Link>
          </div>
        </div>

        {/* Heritage Notice Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/35 bg-[#121417] px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
            Identify • Control • Verify • Assure
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-stone-400">
              Occupational Hygiene • Physical Agents
            </p>
            <h1 className="font-serif text-4xl font-normal tracking-tight text-stone-100 sm:text-5xl lg:leading-[1.12]">
              Hand-Arm &amp; Whole-Body{" "}
              <span className="text-[#d4af37]">Vibration</span> Assessment
            </h1>

            <p className="mt-6 text-base leading-relaxed text-stone-300 sm:text-lg">
              Prolonged operation of rotary grinders, percussive breakers,
              foundry fettling tools, and heavy mobile plant transmits
              mechanical energy directly into the upper limbs and spine—leading
              to irreversible Hand-Arm Vibration Syndrome (HAVS), Vibration
              White Finger, carpal tunnel syndrome, and lumbar pathology.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Waterledge Consultancy delivers quantitative triaxial vibration
              assessments under the{" "}
              <strong className="font-medium text-stone-200">
                Control of Vibration at Work Regulations 2005
              </strong>
              ,{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 5349
              </strong>
              , and{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 2631
              </strong>
              . By measuring actual in-situ tool handle magnitudes (a
              <sub>hv</sub>) rather than relying on bench-test catalogue data,
              we establish accurate A(8) daily exposures and defensible engineering
              controls.
            </p>

            {/* Key Parameter Callout Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-stone-800/90 py-5">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 5349-1/2
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  Triaxial HAVS
                </div>
                <div className="text-xs text-stone-400">
                  Dual-handle a<sub>hv</sub> (m/s²)
                </div>
              </div>
              <div className="border-l border-stone-800/80 pl-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 2631-1
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  Seat-Pad WBV
                </div>
                <div className="text-xs text-stone-400">
                  RMS A(8) &amp; VDV shock
                </div>
              </div>
              <div className="border-l border-stone-800/80 pl-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  HSE L140
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  100 / 400 Pts
                </div>
                <div className="text-xs text-stone-400">
                  EAV &amp; ELV governance
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-[#d4af37] bg-[#d4af37] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#0c0d0e] transition-all hover:bg-[#e3be42]"
              >
                Scope a Vibration Survey
              </Link>
              <Link
                href="/services/risk-management"
                className="inline-flex items-center justify-center rounded-sm border border-stone-700 bg-[#121417] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                Risk Management Governance
              </Link>
            </div>
          </div>

          {/* Right Column: CAD Blueprint Graphic */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm border border-stone-800 bg-[#0c0d0e] p-2 shadow-2xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-stone-800/60 bg-[#0c0d0e]">
                <Image
                  src="/images/hav-assessment.webp"
                  alt="Occupational Hygiene Hand-Arm Vibration (HAVS) Triaxial Accelerometer Assessment Blueprint (BS EN ISO 5349)"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-2 py-1 text-[11px] tracking-wider uppercase text-stone-400">
                <span>Fig 1.0 — Dual-Handle Triaxial Accelerometer Mounting</span>
                <span className="font-mono text-[#d4af37]">
                  BS EN ISO 5349-1 / ISO 5349-2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUTORY ACTION LEVELS & VECTOR FORMULATION BANNER */}
      <section className="border-y border-stone-800/80 bg-[#101215] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
                Triaxial Vector Summation &amp; Statutory Limits
              </p>
              <h2 className="mt-2 font-serif text-2xl text-stone-100 sm:text-3xl">
                UK Control of Vibration at Work Regulations 2005 Criteria
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-stone-400">
              Orthogonal x, y, and z frequency-weighted RMS acceleration
              vectors normalised to an 8-hour reference duration (T<sub>0</sub>{" "}
              = 8 h).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Hand-Arm Vibration (HAVS) Limits
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                EAV = 2.5 m/s² • ELV = 5.0 m/s²
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Equivalent to 100 HSE exposure points (EAV) and 400 HSE points
                (ELV). Above 2.5 m/s² A(8), technical control programmes and
                regular HAVS health surveillance are mandatory.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Whole-Body Vibration (WBV) Limits
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                EAV = 0.5 m/s² • ELV = 1.15 m/s²
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Evaluated along the highest weighted single axis (k = 1.4 for
                x/y axes, k = 1.0 for z axis) alongside impulsive Vibration
                Dose Value (VDV) shock monitoring.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Vector Sum &amp; Daily A(8) (ISO 5349)
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                A(8) = a<sub>hv</sub> √(T / T<sub>0</sub>)
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Where vibration total value a<sub>hv</sub> = √(a
                <sub>hwx</sub>² + a<sub>hwy</sub>² + a<sub>hwz</sub>²) across
                the dominant hand on two-handed power tools over daily trigger
                time T.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY & TECHNICAL STANDARDS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
            Regulatory &amp; Normative Framework
          </p>
          <h2 className="mt-2 font-serif text-3xl text-stone-100">
            Standards &amp; Compliance Architecture
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            Vibration exposure surveys are executed in full compliance with UK
            HSE Guidance L140 (Hand-Arm Vibration) and L141 (Whole-Body
            Vibration), providing legally robust documentation for enforcement
            and civil claims defence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreStandards.map((item) => (
            <div
              key={item.code}
              className="flex flex-col justify-between rounded-sm border border-stone-800/90 bg-[#111317] p-6 transition-colors hover:border-[#d4af37]/50"
            >
              <div>
                <div className="inline-block rounded-sm border border-[#d4af37]/30 bg-[#0c0d0e] px-2.5 py-1 font-mono text-xs font-semibold text-[#d4af37]">
                  {item.code}
                </div>
                <h3 className="mt-4 font-serif text-lg text-stone-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  {item.summary}
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-stone-800/80" />
            </div>
          ))}
        </div>
      </section>

      {/* CORE DELIVERABLES */}
      <section className="border-t border-stone-800/80 bg-[#0f1114] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
              Consultancy Deliverables
            </p>
            <h2 className="mt-2 font-serif text-3xl text-stone-100">
              Engineering-Grade Vibration Survey Reporting
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {deliverables.map((d) => (
              <div
                key={d.number}
                className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-[#d4af37]">
                    {d.number}
                  </span>
                  <div className="h-px flex-1 bg-stone-800" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-stone-100">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHYSICAL AGENTS SUITE NAVIGATION FOOTER */}
      <section className="border-t border-stone-800/90 bg-[#0c0d0e] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-stone-800 bg-[#111317] p-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#d4af37]">
                Related Physical Agents Services
              </div>
              <h3 className="mt-2 font-serif text-2xl text-stone-100">
                Explore Dedicated Noise &amp; Thermal Assessments
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-stone-400">
                Alongside HAVS and WBV surveys, Waterledge Consultancy provides
                Class 1 octave-band workplace noise assessments (BS EN ISO 9612)
                and quantitative WBGT thermal risk evaluations (BS EN ISO 7243).
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/physical-agents-noise"
                className="rounded-sm border border-stone-700 bg-[#0c0d0e] px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-stone-200 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Workplace Noise (ISO 9612) →
              </Link>
              <Link
                href="/services/physical-agents-thermal"
                className="rounded-sm border border-stone-700 bg-[#0c0d0e] px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-stone-200 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Thermal Risk (ISO 7243) →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}