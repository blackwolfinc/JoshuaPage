import React from "react";
import "./Page3.scss";

import { MDBContainer } from "mdbreact";
import Typewriter from "typewriter-effect";

export const Page3 = () => {
  return (
    <div className="Page3Container">
    <MDBContainer>
      <div className="Page3ContainerHeader">
        <h1>
          {" "}
          when and
          <span className="text-green "> where </span>
          you need us
        </h1>
        <br />
        <h2>
        <Typewriter
                    options={{
                      strings: [" we connect your business to major markets, meshed together by our global MPLS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
         
        </h2>
      </div>
      <div className="Page3ContainerBody">
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
        <a href="https://www.google.com/maps/place/44274+Round+Table+Plaza,+Ashburn,+VA+20147,+Amerika+Serikat/@39.0084588,-77.4697649,17z/data=!3m1!4b1!4m5!3m4!1s0x89b63999a426bb03:0x58bb4af6fb34b5b7!8m2!3d39.0084547!4d-77.4675762" className="CardCostume Card2">
        <div className="Layer LayerCard2">
            <h1>Ashburn</h1>
            <br />
            <h3>44274 round tableashburn, virginia</h3>
          </div> </a>
        <a href="https://www.google.com/maps/place/36+NE+2nd+St,+Miami,+FL+33132,+Amerika+Serikat/@25.7758734,-80.1953182,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b69eb4f22641:0x7f3e03bdc10a4a29!8m2!3d25.7758686!4d-80.1931295" className="CardCostume Card3"> 
        <div className="Layer LayerCard3">
            <h1>Miami</h1>
            <br />
            <h3>36 ne 2nd street, miami, florida</h3>
          </div></a>
        <a href="https://www.google.com/maps/place/Leapfield+House,+20+Lanrick+Rd,+Aberfeldy+Village,+London+E14+0JF,+Britania+Raya/@51.5153352,0.0003084,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a7ffd78af35b:0x3fbe0f766455b453!8m2!3d51.5153319!4d0.0024971" className="CardCostume Card4"> 
        <div className="Layer LayerCard4">
            <h1>London</h1>
            <br />
            <h3>20 lanrick rd, poplar, london united kingdom</h3>
          </div></a>
      </div>
      <div className="Page3ContainerFooter">
          <button>explore server options 
</button>
          <button>explore co-location options
</button>
      </div>
      </MDBContainer>
    </div>
  );
};
