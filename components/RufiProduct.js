// Globals
import React from 'react';
import Image from 'next/image';

export default function RufiProduct({
  product,
}) {
  return (
    <React.Fragment>
      <li className="lg:col-span-2 lg:row-span-2 self-center flex items-center mx-4 relative w-full">
        <div className="relative z-20">
          <Image
            src={product.productImage}
            width={90}
            height={180}
            className="z-10"
          />
          <svg
            width="90"
            height="73"
            viewBox="0 0 90 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0"
          >
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0.142853)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 17.2857)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 34.4286)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 51.5714)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 17.1428 51.5714)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 34.2858 51.5714)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 51.4286 51.5714)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 68.5714 51.5714)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 68.7143)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 17.1428 68.7143)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 34.2858 68.7143)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 51.4286 68.7143)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 68.5714 68.7143)" fill="#353841" fill-opacity="0.3"/>
            <rect width="4.28571" height="4.28571" transform="matrix(4.37114e-08 1 1 -4.37114e-08 85.7142 68.7143)" fill="#353841" fill-opacity="0.3"/>
          </svg>
        </div>
        <div
          className="shadow-md px-6 py-4 rounded-md relative -left-4 border border-gray-100 relative z-10 bg-white flex-1"
        >
          <h3 className="uppercase tracking-wider text-sm text-gray-400">
            <Image
              src="/images/logo/rufi-color.png"
              width={55}
              height={16}
            />
            <span className='2xl:ml-2 block 2xl:inline'>{product.title}</span>
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li>
              <p className="uppercase tracking-wider text-sm text-gray-400">Medida:</p>
              <p className="uppercase tracking-wider text-sm text-gray-500">{product.measurement}</p>
            </li>
            <li>
              <p className="uppercase tracking-wider text-sm text-gray-400">Espesor:</p>
              <p className="uppercase tracking-wider text-sm text-gray-500">{product.thickness}</p>
            </li>
          </ol>
        </div>
        <div className="flex-1 relative -left-4 items-center hidden lg:flex">
          <svg
            width="114"
            height="73"
            viewBox="0 0 114 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M113.698 36.3015L84 0V10.603H0V62.603H84V72.603L113.698 36.3015Z" fill="url(#paint0_linear_18_423)"/>
            <defs>
            <linearGradient id="paint0_linear_18_423" x1="56.8492" y1="0" x2="56.8492" y2="72.603" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC72C"/>
            <stop offset="1" stop-color="#FAA83C"/>
            </linearGradient>
            </defs>
          </svg>
          <h3
            className="relative uppercase tracking-wider text-xs text-white left-2"
          >
            Productos <br /> superadores
          </h3>
        </div>
      </li>
      <li
        className="block lg:hidden w-full p-4 bg-gradient-to-b from-yellow-400 to-orange-400 flex justify-center rounded-md"
      >
        <h3
          className="relative uppercase tracking-wider text-xs text-white left-2"
        >
          Productos superadores
        </h3>
      </li>
    </React.Fragment>
  );
}