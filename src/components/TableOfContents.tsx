"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TOCSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  dict: Record<string, unknown>;
}

export default function TableOfContents({
  sections,
  dict,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const guideDict = (dict.guide ?? {}) as Record<string, string>;
  const tocLabel = guideDict.tableOfContents ?? "Table of Contents";

  const handleObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        // Pick the one closest to the top
        const sorted = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    },
    []
  );

  useEffect(() => {
    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(handleObserverCallback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections, handleObserverCallback]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  if (sections.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-amber-700/50 hover:text-amber-400"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
        >
          <span>{tocLabel}</span>
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-lg border border-stone-700 bg-stone-900 p-3">
            <ul className="space-y-1">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <button
                    type="button"
                    className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                      activeId === id
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                    }`}
                    onClick={() => scrollToSection(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop Sticky Sidebar */}
      <nav
        className="hidden lg:block"
        aria-label={tocLabel}
      >
        <div className="sticky top-24">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
            {tocLabel}
          </h4>
          <ul className="space-y-1 border-l border-stone-800">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`block w-full border-l-2 px-3 py-1.5 text-left text-sm transition-colors ${
                    activeId === id
                      ? "border-amber-400 text-amber-400"
                      : "border-transparent text-stone-400 hover:border-stone-600 hover:text-stone-200"
                  }`}
                  onClick={() => scrollToSection(id)}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
