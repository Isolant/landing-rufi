// Globals
import React from 'react';

export default function ProductsTitle({ title }) {
  return (
    <div
      className="relative flex items-center px-4"
    >
      <svg width="480" height="50" viewBox="0 0 480 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-0'>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M316 50L366 0H0V50H316ZM388 0H411L361 50H338L388 0ZM459 0H432L382 50H450L480 25L459 0Z" fill="url(#paint0_linear_117_36)"/>
        <defs>
          <linearGradient id="paint0_linear_117_36" x1="388.617" y1="0" x2="388.617" y2="50" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009EE2"/>
            <stop offset="1" stop-color="#006997"/>
          </linearGradient>
        </defs>
      </svg>
      <h2
        className="relative uppercase tracking-wider text-sm text-white max-w-xs flex-1"
      >
        {title}
      </h2>
      <p
        className="hidden lg:block relative uppercase tracking-wider text-sm text-sky-500 ml-44"
      >
        Conoc&eacute; nuestros productos Isolant superadores
      </p>
    </div>
  );
}