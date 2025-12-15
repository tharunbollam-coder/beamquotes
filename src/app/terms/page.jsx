"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, FileText, Info, Quote, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-600">
              Terms of Service
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Website Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            These terms explain how BeamQuotes can be used. By accessing or browsing the website, you agree to these rules.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">1. Website Purpose</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              BeamQuotes is an inspirational platform offering quotes, short messages, and visual content intended for personal growth, reflection, and motivation. The content is informational only and should not be treated as professional, medical, legal, or psychological advice.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">2. Content Ownership & Attribution</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Content on BeamQuotes consists of:
            </p>
            <ul className="mt-3 text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>Original quotes and text</li>
              <li>AI-assisted generated content</li>
              <li>Public-domain quotes from known authors</li>
            </ul>
            <p className="text-sm text-slate-600 mt-3">
              Public domain content may include known authors whose works are allowed to be reused without restriction, where available we attempt to credit properly.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">3. Acceptable Use</h2>
            <p className="text-sm text-slate-600">
              You may:
            </p>
            <ul className="mt-3 text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>View and read content for personal use</li>
              <li>Share quotes respectfully with proper context</li>
              <li>Use publicly accessible content for personal creative or educational use</li>
            </ul>
            <p className="text-sm text-slate-600 mt-5">You may NOT:</p>
            <ul className="mt-3 text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>Use the content for harassment, hate, misinformation, or harmful messages</li>
              <li>Claim ownership of BeamQuotes original content</li>
              <li>Use content in a way that violates copyright or quote attribution laws</li>
            </ul>
          </div>

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">4. No Accounts or Data Collection</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              BeamQuotes does not require account creation and does not intentionally collect personal user data. Basic technical data (such as typical website traffic logs) may be collected automatically by hosting providers for security and analytics purposes.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">5. Disclaimer</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Content is offered “as is,” without guarantees. Users should use their own judgment before sharing or relying on any quote for emotional, lifestyle, or decision-making purposes.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold mb-3 text-slate-900">6. Changes to Terms</h2>
            <p className="text-sm sm:text-base text-slate-600">
              BeamQuotes may update these terms occasionally. Continued use of the website means you accept the updated version.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur text-center">
            <Mail className="w-6 h-6 text-indigo-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600">If you have questions about these terms, you may contact us at:</p>
            <p className="font-semibold text-indigo-600 text-sm mt-2">
              beamquotes.contact@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
