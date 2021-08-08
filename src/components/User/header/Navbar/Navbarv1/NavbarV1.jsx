import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer ,
} from "mdbreact";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import LogoEquity from "../../../../../assets/images/logos/icon.png"
import Style from "./NavbarV1.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

class NavbarV1 extends Component {

state = {
  isOpen: false,
 
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

hendleMove =()=>{
  let history = new useHistory();
  history.push("/home");
}

render() {


  return (

      <MDBNavbar className={Style.NavbarCon} white expand="md">
          <MDBContainer>
                  <MDBNavbarBrand> <Link  to={"./"}><img className={Style.gambarEquity} src={LogoEquity} alt=""/></Link>

        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse}> <FontAwesomeIcon icon={faBars} /></MDBNavbarToggler>

        <MDBCollapse  id='navbarCollapse1' text-dark isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem >
            <a href="https://support.ultratelecom.net/"><button className={Style.Button}><b>Support</b></button></a>
            </MDBNavItem>
            <MDBNavItem>
            <Link  to={"./AboutUs"}><button className={Style.Button}><b>About Us</b></button></Link>
            </MDBNavItem>
            <MDBNavItem> 
            <a href="https://client.ultratelecom.net/index.php?rp=/login"><button className={Style.Button2}><b>Client Login</b></button></a>
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