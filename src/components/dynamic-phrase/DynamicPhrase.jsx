import React, { useEffect, useState } from 'react';
const message = `ICARO FERREIRA | DESENVOLVEDOR FRONTEND`;
let i = 0;

function DynamicPhrase() {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const actualPhrase = phrase;
    if ( i < message.length) {
      setTimeout(() => setPhrase(actualPhrase + message[i-1]), 100)
      i += 1;
    }
  },[phrase])

  return(
    <section>
      <div className="text-4xl">
        <p>
          <span>{ phrase }</span>
          <span className="animate-pulse">|</span>
          </p>
      </div>
  </section>
  )
}

export default DynamicPhrase;
