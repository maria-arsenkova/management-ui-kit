import React, { useState } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { TaskFilesType } from "./Components/TaskFiles/types";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { Files } from "./Components/Files";
import { TaskType } from "./Components/Task/types";
import { INITIAL_TASKS } from "./Components/Tasks";
function App() {
  const [allTasks, setAllTasks] = useState<TaskType[]>(INITIAL_TASKS);

  const onTasksUpdate = (tasks: TaskType[]) => {
    setAllTasks(tasks);
  };

 

  return (
    <HashRouter>
      <div className="wrapper">
        <Sidebar />
        <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/tasks" />
            <Route path="/tasks">
              <Tasks onTasksUpdate={onTasksUpdate} />
            </Route>
            <Route path="/files">
              <Files />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export { App };
