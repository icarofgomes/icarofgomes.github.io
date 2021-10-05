import React from 'react';
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Modal({ handleClick }) {
  return (
    <div className="modal text-center">
      <div className="bg-yellow-100 m-auto w-10/12 h-48 md:w-3/12">
        <h2 className="font-bold text-lg pt-1">
          Contatos
        </h2>
        <div className="flex flex-col text-center my-1">
          <a
            className="p-2"
            href="https://api.whatsapp.com/send?phone=5511970772734"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={ faWhatsapp } />
            <span className="p-1">11 9970772734</span>
          </a>
          <a
            className="p-2"
            href="mailto:icaro.iky@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={ faEnvelope } />
            <span className="p-1">icaro.iky@gmail.com</span>
          </a>
        </div>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={ handleClick }
        >
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Modal;
