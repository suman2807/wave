const WaveLogo = ({ className = "size-9 text-primary" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main wave shape */}
        <path
          d="M10 50C25 35, 35 35, 50 50C65 65, 75 65, 90 50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Secondary wave */}
        <path
          d="M15 65C30 50, 40 50, 55 65C70 80, 80 80, 85 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.7"
        />
        
        {/* Accent wave */}
        <path
          d="M20 35C30 25, 35 25, 45 35C55 45, 60 45, 70 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />
        
        {/* Connection dots representing communication */}
        <circle cx="25" cy="42" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="50" cy="58" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="75" cy="42" r="2.5" fill="currentColor" opacity="0.8" />
        
        {/* Subtle gradient overlay */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#waveGradient)" rx="20" />
      </svg>
    </div>
  );
};

export default WaveLogo;