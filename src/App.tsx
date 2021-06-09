import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import "./reset.css";
import "./App.css";
import {Sidebar} from "./Components/Sidebar";
import {Header} from "./Components/Header";
import {Tasks} from "./Components/Tasks";
import {Files} from "./Components/Files";
import { Task } from "./Components/Task";
import {INITIAL_TASKS} from './Components/Tasks'

function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        <Sidebar />
        <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/tasks" />
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/files">
              <Files tasks={INITIAL_TASKS}/>
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
