"use client";

import { useState } from "react";

interface GuideActionsProps {
  dict: Record<string, unknown>;
}

export default function GuideActions({ dict }: GuideActionsProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const guideDict = (dict.guide ?? {}) as Record<string, string>;
  const likeLabel = guideDict.like ?? "Like";
  const bookmarkLabel = guideDict.bookmark ?? "Bookmark";
  const shareLabel = guideDict.share ?? "Share";

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2000);
      }
    } catch {
      // User cancelled or API unavailable - silently ignore
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Like Button */}
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
          liked
            ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
            : "border-stone-700 bg-stone-900 text-stone-400 hover:border-stone-600 hover:text-stone-200"
        }`}
        onClick={() => setLiked((prev) => !prev)}
        aria-label={likeLabel}
        aria-pressed={liked}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={liked ? 0 : 1.5}
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">{likeLabel}</span>
      </button>

      {/* Bookmark Button */}
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
          bookmarked
            ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
            : "border-stone-700 bg-stone-900 text-stone-400 hover:border-stone-600 hover:text-stone-200"
        }`}
        onClick={() => setBookmarked((prev) => !prev)}
        aria-label={bookmarkLabel}
        aria-pressed={bookmarked}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={bookmarked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={bookmarked ? 0 : 1.5}
        >
          <path
            fillRule="evenodd"
            d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.5 12.5L7 16.25V4h6v12.25L10.5 14.5l-1 .75z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">{bookmarkLabel}</span>
      </button>

      {/* Share Button */}
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-lg border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-medium text-stone-400 transition-all hover:border-stone-600 hover:text-stone-200"
        onClick={handleShare}
        aria-label={shareLabel}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        <span className="hidden sm:inline">{shareLabel}</span>
      </button>

      {/* Share Toast */}
      {shareToast && (
        <span className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-stone-800 px-4 py-2 text-sm text-amber-400 shadow-lg">
          {guideDict.linkCopied ?? "Link copied!"}
        </span>
      )}
    </div>
  );
}
