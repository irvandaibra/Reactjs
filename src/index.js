import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Snack from './reactjsdasar/Snack';
// import LifeCycle from './reactjsdasar/LifeCycle';
// import Sublifecycle from './reactjsdasar/Sublifecycle';
// import Variabel from './reactjsdasar/Variabel';
// import StateProps from './reactjsdasar/StateProps';
// import Maps from './reactjsdasar/Maps';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Index from './crud/Index';
import Index from './Tugass/Index';
// import NavbarComponent from './crud/NavbarComponent';

// import Index from './Tugas/Index';
ReactDOM.render(
  <React.StrictMode>
    {/* <Variabel />
    <StateProps /> */}
    {/* <Maps /> */}
    {/* {< Snack />} */}
    {/* {< LifeCycle />} */}
    {/* {< Sublifecycle />} */}
    < Index />
    {/* < NavbarComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

