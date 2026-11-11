import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...base} width="16" height="16" className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} width="16" height="16" className={className}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconRevenue({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M3 20V4" />
      <path d="M3 20h18" />
      <path d="M7 16l4-5 3 2.5L21 6" />
      <path d="M17 6h4v4" />
    </svg>
  );
}

export function IconGuest({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" />
      <path d="M8.5 10.5h7M8.5 14h4.5" />
    </svg>
  );
}

export function IconListing({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 15.5l4.5-4 4 3.5L16 10l5 4.5" />
      <circle cx="8.5" cy="8.5" r="1.4" />
    </svg>
  );
}

export function IconCleaning({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M9 3h2.5l.8 6.5h-4L9 3Z" />
      <path d="M7.5 9.5h6l1 3.5h-8l1-3.5Z" />
      <path d="M5.5 13h10v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4Z" />
      <path d="M18.5 4.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
    </svg>
  );
}

export function IconKey({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <circle cx="8" cy="8" r="4.2" />
      <path d="M11 11l8 8" />
      <path d="M16.5 16.5l2-2M19 19l2-2" />
    </svg>
  );
}

export function IconPortfolio({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <rect x="3" y="3" width="7.5" height="7.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-1.5 2V11.5A7.5 7.5 0 0 1 11 4h1.5A7.5 7.5 0 0 1 20 11.5Z" />
      <path d="M9 11h6M9 14h3.5" />
    </svg>
  );
}

export function IconMap({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconClipboard({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9 4V2.8h6V4" />
      <path d="M8.5 10h7M8.5 14h7M8.5 17.5h4" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M7 15.5v-3M11.5 15.5v-6M16 15.5v-4.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg {...base} width="24" height="24" className={className}>
      <path d="M12 3.5l1.8 4.9 4.9 1.8-4.9 1.8L12 16.9l-1.8-4.9L5.3 10.2l4.9-1.8L12 3.5Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  revenue: IconRevenue,
  guest: IconGuest,
  listing: IconListing,
  cleaning: IconCleaning,
  operations: IconKey,
  portfolio: IconPortfolio,
} as const;

export const TRUST_ICONS = {
  shield: IconShield,
  chat: IconChat,
  map: IconMap,
  clipboard: IconClipboard,
  chart: IconChart,
} as const;
