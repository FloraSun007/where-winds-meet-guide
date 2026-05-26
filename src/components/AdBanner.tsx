interface AdBannerProps {
  slot: "top" | "middle" | "bottom" | "sidebar";
  className?: string;
}

const SLOT_CONFIG: Record<
  AdBannerProps["slot"],
  { label: string; sizeClasses: string }
> = {
  top: {
    label: "728x90",
    sizeClasses: "w-full h-[90px] max-w-[728px] mx-auto",
  },
  middle: {
    label: "Responsive",
    sizeClasses: "w-full h-[90px] sm:h-[100px]",
  },
  bottom: {
    label: "Footer Banner",
    sizeClasses: "w-full h-[90px]",
  },
  sidebar: {
    label: "300x250",
    sizeClasses: "w-[300px] h-[250px]",
  },
};

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  // Ad placeholders hidden until real ads are configured
  return null;
}
