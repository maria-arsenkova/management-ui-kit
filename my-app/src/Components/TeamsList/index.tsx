import React from 'react'
import '../../style.css';
import userZ from './img/userZ.png'
import userO from './img/userO.png'
import userT from './img/userT.png'

type TeamItemType = {
    name: string
    avatar: string
}

export type TeamType = {
    name: string
    items: TeamItemType[]
}

interface TeamsListProps {
    teams: TeamType[]
}

function TeamsList ({teams}: TeamsListProps) {
    return (
        <div className="list list_teams">
            <ul>
                <li>
                    <a  href="/">Teams</a>
                </li>

                {teams.map((team) => {
                    return (
                        <li className="list-item">
                            <a href="/" className="list-group">
                                {team.name}
                                <span className="list-img">
                                    {team.items.map((user) => {
                                        return (
                                            <img
                                                key={`${user.name}_${user.avatar}`}
                                                src={user.avatar}
                                                alt={user.name}
                                            />
                                        )
                                    })}
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TeamsList
