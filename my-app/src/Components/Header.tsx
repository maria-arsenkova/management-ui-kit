import React from 'react'
import '../style.css';
import HeaderTitle from './HeaderTitle'
import Tabs from './Tabs'

function Header() {
    return (
        <div className="header">
            <HeaderTitle />
            <Tabs />
        </div>
    )
}

export default Header;