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

  const allFiles: TaskFilesType[] = allTasks
    .map((task) => task?.files)
    .flat()
    .filter((file) => file);

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
              <Files files={allFiles} />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export { App };
