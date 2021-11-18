import "./App.css";
import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./assets/Animation.scss";
import { AllPage } from "./pages/AllPage";
import { HasslePage } from "./pages/HasslePage";
import { AboutUs } from "./pages/Page3 Component/AboutUs";
import { ComingSoonPage } from "./pages/ComingSoonPage.jsx";
import { IpTransit } from "./pages/page4 Components/IpTransit";
import { GlobalVpls } from "./pages/Page5 Component/GlobalVpls";
import { LeaseServer } from "./pages/Page6 Components/LeaseServer";
import { Privacypolicy } from "./components/Privacy policy/Privacypolicy";

function App() {
  return (
    //route aplikasi
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/Privacypolicy">
       <Privacypolicy/>
          </Route>
        <Route path="/leaseserver">
       <LeaseServer/>
          </Route>
        <Route path="/GlobalVpls">
          <GlobalVpls/>
          </Route>
        <Route path="/IpTransit">
            <IpTransit/>
          </Route>
        <Route path="/AboutUs">
            <AboutUs/>
          </Route>
          <Route path="/CommingSoon">
            <ComingSoonPage/>
          </Route>
        <Route path="/freeIPV4">
            <HasslePage />
          </Route>
          <Route path="/">
            <AllPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
