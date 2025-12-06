"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  EyeOff,
  Database,
  Cookie,
  Bot,
  Info,
  Mail,
  FileText,
  Quote as QuoteIcon,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const contactEmail = "support@beamquotes.com"; // change to your email

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.3),transparent_65%)]" />
          <div className="absolute bottom-[-220px] right-[-140px] w-[520px] h-[520px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3),transparent_65%)]" />
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
            <Shield className="w-4 h-4 text-slate-700" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Privacy Policy
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Your privacy matters to us.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            This page explains in simple words what information BeamQuotes
            collects (and mostly does not collect), how it is used, and how we
            keep things as private and respectful as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* 1. Intro & Scope */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  1. About this privacy policy
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
              This Privacy Policy describes how BeamQuotes (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) handles information when you
              visit our website.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our website is simple: we display quotes with images and authors.
              We do <strong>not</strong> ask you to create an account, we do{" "}
              <strong>not</strong> ask for personal details, and we try to keep
              data collection as close to zero as realistically possible.
            </p>
          </div>

          {/* 2. What we DON'T collect */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <EyeOff className="w-5 h-5 text-rose-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  2. Information we do{" "}
                  <span className="text-rose-500">not</span> intentionally
                  collect
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              BeamQuotes is designed to be a calm, read-only experience. As of
              now:
            </p>

            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>
                We do <strong>not</strong> have user accounts or logins.
              </li>
              <li>
                We do <strong>not</strong> ask you to enter your name, email, or
                phone number anywhere on the site.
              </li>
              <li>
                We do <strong>not</strong> run comment sections, chat boxes, or
                public profiles.
              </li>
              <li>
                We do <strong>not</strong> directly store personal information
                like addresses, payment details, or IDs.
              </li>
            </ul>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
              If this ever changes in the future (for example, if we add login
              or newsletters), this Privacy Policy will be updated clearly.
            </p>
          </div>

          {/* 3. Basic technical info */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Database className="w-5 h-5 text-sky-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  3. Basic technical information (server logs)
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Even though we do not actively collect personal details, some{" "}
              <strong>very basic technical information</strong> may be recorded
              automatically by our hosting provider or infrastructure. This is
              standard for almost all websites.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
              This may include:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>IP address (usually stored in server logs)</li>
              <li>Browser type and version</li>
              <li>Approximate device information (desktop, mobile, etc.)</li>
              <li>
                Pages visited and basic usage (for example: which page was
                loaded, at what time)
              </li>
            </ul>

            <p className="mt-3 text-xs text-slate-600">
              This information is typically used for:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside mt-1">
              <li>Keeping the website online and secure</li>
              <li>Understanding basic traffic (for example, how many visits)</li>
              <li>Detecting errors, abuse, or technical issues</li>
            </ul>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
              We do not use this information to personally identify you, and we
              do not combine it with other data to build profiles.
            </p>
          </div>

          {/* 4. Cookies & tracking */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  4. Cookies & tracking
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              At the moment, BeamQuotes does{" "}
              <strong>not intentionally use</strong> cookies or advanced tracking
              tools like personalized ads, cross-site trackers, or fingerprinting.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              However, some cookies or similar technologies may still be set
              automatically by:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside mt-2">
              <li>
                Our hosting provider (for security, performance, or basic
                analytics)
              </li>
              <li>
                Embedded third-party services, if we add them in the future
                (e.g., a video player or social media content)
              </li>
            </ul>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
              If we ever introduce analytics, advertising, or other cookies that
              affect your privacy more directly, we will update this section and,
              where appropriate, show a cookie notice.
            </p>
          </div>

          {/* 5. Quotes, authors & public domain content */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <QuoteIcon className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  5. Quotes, authors & public domain content
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              BeamQuotes displays a mix of:
            </p>

            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>
                Quotes generated with the help of AI tools (original inspirational
                lines)
              </li>
              <li>
                Quotes from well-known authors where the text is in the public
                domain or widely available from public sources
              </li>
            </ul>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When we use quotes from known authors and public-domain sources, we
              aim to:
            </p>

            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside mt-2">
              <li>Include the author&apos;s name when it is known</li>
              <li>
                Avoid misattributing quotes or assigning them to the wrong person
              </li>
              <li>
                Avoid using text that is clearly copyrighted and not permitted
                for simple inspirational use
              </li>
            </ul>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
              If you are an author, rights holder, or representative and believe
              a quote or attribution on BeamQuotes should be corrected, removed,
              or clarified, please contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                {contactEmail}
              </a>{" "}
              and we will review it.
            </p>
          </div>

          {/* 6. How we use AI */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Bot className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  6. How we use AI for quotes and images
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              BeamQuotes uses artificial intelligence (AI) tools in a{" "}
              <strong>friendly and careful way</strong> to help generate:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>Original inspirational quotes and short reflections</li>
              <li>Ideas for wording, structure, and themes</li>
              <li>Image concepts or prompts for quote backgrounds</li>
            </ul>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our goal is to create content that is calm, respectful, and
              inspirational. We do <strong>not</strong> use AI to target
              individuals, collect personal data from visitors, or generate
              harmful content intentionally.
            </p>

            <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
              If you ever feel that a quote or image on BeamQuotes is misleading,
              offensive, or harmful, we encourage you not to share it further and
              to contact us so we can review it.
            </p>
          </div>

          {/* 7. Third parties */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Info className="w-5 h-5 text-slate-600 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  7. Third-party services
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              To run this website, we may rely on third-party services such as:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
              <li>Website hosting and infrastructure providers</li>
              <li>Content delivery networks (CDNs) for faster loading</li>
              <li>
                Image or font providers (for example, services that host images
                or fonts)
              </li>
            </ul>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              These services may process limited technical data (such as IP
              addresses or basic device information) to deliver the site
              securely and efficiently. We do not sell your data, and we do not
              share personal details with marketers because we don&apos;t
              collect such details in the first place.
            </p>
          </div>

          {/* 8. Children */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-emerald-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  8. Children&apos;s privacy
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              BeamQuotes is a general-audience website that shares inspirational
              quotes. We do not knowingly collect personal information from
              children, and we do not offer accounts, sign-ups, or direct
              messaging features.
            </p>
          </div>

          {/* 9. Changes */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-slate-700 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  9. Changes to this policy
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time if the website
              changes or if we introduce new features (for example, login,
              newsletters, or analytics). When we make updates, we will change
              the &quot;Last updated&quot; date and, where appropriate, highlight
              important changes on the site.
            </p>
          </div>

          {/* 10. Contact */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <Mail className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  10. Contact us about privacy or content
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              If you have any questions or concerns about this Privacy Policy,
              how BeamQuotes handles information, or how we use quotes and
              authors, you can contact us at:
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700 break-all"
            >
              <Mail className="w-4 h-4" />
              {contactEmail}
            </a>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-500">
              Please note: This Privacy Policy is meant to be clear and simple,
              not full of legal jargon. It does not replace professional legal
              advice, but it honestly reflects how we currently run this
              website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
