import React from 'react';
import { ContactBox, DynamicPhrase } from '..';

function Hero() {
  return(
    <section className="flex h-screen">
      <div className="m-auto">
        <DynamicPhrase />
        <ContactBox />
      </div>
  </section>
  )
}

export default Hero;
