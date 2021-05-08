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
import iconCard1 from "../../assets/images/logos/speedIcon.png";
import Handpone from "../../assets/images/logos/Globe.png";
import { Speed } from "../../components/User/Speed/Speed";
import { Crausel } from "../../components/User/Crausel/Crausel";
import { MDBContainer } from "mdbreact";

export const Page1 = () => {
  return (
    <div className="MainContainer">
      <Background />
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
                 <img src={Handpone}></img>
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
         
            <div className="ContainerButton">
            <div className="TitelContainer">
              <h1>
                we sell <span className="text-green "> high bandwidth</span>{" "}
                <br /> 
                <span>
                  <Typewriter
                    options={{
                      strings: [ "unmetered servers","How can we help ?" , ],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
            </div>
              <h1>

                
              </h1>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="CardKanan"
              >
                <div className="CardKanan-img">
                  <FontAwesomeIcon icon={faGlobeEurope} />
                </div>
                <div className="CardKanan-body">
                  {" "}
                  <h1>
                    {" "}
                    LEASE<span className="text-green "> IPV4</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </h1>
                  <p>we support a wide range of usage cases</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="CardKanan"
              >
                <div className="CardKanan-img">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <div className="CardKanan-body">
                  {" "}
                  <h1>
                    LEASE SERVERS <FontAwesomeIcon icon={faArrowRight} />
                  </h1>
                  <p>all our servers have unmetered bandwidth</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                className="CardKanan"
              >
                <div className="CardKanan-img">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div className="CardKanan-body">
                  {" "}
                  <h1>
                    <span className="text-green "> CO</span>-LOCATION
                    <FontAwesomeIcon icon={faArrowRight} />
                  </h1>
                  <p>host with us at any of our global locations</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-right"
                data-aos-duration="1000"
                className="CardKanan"
              >
                <div className="CardKanan-img">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <div className="CardKanan-body">
                  {" "}
                  <h1>
                    DATA ANALYTICS <FontAwesomeIcon icon={faArrowRight} />
                  </h1>
                  <p>gather and make sense of raw data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};
