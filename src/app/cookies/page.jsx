"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, Shield, Clock } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
          <Cookie className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">
            Cookie Policy
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
          How BeamQuotes Uses Cookies
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          This page explains if and how cookies are used while you browse
          BeamQuotes.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. What Are Cookies?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cookies are small text files stored in your browser to help websites
              function, remember preferences, or improve performance. They do not
              harm your device and cannot access personal data unless you choose to
              provide it.
            </p>
          </div>

          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Do We Use Cookies?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              BeamQuotes currently uses cookies minimally, and only for the purpose
              of normal website functionality such as:
            </p>
            <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-2">
              <li>Basic traffic insights (e.g., page views)</li>
              <li>Improving website performance</li>
              <li>Preventing abuse or spam browsing activity</li>
            </ul>
            <p className="text-sm text-slate-600 mt-4">
              These are non-invasive, anonymous, and do not identify you personally.
            </p>
          </div>

          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Third-Party Services
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If external tools are enabled in the future (e.g., Google Analytics),
              they may use cookies to understand how the site is used. If this
              happens, the Cookie Policy will be updated and you may see a consent
              banner.
            </p>
          </div>

          <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Your Control
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              You can choose to disable cookies in your browser settings at any
              time. The website will still function for reading content.
            </p>
          </div>

          <div className="text-center text-[12px] text-slate-500">
            This policy may be updated if technology or features change.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
