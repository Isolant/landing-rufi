// Globals
import React from 'react';

export default function ProductsTitle({ title }) {
  return (
    <div
      className="relative flex items-center px-4"
    >
      <svg width="1440" height="50" viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0">
          <path fillRule="evenodd" clipRule="evenodd" d="M316 50L366 0H0V50H316ZM388 0H411L361 50H338L388 0ZM459 0H432L382 50H450L480 25L459 0Z" fill="url(#paint0_linear_108_685)"/>
          <path d="M1440 0H479L500 25L470 50H1440V0Z" fill="url(#paint1_linear_108_685)"/>
        <defs>
          <linearGradient id="paint0_linear_108_685" x1="388.617" y1="0" x2="388.617" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009EE2"/>
            <stop offset="1" stopColor="#006997"/>
          </linearGradient>
          <linearGradient id="paint1_linear_108_685" x1="955" y1="0" x2="955" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC72C"/>
            <stop offset="1" stopColor="#FAA83C"/>
          </linearGradient>
        </defs>
      </svg>
      <h2
        className="relative uppercase tracking-wider text-sm text-white max-w-xs flex-1"
      >
        {title}
      </h2>
      <p
        className="hidden lg:block relative uppercase tracking-wider text-sm text-white ml-44"
      >
        Conoc&eacute; nuestros productos Isolant superadores
      </p>
    </div>
  );
}