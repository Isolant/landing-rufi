// Globals
import React, { useState } from 'react';

// Components
import Base from '../components/Base';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import Details from '../components/Details';
import Accesories from '../components/Accesories';
import Isoplus from '../components/Isoplus';
import Cta from '../components/Cta';

// Product data
import galponesTinglados from '../data/galpones-y-tinglados.json';
import viviendaOne from '../data/vivienda-estructura-metalica-cubierta-chapa-y-cielorraso.json';
import viviendaTwo from '../data/vivienda-cubierta-teja-y-machimbre.json';

export default function Landing() {
  // const [activeSelection, setActiveSelection] = useState('galpones-y-tinglados');
  // const [activeProduct, setActiveProduct] = useState('');
  
  // const changeActiveSelection = (e) => {
  //   e.preventDefault();
  //   setActiveSelection(e.target[0].value);

  //   window.location = '/#' + e.target[0].value;
  // }

  return (
    <Base>
      <Hero
        // activeSelection={activeSelection}
        // changeActiveSelection={changeActiveSelection}
      />
      <section id="galpones-y-tinglados">
        <ProductsSection
          // activeSelection={activeSelection}
          // setActiveProduct={setActiveProduct}
          // activeProduct={activeProduct}
          products={galponesTinglados}
          title="Galpones y Tinglados"
        />
        {/* <Details
          product={galponesTinglados.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <section id="vivienda-estructura-metalica-cubierta-chapa-y-cielorraso">
        <ProductsSection
          // activeSelection={activeSelection}
          // setActiveProduct={setActiveProduct}
          // activeProduct={activeProduct}
          products={viviendaOne}
          title="Vivienda estructura metálica, cubierta chapa y cielorraso"
        />
        {/* <Details
          product={viviendaOne.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <section id="vivienda-cubierta-teja-y-machimbre">
        <ProductsSection
          // activeSelection={activeSelection}
          // setActiveProduct={setActiveProduct}
          // activeProduct={activeProduct}
          products={viviendaTwo}
          title="Vivienda cubierta teja y machimbre"
        />
        {/* <Details
          product={viviendaTwo.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <Accesories />
      <Isoplus />
      <Cta />
    </Base>
  )
}
