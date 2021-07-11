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
      {/* <Typewriter
        options={{
          strings: ["How can we help ?"],
          autoStart: true,
          loop: true,
        }}
      />{" "} */}
      <div className="container">
     
        <button className="cardPage12">
    
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
            <p>HASSLE - <span className="text-green "> "FREE IPV4"</span>  LEASING</p>
          </div>
        </button>

        <button className="cardPage12">
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
            <p><span className="text-green "> "POWERFUL"</span>  AND AFFORDABLE  BARE-METALS</p>
          </div>
        </button>
        <button className="cardPage12">
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
            <p>CONNECTING YOU TO<span className="text-green "> "GLOBAL"</span>   MARKETS</p>
          </div>
        </button>
        <button className="cardPage12">
          <div className="cardAtas">
            <h4>
              DATA ANALYTICS <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>
          <div className="cardTengah">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className="cardBawah">
            <p>INNOVATED<span className="text-green "> DATA</span> COLLECTION <span className="text-green "> SOLUTIONS</span></p>
          </div>
        </button>
      </div>
    </div>
  );
};
