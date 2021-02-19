import React from 'react'
import '../style.css';
import dashboard from '../img/dashboard.png';
import crm from '../img/crm.png';
import website from '../img/website.png';
import communication from '../img/communication.png';

function ProjectsList (){
    return( 
    <div  className="list list_menu">
        <ul>
            <li>
                 <a href="/">Projects</a>
            </li>
            <li className="list-item">
                <a href="/" className="list-group">
                    <img src={dashboard} alt="Dashboard" className="list-icon" />
                    Dashboard UI Kit
                </a>
            </li>
            <li className="list-item">
                <a href="/" className="list-group">
                    <img src={crm} alt="CRM" className="list-icon" />
                    CRM System
                </a>
            </li>
            <li className="list-itemActive">
                <a href="/" className="list-group">
                    <img src={website} alt="Website" className="list-icon" />
                    Website Redesign
                    <div className="circle"></div>
                </a>
            </li>
            <li className="list-item">
                <a href="/" className="list-group">
                    <img src={communication} alt="Communication" className="list-icon" />
                    Communication Tool
                </a>
            </li>
            <li className="list-item">
                <a href="/" id="list-footer">+ Add a Project</a>
            </li>
        </ul>
    </div>
    );  
  }

export default ProjectsList;