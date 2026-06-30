"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-rose-dark">
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
  );
}

type DocumentCard = {
  name: string;
  version: string;
  type: string;
  href: string;
};

const DOCUMENTS: DocumentCard[] = [
  {
    name: "Independent Contractor Agreement",
    version: "v1.1",
    type: "Agreement",
    href: "/documents/independent-contractor-agreement-v1.1.pdf",
  },
];

export default function DocumentsContent() {
  const { t } = useLanguage();
  const docs = t.workWithUs.documents;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
          >
            <BackArrow />
            Work With Us
          </Link>

          {/* Header */}
          <div className="mb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose-dark font-mono">
              {docs.eyebrow}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 leading-[1.2]">
            {docs.heading}{" "}
            <span className="font-serif font-light italic">{docs.headingItalic}</span>
          </h1>
          <p className="text-lg text-muted font-light leading-relaxed mb-12">
            {docs.subtitle}
          </p>

          <div className="border-t border-grid-300 mb-12" />

          {/* Document grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENTS.map((doc) => (
              <div
                key={doc.href}
                className="group border border-grid-300 rounded-2xl p-6 bg-white hover:border-rose-dark/40 transition-colors flex flex-col"
              >
                <div className="mb-4">
                  <PdfIcon />
                </div>

                <h3 className="text-base font-semibold text-foreground tracking-tight mb-3 leading-snug">
                  {doc.name}
                </h3>

                <div className="flex items-center gap-4 text-xs text-muted-2 mb-5 flex-1">
                  <span>
                    <span className="font-medium text-muted">{docs.versionLabel}:</span> {doc.version}
                  </span>
                  <span>
                    <span className="font-medium text-muted">{docs.typeLabel}:</span> {doc.type}
                  </span>
                </div>

                <a
                  href={doc.href}
                  download
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium border border-grid-500 rounded-lg text-foreground hover:bg-bg-light hover:border-grid-700 transition-colors group-hover:border-rose-dark/40"
                >
                  <DownloadIcon />
                  {docs.downloadBtn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
