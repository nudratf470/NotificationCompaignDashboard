import React from 'react'
import femaleicon from "../../assets/images/femaleicon.svg";
import maleicon from "../../assets/images/maleicon.svg";
import business from "../../assets/images/business-center.svg";
import calender from "../../assets/images/calender.svg";
import clipBoard from "../../assets/images/clipBoard.svg";
import document from "../../assets/images/document.svg";
import { Nav } from "react-bootstrap";
import './SideBar.css';

const SideBar = () => {
  return (
    <>
      <div className="sb-sidebarMenu mt-1">
        <Nav className="sb-sidebar-nav">
          <Nav.Link className="sb-sidebar-link active">
            <div className="sb-icon-wrap sb-calender">
              <img src={calender} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>

          <Nav.Link className="sb-sidebar-link">
            <div className="sb-icon-wrap">
              <img src={femaleicon} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>

          <Nav.Link className="sb-sidebar-link">
            <div className="sb-icon-wrap">
              <img src={maleicon} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>

          <Nav.Link className="sb-sidebar-link">
            <div className="sb-icon-wrap">
              <img src={document} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>

          <Nav.Link className="sb-sidebar-link">
            <div className="sb-icon-wrap">
              <img src={clipBoard} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>

          <Nav.Link className="sb-sidebar-link">
            <div className="sb-icon-wrap">
              <img src={business} alt="" className="sb-iconSize"/>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default SideBar
