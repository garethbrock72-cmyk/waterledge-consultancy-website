import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-white relative">
      {/* Background Decorative Grid Lines */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 relative flex items-center justify-center">
          {/* Centered Brand Title with Increased Scale */}
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"></span>
            <span className="font-extrabold text-white tracking-tight text-2xl sm:text-3xl">
              Waterledge Consultancy
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex absolute right-4 sm:right-6 items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-sky-400 transition">Services</a>
            <a href="#tools" className="hover:text-sky-400 transition">Digital Tools</a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 text-xs font-semibold tracking-wide transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Amber Notice Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Practice Launching Early 2027 &bull; Digital Tools Live
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Safeguarding Health in the Workplace
          </h1>

          <p className="text-lg sm:text-xl text-sky-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Specialist occupational hygiene assessments, statutory LEV compliance, and automated compliance tooling.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Delivering rigorous exposure evaluations aligned with HSE guidance and British Standards. Client project scheduling now open for early 2027 commencement.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://coshh.waterledgeconsultancy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.3)] transition"
            >
              Launch COSHH Generator &rarr;
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 shadow-sm transition"
            >
              Enquire for 2027 Engagements
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Field Consultancy</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-2">Core Consultancy Services</h2>
          <p className="mt-3 text-slate-400 text-base">
            Structured exposure evaluations aligned with British and European occupational hygiene standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-400 flex items-center justify-center font-bold mb-5">
              01
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Workplace Air Monitoring</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Personal and static air sampling for respirable dusts, RCS, hazardous vapours, and welding fumes compliant with BS EN 689 and EH40 Workplace Exposure Limits (WELs).
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-400 flex items-center justify-center font-bold mb-5">
              02
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LEV Thorough Examination & Testing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Statutory 14-month Local Exhaust Ventilation (LEV) inspections, hood velocity checks, static pressure measurements, and duct flow assessments complying with HSG258.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-400 flex items-center justify-center font-bold mb-5">
              03
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Noise & Vibration Surveys</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Workplace noise risk assessments, octave band frequency analysis for hearing protection attenuation, and Hand-Arm Vibration (HAVS) exposure profiling.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-400 flex items-center justify-center font-bold mb-5">
              04
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">COSHH & Chemical Risk Audits</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Systematic hazardous substance reviews, substitution assessments, exposure control strategy design, and creation of compliant COSHH assessment documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tool Spotlight */}
      <section id="tools" className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <span className="text-sky-400 font-semibold text-xs tracking-wider uppercase">Live Web Application</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              COSHH Report Generator
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our automated reporting platform streamlines the generation of standardized COSHH assessments with built-in chemical limit libraries and export capabilities.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">&#10003;</span> Automated EH40 WEL parameter lookups
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">&#10003;</span> Rapid structured Word report generation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">&#10003;</span> Standardized control recommendation workflows
              </li>
            </ul>
          </div>

          <div>
            <a
              href="https://coshh.waterledgeconsultancy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.25)] transition duration-200 text-center"
            >
              Launch Generator &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-sm text-slate-400 text-center">
          <div>
            <p className="font-extrabold text-white text-xl tracking-tight">Waterledge Consultancy</p>
            <p className="mt-1 text-slate-400 text-xs sm:text-sm">Occupational Hygiene & Exposure Control</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-sky-400 transition">Services</a>
            <a href="#tools" className="hover:text-sky-400 transition">Digital Tools</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </div>

          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Waterledge Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}