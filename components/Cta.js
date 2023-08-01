// Globals
import React from 'react';
import Image from 'next/image';

export default function Cta() {
  return (
    <section
      className="relative lg:min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: 'url(/images/bg/isolant-aislantes-landing-rufi-fondo-gradiente.jpg)' }}
    >
      <svg width="73" height="60" viewBox="0 0 73 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 30L6.31805e-06 30L36.3015 59.6985L72.603 30L62 30L62 -4.63473e-07L10 -2.73647e-06L10 30Z" fill="url(#paint0_linear_19_102)"/>
        <defs>
        <linearGradient id="paint0_linear_19_102" x1="72.3991" y1="3.00939" x2="0.203961" y2="3.00938" gradientUnits="userSpaceOnUse">
        <stop stopColor="#009EE2"/>
        <stop offset="1" stopColor="#006997"/>
        </linearGradient>
        </defs>
      </svg>
      <div className="py-24 lg:py-48 text-center">
        <Image
          src="/images/products/isolant-aislantes-landing-rufi-mockup-rollos.png"
          width="445"
          height="333"
        />
        <h4
          className="font-light text-gray-800 text-2xl lg:text-3xl mt-4"
        >
          Aisl&aacute; y ahorr&aacute; con
          <strong className="lg:block font-bold">nuestros aislantes</strong>
        </h4>
        <p
          className="text-gray-800 text-opacity-60 max-w-sm mx-auto tracking-wider text-opacity-80 mt-2 lg:mt-4"
        >
          Conoc&eacute; m&aacute;s sobre nuestros productos premium en nuestro sitio web.
        </p>
        <a
          href="https://www.isolant.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-yellow-400 to-orange-400 hover:opacity-80 flex items-center justify-center w-56 mt-8 mx-auto rounded-full p-4 text-center text-white"
        >
          Ir a Isolant
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current ml-2 group-hover:opacity-90 relative">
            <path d="M4.45312 1.05859C4.21875 1.29297 4.24219 1.64453 4.45312 1.87891L7.28906 4.55078H0.5625C0.234375 4.55078 0 4.80859 0 5.11328V5.86328C0 6.19141 0.234375 6.42578 0.5625 6.42578H7.28906L4.45312 9.12109C4.24219 9.35547 4.24219 9.70703 4.45312 9.94141L4.96875 10.457C5.20312 10.668 5.55469 10.668 5.76562 10.457L10.3359 5.88672C10.5469 5.67578 10.5469 5.32422 10.3359 5.08984L5.76562 0.542969C5.55469 0.332031 5.20312 0.332031 4.96875 0.542969L4.45312 1.05859Z" />
          </svg>
        </a>
      </div>
      <footer
        className="uppercase text-xs tracking-wider text-gray-700 mb-4 text-center"
      >
        copyright {new Date().getFullYear()} isolant aislantes s.a. dise&ntilde;o y desarrollo{" "}
        <a
          href="https://juangarcia.design"
          rel="noopener noreferrer"
          target="_blank"
          className="underline hover:no-underline"
        >
          JMG.
        </a>
      </footer>
      <svg width="216" height="162" viewBox="0 0 216 162" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block absolute bottom-0 right-0">
        <path d="M216.5 0L54.5 162L216.5 162L216.5 0Z" fill="url(#paint0_linear_17_972)"/>
        <path d="M180.5 162L90.5 71.5L0 162L21 162L90.5 92L158.5 162L180.5 162Z" fill="url(#paint1_linear_17_972)"/>
        <defs>
        <linearGradient id="paint0_linear_17_972" x1="216.045" y1="80.7718" x2="54.9551" y2="80.7718" gradientUnits="userSpaceOnUse">
        <stop stopColor="#009EE2"/>
        <stop offset="1" stopColor="#006997"/>
        </linearGradient>
        <linearGradient id="paint1_linear_17_972" x1="179.5" y1="116.75" x2="1.92803e-05" y2="116.75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC72C"/>
        <stop offset="1" stopColor="#FAA83C"/>
        </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
