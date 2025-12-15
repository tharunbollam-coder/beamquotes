"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Heart, Info, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const email = "beamquotes.contact@gmail.com";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50" />
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-3xl rounded-full opacity-50 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm">
            <Mail className="w-4 h-4 text-slate-700" />
            <span className="text-xs tracking-[0.22em] text-slate-600 font-semibold uppercase">
              Contact
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Get in Touch
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Have a question, business inquiry, partnership request, or notice something that needs improvement?  
            We’re here to help — feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr,0.9fr] gap-10">
          {/* Email Card */}
          <div className="bg-white/80 border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-8 backdrop-blur flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Email Us
              </h2>
            </div>

            <p className="text-sm text-slate-600">
              The quickest way to contact us is through email. We aim to respond within 24–72 hours.
            </p>

            <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-5 border border-gray-200">
              <p className="uppercase text-xs font-semibold text-slate-500 tracking-widest mb-2">
                Contact Email
              </p>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-indigo-600 hover:text-indigo-700 break-all"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>

              <ul className="mt-4 text-sm text-slate-600 leading-relaxed space-y-1 list-disc list-inside">
                <li>Business inquiries & partnerships</li>
                <li>Commercial usage or licensing requests</li>
                <li>Bug reports or content adjustments</li>
                <li>General questions or feedback</li>
              </ul>
            </div>
          </div>

          {/* Notes / Helpful Info */}
          <div className="space-y-4">
            {/* Commercial note */}
            <div className="bg-white/80 p-5 border border-gray-200 rounded-3xl shadow-sm flex items-start gap-3">
              <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-700">
                For commercial collaborations, sponsorship proposals, or integration requests, please include brief details so we can assist efficiently.
              </p>
            </div>

            {/* Friendly tone */}
            <div className="bg-white/80 p-5 border border-gray-200 rounded-3xl shadow-sm flex items-start gap-3">
              <div className="h-9 w-9 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-700">
                BeamQuotes is built with care — polite and respectful communication helps us respond faster.
              </p>
            </div>

            {/* Non-support disclaimer */}
            <div className="bg-white/80 p-5 border border-gray-200 rounded-3xl shadow-sm flex items-start gap-3">
              <div className="h-9 w-9 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl text-white flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-700">
                We do not provide personal advice (medical, legal, or emotional support). Our platform exists to inspire — not diagnose or instruct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto text-center bg-white/80 p-6 rounded-3xl border border-gray-200 backdrop-blur shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you for being part of BeamQuotes.  
            Your support helps us continue building a calm, meaningful, and uplifting digital experience.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
