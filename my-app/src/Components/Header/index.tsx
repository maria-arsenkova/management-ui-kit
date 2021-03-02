import React from 'react'
import './index.css';
import HeaderTitle from '../HeaderTitle'
import Tabs, {TapsType} from '../Tabs'

const navbar: TapsType[] = [
{name: 'Tasks'},
{name: 'Kanban'},
{name: 'Activity'},
{name: 'Calendar'},
{name: 'Files'}
]

function Header() {
    return (
        <div className="header">
            <HeaderTitle />
            <Tabs items={navbar} />
        </div>
    )
}

export default Header;