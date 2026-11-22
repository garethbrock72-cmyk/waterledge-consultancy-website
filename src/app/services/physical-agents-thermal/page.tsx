import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Risk, Heat & Cold Stress Assessment | Waterledge Consultancy",
  description:
    "BOHS-qualified occupational hygiene thermal environment, heat stress, and cold stress assessments across South West England, the Midlands, and London. BS EN ISO 7243 (WBGT), ISO 7933 (PHS), ISO 11079 (IREQ), ISO 15743, and ISO 9886 physiological strain monitoring.",
};

const coreStandards = [
  {
    code: "BS EN ISO 7243",
    title: "WBGT Heat Stress Screening",
    summary:
      "Empirical estimation of heat stress on working personnel using Wet Bulb Globe Temperature (WBGT) multi-sensor profiling across indoor radiant and outdoor solar environments.",
  },
  {
    code: "BS EN ISO 7933",
    title: "Predicted Heat Strain (PHS)",
    summary:
      "Analytical determination and interpretation of thermal stress through calculation of required sweat rate, core temperature trajectory, and maximum allowable exposure duration.",
  },
  {
    code: "BS EN ISO 11079",
    title: "IREQ Cold Stress Evaluation",
    summary:
      "Determination of Required Clothing Insulation (IREQmin / IREQneutral), Duration Limited Exposure (DLE), and convective wind chill effects (WCI) in sub-zero and chilled workplaces.",
  },
  {
    code: "BS EN ISO 15743",
    title: "Cold Workplaces & Risk Management",
    summary:
      "Structured occupational hygiene assessment, practices, and protective clothing management for sub-zero warehouse, chilled food production, and outdoor cold environments.",
  },
  {
    code: "BS EN ISO 9886",
    title: "Physiological Strain Monitoring",
    summary:
      "Ergonomic evaluation of personal heat and cold strain using non-invasive tympanic temperature, heart rate recovery profiling, 4-point and extremity skin thermometry.",
  },
  {
    code: "BS EN ISO 8996 & ISO 9920",
    title: "Metabolic Rate & Clothing Insulation",
    summary:
      "Quantitative classification of task metabolic work rates (Light to Very Heavy) and thermal insulation/vapour permeability (clo) of PPE, insulated freezerwear, and furnace garments.",
  },
];

const deliverables = [
  {
    number: "01",
    title: "Multi-Sensor WBGT & Radiant Heat Profiling",
    description:
      "Deployment of tripod-mounted Class 1 thermal environment logging arrays measuring Natural Wet Bulb (Tnwb), 150mm Black Globe Temperature (Tg), Dry Bulb Air Temperature (Ta), Relative Humidity, and air velocity at operator breathing and torso height.",
  },
  {
    number: "02",
    title: "Sub-Zero Cold Room & Air Velocity Logging",
    description:
      "Monitoring of sub-zero temperatures, Relative Humidity, and convective airflow (air velocity) at worker breathing and hand positions to quantify localised Wind Chill and air infiltration/movement.",
  },
  {
    number: "03",
    title: "Task Metabolic & PPE Microclimate Analysis",
    description:
      "Time-weighted assessment of physical workload alongside evaluation of encapsulating/reflective PPE or insulated EN 342 freezerwear (including gloves EN 511), quantifying effective insulation factors (clo).",
  },
  {
    number: "04",
    title: "ACGIH TLV / DLE & Warm-up Recovery Modelling",
    description:
      "Evaluation of measured environments against ACGIH Threshold Limit Values and calculating Duration Limited Exposure (DLE) alongside required hot or insulated warm-up recovery schedules.",
  },
  {
    number: "05",
    title: "Engineering & Administrative Control Design",
    description:
      "Prioritised hierarchy-of-control recommendations encompassing radiant heat shielding, spot cooling, draught/evaporator baffling, heated cabins, physiological acclimatisation, and structured hydration or warm-up stations.",
  },
  {
    number: "06",
    title: "Peripheral & Physiological Strain Assessment",
    description:
      "Non-invasive physiological telemetry evaluating personal cold and heat strain (e.g. skin/extremity temperature and cardiac recovery) when complex task dynamics or PPE negate environmental indices.",
  },
];

export default function PhysicalAgentsThermalPage() {
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
            <span className="text-[#d4af37]">Physical Agents: Thermal</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-stone-500">Physical Agents Suite:</span>
            <span className="border-b border-[#d4af37] pb-0.5 font-medium text-stone-100">
              Thermal Risk
            </span>
            <Link
              href="/services/physical-agents-noise"
              className="text-stone-400 transition-colors hover:text-[#d4af37]"
            >
              Workplace Noise →
            </Link>
            <Link
              href="/services/physical-agents-vibration"
              className="text-stone-400 transition-colors hover:text-[#d4af37]"
            >
              Vibration (HAVS / WBV) →
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

        <div className="flex flex-col gap-12">
          {/* Full-Width Top Header & Editorial Narrative */}
          <div className="w-full">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-stone-400">
              Occupational Hygiene • Physical Agents
            </p>
            <h1 className="font-serif text-4xl font-normal tracking-tight text-stone-100 sm:text-5xl lg:leading-[1.12]">
              Thermal Risk,{" "}
              <span className="text-[#d4af37]">Heat &amp; Cold Stress</span>{" "}
              Assessment
            </h1>

            <p className="mt-6 text-base leading-relaxed text-stone-300 sm:text-lg">
              Foundries, glassworks, smelting halls, commercial bakeries, and
              enclosed plant rooms subject operatives to intense radiant and
              convective thermal loads. Where heavy or reflective personal
              protective equipment restricts evaporative sweat cooling, core
              body temperature can escalate rapidly beyond safe physiological
              limits.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">
              Conversely, workers in industrial sub-zero cold stores, blast
              chillers, refrigerated production facilities, and exposed outdoor
              environments are vulnerable to the severe physiological impacts of
              cold stress. Low ambient air temperatures combined with
              convective wind chill from evaporator fan arrays will degrade
              manual dexterity, rapidly deplete body heat, and dramatically
              increase the risks of hypothermia or frostbite.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
              Waterledge Consultancy delivers quantitative thermal risk surveys
              engineered around{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 7243 (WBGT)
              </strong>
              ,{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 7933 (Predicted Heat Strain)
              </strong>
              ,{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 11079 (Required Clothing Insulation - IREQ)
              </strong>
              , and{" "}
              <strong className="font-medium text-stone-200">
                BS EN ISO 15743 (Cold Workplace Risk Assessment)
              </strong>
              . We separate environmental stress from individual physiological
              strain—giving dutyholders clear, auditable engineering controls,
              PPE evaluation, and robust work-rest or warm-up regimes.
            </p>

            {/* Key Parameter Callout Strip */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-y border-stone-800/90 py-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 7243
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  WBGT Profiling
                </div>
                <div className="text-xs text-stone-400">
                  Tnwb, Tg &amp; Ta arrays
                </div>
              </div>
              <div className="sm:border-l sm:border-stone-800/80 sm:pl-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 11079
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  IREQ &amp; DLE Cold Evaluation
                </div>
                <div className="text-xs text-stone-400">
                  Insulation, wind chill, &amp; exposure limits
                </div>
              </div>
              <div className="lg:border-l lg:border-stone-800/80 lg:pl-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 7933
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  PHS Modelling
                </div>
                <div className="text-xs text-stone-400">
                  Sweat rate &amp; duration
                </div>
              </div>
              <div className="sm:border-l sm:border-stone-800/80 sm:pl-6">
                <div className="font-mono text-xs uppercase tracking-widest text-[#d4af37]">
                  ISO 9886
                </div>
                <div className="mt-1 text-sm font-medium text-stone-200">
                  Strain Telemetry
                </div>
                <div className="text-xs text-stone-400">
                  Peripheral skin, heart rate &amp; tympanic
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-[#d4af37] bg-[#d4af37] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#0c0d0e] transition-all hover:bg-[#e3be42]"
              >
                Scope a Thermal Survey
              </Link>
              <Link
                href="/services/personal-sampling"
                className="inline-flex items-center justify-center rounded-sm border border-stone-700 bg-[#121417] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                Personal Sampling Services
              </Link>
            </div>
          </div>

          {/* Stacked Full-Width Visual Appraisals */}
          <div className="flex flex-col gap-8 w-full">
            {/* Fig 1.0 — Heat Stress Blueprint */}
            <div className="overflow-hidden rounded-sm border border-stone-800 bg-[#0c0d0e] p-3 shadow-2xl sm:p-4">
              <div className="relative aspect-square w-full max-h-[85vh] overflow-hidden rounded-sm border border-stone-800/60 bg-[#0c0d0e]">
                <Image
                  src="/images/Thermal-v3.webp"
                  alt="Occupational Hygiene Thermal Risk and WBGT Heat Stress Measurement Blueprint (BS EN ISO 7243 and ISO 9886)"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 py-1 text-xs tracking-wider uppercase text-stone-400">
                <span>Fig 1.0 — Radiant Furnace &amp; WBGT Sensor Array</span>
                <span className="font-mono text-[#d4af37]">
                  BS EN ISO 7243 / ISO 9886 (HEAT)
                </span>
              </div>
            </div>

            {/* Sub-Zero Cold stress context paragraph */}
            <div className="w-full border-t border-stone-800/80 pt-6">
              <h2 className="font-serif text-2xl font-normal tracking-tight text-stone-100 sm:text-3xl">
                Environmental &amp; PPE Assessment in{" "}
                <span className="text-[#d4af37]">Sub-Zero Cold Stores</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
                Measuring sub-zero occupational environments (such as the -20°C
                to -40°C conditions highlighted in Fig 2.0 below) requires
                highly specialized, robust sensors to properly evaluate risks.
                Assessing a cold storage workforce demands tracing dry-bulb air
                temperatures, high-velocity convective fan patterns, relative
                humidity, and metabolic workloads. By comparing environmental
                forces against the Thermal Insulation Required index (IREQ) alongside the Duration Limited Exposure (DLE) standards, we can prevent cold strain, ensure appropriate glove and clothing selection, and safeguard workers from severe temperature drops.
              </p>
            </div>

            {/* Fig 2.0 — Cold Stress Blueprint */}
            <div className="overflow-hidden rounded-sm border border-stone-800 bg-[#0c0d0e] p-3 shadow-2xl sm:p-4">
              <div className="relative aspect-square w-full max-h-[85vh] overflow-hidden rounded-sm border border-stone-800/60 bg-[#0c0d0e]">
                <Image
                  src="/images/Thermal-v4.webp"
                  alt="Occupational Hygiene Cold Risk Assessment and IREQ Cold Stress Blueprint (BS EN ISO 11079 and ISO 15743)"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 py-1 text-xs tracking-wider uppercase text-stone-400">
                <span>Fig 2.0 — Industrial Sub-Zero Cold Room &amp; Environmental Arrays</span>
                <span className="font-mono text-[#d4af37]">
                  BS EN ISO 11079 / ISO 15743 (COLD)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL EQUATIONS & METHODOLOGY BANNER */}
      <section className="border-y border-stone-800/80 bg-[#101215] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#d4af37]">
                Empirical &amp; Analytical Indices
              </p>
              <h2 className="mt-2 font-serif text-2xl text-stone-100 sm:text-3xl">
                Assessment Formulations &amp; Strain Criteria
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-stone-400">
              Analysis combining natural wet bulb (Tnwb), black globe (Tg), dry
              bulb air (Ta), convective Wind Chill (WCI) and insulated clothing factors to evaluate extreme work stress.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Heat Stress (No Solar Load)
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                WBGT = 0.7 T<sub>nwb</sub> + 0.3 T<sub>g</sub>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Applied in furnace halls, casting bays, and internal manufacturing
                plant where radiant heat is high but direct solar loads are not
                present.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                IREQ Cold &amp; Local Cooling
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                IREQ<sub>min / neutral</sub> &amp; DLE
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Determines required clothing insulation (clo) and maximum
                Duration Limited Exposure (DLE) for working inside sub-zero or
                refrigerated areas.
              </p>
            </div>

            <div className="rounded-sm border border-stone-800 bg-[#0c0d0e] p-6">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#d4af37]">
                Personal Physiological Strain
              </div>
              <div className="mt-3 font-mono text-lg font-semibold text-stone-100">
                Tympanic • Heart Rate • Skin T
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Personal monitoring arrays (ISO 9886) track key core temperature
                trends, recovery times, and peripheral hand/glove skin temps in
                intense sub-zero and furnace work.
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
            Under the Health and Safety at Work etc. Act 1974 and the Management
            of Health and Safety at Work Regulations 1999, employers must assess
            and control foreseeable thermal hazards (both extreme heat and extreme
            cold) in accordance with recognized British and International standards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              Engineering-Grade Thermal Risk Reporting
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
                Explore Dedicated Noise &amp; Vibration Assessments
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-stone-400">
                Alongside comprehensive thermal and cold-store assessments, Waterledge
                Consultancy provides Class 1 octave-band workplace noise surveys
                (BS EN ISO 9612) and triaxial Hand-Arm &amp; Whole-Body Vibration
                monitoring (BS EN ISO 5349 / ISO 2631).
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
                href="/services/physical-agents-vibration"
                className="rounded-sm border border-stone-700 bg-[#0c0d0e] px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-stone-200 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Vibration HAVS &amp; WBV →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}