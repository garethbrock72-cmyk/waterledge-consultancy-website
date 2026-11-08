import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupational Hygiene Personal Sampling | Waterledge Consultancy",
  description:
    "Quantitative personal exposure monitoring across airborne contaminants (BS EN 689 / ISO 13137), noise dosimetry (CONAWR 2005), and biological monitoring (urinalysis for isocyanates).",
};

export default function PersonalSamplingPage() {
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

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.08em] text-stone-100 uppercase">
              Waterledge
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-medium">
              Consultancy
            </span>
          </Link>

          <Link
            href="/#services"
            className="px-5 py-2.5 bg-transparent hover:bg-stone-100 hover:text-stone-950 text-stone-200 rounded-none border border-stone-700 text-[11px] font-medium tracking-[0.25em] transition duration-200 uppercase"
          >
            &larr; All Services
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Hero Header with Heritage-style Notice Badge */}
        <section className="space-y-6 border-b border-stone-800/80 pb-14">
          {/* Heritage-style Notice Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            Service 05 &bull; COSHH, CONAWR &amp; Biological Monitoring
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 tracking-tight leading-[1.12]">
            Occupational Hygiene Personal Sampling
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 font-serif italic max-w-3xl leading-relaxed font-light">
            Defensible, standards-led personal exposure monitoring across chemical,
            physical, and biological agents.
          </p>

          <p className="text-sm sm:text-base text-stone-400 max-w-3xl leading-relaxed font-light">
            Quantifying real-world operator exposure within the breathing and hearing
            zones—alongside systemic biological uptake—to verify engineering and RPE
            controls against HSE EH40 Workplace Exposure Limits (WELs), Biological
            Monitoring Guidance Values (BMGVs), and Exposure Action Values (EAVs).
          </p>
        </section>

        {/* Main Technical Diagram + Core Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-[#0f1012] border border-stone-800/80 p-4 sm:p-6">
            <div className="relative w-full aspect-square overflow-hidden border border-stone-800/60">
              <Image
                src="/images/personal-sampling-assessment.webp"
                alt="Occupational Hygiene Personal Sampling Diagram showing IOM inhalable dust cassette in breathing zone, ISO 13137 constant flow pump, and shoulder-mounted personal noise dosimeter"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-xs text-stone-400 font-light tracking-wide text-center">
              Simultaneous personal air sampling (BS EN 689 / ISO 13137) and personal
              noise dosimetry (IEC 61252 / BS EN ISO 9612) configured within the
              operator&apos;s breathing and hearing zones.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-mono">
                Exposure Quantification
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100">
                Why Personal Sampling Matters
              </h2>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Static background measurements rarely reflect true operator risk.
              Personal sampling places calibrated collection media or acoustic
              transducers directly on the worker across representative task cycles or
              full 8-hour Time-Weighted Reference Periods (TWRP), capturing spatial and
              task-driven exposure peaks.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-[#0f1012] border border-stone-800/80 space-y-2">
                <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  01 // COSHH Regulation 10
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Airborne Contaminant Sampling
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                  Personal sampling within the 300 mm hemispherical breathing zone in
                  accordance with <strong className="text-stone-200 font-medium">BS EN 689:2018</strong> and{" "}
                  <strong className="text-stone-200 font-medium">HSG 173</strong>. Utilising ISO 13137
                  gravimetric pumps, IOM inhalable heads, cyclone respirable samplers, and
                  sorbent tubes compared against EH40 WELs.
                </p>
              </div>

              <div className="p-6 bg-[#0f1012] border border-stone-800/80 space-y-2">
                <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  02 // CONAWR 2005
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Personal Noise Dosimetry
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                  Cable-free shoulder-mounted dosimeters (IEC 61252 / BS EN ISO 9612)
                  positioned 100–300 mm from the ear canal for mobile or peripatetic
                  workers, quantifying daily noise exposure (<strong className="text-stone-200 font-medium">L_EP,d</strong>) and peak
                  sound pressure (<strong className="text-stone-200 font-medium">L_Cpeak</strong>).
                </p>
              </div>

              <div className="p-6 bg-[#0f1012] border border-stone-800/80 space-y-2">
                <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  03 // EH40 BMGVs &amp; HSG 167
                </div>
                <h3 className="text-lg font-serif font-light text-stone-100">
                  Biological Monitoring &amp; Urinalysis
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                  Evaluates total systemic uptake across all routes of entry (inhalation,
                  dermal absorption, ingestion) and verifies the real-world efficacy of
                  air-fed RPE and chemical gloves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-Dive: Biological Monitoring & Extended Modalities */}
        <section className="space-y-10 pt-12 border-t border-stone-800/80">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
              Multi-Pathway Surveillance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
              Biological, Dermal &amp; Physical Sampling Modalities
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Where substances carry an EH40 skin notation (Sk), exhibit rapid vapour
              evolution, or rely on Respiratory Protective Equipment (RPE) such as
              air-fed visors, airborne monitoring alone cannot confirm worker protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Biological Monitoring Card */}
            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Systemic Uptake // EH40 BMGVs
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Biological Monitoring (Urinalysis)
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                Non-invasive post-shift urine sampling analysed by UKAS-accredited
                laboratories to measure chemical metabolites against{" "}
                <strong className="text-stone-200 font-medium">EH40 Biological Monitoring Guidance Values</strong> and{" "}
                <strong className="text-stone-200 font-medium">HSG 167</strong>:
              </p>
              <ul className="text-stone-400 text-xs space-y-2.5 font-light pt-2 border-t border-stone-800/80">
                <li>
                  <strong className="text-stone-200 font-medium">Isocyanates (HDI, TDI, MDI):</strong>{" "}
                  Post-shift urinalysis for urinary diamines (BMGV: 1 &mu;mol/mol
                  creatinine) in two-pack spray painting, PU foam moulding, and
                  structural adhesive application.
                </li>
                <li>
                  <strong className="text-stone-200 font-medium">PAHs &amp; Heavy Metals:</strong>{" "}
                  Urinary 1-hydroxypyrene, chromium, cobalt, and cadmium screening.
                </li>
                <li>
                  <strong className="text-stone-200 font-medium">Organic Solvents:</strong>{" "}
                  Styrene (mandelic acid), xylene (methylhippuric acid), and CO breath
                  analysis.
                </li>
              </ul>
            </div>

            {/* Dermal & Surface Wipe Sampling */}
            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Skin Pathways // MDHS 94
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Dermal &amp; Surface Wipe Sampling
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                Quantitative interception and surface removal protocols to assess skin
                deposition and secondary contamination transfer into welfare areas:
              </p>
              <ul className="text-stone-400 text-xs space-y-2.5 font-light pt-2 border-t border-stone-800/80">
                <li>
                  <strong className="text-stone-200 font-medium">Patch &amp; Inner-Glove Sampling:</strong>{" "}
                  Absorbent interception patches and inner-glove extraction measuring
                  permeation inside chemical gauntlets.
                </li>
                <li>
                  <strong className="text-stone-200 font-medium">Template Surface Wipes:</strong>{" "}
                  Standardised swabbing for toxic metals (lead, nickel, Cr(VI)),
                  isocyanates, and sensitising dusts.
                </li>
                <li>
                  <strong className="text-stone-200 font-medium">UV Fluorescence Tracing:</strong>{" "}
                  Visualisation of dermal contact transfer during PPE doffing.
                </li>
              </ul>
            </div>

            {/* Personal Vibration Exposure */}
            <div className="p-8 bg-[#0f1012] border border-stone-800/80 space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Physical Agents // CVWR 2005
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                Personal Vibration (HAV &amp; WBV)
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                Triaxial accelerometer measurement at the tool grip or seat interface to
                quantify daily personal vibration exposure (<strong className="text-stone-200 font-medium">A(8)</strong>):
              </p>
              <ul className="text-stone-400 text-xs space-y-2.5 font-light pt-2 border-t border-stone-800/80">
                <li>
                  <strong className="text-stone-200 font-medium">BS EN ISO 5349 (HAV):</strong>{" "}
                  Handle-mounted triaxial transducers calculating vector sum acceleration
                  and exposure points against EAV (2.5 m/s&sup2;) and ELV (5.0 m/s&sup2;).
                </li>
                <li>
                  <strong className="text-stone-200 font-medium">BS EN ISO 2631-1 (WBV):</strong>{" "}
                  Seat-pad triaxial monitoring for industrial plant and logistics fleets.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Heritage CTA Banner */}
        <section className="border border-stone-800/80 bg-[#0f1012] p-10 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Practice Launching Early 2027 &bull; Scheduling Open
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100">
              Commission a Personal Sampling Campaign
            </h3>
            <p className="text-sm text-stone-400 font-light leading-relaxed">
              Discuss Similar Exposure Group (SEG) air sampling, personal noise
              dosimetry, or isocyanate biological monitoring programmes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/coshh-exposure-assessment"
              className="px-6 py-3.5 bg-transparent hover:bg-stone-900/60 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-600 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              COSHH Service
            </Link>
            <Link
              href="/services/physical-agents"
              className="px-6 py-3.5 bg-transparent hover:bg-stone-900/60 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-600 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              Physical Agents
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3.5 bg-stone-100 hover:bg-white text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              Enquire for 2027 &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}