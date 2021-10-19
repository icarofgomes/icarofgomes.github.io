import React from 'react';
import { CardBox, ContactBox, DynamicPhrase } from '..';
import { intro } from '../../data';

function Hero() {
  return(
    <section className="h-screen">
      <div>
        <DynamicPhrase />
        <p className="text-yellow-200 text-center text-2xl p-2">Desenvolvedor Front End</p>
        <ContactBox />
        <CardBox bodyDisplay={ true } project={ intro }/>
      </div>
  </section>
  )
}

export default Hero;
