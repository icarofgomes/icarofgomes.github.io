import React from 'react';
import { CardBox } from '..';
import projects from '../../data';

function MainContent() {
  return (
    <div id="main-content" className="p-2">
      <CardBox bodyDisplay={ false } project={ projects[0] }/>
      <CardBox bodyDisplay={ false } project={ projects[0] }/>
      <CardBox bodyDisplay={ false } project={ projects[0] }/>
      <CardBox bodyDisplay={ false } project={ projects[0] }/>
    </div>
  )
}

export default MainContent;
