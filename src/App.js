import './App.css';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/Animation.scss"
import { AllPage } from './pages/AllPage';





function App() {
  return (
    //route aplikasi 
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/">
    <AllPage/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
