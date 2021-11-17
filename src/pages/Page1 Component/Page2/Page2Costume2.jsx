import React from "react";

import "./Page2Costume2.scss";

import { MDBContainer } from "mdbreact";
import Typewriter from "typewriter-effect";
import { Vidio3 } from "../../../components/User/Vidio3/Vidio3";

export const Page2Costume2 = () => {
  return (
    <div className="Page2Container22">
      <MDBContainer>
  
        <div className="Page2Body">
          <div className="Page2BodyKiri">
            <Vidio3 />
          </div>
          <div className="Page2BodyKanan">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="page2BodyKananAtas"
            >
           
    <br />
              <h4>
                <span className="text-green">
                  “ CONNECTIVITY THAT WORKS SHOULD BE STANDARD”
                </span>
              </h4>
              <p>
              Today's business connectivity options are both slow and
                unreliable. But it doesn't have to be that way. We are a team of
                telecom enthusiasts that are passionate about making connectivity
                <span className="text-green"> WORK</span> for you. We are dedicated to providing<span className="text-green"> innovative</span>  and
                <span className="text-green">  hassle-free solutions</span>   to ensure that you always stay connected.
              </p>
              <br />
            </div>

          
       
           
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
