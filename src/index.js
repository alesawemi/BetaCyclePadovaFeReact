import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import TestReactOne from './testOne/testOne.js';
// import RunLogin from './Login/Login.js';
import HttpGetPlaceHolder from './testOne/getJsPlaceholder.js';
import { CalcioPallone } from './testOne/multiFunctionalComponent.js';
import GetAuthors from './testOne/Authors/httpAuthors.js';
import MainRouter from './Navigation/mainRoute.js';

const htmlEl01=( //e poi lo uso con le graffe nel root.render
  <>
    <p>Elemento come Costante nel Codice</p>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    {/* <TestReactOne/> */}
       {/* <RunLogin/> */}
    {/* {htmlEl01} */}
    {/* <CalcioPallone/> */}
    {/* <HttpGetPlaceHolder/> */}
    {/* <GetAuthors/> */}
    <MainRouter/>
  </>

  

  // <React.StrictMode>    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
