import React from 'react'
import './index.css';

export type TapsType = {
    name: string
}

interface TabsProps {
    items: TapsType []
}

function Tabs({items}: TabsProps) {
    return (
        <div className="tabs">
             {items.map((item) => {
                return(
                    item?.name  && (
                        <a href="/" className="tabs-inactive">{item.name}</a>
                    )
                )
            })}
        </div>
    )
}

export default Tabs;