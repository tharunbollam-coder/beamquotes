"use client";

import React from "react";
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
  // NEW: optional brand name for sharing
  brandName = "YourBrandName",
  // OPTIONAL: if you have a dedicated quote page like /quotes/[id]
  sharePath = "/quotes", // e.g. "/quotes" -> /quotes/123
}) {
  const isTrustedYoutube = (url) => {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.toLowerCase();
      return (
        (host === "youtube.com" ||
          host === "www.youtube.com" ||
          host === "youtu.be") &&
        parsed.protocol === "https:"
      );
    } catch {
      return false;
    }
  };

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

  const [imageSrc, setImageSrc] = React.useState(
    typeof image === "string" ? image : image?.url || ""
  );
  const [imageError, setImageError] = React.useState(false);
  const hasImage = !!(imageSrc && !imageError);

  const handleImageError = () => {
    setImageError(true);
  };

  // ✅ SHARE HANDLER
  const handleShare = async () => {
    try {
      const shareText = `"${text}" — ${author || "Unknown"}`;
      const brandText = `Shared via ${brandName}`;
      const url = typeof window !== "undefined" ? window.location.href : "";

      // Create a canvas to generate a shareable image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas size (Instagram post size)
      canvas.width = 1080;
      canvas.height = 1080;

      // Fill background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.1)");
      gradient.addColorStop(1, "rgba(14, 165, 233, 0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add quote text
      ctx.fillStyle = "#1f2937";
      ctx.textAlign = "center";

      // Set font and wrap text
      ctx.font = "bold 48px Arial";
      const maxWidth = canvas.width * 0.8;
      const lineHeight = 70;
      let y = canvas.height * 0.4;

      // Split text into lines
      const words = text.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, canvas.width / 2, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, canvas.width / 2, y);

      // Add author
      if (author) {
        ctx.font = "italic 36px Arial";
        ctx.fillStyle = "#4b5563";
        ctx.fillText(`— ${author}`, canvas.width / 2, y + 80);
      }

      // Add branding
      ctx.font = "24px Arial";
      ctx.fillStyle = "#6b7280";
      ctx.fillText(brandText, canvas.width / 2, canvas.height - 60);

      // Convert canvas to blob
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

      if (navigator.share) {
        // Use Web Share API with image
        const shareData = {
          title: author ? `Quote by ${author}` : "Inspiring Quote",
          text: shareText,
          url: url,
          files: [new File([blob], "quote.png", { type: "image/png" })],
        };

        if (navigator.canShare && navigator.canShare({ files: [shareData.files[0]] })) {
          await navigator.share(shareData);
        } else {
          // Fallback: Share text if files can't be shared
          await navigator.share({
            title: shareData.title,
            text: shareData.text,
            url: shareData.url,
          });
        }
      } else if (navigator.clipboard) {
        // Fallback: Copy image to clipboard
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
          alert("Quote image copied to clipboard!");
        } catch (err) {
          // Final fallback: Just copy text
          await navigator.clipboard.writeText(`${shareText}\n\n${brandText}\n${url}`);
          alert("Quote text copied to clipboard!");
        }
      } else {
        // Last resort: Open image in new tab
        const imageUrl = URL.createObjectURL(blob);
        window.open(imageUrl, "_blank");
      }
    } catch (error) {
      console.error("Sharing failed:", error);
      alert("Sharing is not supported or was cancelled");
      console.error("Error sharing quote:", error);
      alert("Unable to share this quote right now.");
    }
  };

  return (
    <article className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {hasImage ? (
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={`Quote by ${author || "Unknown"}`}
              width={400}
              height={300}
              className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              unoptimized={process.env.NODE_ENV !== "production"}
              onError={handleImageError}
              priority={false}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-sky-500 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <div className="text-5xl font-serif mb-2 opacity-70">"</div>
              <p className="text-sm font-medium opacity-80">
                {imageError ? "Image not available" : "No image available"}
              </p>
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
            href={isTrustedYoutube(youtubeUrl) ? youtubeUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            title="Watch on YouTube"
            aria-disabled={!isTrustedYoutube(youtubeUrl)}
            tabIndex={isTrustedYoutube(youtubeUrl) ? 0 : -1}
          >
            <Youtube className="w-4 h-4 sm:w-4 sm:h-4" />
            <span>YouTube</span>
          </a>

          <button
            onClick={handleShare}
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
