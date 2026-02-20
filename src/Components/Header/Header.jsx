import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
import manicon from "../../assets/icons/manicon.svg";
import bell from "../../assets/icons/bell.svg";
import admin from "../../assets/icons/admin.svg";
import gear from "../../assets/icons/gear.svg";
import line from "../../assets/icons/line.svg";

import './Header.css'

const Header = () => {
  return (
    <>
    <Navbar className="top-header">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" className='logo'/>
        </Navbar.Brand>

        <Nav className="d-flex justify-content-between ms-auto align-items-center gap-3">
       
          <img src={bell} alt="bell icon for notifications"/>
          <img src={gear} alt="settings" className="pe-2"/>
          <img src={line} alt="line"/>
          <img src={admin} alt="admin" className="adminIcon"/>
        
          <div className="header-headings text-end text-white">
            <div className="fw-light admin text-start">Admin</div>
            <div className="fw-semibold expert">
              Expert Medical Center
            </div>
          </div>

            <img src={line} alt="line"/>
            <img src={manicon} alt="manicon"/>
        </Nav>
      </Container>
    </Navbar>

    </>
  )
}

export default Header


