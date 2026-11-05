// src/app/services/coshh-exposure-assessment/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "COSHH Exposure Assessment | Waterledge Consultancy",
  description: "Comprehensive hazardous substance risk evaluations, workplace air monitoring, and compliance appraisal against EH40 Workplace Exposure Limits.",
};

export default function CoshhExposurePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4">
          <Link 
            href="/" 
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-block"
          >
            ← Back to Home
          </Link>
          <span className="block text-xs uppercase tracking-widest text-neutral-500 font-mono">Service 01</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">COSHH Exposure Assessment & Monitoring</h1>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Integrated evaluation of workplace hazardous substances—uniting task-based risk assessments with empirical workplace air monitoring to secure compliance with COSHH Regulations 6, 7, and 10.
          </p>
        </header>

      {/* Hero Diagram Stage */}
        <section className="space-y-3">
          <Image
            src="/images/coshh-exposure-assessment.webp"
            alt="Technical diagram illustrating COSHH exposure assessment workflow, operator breathing zone sampling, and SEG statistical compliance under BS EN 689"
            width={2048}
            height={2048}
            priority
            className="w-full h-auto rounded-xl"
          />
          <p className="text-xs text-neutral-400 font-mono">
            Benchmarked against HSE EH40, MDHS methods, and BS EN 689:2018.
          </p>
        </section>

        {/* Content & Regulatory Scope */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Assessment & Sampling Scope</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• Similar Exposure Group (SEG) characterization and representative sampling</li>
              <li>• Inhalable and respirable dust, vapors, and aerosol sampling (MDHS series)</li>
              <li>• Statistical testing of personal exposure profiles against BS EN 689:2018</li>
              <li>• Dermal and secondary route exposure evaluation</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Regulatory Deliverables</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Defensible, data-driven reports satisfying COSHH Regulation 10 monitoring requirements and providing clear remediation pathways where airborne concentrations approach Workplace Exposure Limits.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}