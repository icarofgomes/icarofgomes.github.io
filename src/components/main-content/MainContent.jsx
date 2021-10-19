import React from 'react';
import { CardBox } from '..';
import { projects } from '../../data';

function MainContent() {
  return (
    <div id="main-content" className="p-2">
      { projects.map((project, i) => (
        <CardBox key={ i } project={ project }/>
      ))}
    </div>
  )
}

export default MainContent;
