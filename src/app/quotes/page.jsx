"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

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
  {
    id: 7,
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
    category: "Success",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 8,
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "Wisdom",
    image:
      "https://images.unsplash.com/photo-1517411903706-6f3ee90583f1?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 9,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 10,
    text: "The only way to do something great is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 11,
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    category: "Wisdom",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
  {
    id: 12,
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=500&fit=crop",
    youtubeUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
  },
];

const ITEMS_PER_PAGE = 6;

// Extract unique categories and authors
const getUniqueCategories = () => {
  return [...new Set(quotesData.map((q) => q.category))].sort();
};

const getUniqueAuthors = () => {
  return [...new Set(quotesData.map((q) => q.author))].sort();
};

export default function QuotesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [copied, setCopied] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");

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

  // Filter quotes based on search term, category, and author
  const filteredQuotes = quotesData.filter(
    (quote) =>
      (quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || quote.category === selectedCategory) &&
      (selectedAuthor === "All" || quote.author === selectedAuthor)
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredQuotes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentQuotes = filteredQuotes.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleAuthorFilter = (author) => {
    setSelectedAuthor(author);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-gray-900 flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            All Quotes
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our complete collection of {quotesData.length} inspiring
            quotes
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search quotes, authors, or categories..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryFilter("All")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === "All"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
                {getUniqueCategories().map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Author
              </label>
              <select
                value={selectedAuthor}
                onChange={(e) => handleAuthorFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
              >
                <option value="All">All Authors</option>
                {getUniqueAuthors().map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="flex-grow px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {currentQuotes.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No quotes found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all quotes.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentQuotes.map((quote) => (
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

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNum = index + 1;
                    // Show page numbers with ellipsis for large page counts
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            currentPage === pageNum
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return (
                        <span key={pageNum} className="px-2 py-2 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Page Info */}
              <div className="text-center mt-8 text-gray-600">
                <p>
                  Showing{" "}
                  <span className="font-semibold">{startIndex + 1}</span> to{" "}
                  <span className="font-semibold">
                    {Math.min(endIndex, filteredQuotes.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold">{filteredQuotes.length}</span>{" "}
                  quotes
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
