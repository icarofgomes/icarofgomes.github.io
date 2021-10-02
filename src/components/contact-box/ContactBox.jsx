import React, { useState } from 'react';
import { Modal } from '..';

import '../components.css';

function ContactBox() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  }

  return (
    <div className="shdw grid justify-items-center rounded bg-yellow-100 m-2 mb-16 p-2 mx-auto w-1/6">
      <div className="flex space-x-4 text-lg underline">
        <a
          href="https://www.linkedin.com/in/icaro-ferreira-gomes-b99681110/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/icarofgomes"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </div>
      <div className="">
        <button
          className="text-yellow-400 font-bold text-lg"
          onClick={ handleClick }>Contato</button>
        { modal && <Modal handleClick={ handleClick }/>}
      </div>
    </div>
  )
}

export default ContactBox;
