import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-stone-200 flex flex-col justify-between selection:bg-stone-200 selection:text-stone-900 font-sans antialiased relative">
      
      {/* Subtle Atmospheric Top Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 197, 169, 0.08), transparent 70%)'
        }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.08em] text-stone-100 uppercase">
              Waterledge
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-medium">
              Consultancy
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[11px] font-medium tracking-[0.22em] uppercase text-stone-400">
            <a href="#services" className="hover:text-stone-100 transition duration-200">
              Services
            </a>
            <a href="#about" className="hover:text-stone-100 transition duration-200">
              Qualifications
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-transparent hover:bg-stone-100 hover:text-stone-950 text-stone-200 rounded-none border border-stone-700 text-[11px] font-medium tracking-[0.25em] transition duration-200 uppercase"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Heritage-style Notice Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-300 text-[11px] font-medium tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            Practice Launching Early 2027 &bull; Scheduling Open
          </div>

          {/* Editorial Display Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-stone-100 tracking-tight leading-[1.12]">
            Safeguarding Health <br className="hidden sm:inline" />
            in the Workplace
          </h1>

          {/* Editorial Sub-copy */}
          <p className="text-lg sm:text-xl text-stone-300 font-serif italic max-w-2xl mx-auto leading-relaxed font-light">
            Occupational hygiene assessments and specialist exposure control applications.
          </p>

          <p className="text-sm sm:text-base text-stone-400 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Delivering effective workplace exposure evaluations aligned with HSE guidance and British &amp; European Standards. Formal project commissions currently scheduling for 2027.
          </p>

          {/* Minimal Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 bg-stone-100 hover:bg-white text-stone-950 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              Enquire for 2027 &rarr;
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-9 py-4 bg-transparent hover:bg-stone-900/60 text-stone-300 hover:text-white border border-stone-800 hover:border-stone-600 font-medium text-xs uppercase tracking-[0.22em] transition duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Hairline Rule */}
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="h-px bg-stone-800/80 w-full" />
      </div>

      {/* Services Grid */}
      <section id="services" className="relative z-10 py-28 px-6 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
            Consultancy Services
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            COSHH exposure evaluations and physical agent testing performed strictly to recognised UK and European standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 01 */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 hover:border-stone-700 transition duration-300 flex flex-col justify-between">
            <div>
              <span className="font-serif text-xs text-stone-500 tracking-[0.2em] uppercase block mb-6">
                01 // Monitoring
              </span>
              <h3 className="text-2xl font-serif font-light text-stone-100 mb-3 tracking-wide">
                Workplace Air Monitoring
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                Air sampling of targeted workplace operations can be deployed to determine exposure to a wide range of substances in accordance with BS EN 689 and EH40 Workplace Exposure Limits (WELs). Inclusion of skin absorption and ingestion exposure pathways along with dermal risk shall be included in any workplace air sampling scope. 
              </p>
            </div>
          </div>

          {/* Service 02 */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 hover:border-stone-700 transition duration-300 flex flex-col justify-between">
            <div>
              <span className="font-serif text-xs text-stone-500 tracking-[0.2em] uppercase block mb-6">
                02 // Extraction
              </span>
              <h3 className="text-2xl font-serif font-light text-stone-100 mb-3 tracking-wide">
                LEV Assessments
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                System performance evaluation of Local Exhaust Ventilation (LEV) and Thorough Examination &amp; Testing (TExT) compliant with HSG258 statutory testing frameworks.
              </p>
            </div>
          </div>

          {/* Service 03 */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 hover:border-stone-700 transition duration-300 flex flex-col justify-between">
            <div>
              <span className="font-serif text-xs text-stone-500 tracking-[0.2em] uppercase block mb-6">
                03 // Physical Agents
              </span>
              <h3 className="text-2xl font-serif font-light text-stone-100 mb-3 tracking-wide">
                Noise &amp; Vibration Surveys
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                 Occupational noise assessments, octave band frequency profiling for hearing defender specification, and Hand-Arm / Whole-Body Vibration (HAVS) exposure evaluations.
              </p>
            </div>
          </div>

          {/* Service 04 */}
          <div className="p-10 bg-[#0f1012] border border-stone-800/80 hover:border-stone-700 transition duration-300 flex flex-col justify-between">
            <div>
              <span className="font-serif text-xs text-stone-500 tracking-[0.2em] uppercase block mb-6">
                04 // Chemical Safety
              </span>
              <h3 className="text-2xl font-serif font-light text-stone-100 mb-3 tracking-wide">
                COSHH &amp; Chemical Audits
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                Hazardous substance reviews, substitution evaluations, exposure mitigation hierarchies, and structured COSHH management documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Hairline Rule */}
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="h-px bg-stone-800/80 w-full" />
      </div>

      {/* Principal Consultant & Qualifications Section */}
      <section id="about" className="relative z-10 py-28 px-6 max-w-6xl mx-auto w-full">
        <div className="border border-stone-800/80 bg-[#0f1012] p-10 sm:p-14 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-800/80 pb-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
                Professional Service Provision
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
                Gareth Brock
              </h2>
              <p className="text-stone-300 text-sm sm:text-base font-serif italic font-light leading-relaxed">
                Certified Occupational Hygienist &bull; HS&amp;E Consultant
              </p>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
                Backed by 20 years of operational Health, Safety, and Environmental (HS&amp;E) leadership alongside specialist occupational hygiene consultancy. Every exposure assessment and engineering recommendation is rooted in formal BOHS-accredited competencies and academic discipline.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="px-4 py-2 border border-stone-700 text-stone-300 font-mono text-[11px] tracking-wider uppercase">
                MSc Occ. Hyg.
              </span>
              <span className="px-4 py-2 border border-stone-700 text-stone-300 font-mono text-[11px] tracking-wider uppercase">
                CertOH
              </span>
              <span className="px-4 py-2 border border-stone-700 text-stone-300 font-mono text-[11px] tracking-wider uppercase">
                CoC (Control)
              </span>
            </div>
          </div>

          {/* Three Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#0c0d0e] border border-stone-800 space-y-3">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Accreditation
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                CertOH
              </h3>
              <p className="text-xs text-stone-400 tracking-wide uppercase font-medium">
                Certificate of Operational Competence
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light pt-2">
                Demonstrated professional proficiency in hazard identification, comprehensive measurement strategies, and health risk mitigation.
              </p>
            </div>

            <div className="p-8 bg-[#0c0d0e] border border-stone-800 space-y-3">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Specialism
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                CoC (Control)
              </h3>
              <p className="text-xs text-stone-400 tracking-wide uppercase font-medium">
                Competence in Engineering Control
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light pt-2">
                Specialist credential governing the design appraisal, aerodynamic performance testing, and specification of LEV extraction systems.
              </p>
            </div>

            <div className="p-8 bg-[#0c0d0e] border border-stone-800 space-y-3">
              <div className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                Postgraduate
              </div>
              <h3 className="text-xl font-serif font-light text-stone-100">
                MSc Occupational Hygiene
              </h3>
              <p className="text-xs text-stone-400 tracking-wide uppercase font-medium">
                BOHS-Accredited Degree
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light pt-2">
                Postgraduate scientific grounding in aerosol physics, inhalation toxicology, physical agents, and statistical compliance modelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400 font-medium">
            Direct Dialogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-100 tracking-tight">
            Schedule an Engagement
          </h2>
          <p className="text-stone-400 text-sm font-light max-w-md mx-auto">
            Discuss upcoming occupational hygiene monitoring, LEV testing, or any other Workplace Health specific advisory requirements for early 2027.
          </p>
        </div>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-800/80 bg-[#090a0b] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
          <div className="space-y-1">
            <p className="font-serif text-lg font-light tracking-widest text-stone-200 uppercase">
              Waterledge Consultancy
            </p>
            <p className="text-stone-500 text-xs tracking-widest uppercase font-light">
              Occupational Hygiene &bull; Exposure Control &bull; Workplace Health
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-medium tracking-[0.25em] uppercase text-stone-400">
            <a href="#services" className="hover:text-stone-200 transition">Services</a>
            <a href="#about" className="hover:text-stone-200 transition">Qualifications</a>
            <a href="#contact" className="hover:text-stone-200 transition">Contact</a>
          </div>

          <p className="text-[11px] text-stone-600 tracking-wider">
            &copy; {new Date().getFullYear()} Waterledge Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}