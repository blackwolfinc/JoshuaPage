import React from "react";

import "./Page2Costume.scss";

import pat5 from "../../../assets/images/logos/Patner/pat5.png";
import { Crausel } from "../../../components/User/Crausel/Crausel";
import { Background2 } from "../../../components/Background/Background2";
import { MDBContainer } from "mdbreact";
import { Vidio2 } from "../../../components/User/Vidio copy/Vidio2";
import Typewriter from "typewriter-effect";

export const Page2Costume = () => {
  return (
    <div className="Page2Container">
      <MDBContainer>
        {/* <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
          data-aos-duration="1000"
          className="Page2Header"
        ></div> */}
        <div className="Page2Body">
          <div className="Page2BodyKiri">
            <Vidio2 />
          </div>
          <div className="Page2BodyKanan">
            <div data-aos="fade-left"
     data-aos-duration="1000" className="page2BodyKananAtas">
              <br />
              <p>
                <Typewriter
                  options={{
                    strings: [
                      "  ULTRA TELECOM is determined to provide solutions for our initial and ultimate mission:",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 300,
                  }}
                />
              </p>
              <br />

              <h2>
                <span className="text-green">
                  “Providing Connectivity That Works.”
                </span>
              </h2>
              <p>
                Whether you are connecting remote locations, accessing the
                internet and cloud networking services, or improving day-to-day
                collaboration, our network provides the consistent,
                high-performance service that your business requires.
              </p>
              <br />
            </div>

            <div data-aos="fade-left"
     data-aos-duration="1000" className="page2BodyKananBawah">
              <hr />
              <div data-aos="fade-left"
     data-aos-duration="1000" className="page2BodyKananBawahAtas">
                <span className="text-our">our</span>
                <h1>
                  {" "}
                  <span className="text-green "> partners </span>
                </h1>
              </div>
              <div className="page2BodyKananBawahBawah">
                <Crausel />
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
            <div className="page2BodyKananAtas">
              <p>
                Our multi-homed network, supported by Tier-1 partners (GTT,
                Telia & NETIX), allows for load balancing, route optimization,
                and excellent global and regional coverage.
              </p>
              <br />
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
