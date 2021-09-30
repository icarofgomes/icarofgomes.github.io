import React from 'react';
import { CardBox, ContactBox, DynamicPhrase } from '..';

function Hero() {
  return(
    <section className="flex h-screen">
      <div className="m-auto">
        <DynamicPhrase />
        <ContactBox />
        <CardBox />
      </div>
  </section>
  )
}

export default Hero;
