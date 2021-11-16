import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import NavbarV1 from "../User/header/Navbar/Navbarv1/NavbarV1";

export const Privacypolicy = () => {
  const [reloadStatus, setreloadStatus] = useState("falsde");

  useEffect(() => {
    thisReload();
  }, [reloadStatus]);

  const thisReload = () => {
    (function (d, s, id) {
      var js,
        tjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://app.termly.io/embed-policy.min.js";
      tjs.parentNode.insertBefore(js, tjs);
    })(document, "script", "termly-jssdk");

    setreloadStatus("nub");
  };

  return (
    <>
 
      <NavbarV1 />
      <div className="container">
  
        <div
          name="termly-embed"
          data-id="2964acc7-b77e-4b6d-8413-6b9d54629c3c"
          data-type="iframe"
        ></div>
        
      </div>
      <Footer />
    </>
  );
};
