import React from 'react';
import './reset.css';
import './style.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';


function App() {
  return( 
    <div  className="wrapper">
          <Sidebar />
          <Header />
    </div>
    ); 
}

export default App;
