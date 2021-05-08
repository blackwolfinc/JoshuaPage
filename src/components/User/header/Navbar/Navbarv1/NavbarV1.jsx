import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer
} from "mdbreact";
import LogoEquity from "../../../../../assets/images/logos/icon.png"
import Style from "./NavbarV1.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

class NavbarV1 extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

      <MDBNavbar className={Style.NavbarCon} white expand="md">
          <MDBContainer>
                  <MDBNavbarBrand>
         <img className={Style.gambarEquity} src={LogoEquity} alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse}> <FontAwesomeIcon icon={faBars} /></MDBNavbarToggler>

        <MDBCollapse  id='navbarCollapse1' text-dark isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
             <button className={Style.Button}><b>Support</b></button>
            </MDBNavItem>
            <MDBNavItem>
            <button className={Style.Button}><b>About Us</b></button>
            </MDBNavItem>
            <MDBNavItem>
            <button className={Style.Button2}><b>Client Login</b></button>
            </MDBNavItem>
            <MDBNavItem>
             
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    );
  }
}

export default NavbarV1;