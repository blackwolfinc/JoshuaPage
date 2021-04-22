import React from "react";

import "./Page2.scss";
import pat1 from "../../assets/images/logos/Patner/pat1.png"
import pat2 from "../../assets/images/logos/Patner/pat2.png"
import pat3 from "../../assets/images/logos/Patner/pat3.png"
import pat4 from "../../assets/images/logos/Patner/pat4.png"
import pat5 from "../../assets/images/logos/Patner/pat5.png"
import { Crausel } from "../../components/User/Crausel/Crausel";
import { Background2 } from "../../components/Background/Background2";
export const Page2 = () => {
  return (
    <div className="Page2Container">
    <Background2/>
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
                <img src={pat5}/>
            </div>
            <div className="Page2BodyKanan">
                <div className="page2BodyKananAtas">
                    <h1> UT’s     <span className="text-green "> global network</span>  is designed to get you there
                    <br/> faster, without the hassle of bandwidth limitations. </h1>
              </div>
                <div className="page2BodyKananTengah">
                    <div className="page2BodyKananTengah1">
                        <h1><span className="bigHudred"><i>100</i></span><span className="text-red"> %</span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px" ,color:"GrayText" ,  fontWeight: "900"}}>unmetered bandwith </span></b></span></h1>
                    </div>
                    
                    <div className="page2BodyKananTengah3">
                    <h1><span className="bigHudred"><i>4</i></span><span className="text-red"> </span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px"   ,color:"GrayText",  fontWeight: "900"}}>transit providers </span></b></span></h1>
                    </div>
                   
                    <div className="page2BodyKananTengah5">
                    <h1><span className="bigHudred"><i>5</i></span>.<span className="bigHudred"><i>000</i></span><span className="text-red"> +</span> <br/> <span style={{fontSize: "12px" , marginTop:"-2rem"}}><b><span style={{fontSize: "18px" ,color:"GrayText" , fontWeight: "900"}}>global peers </span></b></span></h1>
                       
                    </div>
                    {/* <Crausel/> */}
                </div>
                <div className="page2BodyKananBawah">
                    <div className="page2BodyKananBawahAtas">
                   <h1> <span className="text-green ">our partners</span></h1>
                    </div>
                    <div className="page2BodyKananBawahBawah">
                        <img  src ={pat1}/>
                        <img src ={pat2}/>
                        <img src ={pat3}/>
                        <img src ={pat4}/>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};
