import React from 'react';
import './reset.css';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Content from './Components/Сontent';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
