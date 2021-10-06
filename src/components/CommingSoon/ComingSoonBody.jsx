import React from "react";
import "./CommingSoon.scss";
import Typewriter from "typewriter-effect";
import { useHistory } from "react-router-dom";
import { CommingSoon } from "../../pages/Page1 Component/Countdoown/Countdown";
import { Background2 } from "../Background/Background2";

export const ComingSoonBody = () => {
  let history = useHistory();
  return (
    < >
      <Background2 />
      <div className="container">
        <div  data-aos="fade-up"
          data-aos-duration="800" className="CommingSoonContainer ">
          <CommingSoon  />
          <Typewriter
          
            options={{
              strings: [" We are launching our new network soon ..."],
              autoStart: true,
              loop: true,
              deleteSpeed: 300,
            }}
          />
          <button  data-aos="fade-up"
          data-aos-duration="1200" onClick={() => history.push("/")} className="backToHome">
            {" "}
            Home{" "}
          </button>
        </div>
      </div>
    </>
  );
};
