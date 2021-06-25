import React from "react";
import "../page1.2/page12.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faMap,
  faNetworkWired,
  faUsersCog,
  faGlobeEurope,
  faServer,
  faMapMarkedAlt,
  faDatabase,
faChartPie,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { Background } from "../../components/Background/Background";

export const Page12 = () => {
  return (
    <div className="page12Container">
      <Typewriter
        options={{
          strings: ["How can we help ?"],
          autoStart: true,
          loop: true,
        }}
      />{" "}
      <div className="container">
     
        <div className="cardPage12">
    
          <div className="cardAtas">
        
            <h4>
              {" "}
              LEASE<span className="text-green "> IPV4 </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>
          <div className="cardTengah">
            <FontAwesomeIcon icon={faGlobeEurope} />
          </div>
          <div className="cardBawah">
            <p>all our servers have unmetered bandwidth</p>
          </div>
        </div>

        <div className="cardPage12">
          <div className="cardAtas">
            <h4>
              LEASE SERVERS
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>
          <div className="cardTengah">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <div className="cardBawah">
            <p>we support a wide range of usage cases</p>
          </div>
        </div>
        <div className="cardPage12">
          <div className="cardAtas">
            <h4>
              <span className="text-green "> CO</span>-LOCATION
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>
          <div className="cardTengah">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </div>
          <div className="cardBawah">
            <p>host with us at any of our global locations</p>
          </div>
        </div>
        <div className="cardPage12">
          <div className="cardAtas">
            <h4>
              DATA ANALYTICS <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>
          <div className="cardTengah">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className="cardBawah">
            <p>gather and make sense of raw data</p>
          </div>
        </div>
      </div>
    </div>
  );
};
