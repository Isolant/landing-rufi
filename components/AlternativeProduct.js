// Globals
import React from 'react';

export default function AlternativeProduct({
  product,
  activeProduct,
  setActiveProduct
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
      <div
        className={`
          relative p-4 rounded-md flex-1 flex items-end
          ${activeProduct === product.title ? 'bg-orange-100' : ''}
        `}
      >
        <img
          src={product.productImage}
          className={`${product.title === 'Super TBA 1' || product.title === 'Super TBA 2' ? 'max-h-44' : 'max-h-36'}`}
        />
        <button
          className={`
            absolute right-0 top-16
            w-10 h-10
            rounded-full
            shadow-md
            ${activeProduct === product.title ? 'bg-sky-500 hover:bg-sky-400' : 'bg-orange-500 hover:bg-orange-400'}
            text-white
          `}
          onClick={() => setActiveProduct(product.title)}
        >
          {activeProduct === product.title ? '-' : '+'}
        </button>
      </div>
    </li>
  );
}