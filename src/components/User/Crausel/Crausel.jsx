import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

import pat1 from "../../../assets/images/logos/Patner/pat1.png";
import pat2 from "../../../assets/images/logos/Patner/pat2.png";
import pat3 from "../../../assets/images/logos/Patner/pat3.png";
import pat4 from "../../../assets/images/logos/Patner/pat4.png";
export const Crausel = () => {
  return (
    <div className="Crau1">
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={false}
          showIndicators={false}
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <img className="img-fluid" src={pat1} waves />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              {/* Card */}

              <img className="img-fluid" src={pat2} waves />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <img className="img img-thumbnail" src={pat3} waves />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <img className="img img-thumbnail" src={pat4} waves />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};
