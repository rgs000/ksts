import React from 'react';

const CompanyLogo = ({ className = "h-16 w-auto", showTagline = false }) => {
  return (
    <svg 
      viewBox="0 0 280 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Truck Icon */}
      <g transform="translate(0, 5)">
        {/* Truck body */}
        <rect x="5" y="25" width="45" height="25" rx="2" fill="#1e3a5f" />
        {/* Truck cabin */}
        <path d="M50 30 L65 30 L70 40 L70 50 L50 50 Z" fill="#1e3a5f" />
        {/* Windows */}
        <rect x="52" y="33" width="12" height="10" rx="1" fill="#ffffff" />
        {/* Wheels */}
        <circle cx="20" cy="52" r="7" fill="#1e3a5f" />
        <circle cx="20" cy="52" r="4" fill="#ffffff" />
        <circle cx="60" cy="52" r="7" fill="#1e3a5f" />
        <circle cx="60" cy="52" r="4" fill="#ffffff" />
        {/* Orange Arrow on truck */}
        <path d="M10 32 L40 32 L40 28 L52 37 L40 46 L40 42 L10 42 Z" fill="#f97316" />
        {/* Truck details */}
        <line x1="5" y1="50" x2="70" y2="50" stroke="#1e3a5f" strokeWidth="2" />
      </g>
      
      {/* Company Name */}
      <g transform="translate(80, 0)">
        {/* KARAN */}
        <text 
          x="0" 
          y="32" 
          fontFamily="Arial Black, sans-serif" 
          fontSize="26" 
          fontWeight="900" 
          fill="#1e3a5f"
          letterSpacing="1"
        >
          KARAN
        </text>
        {/* SINGH */}
        <text 
          x="95" 
          y="32" 
          fontFamily="Arial Black, sans-serif" 
          fontSize="26" 
          fontWeight="900" 
          fill="#f97316"
          letterSpacing="1"
        >
          SINGH
        </text>
        
        {/* TRANSPORT SERVICES banner */}
        <rect x="0" y="38" width="185" height="22" fill="#1e3a5f" />
        <text 
          x="92" 
          y="54" 
          fontFamily="Arial, sans-serif" 
          fontSize="12" 
          fontWeight="600" 
          fill="#ffffff"
          textAnchor="middle"
          letterSpacing="2"
        >
          TRANSPORT SERVICES
        </text>
      </g>
      
      {/* Tagline (optional) */}
      {showTagline && (
        <text 
          x="172" 
          y="75" 
          fontFamily="Arial, sans-serif" 
          fontSize="10" 
          fill="#f97316"
          textAnchor="middle"
          fontWeight="500"
        >
          Safe • Fast • Reliable Services
        </text>
      )}
    </svg>
  );
};

export default CompanyLogo;
