"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { Zap, Search, Heart } from "lucide-react";
import Image from "next/image";

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
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredQuotes = quotesData.filter(
    (quote) =>
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-200/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/4 -translate-y-1/4 bg-gradient-radial from-purple-200/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Tagline */}
          <div className="inline-block px-4 py-2 mb-8 text-sm font-semibold text-blue-700 uppercase tracking-wider bg-blue-100 border border-blue-300 rounded-full">
            Unlock Timeless Wisdom
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 max-w-4xl mx-auto">
            A Universe of Insight at Your Fingertips
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
            Explore a curated collection of powerful quotes from the world's
            most brilliant minds. Find the inspiration you need for any moment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <a
              href="#featured"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Zap className="w-5 h-5" /> Discover Quotes
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/channel/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl"
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
              className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl"
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

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-gray-700 text-xs max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-800">Disclaimer:</span>{" "}
              This content is made to educate and inspire. It's not meant to
              offend, mislead, or violate anyone's rights. All quotes are
              attributed to their original authors.
            </p>
          </div>
        </div>
      </section>

      {/* Inspirational Authors Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Meet Our Inspirational Icons
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the visionary minds whose wisdom has shaped history and
              continues to inspire millions around the world.
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {authorsData.map((author) => (
              <div key={author.id} className="group relative">
                {/* Card Background with Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-xl border border-orange-200/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-300/80 transform group-hover:-translate-y-2">
                  {/* Author Image */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-300 to-amber-400">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-amber-400 p-3 rounded-full shadow-lg">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="p-8 text-gray-900">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {author.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {author.description}
                    </p>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-orange-100/80 to-yellow-100/80 border-l-4 border-orange-500 pl-5 py-4 mb-6 rounded-r-xl">
                      <p className="text-sm italic text-orange-900 leading-relaxed">
                        "{author.quote}"
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                      <span>Explore Story</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section
        className="grow px-4 sm:px-6 lg:px-8 pb-20 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50"
        id="featured"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10 pt-16 border-t border-gray-300">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Quotes
              </h2>
              <p className="text-gray-700 mt-2">
                {filteredQuotes.length === quotesData.length
                  ? "Explore all inspiring quotes"
                  : `Found ${filteredQuotes.length} quote${
                      filteredQuotes.length !== 1 ? "s" : ""
                    }`}
              </p>
            </div>
          </div>

          {filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                No quotes found. Try a different search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuotes.map((quote) => (
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
