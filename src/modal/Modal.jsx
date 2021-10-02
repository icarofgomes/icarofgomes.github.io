import React from 'react';
import './modal.css'

function Modal({ handleClick }) {
  return (
    <div class="modal text-center">
      <div class="bg-yellow-100 m-auto w-2/5 h-48">
        <div className="flex flex-col text-center my-6">
          <a
            href="https://api.whatsapp.com/send?phone=5511970772734"
            target="_blank"
            rel="noreferrer noopener"
          >
            119970772734
          </a>
          <a
            href="mailto:icaro.iky@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            icaro.iky@gmail.com
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
