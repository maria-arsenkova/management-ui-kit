import React from 'react'
import './style.css';
import Navigation from './Navigation';


function ProjectApp(){
    return( 
    <div  className="grid-container">
      <div className="navigation-elem-grid">
        <Navigation />
      </div>
      <div className="top-elem-grid"></div>
      <div className="elem3"></div>
      <div className="elem4"></div>
    </div>
    );  
  }

export default ProjectApp;