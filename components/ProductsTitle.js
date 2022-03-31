// Globals
import React from 'react';

export default function ProductsTitle({ title }) {
  return (
    <div
      className="relative flex items-center px-4"
    >
      <svg
        width="366"
        height="50"
        viewBox="0 0 366 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0"
      >
        <path d="M0 0H366L316 50H0V0Z" fill="url(#paint0_linear_15_574)"/>
        <defs>
          <linearGradient id="paint0_linear_15_574" x1="183" y1="0" x2="183" y2="50" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009EE2"/>
            <stop offset="1" stop-color="#006997"/>
          </linearGradient>
        </defs>
      </svg>
      <h2
        className="relative uppercase tracking-wider text-sm text-white max-w-xs"
      >
        {title}
      </h2>
    </div>
  );
}