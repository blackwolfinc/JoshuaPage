import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import "./Page2Section1.scss";


export const Page2Section1 = () => {
  return (
    <div className="container">
      <div className="Page2-Sectin1Container">
        <div className="Header-section1">
          <h1>
            Imagine hassle - <span className="text-green">free ipv4 </span>
            leasing
          </h1>
        </div>
        <div className="Body-section1">
          <div className="BodySection-right">
            <form onSubmit={()=>{console.log("submit form")}}>
              <MDBInput hint="- " label="COMPANY NAME (FOR LOA)" />
              <MDBInput  hint="- " label="ASN" />

              <select className="browser-default custom-select">
                <option selected disabled>
                  IP BLOCK
                </option>
                <option value="24">/24</option>
                <option value="23">/23</option>
                <option value="22">/22</option>
                <option value="21">/21</option>
                <option value="20">/20</option>
                <option value="19">/19</option>
                <option value="18">/18</option>
                <option value="17">/17</option>
              </select>

              <select className="browser-default custom-select">
                <option selected disabled>
                  LEASE TERM
                </option>
                <option value="1">MONTHLY</option>
                <option value="2">QUARTERLY</option>
                <option value="3">BI-ANNUULLY</option>
                <option value="3">YEARLY</option>
              </select>

              <select className="browser-default custom-select">
                <option selected disabled>
                  REGISTRY PREFERENCE
                </option>
                <option value="1">RIPE</option>
                <option value="2">ARIN</option>
              </select>
              <MDBBtn type="submit"  color="dark-green">SUBMIT </MDBBtn>
            </form>
          </div>
          <div className="BodySection-left">
            <h1>animasi</h1>
          </div>
        </div>
        <div className="Footer-section1">
          <h1>Why Choose us ?</h1>
          <p>fast and efficient deployment of resources</p>
          <p>Years of industry experiance using processes that work</p>
          <p>result oriented support you can trust</p>
        </div>
      </div>
     
    </div>
  );
};
