type LogoMarkProps = {
  className?: string;
  size?: number;
};

/**
 * Abstract mountain range: a solid forest peak with a gold secondary summit,
 * suggesting elevation and upward movement without a literal illustration.
 */
export function LogoMark({ className, size = 30 }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 34 28"
      width={size}
      height={(size * 28) / 34}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1.6 25.4 11.5 6.6l7.4 13.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M16.4 25.4 24.1 11l8.3 14.4"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M1.6 25.4h5.2" stroke="currentColor" strokeWidth="2" />
      <path d="M27.8 25.4h4.6" stroke="var(--gold)" strokeWidth="2" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className ? `logo ${className}` : "logo"}>
      <LogoMark />
      <span className="nav-logo__text">
        <span className="nav-logo__name">Mountain Top</span>
        <span className="nav-logo__tag">Property Intelligence</span>
      </span>
    </span>
  );
}
