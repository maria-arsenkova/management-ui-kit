import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './reset.css';
import ProjectApp from './ProjectApp';

// import './Logo.css';
// import './Search.css';
// import './Top.css';
// import './UserInfo.css';
// import './Navigation.css';

// import logo from './logoTwo.svg';
// import search from './search.svg';
// import userpic from './userpic.svg';
// import moreIcon from './moreIcon.svg';


// function Logo(){
//   return( 
//   <div  className="Logo">
//     <img className="LogoImg" src={logo}/>
//     <div className="CompanyName">PROJECTUS</div>
//   </div>
//   );  
// }

// function Search (){
//   return( 
//       <img className="Search" src={search}/>
//     );  
// }

// function Top(){
//   return(
//     <div className="Top">
//       < Logo/>
//       < Search/>
//     </div>
//   )
// }

// function UserInfo () {
//   return(
//     <div className="UserInfo">
//       <img className="Userpic" src={userpic}/>
//       <div className="Name">
//         <p className="T">Emilee Simchenko</p>
//         <p className="T2">Emilee Simchenko</p>
//       </div>
//     </div>
//   )
// }

// function Navigation(){
//   return(
//     <div className="Navigation">
//       < Top />
//     </div>
//   )
  
// }

ReactDOM.render(
  <ProjectApp />,
  document.getElementById('root')
);


