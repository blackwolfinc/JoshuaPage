import React from "react";
import "./Page3.scss";
import { useHistory } from "react-router-dom";

import { MDBContainer } from "mdbreact";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

export const Page3 = () => {
  let history = useHistory();
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="Page3Container">
      <MDBContainer>
       
       

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="Page3ContainerBody"
        >
          <a
            href="https://www.google.com/maps/place/60+Hudson+Street,+60+Hudson+St,+New+York,+NY+10013,+Amerika+Serikat/@40.7178576,-74.0107059,17z/data=!4m5!3m4!1s0x89c25a1fb9aa9263:0xcab4f5951742199b!8m2!3d40.717729!4d-74.0083059"
            className="CardCostume Card1"
          >
            <div className="Layer LayerCard1">
              <h1>New York</h1>
              <br />
              <h3>60 hudson st.manhattan, new york</h3>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/44274+Round+Table+Plaza,+Ashburn,+VA+20147,+Amerika+Serikat/@39.0084588,-77.4697649,17z/data=!3m1!4b1!4m5!3m4!1s0x89b63999a426bb03:0x58bb4af6fb34b5b7!8m2!3d39.0084547!4d-77.4675762"
            className="CardCostume Card2"
          >
            <div className="Layer LayerCard2">
              <h1>Ashburn</h1>
              <br />
              <h3>44274 round tableashburn, virginia</h3>
            </div>{" "}
          </a>
          <a
            href="https://www.google.com/maps/place/36+NE+2nd+St,+Miami,+FL+33132,+Amerika+Serikat/@25.7758734,-80.1953182,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b69eb4f22641:0x7f3e03bdc10a4a29!8m2!3d25.7758686!4d-80.1931295"
            className="CardCostume Card3"
          >
            <div className="Layer LayerCard3">
              <h1>Miami</h1>
              <br />
              <h3> 50 Northeast 9th Street, Miami, FL, USA</h3>
            </div>
          </a>
          <a
            href="https://www.google.co.uk/maps/place/Science+Park+120,+1098+XG+Amsterdam,+Belanda/@52.3573453,4.9493591,16z/data=!4m5!3m4!1s0x47c609439d5a9f9d:0x3d87063a4907546b!8m2!3d52.3571608!4d4.9508821"
            className="CardCostume Card4"
          >
            <div className="Layer LayerCard4">
              <h1>Amsterdam</h1>
              <br />
              <h3> Science Park 120, Amsterdam, Netherlands</h3>
            </div>
          </a>
        </div>
        <div className="Page3ContainerHeader">
          <h1 data-aos="fade-up"
        data-aos-duration="800">
            {" "}
            when and
            <span className="text-green "> where </span>
            you need us
          </h1>
          <br />
          <div className="ConnectMajor">
        <h3 data-aos="fade-up"
        data-aos-duration="800">   we connect your business to major markets, meshed together by  
            {/* <Typewriter
              options={{
                strings: [
                  "  connected by our global, redundant VPLS network" ,
                ],
                autoStart: true,
                loop: true,
              }}
            /> */}

           </h3>
           
       <button   data-aos="fade-up"
        data-aos-duration="800" onClick={() => history.push("/GlobalVpls")} className="cardButton ">CONNECT TO OUR GLOBAL  VPLS</button>
          </div>
        </div>
        <div  data-aos="fade-up"
        data-aos-duration="800" id="particles" className="SpeedConection">
        
        {/* <h3>  100 GE </h3> */}
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,

        particles: {
          color: {
            value: "rgba(35, 168, 35, 0.753)",
          },
          links: {
            color: "rgba(35, 168, 35, 0.753)",
            distance: 60,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 6,
            straight: true,
            
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 0.4,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
        },
        detectRetina: true,
      }}
    />
  </div>
{/* 
        <div className="Page3ContainerFooter">
          <button data-aos="fade-up" data-aos-duration="1400">
            explore server options
          </button>
          <button data-aos="fade-up" data-aos-duration="1800">
            explore co-location options
          </button>
        </div> */}
      </MDBContainer>
    </div>
  );
};
