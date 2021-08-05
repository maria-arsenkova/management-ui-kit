import React from "react";
import "./style.scss";

export type StatsType = {
  name: string;
  counter: number;
};

interface StatsProps {
  tasks: StatsType[];
}

function Stats({ tasks }: StatsProps) {
  return (
    <div className="Stats">
      {tasks.map((task) => {
        return (
          task?.counter && (
            <div key={`${task.counter}_${task.name}`}>
              <div className="Stats__counter">{task.counter}</div>
              <div className="Stats__name">{task.name}</div>
            </div>
          )
        );
      })}
    </div>
  );
}

export { Stats };
