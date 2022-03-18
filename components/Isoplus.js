// Globals
import React from 'react';

export default function Isoplus() {
  return (
    <section>
      <ul className="grid grid-cols-1 lg:grid-cols-2">
        <Section
          decorations={true}
          image="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/isoplus/isolant-aislantes-landing-rufi-isoplus-duenos-e-inquilinos.jpg"
          title={`¿No tenés quién te coloque <strong class="font-bold lg:block">nuestros aislantes?</strong>`}
          text="Encontrá el más cercano a tu casa en nuestra base de instaladores y arquitectos ISOPLUS."
          ctaLink="https://isoplus.isolant.com.ar/inicio"
          ctaText="Ir a Isoplus"
        />
        <Section
          decorations={false}
          image="https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/isoplus/isolant-aislantes-landing-rufi-isoplus-profesionales.jpg"
          title={`¿Sos un profesional <strong class="font-bold lg:block">de la construcción?</strong>`}
          text="Si sos un arquitecto, techista, MMO, etc., visitá nuestra web pensada especialmente para vos."
          ctaLink="https://isoplus.isolant.com.ar/instalador"
          ctaText="Soy un profesional"
        />
      </ul>
    </section>
  );
}

export function Section({
  decorations,
  image,
  title,
  text,
  ctaLink,
  ctaText
}) {
  return (
    <li
      className="relative h-fit bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      {decorations === true &&
        <svg width="162" height="217" viewBox="0 0 162 217" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 z-10">
          <path d="M162 0L0 162V0H162Z" fill="url(#paint0_linear_17_916)"/>
          <path d="M0 36L90.5 126L0 216.5V195.5L70 126L0 58V36Z" fill="url(#paint1_linear_17_916)"/>
          <defs>
          <linearGradient id="paint0_linear_17_916" x1="81.2282" y1="0.455056" x2="81.2282" y2="161.545" gradientUnits="userSpaceOnUse">
          <stop stop-color="#009EE2"/>
          <stop offset="1" stop-color="#006997"/>
          </linearGradient>
          <linearGradient id="paint1_linear_17_916" x1="45.25" y1="37" x2="45.25" y2="216.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC72C"/>
          <stop offset="1" stop-color="#FAA83C"/>
          </linearGradient>
          </defs>
        </svg>
      }
      {decorations === false &&
        <svg fill="none" height="90" viewBox="0 0 90 90" width="90" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8"><g fill="#fff" fill-opacity=".3"><path d="m90 .11792h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.11792 -89.88208)"/><path d="m90 17.2385h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 107.2385 -72.7615)"/><path d="m72.8572 17.2385h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.0957 -55.6187)"/><path d="m90 34.3586h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 124.3586 -55.6414)"/><path d="m72.8572 34.3586h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 107.2158 -38.4986)"/><path d="m55.7144 34.3586h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.073 -21.3558)"/><path d="m90 51.4792h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 141.4792 -38.5208)"/><path d="m72.8572 51.4792h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 124.3364 -21.378)"/><path d="m55.7144 51.4792h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 107.1936 -4.2352)"/><path d="m38.5715 51.4792h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.0507 12.9077)"/><path d="m90 68.5999h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 158.5999 -21.4001)"/><path d="m72.8572 68.5999h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 141.4571 -4.2573)"/><path d="m55.7144 68.5999h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 124.3143 12.8855)"/><path d="m38.5715 68.5999h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 107.1714 30.0284)"/><path d="m21.4285 68.5999h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.0284 47.1714)"/><path d="m90 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 175.72 -4.28)"/><path d="m72.8572 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 158.5772 12.8628)"/><path d="m55.7144 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 141.4344 30.0056)"/><path d="m38.5715 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 124.2915 47.1485)"/><path d="m21.4285 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 107.1485 64.2915)"/><path d="m4.28564 85.72h4.28011v4.28571h-4.28011z" transform="matrix(0 1 -1 0 90.00564 81.43436)"/></g></svg>
      }
      <div
        className="absolute w-full h-full bg-gray-900 bg-opacity-60"
      />
      <div
        className="pt-60 lg:pt-96 px-4 lg:px-8 relative"
      >
        <h4
          className="font-light text-white text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-white tracking-wider text-opacity-80 font-light mt-2 lg:mt-4"
        >
          {text}
        </p>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full w-56 mt-4 mb-8 border border-white border-opacity-60 rounded-full p-4 text-center text-sm text-white hover:bg-white hover:text-gray-700"
        >
          {ctaText}
        </a>
      </div>
    </li>
  )
}