import { Background } from "../../components/Background/Background";
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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
// import Page
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
// import Css
import "./Page1.scss";
import "./Responsive1016.scss";
import "./Responive826.scss";
import "./Responsive650.scss";
import "./Responsive510.scss";

// import Img
import { MDBContainer } from "mdbreact";
import { Vidio } from "../../components/User/Vidio/Vidio";

export const Page1 = () => {
  return (
    <div className="MainContainer">
      {/* <Background /> */}
    <NavbarV1 />
      <MDBContainer>
        <div className="BodyContainer">
          <div className="SecContainer">
       
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="SectionCard"
            >
              <div className="ImageSpeed">
                 {/* <img src={Handpone}></img> */}
                  <div className="SpeedWraper">       
                   {/* <GlobeGL/>  */}
                     <Vidio/>
                   </div>
              </div>
              <div className="SectionServe">
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faTachometerAlt} />
                    </span>{" "}
                    always unmetered, go all out!
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faMap} />
                    </span>{" "}
                    globally peered for performance
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faNetworkWired} />
                    </span>{" "}
                    global multi-site lan network
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faUsersCog} />
                    </span>{" "}
                    dedicated human support
                  </li>
                </ul>
              </div>
              {/* <img src={iconCard1} /> */}
            </div>
          </div>
          <div className="TrdContainer">
          <div className="TitelContainer">
              <h1>
                we sell <span className="text-green "> high bandwidth</span>{" "}
                <br /> unmetered servers
              </h1>
            </div>
            <button className="btn-Our">Our Service</button>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
