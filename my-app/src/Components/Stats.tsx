import React from 'react'
import '../style.css';

function Stats(props: any){
    return( 
        <div className="stats">
            <div>
                <div className="stats-counter">
                    {props.completed.counter}
                </div>
                <div className="stats-name">
                    {props.completed.name}
                </div>
            </div>
            <div>
                <div className="stats-counter">
                    {props.open.counter}
                </div>
                <div className="stats-name">
                    {props.open.name}
                </div>
            </div>
        </div>
    );  
  }

export default Stats;