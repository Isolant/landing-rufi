// Globals
import React from 'react';
import Image from 'next/image';

export default function ProductsTable({ products }) {
  return (
    <div className="mt-8 container mx-auto overflow-x-auto">
      <table className="w-full border-separate table-fixed">
        <TableHeading
          products={products}
        />
        <TableBody
          products={products}
        />
      </table>
    </div>
  );
}

export function TableHeading({ products }) {
  return (
    <thead>
      <tr
        className="bg-gray-50"
      >
        <td
          className="relative p-2 align-bottom"
        >
          <span
            className="uppercase tracking-wider text-xs text-gray-500 font-bold"
          >
            Par&aacute;metro
          </span>
        </td>
        {products.map((product, index) =>
          <td
            key={index}
            className="relative p-4 align-bottom"
          >
            {/* Product image */}
            <div 
              className="relative mb-4 w-32 mx-auto"
            >
              {/* + icon */}
              {index !== 0 &&
                <a
                  className={`
                    absolute left-2 top-16
                    w-10 h-10
                    rounded-full
                    shadow-md
                    bg-sky-300 hover:bg-sky-400
                    text-white
                  `}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center w-full h-full">+</span>
                </a>
              }
              <img
                src={product.productImage}
                alt={product.title}
                className={`${product.title === 'Super TBA 1' || product.title === 'Super TBA 2' ? 'max-h-44 mx-auto' : 'max-h-36 mx-auto'}`}
              />
            </div>
            {/* Rufi logo */}
            {index === 0 &&
              <Image
                src="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/logo/rufi-color.png"
                width={55}
                height={16}
              />
            }
            {/* Product title */}
            {product.logo ?
              <img
                src={product.logo}
                className="w-32"
              />
            :
              <span
                className={`
                  ${index === 0 && 'ml-2'}
                  uppercase tracking-wider text-xs text-gray-500 font-bold
                `}
              >
                {product.title}
              </span>
            }
          </td>
        )}
      </tr>
    </thead>
  )
}

export function TableBody({ products }) {
  const items = products.map(product => product.parameters.map(parameter => parameter));
  const parameters = Array.from(new Set(...products.map(product => product.parameters.map(parameter => parameter.name))));
  
  return (
    <tbody>
      {parameters.map((param, paramIndex) => {
        return (
          <tr
            key={paramIndex}
            className="border-y-8 border-y-solid border-y-white"
          >
            <td
              className="relative p-2"
            >
              <span className="uppercase tracking-wider text-xs text-gray-500 font-bold">
                {param}
              </span>
            </td>
            {items.map((item, itemIndex) =>
              <td
                key={itemIndex}
                className={`
                  ${item[paramIndex].highlighted === true &&
                    item[paramIndex].highlightedScore === 1 ?
                      'bg-orange-50'
                    : item[paramIndex].highlightedScore === 2 ?
                      'bg-orange-100'
                    : item[paramIndex].highlightedScore === 3 ?
                      'bg-orange-200'
                    : ''
                  }
                  relative p-2 rounded-md
                `}
              >
                <div
                  className={`
                    uppercase tracking-wider text-xs font-bold flex justify-center items-center
                    ${item[paramIndex].highlighted && item[paramIndex].highlightedScore === 3 ? 'text-orange-500' : 'text-gray-500'}
                  `}
                >
                  <span className="relative top-px text-base text-orange-500 flex">
                    {item[paramIndex].highlighted === true &&
                      item[paramIndex].highlightedScore === 1 ?
                        <span className="text-white rounded-full text-center block">💪</span>
                      : item[paramIndex].highlightedScore === 2 ?
                        <React.Fragment>
                          <span className="text-white rounded-full text-center block">💪</span>
                          <span className="ml-1 text-white rounded-full text-center block">💪</span>
                        </React.Fragment>
                      : item[paramIndex].highlightedScore === 3 ?
                        <React.Fragment>
                          <span className="text-white rounded-full text-center block">💪</span>
                          <span className="ml-1 text-white rounded-full text-center block">💪</span>
                          <span className="ml-1 text-white rounded-full text-center block">💪</span>
                        </React.Fragment>
                      : ''
                    }
                  </span>
                  <span className="ml-2">{item[paramIndex].value}</span>
                </div>
              </td>
            )}
          </tr>
        )}
      )}
    </tbody>
  )
}