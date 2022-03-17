// Globals
import React, { useState } from 'react';

// Components
import Base from '../components/Base';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import Details from '../components/Details';

export default function Landing() {
  const [activeSelection, setActiveSelection] = useState('galpones-y-tinglados');
  const [activeProduct, setActiveProduct] = useState('');
  
  const changeActiveSelection = (e) => {
    e.preventDefault();
    setActiveSelection(e.target[0].value);
  }

  // Product data
  const galponesTinglados = [
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
        'Red incorporada; no necesita malla sostén',
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
  ];

  return (
    <Base>
      <Hero
        activeSelection={activeSelection}
        changeActiveSelection={changeActiveSelection}
      />
      <section id={activeSelection}>
        <ProductsSection
          activeSelection={activeSelection}
          products={galponesTinglados}
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
        <Details
          product={galponesTinglados.filter(product => product.title === activeProduct)}
        />
      </section>
    </Base>
  )
}
