"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { Zap, Heart, Quote as QuoteIcon, Loader2 } from "lucide-react";
import { getFeaturedQuotes } from "@/sanity/lib/queries";

// Sample authors data (can be moved to Sanity later if needed)
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
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedQuotes();
        setQuotes(data);
      } catch (err) {
        console.error('Error fetching quotes:', err);
        setError('Failed to load quotes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

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
                {loading ? (
                  <span>Loading quotes...</span>
                ) : (
                  `Explore ${quotes.length} handpicked quotes to inspire your day.`
                )}
              </p>
            </div>
          </div>

          {!loading && quotes.length === 0 ? (
            <div className="text-center py-12">
              <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
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

      <Footer />
    </div>
  );
}
