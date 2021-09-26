import React from 'react';
import './header.css';
import { Hero } from '..';

// const liArray = ['HOME', 'PROJETOS', 'CONTATOS'];

function Header() {
  return(
    <header className="header">
      {/* <nav className="hover:bg-opacity-5 hover:bg-gray-400">
        <ul className="flex text-yellow-200">
          <li className="p-4 mr-auto">LOGO</li>
          { 
            liArray.map((item, i) => (
              <li
                key={ i }
                className="p-4"
              >
                { item }
              </li>
            ))
          }
        </ul>
      </nav> */}
      <Hero />
    </header>
  )
}

export default Header;
