// Globals
import React from 'react';
import Image from 'next/image';

export default function Details({
  product,
}) {
  return (
    product.length > 0 &&
      <section
        className="bg-gray-50 relative grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <article
          className="
            px-4
          "
        >
          <ul
            className="py-8"
          >
            <li className="mb-4 md:mb-6">
              {product[0].logo ?
                <Image
                  src={product[0].logo}
                  width={180}
                  height={28}
                />
              :
                <h3 className="uppercase tracking-wider text-sm text-gray-400">
                  {product[0].title}
                </h3>
              }
            </li>
            {product[0].characteristics ?
              <li className="mb-4 md:mb-6">
                <h3 className="uppercase tracking-wider text-sm text-gray-400 mb-1">
                  Caracter&iacute;sticas:
                </h3>
                <ol
                  className="list-disc ml-4"
                >
                  {product[0].characteristics.map((text, index) =>
                    <li
                      key={index}
                      className="uppercase tracking-wider text-sm text-gray-600 mb-1"
                    >
                      {text}.
                    </li>
                  )}
                </ol>
              </li>
            : ''
            }
            {product[0].benefits ?
              <li className="mb-4 md:mb-6">
                <h3 className="uppercase tracking-wider text-sm text-gray-400 mb-1">
                  Beneficios:
                </h3>
                <ol
                  className="list-disc ml-4"
                >
                  {product[0].benefits.map((benefit, index) =>
                    <li
                      key={index}
                      className="uppercase tracking-wider text-sm text-gray-600 mb-1"
                    >
                      {benefit}.
                    </li>
                  )}
                </ol>
              </li>
            : ''
            }
            {product[0].thickness ?
              <li className="mb-4 md:mb-6">
                <h3 className="uppercase tracking-wider text-sm text-gray-400 mb-1">
                  Espesores:
                </h3>
                <p
                  className="uppercase tracking-wider text-sm text-gray-600 mb-1"
                >
                  {product[0].thickness}
                </p>
              </li>
            : ''
            }
            {product[0].measurement ?
              <li className="mb-4 md:mb-6">
                <h3 className="uppercase tracking-wider text-sm text-gray-400 mb-1">
                  Medida:
                </h3>
                <p
                  className="uppercase tracking-wider text-sm text-gray-600 mb-1"
                >
                  {product[0].measurement}
                </p>
              </li>
            : ''
            }
            <li>
              <a
                className="
                  uppercase
                  tracking-wider
                  font-bold
                  text-sm
                  text-orange-500 hover:text-orange-400
                  group
                  flex items-center
                "
                href={product[0].url}
                target="_blank"
                rel='noopener roreferrer'
              >
                ver m&aacute;s informaci&oacute;n
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-2 group-hover:opacity-90 relative -top-px">
                  <path d="M4.45312 1.05859C4.21875 1.29297 4.24219 1.64453 4.45312 1.87891L7.28906 4.55078H0.5625C0.234375 4.55078 0 4.80859 0 5.11328V5.86328C0 6.19141 0.234375 6.42578 0.5625 6.42578H7.28906L4.45312 9.12109C4.24219 9.35547 4.24219 9.70703 4.45312 9.94141L4.96875 10.457C5.20312 10.668 5.55469 10.668 5.76562 10.457L10.3359 5.88672C10.5469 5.67578 10.5469 5.32422 10.3359 5.08984L5.76562 0.542969C5.55469 0.332031 5.20312 0.332031 4.96875 0.542969L4.45312 1.05859Z" />
                </svg>
              </a>
            </li>
          </ul>
        </article>
        <div
          className="relative h-72 order-first md:order-last md:h-full"
        >
          <svg viewBox="0 0 272 500" className="hidden xl:block absolute right-0 bottom-0 z-10 max-h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 500L136.5 364L272.5 500H0Z" fill="url(#paint0_linear_15_521)"/>
            <path d="M272 0L21 249.49L272 500V0Z" fill="url(#paint1_linear_15_521)"/>
            <defs>
            <linearGradient id="paint0_linear_15_521" x1="136.25" y1="364" x2="136.25" y2="500" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC72C"/>
            <stop offset="1" stop-color="#FAA83C"/>
            </linearGradient>
            <linearGradient id="paint1_linear_15_521" x1="146.5" y1="0" x2="146.5" y2="500" gradientUnits="userSpaceOnUse">
            <stop stop-color="#009EE2"/>
            <stop offset="1" stop-color="#006997"/>
            </linearGradient>
            </defs>
          </svg>
          <Image
            src={product[0].backgroundImage}
            layout="fill"
            objectFit='cover'
          />
        </div>
      </section>
  );
}