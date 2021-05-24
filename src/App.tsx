import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./reset.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <div>
          <Header />

          <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>

            <Route path="/files">
              <h1>Files1</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
