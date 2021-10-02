import React, { useEffect, useState } from 'react';
const message = `ICARO FERREIRA`;
let i = 0;

function DynamicPhrase() {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const actualPhrase = phrase;
    if ( i < message.length) {
      setTimeout(() => setPhrase(actualPhrase + message[i-1]), 200)
      i += 1;
    }
  },[phrase])

  return(
    <section className="text-yellow-200 text-center pt-28 text-4xl w-full">
      <div className="">
        <h1>
          <span>{ phrase }</span>
          <span className="animate-pulse">|</span>
        </h1>
      </div>
  </section>
  )
}

export default DynamicPhrase;
