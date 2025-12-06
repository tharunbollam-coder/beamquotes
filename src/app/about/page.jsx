"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  Lightbulb,
  Target,
  Quote as QuoteIcon,
  Sparkles,
  Bot,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.3),transparent_65%)]" />
          <div className="absolute bottom-[-220px] right-[-140px] w-[520px] h-[520px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3),transparent_65%)]" />
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white">
              <QuoteIcon className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              About BeamQuotes
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            A peaceful home for{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              safe, beautiful quotes
            </span>
            .
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            BeamQuotes is designed for anyone who loves short, meaningful words
            and a calm, positive space to reflect, learn, and feel inspired —
            without worrying about harsh or harmful messages.
          </p>
        </div>
      </section>

      {/* What BeamQuotes Is */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
          {/* Text block */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              What is BeamQuotes?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              BeamQuotes is a curated library of quotes, short thoughts, and
              gentle reminders. You can use it to find words for your day, for
              your journal, for sharing with friends, or simply as a quiet place
              to read something uplifting.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our focus is simple: keep things <strong>beautiful</strong>,{" "}
              <strong>safe</strong>, and <strong>easy to understand</strong>.
              Every part of the site — from colors to cards — is meant to feel
              calm on your eyes and kind to your mind.
            </p>
          </div>

          {/* Key highlights */}
          <div className="space-y-4">
            <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-5 flex gap-3 items-start">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Easy to revisit & share
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Short, clear quotes that you can remember easily, save for
                  later, or share in messages, notes, and posts if you wish.
                </p>
              </div>
            </div>

            <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-5 flex gap-3 items-start">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-sm">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Gentle, positive tone
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  We avoid harsh, hateful, or offensive messages. Our goal is
                  calm encouragement and thoughtful reflection — not shock or
                  negativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-gradient-to-br from-slate-50 via-white to-sky-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Our mission & values
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Behind every quote is an intention: to make someone&apos;s scroll,
              pause, or quiet moment feel a little bit lighter and more
              thoughtful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-sm">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Clear mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To share quotes that gently nudge people toward growth,
                reflection, and kindness — never toward hate, harm, or
                disrespect.
              </p>
            </div>

            {/* Clarity */}
            <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Simple clarity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Short, clear lines that anyone can understand, remember, or
                build a personal meaning around in everyday life.
              </p>
            </div>

            {/* Respect */}
            <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Respect for people
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We avoid targeting groups, cultures, or individuals. Our content
                is meant to be globally respectful and safe to read or share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use AI (Important Note) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-4">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                How BeamQuotes uses AI (friendly note)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                We want to be open about how some of the words and ideas on this
                site are created.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-4 text-xs sm:text-sm text-slate-600">
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">AI as a helper</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>
                  We use AI tools to help generate quotes, reflections, and
                  story ideas in a friendly, calm way.
                </li>
                <li>
                  AI also helps create image concepts and prompts that match the
                  mood of different quotes.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Human care & review</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>
                  Content is reviewed and shaped by humans to keep it kind,
                  respectful, and easy to understand.
                </li>
                <li>
                  We try to avoid copying specific personal or private content
                  from real people.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Our promise</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>
                  AI is used as a creative assistant, not to attack, harm, or
                  target anyone.
                </li>
                <li>
                  If something doesn&apos;t feel right to you, you can simply
                  skip that quote — you&apos;re always in control of what you
                  keep.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-5 text-[11px] sm:text-xs text-slate-500">
            <span className="font-semibold">Friendly note:</span> BeamQuotes is
            built to support reflection and inspiration. AI helps with ideas and
            wording, but our goal is always the same — keep things kind, safe,
            and thoughtful for everyone.
          </p>
        </div>
      </section>

      {/* Quotes & Authors Transparency */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-sm">
              <QuoteIcon className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Quotes, authors & public-domain lines
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            BeamQuotes includes a mix of:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
            <li>AI-assisted original inspirational quotes and thoughts</li>
            <li>
              Well-known quotes from authors where the text is in the public
              domain or widely available from public sources
            </li>
          </ul>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
            Whenever possible, we show the author&apos;s name and try to avoid
            misattribution. If you ever feel that a quote or credit on
            BeamQuotes needs correction, you&apos;re welcome to contact us, and
            we&apos;ll gladly review it.
          </p>
        </div>
      </section>

      {/* How BeamQuotes Helps You */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How BeamQuotes fits into your day
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Some people like to use these quotes in journals, wallpapers,
              messages, or quiet reading time. Others simply open the site when
              they want a gentle reminder to keep going.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white flex items-center justify-center text-xs font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Find a quote that matches your moment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Browse by categories like Motivation, Wisdom, Success, and
                    Inspiration to find words that fit how you feel or what you
                    need.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center text-xs font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Save or share if you like
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    You can copy a quote to keep in your notes, send to
                    someone, or use in a personal project or design.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center text-xs font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Return whenever you need a reminder
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Instead of searching all over the internet, you can come
                    back here for a calm collection in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small example panel */}
          <div className="bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-sm">
                  <QuoteIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
                    Example BeamQuote
                  </p>
                  <p className="text-xs text-slate-500">
                    The kind of calm, short line you might see.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-5 flex flex-col gap-3">
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  &ldquo;Small steady steps can quietly lead you to places your
                  fear never believed in.&rdquo;
                </p>
                <p className="text-xs text-slate-500">
                  You might keep this in a journal, use it as a wallpaper line,
                  or just remember it on a difficult day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Disclaimer */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto bg-white/80 rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 backdrop-blur">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
            Content disclaimer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            All content on BeamQuotes is intended <strong>only</strong> for{" "}
            <strong>educational</strong>, <strong>reflective</strong>, and{" "}
            <strong>inspirational</strong> purposes.
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside mb-3">
            <li>
              It is <strong>not</strong> professional advice (medical, legal,
              financial, mental health, or otherwise).
            </li>
            <li>
              It is <strong>not</strong> meant to harm, offend, target, or
              mislead any reader or viewer.
            </li>
            <li>
              You are always encouraged to think for yourself, seek qualified
              professionals when needed, and ignore any quote that doesn&apos;t
              feel right to you.
            </li>
          </ul>
          <p className="text-[11px] sm:text-xs text-slate-500">
            If you ever feel that a piece of content on BeamQuotes could be
            improved or might hurt someone, we appreciate you choosing not to
            spread it further and letting us know through our contact channels.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 text-white px-6 sm:px-10 py-10 sm:py-12 shadow-lg">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Ready to explore some quotes?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-indigo-50 max-w-2xl mx-auto">
              Take a look at our curated collection and find lines that feel
              right for your day, your thoughts, or your personal projects.
            </p>
            <a
              href="/quotes"
              className="inline-flex items-center justify-center mt-2 px-7 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-colors duration-300 shadow-md"
            >
              Browse all quotes
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
