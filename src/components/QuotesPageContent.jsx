"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Import QuoteCard with SSR disabled to avoid hydration issues
const QuoteCard = dynamic(() => import("@/components/QuoteCard"), { ssr: false });
import { ChevronLeft, ChevronRight, Search, Quote as QuoteIcon } from "lucide-react";

const ITEMS_PER_PAGE = 6;

function QuotesPageContent({ quotes: initialQuotes = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [copied, setCopied] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [retryCount, setRetryCount] = useState(0);

  // Get unique categories from the fetched quotes
  const getUniqueCategories = () => {
    const categories = [...new Set(initialQuotes.map((q) => q.category))].sort();
    return categories;
  };

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
      // Optionally show a toast/alert to user
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filter quotes (search includes text, author, category; filter only by category)
  const filteredQuotes = initialQuotes.filter((quote) => {
    if (!quote) return false;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      (quote.text?.toLowerCase().includes(searchLower) ||
        quote.author?.toLowerCase().includes(searchLower) ||
        quote.category?.toLowerCase().includes(searchLower)) ?? false;

    const matchesCategory =
      selectedCategory === "All" || quote.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredQuotes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredQuotes.length);
  const paginatedQuotes = filteredQuotes.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    const nextPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(nextPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header / Hero for Quotes */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.28),transparent_65%)]" />
          <div className="absolute bottom-[-180px] right-[-120px] w-[480px] h-[480px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),transparent_65%)]" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white">
                <QuoteIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                All Quotes
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore our complete collection of{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                {initialQuotes.length} inspiring quotes
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl">
              Search by author, text, or theme — then refine using categories to
              find the perfect quote for your video, post, or day.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by author, quote, or category..."
                  value={searchTerm}
                  onChange={handleSearch}
                  aria-label="Search quotes"
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white/80 rounded-2xl border border-slate-100 shadow-sm px-4 py-4 sm:px-6 sm:py-5 backdrop-blur">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
                    Filter by category
                  </p>
                  <p className="text-xs text-slate-500">
                    Showing{" "}
                    <span className="font-semibold">
                      {filteredQuotes.length}
                    </span>{" "}
                    matching quotes
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryFilter("All")}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                      selectedCategory === "All"
                        ? "bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md border-transparent"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    All
                  </button>
                  {getUniqueCategories().map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryFilter(category)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md border-transparent"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="grow px-4 sm:px-6 lg:px-8 pb-20 pt-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No quotes match your search. Try different keywords or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {paginatedQuotes.map((quote) => (
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    {/* Previous */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNum) => {
                        if (
                          pageNum === 1 ||
                          pageNum === totalPages ||
                          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                pageNum === currentPage
                                  ? "bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md"
                                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
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
                            <span
                              key={pageNum}
                              className="px-2 py-2 text-slate-400 select-none"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      }
                    )}

                    {/* Next */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Page Info */}
                  <p className="text-xs sm:text-sm text-slate-600">
                    Showing{" "}
                    <span className="font-semibold">{startIndex + 1}</span> to{" "}
                    <span className="font-semibold">
                      {Math.min(endIndex, filteredQuotes.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold">
                      {filteredQuotes.length}
                    </span>{" "}
                    quotes
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default QuotesPageContent;