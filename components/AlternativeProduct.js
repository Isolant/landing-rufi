// Globals
import React from 'react';

export default function AlternativeProduct({
  product,
  // activeProduct,
  // setActiveProduct
}) {
  return (
    <li className="flex flex-col items-center max-w-xs relative w-full">
      <div className="lg:mb-6">
        {product.logo ?
          <img
            src={product.logo}
            className="w-36"
          />
        :
          <h3 className="uppercase tracking-wider text-sm text-gray-400">
            {product.title}
          </h3>
        }
      </div>
      <div className="relative p-4 rounded-md flex-1 flex items-end">
        <img
          src={product.productImage}
          className={`${product.title === 'Super TBA 1' || product.title === 'Super TBA 2' ? 'max-h-44' : 'max-h-36'}`}
        />
        <a
          className={`
            absolute right-0 top-16
            w-10 h-10
            rounded-full
            shadow-md
            bg-orange-500 hover:bg-orange-400
            text-white
          `}
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center justify-center w-full h-full">+</span>
        </a>
      </div>
    </li>
  );
}