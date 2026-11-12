import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workplace Noise Exposure Assessment | Waterledge Consultancy",
  description:
    "BOHS-qualified occupational hygiene workplace noise assessments across South West England, the Midlands, and London. Control of Noise at Work Regulations 2005, BS EN ISO 9612, Class 1 1/1 octave-band analysis, and engineering noise control.",
};

const coreStandards = [
  {
    code: "CNWR 2005 (HSE L108)",
    title: "Control of Noise at Work",
    summary:
      "Statutory compliance assessments against Lower and Upper Exposure Action Values (80 dB(A) / 85 dB(A) LEP,d) and Peak Action Values (135 dB(C) / 137 dB(C) LCPeak).",
  },
  {
    code: "BS EN ISO 9612",
    title: "Acoustic Determination of Exposure",
    summary:
      "Precision task-based, job-based, and full-day measurement strategies with rigorous expanded uncertainty (U) calculations for daily (LEP,d) and weekly (LEP,w) noise exposure.",
  },
  {
    code: "BS EN 61672-1 (Class 1)",
    title: "Electroacoustic Instrumentation",
    summary:
      "Deployment of Class 1 integrating-averaging sound level meters and personal acoustic dosimeters with pre- and post-survey field acoustic calibration verification.",
  },
  {
    code: "BS EN 458",
    title: "Hearing Protection Suitability",
    summary:
      "1/1 octave-band frequency attenuation modelling to ensure effective at-ear levels between 70 dB(A) and 80 dB(A) while eliminating dangerous acoustic overprotection (<70 dB(A)).",
  },
];

const deliverables = [
  {
    number: "01",
    title: "Personal Noise Dosimetry & Task Profiling (see personal sampling)",
    description:
      "Shoulder-mounted MEMS personal noise dosimetry and Class 1 hand-held LAeq,T / LCPeak measurements across mobile, maintenance, and multi-task manufacturing roles in accordance with BS EN ISO 9612.",
  },
  {
    number: "02",
    title: "1/1 Octave-Band Spectral Analysis & BS EN 458",
    description:
      "Full 16 Hz to 16 kHz octave-band frequency breakdown to match dominant tonal and broadband acoustic energy against hearing defender attenuation curves—targeting 70–80 dB(A) at the ear.",
  },
  {
    number: "03",
    title: "Acoustic Mapping & Hearing Protection Zones",
    description:
      "High-definition spatial noise contour mapping and boundary demarcation for mandatory Hearing Protection Zones (≥85 dB(A)), identifying dominant radiating surfaces and reverberant field build-up.",
  },
  {
    number: "04",
    title: "Engineering Noise Control Specification",
    description:
      "Pragmatic source-pathway-receiver engineering interventions including acoustic enclosures, pneumatic exhaust silencers, structural damping, anti-vibration mounts, and room absorption treatments.",
  },
];

export default function PhysicalAgentsNoisePage() {
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
            <span className="text-[#d4af37]">Physical Agents: Noise</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-stone-500">Physical Agents Suite:</span>
            <span className="border-b border-[#d4af37] pb-0.5 font-medium text-stone-100">
              Workplace Noise
            </span>
            <Link
              href="/services/physical-agents-vibration"
              className="text-stone-400 transition-colors hover:text-[#d4af37]"
            >
              Vibration (HAVS / WBV) →
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
              Workplace Noise &amp;{" "}
              <span className="text-[#d4af37]">Acoustic Exposure</span>{" "}
              Assessment
            </h1>

            <p className="mt-6 text-base leading-relaxed text-stone-300 sm:text-lg">
              High-energy industrial machinery, pneumatic tooling, stamping
              presses, and reverberant fabrication enclosures generate complex
              steady-state and impulsive acoustic fields capable of causing
              irreversible Noise-Induced Hearing Loss (NIHL) and tinnitus.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Waterledge Consultancy conducts precision occupational noise
              assessments under the{" "}
              <strong className="font-medium text-stone-200">
                Control of Noise at Work Regulations 2005
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 9612
              </strong>
              . Using Class 1 real-time 1/1 octave-band analysers and personal
              dosimeters, we quantify daily exposure (L<sub>EP,d</sub>), peak
              sound pressure (L<sub>CPeak</sub>), and engineer practical source
              attenuation before relying on hearing protection.
            </p>

            {/* Key Parameter Callout Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-stone-800/90 py-5">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 9612
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  L<sub>EP,d</sub> &amp; L<sub>EP,w</sub>
                </div>
                <div className="text-xs text-stone-400">
                  Uncertainty-validated
                </div>
              </div>
              <div className="border-l border-stone-800/80 pl-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  IEC 61672-1
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  Class 1 Octave
                </div>
                <div className="text-xs text-stone-400">
                  16 Hz – 16 kHz spectrum
                </div>
              </div>
              <div className="border-l border-stone-800/80 pl-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  BS EN 458
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  70–80 dB(A)
                </div>
                <div className="text-xs text-stone-400">
                  At-ear RPE/HPD target
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-[#d4af37] bg-[#d4af37] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#0c0d0e] transition-all hover:bg-[#e3be42]"
              >
                Scope a Noise Survey
              </Link>
              <Link
                href="/services/personal-sampling"
                className="inline-flex items-center justify-center rounded-sm border border-stone-700 bg-[#121417] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                Personal Dosimetry Services
              </Link>
            </div>
          </div>

          {/* Right Column: CAD Blueprint Graphic */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm border border-stone-800 bg-[#0c0d0e] p-2 shadow-2xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-stone-800/60 bg-[#0c0d0e]">
                <Image
                  src="/images/noise-exposure-assessment.webp"
                  alt="Occupational Hygiene Workplace Noise Exposure Assessment and Class 1 Octave Band Analysis Blueprint (BS EN ISO 9612 and IEC 61672-1)"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-2 py-1 text-[11px] tracking-wider uppercase text-stone-400">
                <span>Fig 1.0 — Class 1 On-Axis SLM &amp; 1/1 Octave Breakdown</span>
                <span className="font-mono text-[#d4af37]">
                  BS EN ISO 9612 / IEC 61672-1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUTORY ACTION LEVELS & FORMULATION BANNER */}
      <section className="border-y border-stone-800/80 bg-[#101215] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
                Statutory Thresholds &amp; Energetic Averaging
              </p>
              <h2 className="mt-2 font-serif text-2xl text-stone-100 sm:text-3xl">
                UK Control of Noise at Work Regulations 2005 Criteria
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-stone-400">
              Logarithmic A-weighted daily energy normalisation to an 8-hour
              reference period (T<sub>0</sub> = 8 h) alongside C-weighted
              instantaneous acoustic peak evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Lower Exposure Action Values (LEAV)
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                L<sub>EP,d</sub> = 80 dB(A) • L<sub>CPeak</sub> = 135 dB(C)
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Requires formal risk assessment, worker information and
                training, and provision of suitable hearing protection upon
                request.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Upper Exposure Action Values (UEAV)
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                L<sub>EP,d</sub> = 85 dB(A) • L<sub>CPeak</sub> = 137 dB(C)
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Triggers mandatory engineering noise reduction programmes,
                demarcated Hearing Protection Zones, mandatory HPD use, and
                audiometric health surveillance.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Daily Exposure Formulation (ISO 9612)
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                L<sub>EP,d</sub> = L<sub>Aeq,Te</sub> + 10 log<sub>10</sub>(T
                <sub>e</sub> / T<sub>0</sub>)
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Combines task-specific equivalent continuous sound pressure
                levels (L<sub>Aeq,Te</sub>) over effective duration T
                <sub>e</sub> against the 87 dB(A) Exposure Limit Value.
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
            Every workplace noise assessment is conducted by a BOHS CertOH
            qualified occupational hygienist in strict alignment with UK HSE
            guidance L108 and international acoustic standards.
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
              Engineering-Grade Acoustic Survey Reporting
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
                Explore Dedicated Vibration &amp; Thermal Assessments
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-stone-400">
                Alongside workplace noise surveys, Waterledge Consultancy
                delivers triaxial Hand-Arm &amp; Whole-Body Vibration assessments
                (BS EN ISO 5349 / ISO 2631) and quantitative WBGT thermal risk
                evaluations (BS EN ISO 7243).
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/physical-agents-vibration"
                className="rounded-sm border border-stone-700 bg-[#0c0d0e] px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-stone-200 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Vibration HAVS &amp; WBV →
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