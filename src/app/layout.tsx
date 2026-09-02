import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waterledgeconsultancy.co.uk"),
  title: {
    default: "Waterledge Consultancy | Safeguarding Health in the Workplace",
    template: "%s | Waterledge Consultancy",
  },
  description:
    "Specialist occupational hygiene consultancy providing workplace air monitoring, statutory LEV thorough examination, and digital COSHH reporting tools across the UK.",
  keywords: [
    "Occupational Hygiene",
    "Workplace Air Monitoring",
    "LEV Testing",
    "HSG258",
    "COSHH Assessment",
    "BS EN 689",
    "Workplace Exposure Limits",
    "Noise Assessment",
  ],
  authors: [{ name: "Waterledge Consultancy" }],
  openGraph: {
    title: "Waterledge Consultancy | Occupational Hygiene & Exposure Control",
    description:
      "Expert exposure monitoring, LEV testing, and digital compliance tooling. Launching early 2027.",
    url: "https://waterledgeconsultancy.co.uk",
    siteName: "Waterledge Consultancy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waterledge Consultancy - Safeguarding Health in the Workplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterledge Consultancy | Occupational Hygiene & Exposure Control",
    description:
      "Workplace air monitoring, LEV testing, and automated COSHH reporting tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}