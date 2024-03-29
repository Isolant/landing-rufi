// Globals
import React, { useState } from 'react';

// Components
import Base from '../components/Base';
import Hero from '../components/Hero';
import ProductsTitle from '../components/ProductsTitle';
import ProductsTable from '../components/ProductsTable';
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
        <article
          className="pt-16 lg:pt-24 overflow-x-hidden"
        >
          <ProductsTitle
            title="Galpones y Tinglados"
          />
          <ProductsTable
            products={galponesTinglados}
          />
        </article>
        {/* <ProductsTable
          products={galponesTinglados}
        /> */}
        {/* <ProductsSection
          activeSelection={activeSelection}
          setActiveProduct={setActiveProduct}
          activeProduct={activeProduct}
          products={galponesTinglados}
          title="Galpones y Tinglados"
        /> */}
        {/* <Details
          product={galponesTinglados.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <section id="vivienda-estructura-metalica-cubierta-chapa-y-cielorraso">
        <article
          className="pt-16 lg:pt-24 overflow-x-hidden"
        >
          <ProductsTitle
            title="Vivienda estructura metálica, cubierta chapa y cielorraso"
          />
          <ProductsTable
            products={viviendaOne}
          />
        </article>
        {/* <ProductsSection
          activeSelection={activeSelection}
          setActiveProduct={setActiveProduct}
          activeProduct={activeProduct}
          products={viviendaOne}
          title="Vivienda estructura metálica, cubierta chapa y cielorraso"
        /> */}
        {/* <Details
          product={viviendaOne.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <section id="vivienda-cubierta-teja-y-machimbre">
        <article
          className="pt-16 lg:pt-24 overflow-x-hidden"
        >
          <ProductsTitle
            title="Vivienda cubierta teja y machimbre"
          />
          <ProductsTable
            products={viviendaTwo}
          />
        </article>
        {/* <ProductsSection
          activeSelection={activeSelection}
          setActiveProduct={setActiveProduct}
          activeProduct={activeProduct}
          products={viviendaTwo}
          title="Vivienda cubierta teja y machimbre"
        /> */}
        {/* <Details
          product={viviendaTwo.filter(product => product.title === activeProduct)}
        /> */}
      </section>
      <div className='container mx-auto p-4 mt-2'>
        <h4 className="uppercase tracking-wider text-xs text-gray-400 font-bold">Referencias:</h4>
        <p
          className="
            text-gray-400
            tracking-wide leading-relaxed
            font-light text-xs
            mt-1
          "
        >
            (*) Estimado por c&aacute;lculos num&eacute;ricos sin ensayo normalizado.
        </p>
        <p
          className="
            text-gray-400
            tracking-wide leading-relaxed
            font-light text-xs
            mt-1
          "
        >
            S/E: Sin ensayo.
        </p>
      </div>
      <Accesories />
      <Isoplus />
      <Cta />
    </Base>
  )
}
