import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import "../../reset.css";
import "./App.css";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Tasks } from "../Tasks";
import { Files } from "../Files";
import { AvailableSoon } from "../AvailableSoon";

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
              <Files />
            </Route>
            <Route path="/kanban">
              <AvailableSoon />
            </Route>
            <Route path="/activity">
              <AvailableSoon />
            </Route>
            <Route path="/calendar">
              <AvailableSoon />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export { App };
