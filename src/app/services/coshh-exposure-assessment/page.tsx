import Image from 'next/image';

export default function CoshhExposurePage() {
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
        
        {/* Card 1: Compliant Good Practice (Annular Rim-Slot Hood) */}
        <div className="rounded-xl border border-[#415a69]/60 bg-[#0f1012] p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                HSG258 Compliant • Good Practice
              </span>
              <span className="text-xs font-mono text-stone-400">Fig. 01 — Source Capture</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-100">
              Annular Rim-Slot Hood &amp; Mechanical Agitation
            </h3>
            <p className="text-sm text-stone-300 mt-2 mb-4 leading-relaxed">
              180° continuous rear slot extraction pulls 100% of volatile solvent vapors rearward below the drum rim lip. The breathing zone remains clean without reliance on RPE as primary control.
            </p>
          </div>

          <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-stone-800 bg-[#0c0d0e]">
            <Image
              src="/coshh-exposure-assessment.webp"
              alt="Compliant HSG258 Annular Rim Slot Hood Extraction"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <ul className="mt-4 space-y-1.5 text-xs text-stone-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> High containment efficiency (≥95%) at drum rim
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Breathing zone protected from rising vapor path
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Automated stirrer prevents direct manual splash hazards
            </li>
          </ul>
        </div>

        {/* Card 2: Inadequate Control Example (Overhead Canopy Hood) */}
        <div className="rounded-xl border border-rose-950/60 bg-[#0f1012] p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-rose-950/80 text-rose-400 border border-rose-800/60">
                Non-Compliant • Poor Practice
              </span>
              <span className="text-xs font-mono text-stone-400">Fig. 02 — Ineffective Hood Design</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-100">
              Overhead Receiving Canopy Hood
            </h3>
            <p className="text-sm text-stone-300 mt-2 mb-4 leading-relaxed">
              An overhead canopy used for unheated chemicals draws volatile solvent vapor directly upward through the worker&apos;s breathing zone, substantially exceeding EH40 WELs without RPE.
            </p>
          </div>

          <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-stone-800 bg-[#0c0d0e]">
            <Image
              src="/coshh-poor-practice-canopy.webp"
              alt="Non-compliant overhead canopy hood pulling chemical vapor through the breathing zone"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <ul className="mt-4 space-y-1.5 text-xs text-stone-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> Vapor drawn directly across nose and mouth
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> Canopy cannot overcome cross-drafts without massive airflow
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-400">✕</span> COSHH Reg 7 failure: inappropriate hood selection
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}