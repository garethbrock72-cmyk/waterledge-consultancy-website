import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Waterledge Consultancy | Safeguarding Health in the Workplace',
  description: 'Specialist occupational hygiene and exposure control consultancy providing COSHH assessments, workplace air monitoring, and compliance solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}