import React, { useState } from 'react';
import { Modal } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../components.css';

function ContactBox() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  }

  return (
    <div className="shdw grid justify-items-center rounded bg-yellow-100
      m-2 mb-16 p-2 mx-auto w-10/12 md:w-3/12">
      <div className="flex space-x-4 text-lg underline">
        <a
          href="https://www.linkedin.com/in/icarofgomes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={ faLinkedin }/>
          <span className="p-1">Linkedin</span>
        </a>
        <a
          href="https://github.com/icarofgomes"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={ faGithub }/>
          <span className="p-1">Github</span>
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
