// Globals
import React from 'react';
import Image from 'next/image';

export default function Accesories() {
  return (
    <section className="pt-24 lg:pt-48">
      <div className="relative flex items-center justify-center">
        <hr
          className="bg-gradient-to-b from-yellow-400 to-orange-400 h-2 w-full border-none"
        />
        <h3
          className="absolute bg-gradient-to-b from-yellow-400 to-orange-400 text-center mx-4 p-4 rounded-full uppercase tracking-wider text-sm text-white"
        >
          Accesorios para un techo completamente aislado
        </h3>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 items-center container mx-auto max-w-2xl">
        <Accesory
          logo="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/logo/accesories/isolant-aislantes-landing-rufi-logo-sellatutti.png"
          image="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,q_auto:good,f_auto/rufi/products/accesories/isolant-aislantes-landing-rufi-rollo-sellatutti.png"
          description="Cierre hermético <br />para chapas"
          url="https://www.isolant.com.ar/aislantes/sellatutti"
        />
        <li>
          <hr
            className="transform rotate-90 w-16 mx-auto"
          />
        </li>
         <Accesory
          logo="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/logo/accesories/isolant-aislantes-landing-rufi-logo-fixband.png"
          image="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,q_auto:good,f_auto/rufi/products/accesories/isolant-aislantes-landing-rufi-rollo-fix-band.png"
          description="Impermeabilizá juntas<br />y repará fisuras"
          url="https://www.isolant.com.ar/aislantes/fix-band"
        />
      </ul>
      <div className="relative flex items-center justify-center">
        <hr
          className="bg-gradient-to-b from-yellow-400 to-orange-400 h-2 w-full border-none"
        />
      </div>
    </section>
  );
}

export function Accesory({
  logo,
  image,
  description,
  url
}) {
  return (
    <li className="flex flex-col items-center my-16 lg:my-32">
      <Image
        src={logo}
        width="120"
        height="25"
      />
      <div className="relative border border-gray-200 rounded-full w-28 h-28 my-4">
        <Image
          src={image}
          width="112"
          height="112"
        />
      </div>
      <p
        className="uppercase tracking-wider text-sm text-gray-500 max-w-xs text-center font-bold"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 uppercase tracking-wider text-sm text-orange-500 hover:text-orange-400 font-bold flex items-center"
      >
        Conocer m&aacute;s
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-2 group-hover:opacity-90 relative">
          <path d="M4.45312 1.05859C4.21875 1.29297 4.24219 1.64453 4.45312 1.87891L7.28906 4.55078H0.5625C0.234375 4.55078 0 4.80859 0 5.11328V5.86328C0 6.19141 0.234375 6.42578 0.5625 6.42578H7.28906L4.45312 9.12109C4.24219 9.35547 4.24219 9.70703 4.45312 9.94141L4.96875 10.457C5.20312 10.668 5.55469 10.668 5.76562 10.457L10.3359 5.88672C10.5469 5.67578 10.5469 5.32422 10.3359 5.08984L5.76562 0.542969C5.55469 0.332031 5.20312 0.332031 4.96875 0.542969L4.45312 1.05859Z" />
        </svg>
      </a>
    </li>
  )
}