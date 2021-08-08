import React from "react";
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
import { Page3 } from "../Page1 Component/Page3/Page3";
import { Endpage } from "../Page1 Component/Page4/Endpage";
import "./AboutUs.scss";
export const AboutUs = () => {
  return (
    <div>
      <NavbarV1 />
      <div className="container-AboutUs">
        <div className="container">
          <div className="AboutHeader">
            <h1>
            About Us 
            </h1>
            <h4>ULTRA TELECOM IS ABOUT <span className="text-green">YOU</span> , CONNECTING TO THE WORLD UT is a fresh
              take on <span className="text-green">BIG</span>  bandwidth, combining years of industry experience to engineer solutions that 
              <span className="text-green"> WORK</span>  . “Imagining connectivity that works” challenges us to provide
              <span className="text-green"> innovative</span>  , hassle-free and efficiently designed solutions to
              complex problems. We partner with the industries best to deliver  relevant     <span className="text-green"> solutions</span>. </h4>
              <br />
              <h4>We’re a small team, allowing us to<span className="text-green"> focus</span>  on
              your needs and zone in on what matters most.</h4>
              <br />
              <h4> You. Fabiola, Neamul
              & Irdy from account management are eager to work with you in
              meeting your organization's connectivity needs.</h4>
          </div>
         
          <div className="AboutBody">
            <Page3 />
          </div>

          <div className="AboutBottom">
            <h4>
              {" "}
              
             
            </h4>

         
          </div>
          <h5> Contact Us for more :   <a href="mailto:support@ultratelecom.net"><span className="text-green"> support@ultratelecom.net </span> </a></h5>
        </div>
      </div>
      <div className="EndPageFoot">
            <p>
              {" "}
              All Rights Reserved 2021<span className="text-green"></span>
            </p>
          </div>
    </div>
  );
};
