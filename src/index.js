import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/////////////////////////////////////////////////////
// untuk penggunan bostrap                         //
// import 'bootstrap/dist/css/bootstrap.min.css';  //
/////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Untuk Pengunaan MDB(Materalize Hybrid Bostrap)           //
import '@fortawesome/fontawesome-free/css/all.min.css';  //
import'bootstrap-css-only/css/bootstrap.min.css';        //
import'mdbreact/dist/css/mdb.css';                       //
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
/////////////////
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
