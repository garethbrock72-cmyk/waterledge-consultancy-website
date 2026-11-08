import Image from 'next/image';

export default function CoshhExposureAssessmentPage() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-stone-900/90 text-xs text-stone-300 font-mono tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          HSG258 &amp; COSHH REG 6 LEV DESIGN AUDIT
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">
          Engineering Control Appraisal: Source Extraction vs. Canopy Dilution
        </h2>
        <p className="mt-3 text-stone-400 max-w-3xl leading-relaxed">
          Comparing effective local exhaust ventilation (LEV) containment at the drum rim against an improper overhead receiving hood that draws volatile solvent plumes across the operative&apos;s breathing zone.
        </p>
      </div>

      {/* Comparative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Good Control (Rim-Slot Hood) */}
        <div className="rounded-xl border border-[#415a69]/60 bg-[#0f1012] p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                Good Control
              </span>
              <span className="text-xs font-mono text-stone-400">Fig. 01 — Source Capture</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-100">
              Rim-Slot Hood &amp; Mechanical Agitation
            </h3>
            <p className="text-sm text-stone-300 mt-2 mb-4 leading-relaxed">
              Rim slot hood with increased freeboard height to minimise effect of cross draught disturbance
            </p>
          </div>

          <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-stone-800 bg-[#0c0d0e]">
            <Image
              src="/coshh-exposure-assessment.webp"
              alt="Compliant Rim Slot Hood Extraction"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <ul className="mt-4 space-y-1.5 text-xs text-stone-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Effective containment and capture control
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Breathing zone protected from rising vapor path
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Automated stirrer prevents direct manual splash hazards
            </li>
          </ul>
        </div>

        {/* Card 2: Poor Control Example */}
        <div className="rounded-xl border border-rose-950/60 bg-[#0f1012] p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-rose-950/80 text-rose-400 border border-rose-800/60">
                Poor Control
              </span>
              <span className="text-xs font-mono text-stone-400">Fig. 02 — Ineffective Hood Design</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-100">
              Ineffective hood extraction
            </h3>
          </div>

          <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-stone-800 bg-[#0c0d0e] mt-4">
            <Image
              src="/coshh-poor-practice-canopy.webp"
              alt="Ineffective hood extraction example"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <ul className="mt-4 space-y-1.5 text-xs text-stone-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> Fugitive loss of vapour control
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> Risk of entering the breathing zone
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> Reliance on RPE which fails to danger condition
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}