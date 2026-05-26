import type { Locale } from "@/i18n";

export interface ClassData {
  name: string;
  subtitle?: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  playstyle: string;
}

interface ClassCardProps {
  classKey: string;
  classData: ClassData;
  locale: Locale;
}

export default function ClassCard({ classKey, classData, locale }: ClassCardProps) {
  const strengthsLabel = locale === "zh" ? "优势" : "Strengths";
  const weaknessesLabel = locale === "zh" ? "劣势" : "Weaknesses";

  return (
    <div
      className="group rounded-xl border border-stone-800 bg-stone-950 p-6 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 sm:p-8"
      data-class-key={classKey}
    >
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold text-stone-100 sm:text-2xl">
            {classData.name}
          </h3>
          {classData.subtitle && (
            <p className="mt-1 text-sm text-stone-500">{classData.subtitle}</p>
          )}
        </div>

        {/* Playstyle Tag */}
        <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400 ring-1 ring-amber-500/20">
          {classData.playstyle}
        </span>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-stone-300">
        {classData.description}
      </p>

      {/* Strengths & Weaknesses */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Strengths */}
        {classData.strengths.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {strengthsLabel}
            </h4>
            <ul className="space-y-1.5">
              {classData.strengths.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-stone-400"
                >
                  <span className="mt-1 text-emerald-500">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Weaknesses */}
        {classData.weaknesses.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-400">
              {weaknessesLabel}
            </h4>
            <ul className="space-y-1.5">
              {classData.weaknesses.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-stone-400"
                >
                  <span className="mt-1 text-red-500">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
