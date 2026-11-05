// src/app/services/physical-agents/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Physical Agents Assessment | Waterledge Consultancy",
  description:
    "Industrial noise assessments, hand-arm and whole-body vibration monitoring, and thermal environment evaluations compliant with UK HSE regulations.",
};

export default function PhysicalAgentsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <Link
            href="/#services"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-block"
          >
            ← Back to Services
          </Link>
          <span className="block text-xs uppercase tracking-widest text-neutral-500 font-mono">
            Service 03
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Physical Agents
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
            Empirical measurement, modeling, and engineering control appraisal of workplace noise, mechanical vibration, and thermal stress environments.
          </p>
        </header>

       {/* Hero Diagram Stage */}
        <section className="space-y-3">
          <Image
            src="/images/hav_noise_assessment_cleaned.webp"
            alt="Technical schematic illustrating tri-axial hand-arm vibration measurement (ISO 5349) and Class 1 acoustic field propagation"
            width={2048}
            height={2048}
            priority
            className="w-full h-auto rounded-xl"
          />
          <p className="text-xs text-neutral-400 font-mono">
            Compliant with BS EN ISO 9612 (Noise), BS EN ISO 5349-1&amp;2 (HAVS), and BS EN ISO 7730 / 7243 (Thermal).
          </p>
        </section>

        {/* Core Disciplines Breakdown */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Acoustics
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              Workplace Noise
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Personal noise dosimetry and static octave-band analysis under the Control of Noise at Work Regulations 2005 (L108). Includes daily/weekly personal exposure (L<sub>EP,d</sub> / L<sub>EP,w</sub>) profiling, peak sound pressure (L<sub>Cpeak</sub>) mapping, and hearing protection SNR/octave-band attenuation calculations.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Mechanical Energy
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              Hand-Arm &amp; Whole-Body Vibration
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Tri-axial accelerometer testing under the Control of Vibration at Work Regulations 2005 (L140). Quantifies daily exposure values A(8) against Exposure Action Values (EAV) and Exposure Limit Values (ELV) to prevent Hand-Arm Vibration Syndrome (HAVS).
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Microclimate
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              Thermal Comfort &amp; Heat Stress
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Evaluation of indoor and industrial thermal environments using Wet Bulb Globe Temperature (WBGT) indices (ISO 7243) and Predicted Mean Vote / Predicted Percentage Dissatisfied (PMV/PPD) modeling (ISO 7730).
            </p>
          </div>
        </section>

        {/* Technical Standards & Deliverables */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-800/80">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Standards &amp; Instrumentation</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• Class 1 integrating-averaging sound level meters (BS EN 61672-1)</li>
              <li>• Acoustic noise mapping and boundary / reverberation control specification</li>
              <li>• Direct tool-handle tri-axial vibration transmissibility measurements (ISO 5349)</li>
              <li>• Octave-band HML and SNR hearing protection adequacy verification (BS EN 458)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Consultancy Deliverables</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every physical agent survey produces a comprehensive engineering report featuring calibrated field data, Hearing Protection Zone (HPZ) schematics, prioritized noise/vibration control action plans, and clear statutory compliance tables ready for HSE inspection.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}