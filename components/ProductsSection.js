// Globals
import React, { useState } from 'react';

// Components
import RufiProduct from './RufiProduct';
import AlternativeProduct from './AlternativeProduct';

export default function ProductsSection({
  activeSelection,
}) {
  return (
    <section
    >
      <ProductSection
        id="galpones-y-tinglados"
        title="Galpones y Tinglados"
        products={[
          {
            title: "Doble Aluminio",
            productImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/products/rufi/isolant-aislantes-landing-rufi-rollo-rufi-doble-aluminio.png",
            measurement: "1 x 20 mts.",
            thickness: "5, 10, 15 mm."
          },
          {
            title: "Doble Alu Net",
            logo: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/logo/alternative-products/isolant-aislantes-landing-rufi-logo-doble-alu-net.png",
            productImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/products/alternatives/isolant-aislantes-landing-rufi-rollo-doble-alu-net.png",
            backgroundImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/products/isolant-aislantes-landing-rufi-imagen-doble-alu-net.jpg",
            measurement: "1,05 x 20 mts.",
            thickness: "5, 10, 15 mm.",
            characteristics: [
              'Red incorporada; no necesita malla sostén',
              'Solape para termo soldar',
              'Rollos a medida por más de 1000 m2 gratis',
              'RE2 muy baja propagación de llama'
            ],
            benefits: [
              'Más vida útil',
              'Laminado más fuerte',
              'Espuma bicapa',
              'Aluminio alto micronaje',
              'Mayor densidad de la espuma',
              'Servicio técnico gratuito'
            ],
            url: 'https://www.isolant.com.ar/aislantes/doble-alu-net',
          },
          {
            title: "Alu Stark Net",
            logo: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/logo/alternative-products/isolant-aislantes-landing-rufi-logo-alu-stark-net.png",
            productImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/products/alternatives/isolant-aislantes-landing-rufi-rollo-alu-stark-net.png",
            backgroundImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/products/isolant-aislantes-landing-rufi-imagen-alu-stark-net.jpg",
            measurement: "1,05 x 20 mts.",
            thickness: "5, 10, 15 mm.",
            characteristics: [
              'Red incorpoarada; no necesita malla sostén',
              'Terminación blanca premium',
              'Solape para termo soldar',
              'Rollos a medida por más de 1000 m2 gratis',
              'RE2 muy baja propagación de llama',
            ],
            benefits: [
              'Más vida útil',
              'Laminado más fuerte',
              'Espuma bicapa',
              'Aluminio alto micronaje',
              'Mayor densidad de la espuma',
              'Servicio técnico gratuito'
            ],
            url: 'https://www.isolant.com.ar/aislantes/alu-stark-net',
          },
          {
            title: "Doble Alu",
            productImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/products/alternatives/isolant-aislantes-landing-rufi-rollo-doble-alu.png",
            backgroundImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/products/isolant-aislantes-landing-rufi-imagen-doble-alu.jpg",
            measurement: "1,05 x 20 mts.",
            thickness: "5, 10, 15 mm.",
            characteristics: [
              'Rollos a medida por más de 1000 m2 gratis',
              'RE2 muy baja propagación de llama'
            ],
            benefits: [
              'Más vida útil',
              'Laminado más fuerte',
              'Espuma bicapa',
              'Aluminio alto micronaje',
              'Mayor densidad de la espuma',
              'Servicio técnico gratuito'
            ],
            url: 'https://www.isolant.com.ar/aislantes/doble-alu',
          },
          {
            title: "Alu Stark",
            productImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/products/alternatives/isolant-aislantes-landing-rufi-rollo-alu-stark.png",
            backgroundImage: "https://res.cloudinary.com/isolant-cloudinary/image/upload/w_auto,f_auto,q_auto:good/rufi/bg/products/isolant-aislantes-landing-rufi-imagen-alu-stark.jpg",
            measurement: "1,05 x 20 mts.",
            thickness: "5, 10, 15 mm.",
            characteristics: [
              'Terminación blanca premium',
              'Rollos a medida por más de 1000 m2 gratis',
              'RE2 muy baja propagación de llama',
            ],
            benefits: [
              'Más vida útil',
              'Laminado más fuerte',
              'Espuma bicapa',
              'Aluminio alto micronaje',
              'Mayor densidad de la espuma',
              'Servicio técnico gratuito'
            ],
            url: 'https://www.isolant.com.ar/aislantes/alu-stark',
          },
        ]}
      />
    </section>
  );
}

export function ProductSection({
  title,
  id,
  products
}) {
  const [productOpened, setProductOpened] = useState('');

  return (
    <article
      id={id}
      className="py-48"
    >
      <div
        className="relative flex items-center px-4"
      >
        <svg
          width="366"
          height="50"
          viewBox="0 0 366 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0"
        >
          <path d="M0 0H366L316 50H0V0Z" fill="url(#paint0_linear_15_574)"/>
          <defs>
          <linearGradient id="paint0_linear_15_574" x1="183" y1="0" x2="183" y2="50" gradientUnits="userSpaceOnUse">
          <stop stop-color="#009EE2"/>
          <stop offset="1" stop-color="#006997"/>
          </linearGradient>
          </defs>
        </svg>
        <h2
          className="relative uppercase tracking-wider text-sm text-white"
        >
          {title}
        </h2>
      </div>
      <ul
        className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 px-4 lg:px-0 gap-4 justify-items-center lg:items-end mt-16"
      >
        {products.map((product, index) => {
          if(index === 0) {
            return <RufiProduct
              product={product}
              index={index}
            />
          }
          return <AlternativeProduct
            product={product}
            index={index}
            productOpened={productOpened}
            setProductOpened={setProductOpened}
          />
        })}
      </ul>
    </article>
  )
}