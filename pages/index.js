// Globals
import React, { useState } from 'react';

// Components
import Base from '../components/Base';
import Hero from '../components/Hero';

export default function Landing() {
  const [activeSelection, setActiveSelection ] = useState();
  
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
    </Base>
  )
}
