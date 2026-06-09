export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent sm:w-16" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path
          d="M12 2c1.5 2.5 1.5 4.5 0 6-1.5-1.5-1.5-3.5 0-6Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="M12 8c2.5-1.5 4.5-1.5 6 0-1.5 1.5-3.5 1.5-6 0Z" fill="currentColor" opacity="0.7" />
        <path d="M12 8c-2.5-1.5-4.5-1.5-6 0 1.5 1.5 3.5 1.5 6 0Z" fill="currentColor" opacity="0.7" />
        <circle cx="12" cy="13" r="2" fill="currentColor" />
        <path d="M12 15v7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent sm:w-16" />
    </div>
  )
}
