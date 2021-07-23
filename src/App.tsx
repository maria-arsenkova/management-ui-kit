import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './reset.css';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';
import { Files } from './Components/Files';

function App() {
  return (
    <HashRouter>
      <div className='wrapper'>
        <Sidebar />
        <div>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/tasks' />
            <Route path='/tasks'>
              <Tasks />
            </Route>
            <Route path='/files'>
              <Files />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export { App };
