import React from "react";
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
import { Page2Costume } from "../Page1 Component/Page2/Page2Costume";
import Typewriter from "typewriter-effect";

import "./IpTransit.scss";
import { MDBIcon } from "mdbreact";
export const IpTransit = () => {
  return (
    <div>
      <NavbarV1 />
      <div className="container-AboutUs">
        <div className="container">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="TransitHeader"
          >
            <h1>
              Connectivity That Works <br />
            </h1>
            <br />
            {/* <p>    
                {" "}
                UT’s ULTRA TELECOM is determined to provide solutions for our
                initial and ultimate mission
               
             </p> */}
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="AboutBody"
          >
            {<Page2Costume />}
            <h1 className="HeaderCostume"> Our Benefits</h1>
            <div className="TransitBottom">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="card card1"
              >
                <h2>Normal Users </h2>
                <br />

                <ul>
                  <li>
                    Low latency. <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    Greater reliability. <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    Best performance. <MDBIcon fas icon="check" />
                  </li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                className="card card2"
              >
                <h2>
                  {" "}
                  <span className="text-green">Enterprise</span> Users
                  <MDBIcon fas icon="crown" />
                </h2>
                <br />
                <ul>
                  <li>
                    <span>Lower costs. </span> <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    Greater reliability. <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    Greater intelligent routing. <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    Better performance for users. <MDBIcon fas icon="check" />
                  </li>
                  <li>
                    There are no third parties involved.{" "}
                    <MDBIcon fas icon="check" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="TransitBody">
              IP Transit is available in various types of ports :
              <Typewriter
                options={{
                  strings: [
                    "  1Gbps",
                    " 10Gbps",
                    "25Gbps",
                    "40Gbps",
                    "100Gbps",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 300,
                }}
              />
              <br />
            </div>
          </div>

          <h5>
            {" "}
            Get in touch with our sales team to discuss pricing -
            <a href="mailto:sales@ultratelecom.net">
              <span className="text-green"> sales@ultratelecom.net </span>{" "}
            </a>
          </h5>
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
