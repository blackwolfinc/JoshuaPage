import React from "react";
import "./page12.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
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
import { Background } from "../../../components/Background/Background";
import { CommingSoon } from "../Countdoown/Countdown";

export const Page12 = () => {
  let history = useHistory();
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
        {/* <CommingSoon/> */}
        {/* <h1  data-aos="fade-up"
          data-aos-duration="600">Connect With Us : </h1>
        <button
          data-aos="fade-up"
          data-aos-duration="600"
          onClick={() => history.push("/freeIPV4")}
          className="cardPage12"
        >
          <div onClick={() => history.push("/freeIPV4")} className="cardAtas">
            <h4>
              {" "}
              Get In <span className="text-green "> Touch </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>

          <div className="cardBawah">
            <a>
            register your E-mail   for  <span className="text-green "> " More "</span> Information
            </a>
          </div>
        </button> */}
        <button
          data-aos="fade-up"
          data-aos-duration="600"
          onClick={() => history.push("/CommingSoon")}
          className="cardPage12"
        >
          <div
            onClick={() => history.push("/CommingSoon")}
            className="cardAtas"
          >
            <h4>
              {" "}
              LEASE<span className="text-green "> IPV4 </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>

          <div className="cardBawah">
            <p>
              HASSLE - <span className="text-green "> "FREE IPV4"</span> LEASING
            </p>
          </div>
        </button>

        <button
          data-aos="fade-up"
          data-aos-duration="900"
          className="cardPage12"
          onClick={() => history.push("/CommingSoon")}
        >
          <div
            onClick={() => history.push("/CommingSoon")}
            className="cardAtas"
          >
            <h4>
              LEASE SERVERS
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>

          <div className="cardBawah">
            <p>
              {" "}
              AFFORDABLE <span className="text-green "> "POWERFUL"</span>{" "}
              BARE-METALS
            </p>
          </div>
        </button>
        <button
          data-aos="fade-up"
          data-aos-duration="1200"
          className="cardPage12"
          onClick={() => history.push("/CommingSoon")}
        >
          <div
            onClick={() => history.push("/CommingSoon")}
            className="cardAtas"
          >
            <h4>
              <span className="text-green "> CO</span>-LOCATION
              <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>

          <div className=" cardBawah">
            <p>
              CONNECTING YOU TO<span className="text-green "> "GLOBAL"</span>{" "}
              MARKETS
            </p>
          </div>
        </button>
        <button
          data-aos="fade-up"
          data-aos-duration="1500"
          className="cardPage12"
          onClick={() => history.push("/CommingSoon")}
        >
          <div
            onClick={() => history.push("/CommingSoon")}
            className="cardAtas"
          >
            <h4>
              DATA ANALYTICS <FontAwesomeIcon icon={faArrowRight} />
            </h4>
          </div>

          <div className="cardBawah">
            <p>
              INNOVATED<span className="text-green "> DATA</span> COLLECTION{" "}
              <span className="text-green "> SOLUTIONS</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
