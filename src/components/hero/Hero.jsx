import React from 'react';
import { DynamicPhrase } from '..';

function Hero() {
  return(
    <section className="flex h-screen">
      <div className="m-auto text-yellow-200">
        <DynamicPhrase />
      </div>
  </section>
  )
}

export default Hero;
