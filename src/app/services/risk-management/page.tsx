// src/app/services/risk-management/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Occupational Hygiene Risk Management | Waterledge Consultancy",
  description:
    "Strategic workplace health risk governance, Hierarchy of Control implementation, COSHH chemical safety management, and ALARP verification.",
};

export default function RiskManagementPage() {
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
            Service 04
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Risk Management
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
            Systematic occupational health risk governance—engineering sustainable exposure reduction through the statutory Hierarchy of Control and rigorous ALARP verification.
          </p>
        </header>

        {/* Hero Diagram Stage */}
        <section className="relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 overflow-hidden">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900">
            <Image
              src="/images/occupational_hygiene_risk_governance_2x.webp"
              alt="Engineering diagram showing the occupational hygiene Hierarchy of Control from Elimination and Substitution to LEV and RPE"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
          </div>
          <p className="mt-3 text-xs text-neutral-400 font-mono">
            Aligned with COSHH Regulation 7, Management of Health and Safety at Work Regulations 1999, and HSG 65.
          </p>
        </section>

        {/* Strategic Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Control Strategy
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              Hierarchy of Control
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Pragmatic engineering appraisals prioritizing substance elimination, lower-volatility substitution, and total process enclosure before relying on secondary administrative procedures or Respiratory Protective Equipment (RPE).
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Chemical Governance
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              Hazardous Substances & DSEAR/ATEX
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Comprehensive chemical inventory auditing, Safety Data Sheet (SDS) hazard translation, carcinogen/mutagen/asthemagen (R45/H350, H340, H334) containment policies, and combustible dust / vapour atmosphere risk interfaces.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              Human Factors
            </span>
            <h2 className="text-lg font-semibold text-neutral-100">
              RPE Programmes & Safe Systems
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Design and auditing of HSG 53 compliant Respiratory Protective Equipment (RPE) management programmes, Assigned Protection Factor (APF) verification, and task-specific Safe Systems of Work (SSoW).
            </p>
          </div>
        </section>

        {/* Technical Scope & Deliverables */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-800/80">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Governance Capabilities</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• COSHH Regulation 7 control proportionality and ALARP justification</li>
              <li>• Substitution feasibility studies for high-hazard solvents, isocyanates, and carcinogens</li>
              <li>• Health surveillance specification criteria under COSHH Regulation 11</li>
              <li>• Pre-commissioning occupational hygiene design reviews for new plant and processes</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Strategic Deliverables</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Actionable risk registers, corporate occupational hygiene management policies, and capital-prioritized remediation roadmaps that bridge the gap between technical monitoring data and boardroom health and safety governance.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}