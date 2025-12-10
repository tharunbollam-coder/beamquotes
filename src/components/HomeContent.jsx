"use client";

import { useState } from "react";
import Image from "next/image";
import QuoteCard from "@/components/QuoteCard";
import { Heart, Quote as QuoteIcon, Youtube, Instagram } from "lucide-react";

const authorsData = [
  {
    name: "Gautama Buddha",
    title: "The Enlightened One",
    description:
      "Founder of Buddhism, his teachings on mindfulness, compassion, and the path to enlightenment have guided millions for over 2,500 years.",
    image:
      "https://pub-10a3382f82964eadb97519ab0c95bc47.r2.dev/file_00000000e5dc720793d2b967b65eed8a.png",
    quote: "The mind is everything. What you think you become.",
    category: "Spirituality",
  },
  {
    name: "Swami Vivekananda",
    title: "Spiritual Leader & Philosopher",
    description:
      "A key figure in introducing Vedanta and Yoga to the Western world, his message of universal brotherhood and self-realization continues to inspire seekers worldwide.",
    image:
      "https://pub-10a3382f82964eadb97519ab0c95bc47.r2.dev/file_000000007ccc720789e47ff05b068e08.png",
    quote: "Arise, awake, and stop not until the goal is reached.",
    category: "Inspiration",
  },
];

export default function HomeContent({ quotes }) {
  const [copied, setCopied] = useState({});

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({
        ...prev,
        [id]: true,
      }));
      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          [id]: false,
        }));
      }, 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.3),transparent_65%)]" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_65%)]" />
        </div>

        <div className="max-w-5xl mx-auto relative text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold tracking-[0.18em] uppercase rounded-full border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 animate-pulse" />
            <span className="text-sky-700">Curated Daily Inspiration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            A universe of{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              insight
            </span>{" "}
            in every quote.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Discover handpicked quotes from the world&apos;s greatest minds —
            perfectly crafted for creators, learners, and everyday dreamers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
              <span>Browse Featured Quotes</span>
            </a>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-red-600 border border-slate-200 font-medium shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-pink-600 border border-slate-200 font-medium shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 max-w-2xl mx-auto text-center">
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-medium text-slate-600">Disclaimer:</span> All content is shared for educational and inspirational purposes only. 
              We strive to maintain accuracy and respect for all sources. The views expressed in these quotes belong solely to their respective authors. 
              This content is not intended to provide professional advice or to substitute for independent professional judgment.
            </p>
          </div>

          {/* Small quote highlight */}
          <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 border border-slate-200 shadow-sm backdrop-blur">
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white">
              <QuoteIcon className="w-4 h-4" />
            </div>
            <p className="text-sm text-slate-700 text-left">
              &ldquo;Great things grow quietly — but they grow.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Inspirational Authors Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Meet Our Inspirational Icons
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Discover the visionary minds whose words continue to guide,
              comfort, and spark new ideas every single day.
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {authorsData.map((author) => (
              <div key={author.name} className="group relative">
                {/* Soft glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200/25 via-sky-200/20 to-cyan-200/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Author Image (no text, no color effect) */}
                  <div className="relative h-74 w-full overflow-hidden">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-fit transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={false}
                    />

                    {/* Heart icon floating, optional but clean */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center">
                        <Heart className="w-4 h-4 text-rose-500" />
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="p-6 flex flex-col gap-4">
                    {/* Name */}
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {author.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {author.description}
                    </p>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-100 rounded-2xl p-4 flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <QuoteIcon className="w-4 h-4 text-indigo-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500 mb-1">
                          Signature Quote
                        </p>
                        <p className="text-sm italic text-slate-800 leading-relaxed">
                          &ldquo;{author.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section
        className="grow px-4 sm:px-6 lg:px-8 pb-20 pt-16 bg-gradient-to-br from-slate-50 via-white to-sky-50 border-t border-slate-100"
        id="featured"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white shadow-sm">
                  <QuoteIcon className="w-4 h-4" />
                </span>
                <span>Featured Quotes</span>
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Explore {quotes.length} handpicked quotes to inspire your day.
              </p>
            </div>
          </div>

          {quotes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No quotes available right now.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {quotes.map((quote) => (
                <QuoteCard
                  key={quote._id}
                  id={quote._id}
                  text={quote.text}
                  author={quote.author}
                  category={quote.category}
                  image={quote.image}
                  copied={copied}
                  onCopy={handleCopy}
                  youtubeUrl={quote.youtubeUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Browse More Quotes CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Want to explore more wisdom?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover our complete collection of inspiring quotes from great minds across history.
          </p>
          <a
            href="/quotes"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
          >
            <span>Browse All Quotes</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
