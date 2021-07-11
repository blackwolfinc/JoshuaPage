import { MDBContainer } from "mdbreact";
import React from "react";
import ImageCall from "../../assets/images/Face/CallCenter.png";
import { Background } from "../../components/Background/Background";
import "./page4.scss";
export const Endpage = () => {
  return (
    <>
        <MDBContainer>
    <div className="EndPageWrapper">

      <div className="EndPageHead">
      <h1>Get In Touch With Us.</h1>
  
    <p>Support Portal - <a href="https://support.ultratelecom.net/"> <span className="text-green">https://support.ultratelecom.net/</span></a> </p>
    <p>Phone Support - <span className="text-green">+1 (307) 200-8584 </span> </p>
    <p>Email Support - 
    <a href="mailto:support@ultratelecom.net"><span className="text-green"> support@ultratelecom.net </span> </a></p>
    
    <p>Address -  <a href="https://www.google.com/maps/place/30+N+Gould+St,+Sheridan,+WY+82801,+Amerika+Serikat/@44.7977708,-106.9571391,17z/data=!3m1!4b1!4m5!3m4!1s0x5335fabc2a66677f:0x8f85bd068d1afb8a!8m2!3d44.7977708!4d-106.9549504"> <span className="text-green">A 30 N Gould ST, Sheridan, WY 82801, US</span></a> </p>

      </div>

      <div className="EndPageBody">
      <h5>   Privacy  Terms</h5>
      <h5>Why Big <span className="text-green">Bandwidth?  </span></h5>
      <h5>Partner With <span className="text-green">Us </span></h5>
      <h5> <a href="mailto:abuse@ultratelecom.net">Report Abuse</a> </h5>
      </div>


     
    </div> </MDBContainer>
    <div className="EndPageFoot">
      <p>   All Rights Reserved 2021<span className="text-green"></span></p>
    </div>
    </>
 
  );
};
