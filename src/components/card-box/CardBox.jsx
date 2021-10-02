import React, { useState } from 'react';
import '../components.css';

function CardBox({ bodyDisplay = false, project: { name, image, description, techs } }) {
  const [show, setShow] = useState(bodyDisplay);
  
  return(
    <div className="shdw bg-yellow-100 w-3/5 text-center mx-auto flex-column my-6">
      <header
        className="grid grid-cols-10 gap-4 bg-yellow-400 h-14 text-3xl"
        onClick={() => setShow(!show)}
      >
        <h2 className="col-start-1 col-end-3 my-auto">{ name }</h2>
        <div className="col-end-11 col-span-1 my-auto">
          { show ? '-' : '+' }
        </div>
      </header>
      {
        show
        && (
          <main className="w-full p-4 grid justify-items-center">
            <div className="flex">
              <img src={ image } className="w-2/6" alt={ name } />
              <div className="text-left px-2">{ description }</div>
              <ul className="text-center mx-auto">
                <h2 className="font-bold">Tecnologias</h2>
                { techs.map((tech) => <li>{ tech }</li>)}
              </ul>
            </div>
          </main>
        )
      }
    </div>
  )
}

export default CardBox;
