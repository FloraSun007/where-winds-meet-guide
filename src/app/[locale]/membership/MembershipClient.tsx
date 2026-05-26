"use client";

import { useState } from "react";

export default function MembershipClient({
  planKey,
  cta,
}: {
  planKey: string;
  cta: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate payment flow
    setTimeout(() => {
      setLoading(false);
      alert(
        planKey === "monthly"
          ? "Monthly plan selected! (Payment gateway placeholder)"
          : "Annual plan selected! (Payment gateway placeholder)"
      );
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`mt-6 w-full rounded-lg px-6 py-3 font-semibold transition-colors disabled:opacity-50 ${
        planKey === "annual"
          ? "bg-amber-600 text-white hover:bg-amber-500"
          : "border border-amber-600/50 text-amber-400 hover:bg-amber-600/10"
      }`}
    >
      {loading ? "..." : cta}
    </button>
  );
}
