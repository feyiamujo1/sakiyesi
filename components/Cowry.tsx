type CowryProps = {
  className?: string;
};

/** A single cowry shell, oval body with a toothed centre slit. */
export function Cowry({ className = "" }: CowryProps) {
  return (
    <svg className={className} viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <path
        d="M12 1C17.5 1 22 4.5 22 8C22 11.5 17.5 15 12 15C6.5 15 2 11.5 2 8C2 4.5 6.5 1 12 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 8L7 6.2L8 8.6L10 6L11 8.8L13 6L14 8.8L16 6L17.5 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
