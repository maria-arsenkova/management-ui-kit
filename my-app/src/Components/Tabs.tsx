import React from 'react'
import '../style.css';

function Tabs() {
    return (
        <div className="tabs">
            <a href="/" className="tabs-active">Tasks</a>
            <a href="/" className="tabs-inactive">Kanban</a>
            <a href="/" className="tabs-inactive">Activity</a>
            <a href="/" className="tabs-inactive">Calendar</a>
            <a href="/" className="tabs-inactive">Files</a>
        </div>
    )
}

export default Tabs;