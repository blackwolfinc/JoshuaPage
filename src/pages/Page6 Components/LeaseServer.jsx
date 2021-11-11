import React from "react";
import NavbarV1 from "../../components/User/header/Navbar/Navbarv1/NavbarV1";
import img from "../../assets/images/Server.jpg";
import "./LeaseServer.scss";
export const LeaseServer = () => {
  return (
    <div>
      <NavbarV1 />
      <div className="container-LeaseServer">
        <div className="container">
          <div className="LeaseServerHeader">
            <h1>Lease Server</h1>
            <p    data-aos="fade-right"
                data-aos-duration="1200">
                In a bustling marketplace for bare-metal servers, we've opted to
                give you MORE. Our standard solutions offer a unique all-in-one
                package including servers, support, and BIG bandwidth
                connectivity! We dare you to try it.
              </p>
            <img
              className="imgHeader"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={img}
              alt=""
            />
            <h2 className="text-green">
              What can you do with unmetered connectivity that works?
            </h2>
            <div className="buttonGroup">
              <button    data-aos="fade-up"
                data-aos-duration="1000">
                <h4>SHOP BARE METAL </h4>{" "}
              </button>
              <button    data-aos="fade-up"
                data-aos-duration="1200">
                <h4>SHOP VIRTUAL PRIVATE SERVER</h4>
              </button >
            </div>
            <div className="LeaseServerBody">
           
              <br />

              <p    data-aos="fade-up"
                data-aos-duration="1200">
                Per TB, pricing is gone. All of our servers are equipped with
                10GE ports and, by default, are on our platinum transit plan.
                Our platinum transit isn't like the shared bandwidth services
                you'll find from other providers. They are light-years ahead.
                You won't be limited by peak times or throttle-based policies.
                Our network is constantly growing, so we never ask customers to
                dial back their transit usage.
              </p>
            </div>
          </div>

          <div className="LeaseServerBottom">
            <p></p>
          </div>
          <h5>
            {" "}
            Contact Us for more :{" "}
            <a href="mailto:support@ultratelecom.net">
              <span className="text-green"> support@ultratelecom.net </span>{" "}
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
