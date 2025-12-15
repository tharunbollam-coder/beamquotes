"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, Quote, ShieldCheck } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-sky-50 via-white to-indigo-50" />

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
          <AlertCircle className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">
            Disclaimer
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Important Information
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          This page explains how BeamQuotes content should be understood and used.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Purpose */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. General Purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              BeamQuotes is an inspirational platform offering quotes, messages, and visuals for reflection, encouragement, and personal insight. The content is intended for general inspiration—not instruction or professional guidance.
            </p>
          </div>

          {/* Not Professional Advice */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">
                2. Not Professional Advice
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Content on this website is not professional advice of any kind, including but not limited to:
            </p>
            <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-2">
              <li>Medical or mental health advice</li>
              <li>Legal or financial guidance</li>
              <li>Counseling or therapeutic instruction</li>
            </ul>
            <p className="text-sm text-slate-600 mt-4">
              Always seek qualified help from licensed professionals when needed.
            </p>
          </div>

          {/* AI Content */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. AI-Assisted and Public-Domain Content
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Some content on BeamQuotes is created or assisted using AI tools. Other content may include known public-domain works from authors whose writing is legally allowed to be reused.
            </p>
            <p className="text-sm text-slate-600 mt-3">
              We do not claim ownership over historical public-domain quotes and attempt proper attribution when known.
            </p>
          </div>

          {/* User Responsibility */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Personal Interpretation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Quotes can be interpreted differently depending on personal experiences, beliefs, and emotions. You are responsible for how you apply or share any content from this website.
            </p>
          </div>

          {/* External Links */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. External Links
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              BeamQuotes may sometimes include links to external websites or platforms. We are not responsible for the content, accuracy, or safety of external sources.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 text-center">
            <p className="text-sm text-slate-600">
              If you have questions about this disclaimer, you can contact us at:
            </p>
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
