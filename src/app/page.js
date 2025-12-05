"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { Zap, Heart, Quote as QuoteIcon } from "lucide-react";

const quotesData = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Success",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 3,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Wisdom",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Inspiration",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 5,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "Wisdom",
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 6,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
];

const authorsData = [
  {
    id: 1,
    name: "Steve Jobs",
    description:
      "Co-founder of Apple Inc., visionary leader who revolutionized technology and design. His passion for excellence transformed how we interact with computers.",
    quote: "The only way to do great work is to love what you do.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Maya Angelou",
    description:
      "Legendary poet and civil rights activist. Her powerful voice and inspiring words have touched millions, teaching us the strength within our souls.",
    quote: "There is no greater agony than bearing an untold story inside you.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Albert Einstein",
    description:
      "Renowned theoretical physicist whose genius reshaped our understanding of the universe. A symbol of brilliant minds pushing the boundaries of knowledge.",
    quote:
      "Imagination is more important than knowledge. Knowledge is limited; imagination embraces the entire world.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export default function Home() {
  const [copied, setCopied] = useState({});

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

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
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-10">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
              <Zap className="w-4 h-4" />
              <span>Browse Featured Quotes</span>
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/channel/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-2 justify-center shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
              Instagram
            </a>
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

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-xs max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-slate-700">Disclaimer:</span>{" "}
              This content is made to educate and inspire. It&apos;s not meant
              to offend, mislead, or violate anyone&apos;s rights. All quotes
              are attributed to their original authors.
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
              <div key={author.id} className="group relative">
                {/* Soft glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200/25 via-sky-200/20 to-cyan-200/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Author Image (no text, no color effect) */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                          Author
                        </p>
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
                Explore {quotesData.length} handpicked quotes to inspire your
                day.
              </p>
            </div>
          </div>

          {quotesData.length === 0 ? (
            <div className="text-center py-12">
              <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">
                No quotes available right now.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {quotesData.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  id={quote.id}
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

      <Footer />
    </div>
  );
}
