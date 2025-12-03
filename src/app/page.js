"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { Zap, Search } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Daily Inspiration
              </span>
              <br />
              <span className="text-gray-900">Starts Here</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Discover transformative quotes from the world's greatest minds.
              Watch exclusive video shorts and share inspiration with your
              community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#featured"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Quotes
              </a>
              <a
                href="#featured"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Watch Videos
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <p className="text-gray-600 text-sm mt-3 font-medium">
                    Inspiring Quotes
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    100+
                  </div>
                  <p className="text-gray-600 text-sm mt-3 font-medium">
                    Great Authors
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <p className="text-gray-600 text-sm mt-3 font-medium">
                    Active Users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="flex-grow px-4 sm:px-6 lg:px-8 pb-20" id="featured">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Quotes
              </h2>
              <p className="text-gray-600 mt-2">
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
              <Zap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Quote to Share?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Contribute your favorite quotes and inspire the community.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
            Submit a Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
