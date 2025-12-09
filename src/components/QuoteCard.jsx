"use client";

import Image from "next/image";
import { Share2, Copy, Youtube, Quote as QuoteIcon } from "lucide-react";

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
    Motivation:
      "from-indigo-50 to-sky-50 text-indigo-700 border-indigo-100/70",
    Success: "from-emerald-50 to-teal-50 text-emerald-700 border-emerald-100/70",
    Wisdom:
      "from-violet-50 to-indigo-50 text-violet-700 border-violet-100/70",
    Inspiration:
      "from-rose-50 to-orange-50 text-rose-700 border-rose-100/70",
  };

  const categoryColor =
    categoryColors[category] ||
    "from-slate-50 to-slate-100 text-slate-700 border-slate-100/70";

  return (
    <article className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={author}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-sky-500 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-5xl font-serif mb-2 opacity-70">“</div>
              <p className="text-sm font-medium opacity-80">Quote</p>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

        {/* Floating quote icon */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
            <QuoteIcon className="w-4 h-4 text-indigo-500" />
          </div>
        </div>

        {/* Category pill on image */}
        <div className="absolute bottom-4 left-4">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${categoryColor}`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80" />
            <span>{category}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col gap-4">
        {/* Quote Text */}
        <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>

        {/* Author */}
        <p className="text-sm font-medium text-slate-600">— {author}</p>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-4" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onCopy(text, id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              copied && copied[id]
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100"
            }`}
            title="Copy quote"
          >
            <Copy className="w-4 h-4 sm:w-4 sm:h-4" />
            <span>{copied && copied[id] ? "Copied" : "Copy"}</span>
          </button>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-all duration-300"
            title="Watch on YouTube"
          >
            <Youtube className="w-4 h-4 sm:w-4 sm:h-4" />
            <span>YouTube</span>
          </a>

          <button
            className="ml-auto flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 transition-all duration-300"
            title="Share quote"
          >
            <Share2 className="w-4 h-4 sm:w-4 sm:h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}
