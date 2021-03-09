import React from 'react';
import './index.css';

export type StatsType = {
  name: string;
  counter: number;
};

interface StatsProps {
  tasks: StatsType[];
}

function Stats({ tasks }: StatsProps) {
  return (
    <div className='stats'>
      {tasks.map((task) => {
        return (
          task?.counter && (
            <div>
              <div className='stats__counter'>{task.counter}</div>
              <div className='stats__name'>{task.name}</div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Stats;
