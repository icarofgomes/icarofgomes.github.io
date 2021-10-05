import React, { useState } from 'react';
import '../components.css';

function CardBox({ bodyDisplay = false, project: { name, image, description, techs } }) {
  const [show, setShow] = useState(bodyDisplay);
  
  return(
    <div className="shdw bg-yellow-100 w-11/12 text-center mx-auto flex-column my-6
      md:w-8/12">
      <header
        className="flex bg-yellow-400 h-14 text-2xl"
        onClick={() => setShow(!show)}
      >
        <h2 className="flex-grow text-left mx-4 my-auto">{ name }</h2>
        <div className="mx-4 my-auto">
          { show ? '-' : '+' }
        </div>
      </header>
      {
        show
        && (
          <main className="w-full p-4 grid justify-items-center md:p-0">
            <div className="md:flex">
              <img
                src={ image }
                className="w-5/6 mx-auto rounded-lg md:w-2/6 md:rounded-none"
                alt={ name }
              />
              <div className="md:flex-column md:p-1 md:flex-grow">
                <div className="text-left p-2">{ description }</div>
                <ul className="text-center mx-auto flex justify-around md:p-2">
                  { techs.map((tech) => (
                    <li className="shadow rounded text-sm bg-yellow-200 p-1 mx-1">
                      { tech }
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        )
      }
    </div>
  )
}

export default CardBox;
