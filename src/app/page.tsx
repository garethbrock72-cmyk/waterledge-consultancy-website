import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-4xl w-full text-center space-y-6">
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

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://your-render-app-url.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center"
          >
            Launch COSHH Report Generator &rarr;
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-300 shadow-sm transition duration-200 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}