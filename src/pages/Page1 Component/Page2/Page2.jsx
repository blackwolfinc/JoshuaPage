import React from "react";

import "./Page2.scss";

import pat5 from "../../../assets/images/logos/Patner/pat5.png"
import { Crausel } from "../../../components/User/Crausel/Crausel";
import { Background2 } from "../../../components/Background/Background2";
import { MDBContainer } from "mdbreact";
import { Vidio2 } from "../../../components/User/Vidio copy/Vidio2";
export const Page2 = () => {
  return (
    <div className="Page2Container">
    <Background2/>

    <MDBContainer>
      <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" 
     data-aos-duration="1000"

     className="Page2Header">
        <h1>
          {" "}
          we believe in
          <span className="text-green "> BIG BANDWIDTH</span>
        </h1>
      </div>
      <div className="Page2Body">
            <div className="Page2BodyKiri">
              <Vidio2/>

            </div>
            <div className="Page2BodyKanan">
                <div className="page2BodyKananAtas">
                    <h1> UT’s     <span className="text-green "> global network</span>  is designed to get you there
                    <br/> faster, without the hassle of bandwidth limitations. </h1>
              </div>
                <div className="page2BodyKananTengah">
                    <div data-aos="fade-up"
     data-aos-duration="800" className="page2BodyKananTengah1">
                        <h1><span className="bigHudred"><i>100</i></span><span className="text-red"> %</span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px" ,color:"GrayText" ,  fontWeight: "900"}}>unmetered bandwith </span></b></span></h1>
                    </div>
                    
                    <div  data-aos="fade-up"
     data-aos-duration="1000" className="page2BodyKananTengah3">
                    <h1><span className="bigHudred"><i>4</i></span><span className="text-red"> </span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px"   ,color:"GrayText",  fontWeight: "900"}}>transit providers </span></b></span></h1>
                    </div>
                   
                    <div  data-aos="fade-up"
     data-aos-duration="1200" className="page2BodyKananTengah5">
                    <h1><span className="bigHudred"><i>5</i></span>.<span className="bigHudred"><i>000</i></span><span className="text-red"> +</span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px" ,color:"GrayText" , fontWeight: "900"}}>global peers </span></b></span></h1>
                       
                    </div>
                    {/* <Crausel/> */}
                </div>
                <div className="page2BodyKananBawah">
                    <div className="page2BodyKananBawahAtas">
                    <span className="text-our">our</span>
                   <h1> <span className="text-green "> partners </span></h1>
                    </div>
                    <div className="page2BodyKananBawahBawah">

                    <Crausel/>
                      {/* <div className="Page2ImgWraper">
                        <img src ={pat1}/>
                     </div>
                     <div className="Page2ImgWraper">
                        <img src ={pat2}/>
                     </div> 
                     {/* <div className="Page2ImgWraper">
                        <img src ={pat3}/>
                     </div> <div className="Page2ImgWraper">
                        <img src ={pat4}/>
                     </div> */} 
                    </div>
                </div>
            </div>

      </div>
      </MDBContainer>
    </div>
  );
};
