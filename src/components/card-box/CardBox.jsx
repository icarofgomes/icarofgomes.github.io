import React, { useState } from 'react';

function CardBox({ bodyDisplay = false, project: { name, image, description, techs } }) {
  const [show, setShow] = useState(bodyDisplay);
  
  return(
    <div className="bg-yellow-100">
      <header
        className="flex space-x-4 bg-yellow-400"
        onClick={() => setShow(!show)}
      >
        <h2>{ name }</h2>
        <div>blabla</div>
      </header>
      {
        show
        && (
          <main>
            <img src={ image } width="250px" alt={ name } />
            <p>{ description }</p>
            <ul>
              <h2>Tecnologias</h2>
              { techs.map((tech) => <li>{ tech }</li>)}
            </ul>
          </main>
        )
      }
    </div>
  )
}

export default CardBox;
