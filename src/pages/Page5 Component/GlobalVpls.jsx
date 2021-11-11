import { MDBIcon } from "mdbreact";
import React from "react";
import { GlobeGL } from "../../components/User/Globe/GlobeGL";
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
import { VidioPlane } from "../../components/User/VidioPlane/VidioPlane";

import "./GlobalVpls.scss";
export const GlobalVpls = () => {
  return (
    <div>
      <NavbarV1 />
      <div className="container-GlobalVpls">
        <div className="container">
          <div className="GlobalVplsHeader">
            <h1>Global Vpls</h1>

            <div className="GlobalVplsBody">
              <div data-aos="fade-right"
     data-aos-duration="1000" className="cardBody">
                <p>
                  Our global VPLS provides inherently redundant, any-to-any
                  connectivity, extending your network across multiple
                  locations, anywhere in the world. This solution combines the
                  simplicity of Ethernet with the resiliency of our underlying
                  MPLS network to provide complete control over your routing
                  environment.
                </p>
                <br />
              </div>
              <div className="cardBody CardGlobe">
               
                {/* <GlobeGL /> */}
                <VidioPlane/>
              </div>
            </div>
          </div>
          <div className="GlobalVplsBottom">
            <h1>Additional information/metrics</h1>
            <div className="BottomGlobal">
              <div data-aos="fade-up"
     data-aos-duration="1000" className="CardBotom">
                <h2>Robust SLAs</h2>
                <ul>
                  <li>Availability: 99.999% <MDBIcon fas icon="check" /></li>
                  <li>Frame/packet loss ratio: ≤0.1% <MDBIcon fas icon="check" /></li>
                  <li>Frame jitter: ≤2ms <MDBIcon fas icon="check" /></li>
                  <li>Latency by region <MDBIcon fas icon="check" /></li>
                </ul>
              </div>
              <div data-aos="fade-up"
     data-aos-duration="1000" className="CardBotom">
                <h2>Port types</h2>
                <ul>
                  <li><span>Fast Ethernet (FastE)</span> <MDBIcon fas icon="check" /></li>
                  <li>Gigabit Ethernet (GigE) <MDBIcon fas icon="check" /></li>
                  <li>10 Gigabit Ethernet (10 GigE) <MDBIcon fas icon="check" /></li>
                  <li>100 Gigabit Ethernet (100 GigE) <MDBIcon fas icon="check" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="GlobalVplsBody2">
            <p>
              {" "}
              We provide flexible bandwidth options, including flat-rate billing
              and burstable ports to meet data spikes. We also offer an
              aggregate committed data rate (ACDR) plan that allows for
              bandwidth sharing across ports, so you can avoid overpaying for
              idle capacity.
            </p>
            <br />
            <p>
              UT does maintain several PoPs on the east coast that you can
              access co-location, VPLS, and DIA services in within a matter of
              days;
            </p>
          </div>

        
          <h5>
          Get in touch with our sales team to discuss pricing- 
       
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
