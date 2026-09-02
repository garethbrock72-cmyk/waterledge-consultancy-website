import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 relative flex items-center justify-center">
          {/* Centered Brand Title */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="font-bold text-slate-900 tracking-tight text-lg sm:text-xl">
              Waterledge Consultancy
            </span>
          </div>

          {/* Desktop Nav Links (Anchored to Right) */}
          <nav className="hidden md:flex absolute right-4 sm:right-6 items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#tools" className="hover:text-blue-600 transition">Digital Tools</a>
            <a href="#contact" className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Practice Launching Early 2027 &bull; Digital Tools Live
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Safeguarding Health in the Workplace
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Specialist occupational hygiene assessments, statutory LEV compliance, and exposure monitoring. Comprehensive field consultancy launching early 2027, with bespoke digital tools available now.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://coshh.waterledgeconsultancy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition"
            >
              Launch COSHH Generator &rarr;
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-300 shadow-sm transition"
            >
              Enquire for 2027 Engagements
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Core Consultancy Services</h2>
          <p className="mt-3 text-slate-600 text-base">
            Delivering rigorous occupational hygiene evaluations aligned with HSE guidance and British Standards.
          </p>
        </div>

        {/* Optional: subtle status banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center text-sm text-slate-700 max-w-xl mx-auto">
          <strong>Advance Scheduling:</strong> Currently accepting early enquiries and planning consultations for Q1 2027 workplace assessments.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Workplace Air Monitoring</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Personal and static sampling for respirable dusts, RCS, hazardous vapours, and welding fume compliance against Workplace Exposure Limits (WELs / BS EN 689).
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">LEV Thorough Examination & Testing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Statutory 14-month Local Exhaust Ventilation (LEV) inspections, hood velocity checks, static pressure measurements, and duct flow assessments complying with HSG258.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Noise & Vibration Surveys</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Workplace noise risk assessments, octave band frequency analysis for hearing protection (PPE) attenuation, and Hand-Arm Vibration (HAVS) exposure profiling.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              04
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">COSHH & Chemical Risk Audits</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Systematic hazardous substance reviews, substitution assessments, exposure control strategy design, and creation of compliant COSHH assessment documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tool Spotlight */}
      <section id="tools" className="py-16 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">Live Web Application</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              COSHH Report Generator
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our automated reporting platform streamlines the generation of standardized COSHH and occupational exposure reports with built-in chemical limit libraries and export capabilities.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&#10003;</span> Automated EH40 WEL parameter lookups
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&#10003;</span> Rapid structured Word report generation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&#10003;</span> Standardized control recommendation workflows
              </li>
            </ul>
          </div>

          <div>
            {/* Update href with your actual live Render application URL */}
            <a
              href="https://coshh.waterledgeconsultancy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-200 text-center"
            >
              Launch Generator &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-sm text-slate-500 text-center">
          <div>
            <p className="font-semibold text-slate-800 text-base">Waterledge Consultancy</p>
            <p className="mt-1 text-slate-600">Occupational Hygiene & Exposure Control</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#tools" className="hover:text-blue-600 transition">Digital Tools</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Waterledge Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}