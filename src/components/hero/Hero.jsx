import React from 'react';
import { CardBox, ContactBox, DynamicPhrase } from '..';
import projects from '../../data';

function Hero() {
  return(
    <section className="flex h-screen">
      <div className="m-auto">
        <DynamicPhrase />
        <ContactBox />
        <CardBox bodyDisplay={ true } project={ projects[0] }/>
      </div>
  </section>
  )
}

export default Hero;
