import React from 'react'
import '../style.css';
import userZ from './img/userZ.png'
import userO from './img/userO.png'
import userT from './img/userT.png'

function TeamsList (props:any) {
    return (
        <div className="list list_teams">
            <ul>
                <li>
                    <a  href="/">Teams</a>
                </li>
                <li className="list-item">
                    <a href="/" className="list-group">
                    Designers
                    <span className="list-img">
                        <img 
                        src={props.teams.designers[0].avatar} 
                        alt={props.teams.designers[0].name}
                        />
                        <img 
                        src={props.teams.designers[1].avatar} 
                        alt={props.teams.designers[1].name}
                        />
                        <img 
                        src={props.teams.designers[2].avatar} 
                        alt={props.teams.designers[2].name}
                        />
                    </span>
                    </a>
                </li>
                <li className="list-item">
                    <a href="/" className="list-group">
                    Backend
                    <span className="list-img">
                        <img 
                        src={props.teams.backend[0].avatar} 
                        alt={props.teams.backend[0].name}
                        />
                        <img 
                        src={props.teams.backend[1].avatar} 
                        alt={props.teams.backend[1].name}
                        />
                    </span>
                    </a>
                </li>
                <li className="list-item">
                    <a href="/" className="list-group">
                    Frontend
                    <span className="list-img">
                        <img 
                        src={props.teams.frontend[0].avatar} 
                        alt={props.teams.frontend[0].name}
                        />
                        <img 
                        src={props.teams.frontend[1].avatar} 
                        alt={props.teams.frontend[1].name}
                        />
                        <img 
                        src={props.teams.frontend[2].avatar} 
                        alt={props.teams.frontend[2].name}
                        />
                        <img 
                        src={props.teams.frontend[3].avatar} 
                        alt={props.teams.frontend[3].name}
                        />
                    </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TeamsList