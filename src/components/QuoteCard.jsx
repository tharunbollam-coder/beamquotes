"use client";

import Image from "next/image";
import { Share2, Copy, Youtube } from "lucide-react";

export default function QuoteCard({
  id,
  text,
  author,
  category,
  image,
  copied,
  onCopy,
  youtubeUrl,
}) {
  const categoryColors = {
    Motivation: "from-blue-100 to-blue-200 text-blue-700",
    Success: "from-green-100 to-green-200 text-green-700",
    Wisdom: "from-purple-100 to-purple-200 text-purple-700",
    Inspiration: "from-pink-100 to-pink-200 text-pink-700",
  };

  const categoryColor =
    categoryColors[category] || "from-gray-100 to-gray-200 text-gray-700";

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 overflow-hidden hover:scale-105 transform">
      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {image ? (
          <Image
            src={image}
            alt={author}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-5xl font-serif mb-2 opacity-50">"</div>
              <p className="text-sm font-medium opacity-70">Quote</p>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8">
        {/* Quote Mark & Category */}
        <div className="flex items-start justify-between mb-3">
          <div className="text-3xl text-blue-200 font-serif">"</div>
          <span
            className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColor} text-xs font-semibold rounded-full`}
          >
            {category}
          </span>
        </div>

        {/* Quote Text */}
        <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4 leading-relaxed line-clamp-3">
          {text}
        </p>

        {/* Author */}
        <p className="text-gray-600 font-medium mb-6 text-sm">— {author}</p>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-4" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onCopy(text, id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
              copied[id]
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            title="Copy quote"
          >
            <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-xs sm:text-sm">
              {copied[id] ? "Copied" : "Copy"}
            </span>
          </button>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-300 text-sm"
            title="Watch on YouTube"
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-xs sm:text-sm">YouTube</span>
          </a>

          <button
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 ml-auto text-sm"
            title="Share quote"
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-xs sm:text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
