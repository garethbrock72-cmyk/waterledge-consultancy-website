import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 rounded-full">
          Occupational Hygiene & Exposure Control
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Waterledge Consultancy
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
          Safeguarding Health in the Workplace
        </p>

        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Expert workplace assessments, exposure monitoring, and bespoke compliance tooling designed to protect workers and streamline reporting.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://your-render-app-url.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Launch COSHH Report Generator &rarr;
          </a>
        </div>
      </div>

      <ContactForm />
    </main>
  );
}