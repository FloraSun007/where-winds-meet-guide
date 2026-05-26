"use client";

import { useEffect, useCallback } from "react";

interface UnlockPrompt {
  title?: string;
  description?: string;
  cta?: string;
  premiumTag?: string;
}

interface PremiumGateProps {
  isOpen: boolean;
  onClose: () => void;
  dict: UnlockPrompt;
}

export default function PremiumGate({ isOpen, onClose, dict }: PremiumGateProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={dict.title ?? "Premium Content"}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md transform rounded-xl border border-stone-700 bg-stone-900 p-6 shadow-2xl transition-all duration-300 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-md p-1 text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Premium Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 ring-1 ring-amber-500/20">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.928 5.856L19 7.82l-4.39 4.317L15.656 19 10 16.08 4.344 19l.946-6.863L1 7.82l6.072-.964L10 1z"
                clipRule="evenodd"
              />
            </svg>
            {dict.premiumTag ?? "Premium"}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-xl font-bold text-stone-100 sm:text-2xl">
          {dict.title ?? "Unlock Premium Content"}
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-stone-400">
          {dict.description ??
            "Sign up for a premium membership to access this guide and many more exclusive resources."}
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="w-full rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-stone-950 transition-colors hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-900"
        >
          {dict.cta ?? "Upgrade to Premium"}
        </button>
      </div>
    </div>
  );
}
