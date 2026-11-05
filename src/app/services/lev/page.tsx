import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Local Exhaust Ventilation (LEV) Examination & Testing | Waterledge Consultancy',
  description: 'Thorough Examination and Testing (TExT) of LEV systems compliant with HSE HSG258, COSHH Regulation 9, and BS EN ISO 21904.',
};

export default function LEVServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">LEV Examination & Testing</span>
        </nav>

        {/* Header Section */}
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-600">
            Occupational Hygiene Engineering
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            Local Exhaust Ventilation (LEV) Testing & Design
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Statutory Thorough Examination and Testing (TExT) compliant with <strong>HSE HSG258</strong> and 
            <strong> COSHH Regulation 9</strong>. Quantitative aerodynamic assessment, capture velocity profiling, 
            and engineering control validation for industrial extraction systems.
          </p>
        </header>

        {/* Featured Diagram Card */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            System Design & Capture Dynamics
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Correct aerodynamic capture requires tailored hood geometry, adequate face velocity, and optimized operator positioning to prevent eddy formation and body wake exposure.
          </p>

          <figure className="relative w-full rounded-lg overflow-hidden border border-slate-100 bg-slate-950/5">
            <Image
              src="/images/walk-in-welding-booth-lev.webp"
              alt="Walk-in welding booth with backdraft LEV extraction adhering to HSG 258 and BS EN ISO 21904"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto object-contain mx-auto"
            />
            <figcaption className="p-3 text-center text-xs text-slate-500 bg-white border-t border-slate-100">
              Walk-In Booth Backdraft Extraction: Airflow vectors, rear distribution plenum, and lateral operator stance (HSG258 Fig. 20 Position B).
            </figcaption>
          </figure>
        </section>

        {/* Core Deliverables Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Statutory TExT Reports</h3>
            <p className="text-sm text-slate-600">
              Full 14-month regulatory compliance inspections, qualitative smoke visualization, and quantitative duct pitot traverses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Commissioning & Baseline</h3>
            <p className="text-sm text-slate-600">
              Establishing initial design benchmarks, static pressure baseline envelopes, and hood capture velocity thresholds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Remediation Guidance</h3>
            <p className="text-sm text-slate-600">
              Actionable engineering modifications for poor capture hoods, excessive system resistance, or imbalanced duct networks.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}