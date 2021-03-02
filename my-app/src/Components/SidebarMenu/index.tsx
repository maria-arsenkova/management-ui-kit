import React from 'react'
import './index.css';

type ContentItemType = {
    name: string
    avatar: string
}

export type ContentType = {
    name: string
    items?: ContentItemType[]
    counter?: number
    preview?: string
}

interface SidebarMenuProps {
    content: ContentType[]
}

function SidebarMenu ({content}: SidebarMenuProps) {
    return (
        <div className="sidebarMenu">
            <ul>
                <li>
                    <a  href="/">Teams</a>
                </li>
                {content.map((team) => {
                    return (
                        <li className="sidebarMenu-item">
                            <a href="/" className="sidebarMenu-group">
                                {team?.preview && (
                                    <img className="sidebarMenu-icon"
                                    key={`${team.preview}_${team.name}`}
                                    src={team.preview}
                                    alt={team.name}
                                    />
                                )}
                                {team.name}
                                {team?.items && (
                                    <span className="sidebarMenu-img">
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
                                )}
                                {team?.counter && (
                                <span className="counter">{team.counter}</span>
                                )}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SidebarMenu
