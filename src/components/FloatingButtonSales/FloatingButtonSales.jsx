import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { InlineWidget } from "react-calendly";
import ButtonImg from "../../assets/images/Artboard1.png";
import "./FloatingButtonSales.scss";

export const FloatingButtonSales = () => {
  const [modal, setrModal] = useState(false);

  const openCloseModal = () => {
    if (modal === true) {
      setrModal(false);
    } else {
      setrModal(true);
    }
  };

  return (
    <div>
      <MDBContainer>
        <MDBModal
          frame
        //   position="top"
          centered
          size="lg"
          isOpen={modal}
          toggle={modal}
        >
        <MDBModalHeader toggle={()=>{openCloseModal()}}>     <h2>Scheduling a Meeting</h2></MDBModalHeader>
          <MDBModalBody>

            <InlineWidget
            
            //   className={"FloatingButton"}
              url="https://calendly.com/d/cjw-4j6-pv8/ip-transit-solutions"
            />

              </MDBModalBody>
          <MDBModalFooter>
            <button
              onClick={() => {
                openCloseModal();
              }}
              className="btn btn-primary"
            >
              Close
            </button>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      {modal === true ? (
        ""
      ) : (
   
  
        <img  onClick={() => {
            openCloseModal();
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
          className={"FloatingButton"}
          src={ButtonImg}
          alt=""
        />

      )}
    </div>
  );
};
