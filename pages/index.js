// Globals
import React, { useState } from 'react';

// Components
import Base from '../components/Base';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';

export default function Landing() {
  const [activeSelection, setActiveSelection ] = useState('galpones-y-tinglados');
  
  const changeActiveSelection = (e) => {
    e.preventDefault();
    setActiveSelection(e.target[0].value);
  }

  return (
    <Base>
      <Hero
        activeSelection={activeSelection}
        changeActiveSelection={changeActiveSelection}
      />
      <ProductsSection
        activeSelection={activeSelection}
      />
    </Base>
  )
}
