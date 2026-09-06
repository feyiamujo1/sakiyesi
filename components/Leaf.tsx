type LeafProps = {
  className?: string;
};

/**
 * All five pieces of the botanical mark share one coordinate space
 * (viewBox 0 0 120 70), so individual pieces below crop into that
 * same artwork instead of redrawing/transforming the path data.
 */
export function LeafMark({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="none" aria-hidden="true">
      <path d="M10 61C37 41 57 22 109 10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M38 40C26 40 19 32 18 21C31 20 39 27 38 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M38 40Q26 28 18 21" stroke="currentColor" strokeWidth="1" />
      <path
        d="M60 29C49 28 44 20 45 10C57 10 63 18 60 29Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M60 29Q50 20 45 10" stroke="currentColor" strokeWidth="1" />
      <path
        d="M75 25C79 12 88 7 100 9C98 22 89 27 75 25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M75 25Q90 12 100 9" stroke="currentColor" strokeWidth="1" />
      <path
        d="M48 39C54 47 53 57 47 64C37 58 36 48 48 39Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M48 39Q41 53 47 64" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** The connecting stroke on its own — a small flight/vine swoosh. */
export function LeafTrail({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="7 7 105 57" fill="none" aria-hidden="true">
      <path
        d="M10 61C37 41 57 22 109 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Compact rounded leaf. */
export function LeafRound({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="15 17 27 26" fill="none" aria-hidden="true">
      <path
        d="M38 40C26 40 19 32 18 21C31 20 39 27 38 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M38 40Q26 28 18 21" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Narrow upright leaf. */
export function LeafSlim({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="41 7 25 25" fill="none" aria-hidden="true">
      <path
        d="M60 29C49 28 44 20 45 10C57 10 63 18 60 29Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M60 29Q50 20 45 10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Wide, wing-like leaf. */
export function LeafWide({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="72 4 31 26" fill="none" aria-hidden="true">
      <path
        d="M75 25C79 12 88 7 100 9C98 22 89 27 75 25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M75 25Q90 12 100 9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Drooping, curled leaf. */
export function LeafCurl({ className = "" }: LeafProps) {
  return (
    <svg className={className} viewBox="33 36 24 25" fill="none" aria-hidden="true">
      <path
        d="M48 39C54 47 53 57 47 64C37 58 36 48 48 39Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M48 39Q41 53 47 64" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
