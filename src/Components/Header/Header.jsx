import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.svg";
import bell from "../../assets/images/bell.svg";
import admin from "../../assets/images/admin.svg";
import gear from "../../assets/images/gear.svg";
import line from "../../assets/images/line.svg";
import './Header.css'

const Header = () => {
  return (
    <>
    <Navbar className="top-header d-flex align-items-center">
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

            <img src={avatar} alt="avatar"/>
        </Nav>
      </Container>
    </Navbar>

    </>
  )
}

export default Header


