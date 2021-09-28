import React from 'react';

function ContactBox() {
  return (
    <div className="bg-yellow-100 w-56 h-24 m-auto">
      <div className="text-center p-4 flex-wrap">
        <a
          className="p-2"
          href="https://www.linkedin.com/in/icaro-ferreira-gomes-b99681110/"
        >
          Linkedin
        </a>
        <a
          className="p-2"
          href="https://github.com/icarofgomes"
        >
          Github
        </a>
      </div>
      <div className="w-12 m-auto">
        <button>Contato</button>
      </div>
    </div>
  )
}

export default ContactBox;
