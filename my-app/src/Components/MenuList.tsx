import React from 'react'
import '../style.css';

function MenuList (proms:any){
    return( 
    <div  className="list list_menu">
        <ul>
            <li>
                 <a href="/">Menu</a>
            </li>
            <li className="list-item">
                <a href="/">Home</a>
            </li>
            <li className="list-item">
                <a href="/">My Tasks</a>
            </li>
            <li className="list-item">
                <a href="/" className="list-group counter_indent">
                    Notifications
                    <span className="counter">{proms.amount}</span>
                </a>
            </li>
        </ul>
    </div>
    );  
  }

export default MenuList;