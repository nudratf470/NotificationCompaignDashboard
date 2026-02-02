import React from 'react'
import femaleicon from "../../assets/images/femaleicon.svg";
import maleicon from "../../assets/images/maleicon.svg";
import business from "../../assets/images/business-center.svg";
import calender from "../../assets/images/calender.svg";
import clipBoard from "../../assets/images/clipBoard.svg";
import document from "../../assets/images/document.svg";
import {Nav} from "react-bootstrap";
import './SideBar.css';

const SideBar = () => {
  return (
    <>
<div className="sidebarMenu mt-1">
      <Nav className="sidebar-nav">
        <Nav.Link className="sidebar-link active">
          <div className="icon-wrap calender">
          <img src={calender} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
        <Nav.Link className="sidebar-link">
          <div className="icon-wrap">
          <img src={femaleicon} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
        <Nav.Link className="sidebar-link">
          <div className="icon-wrap">
          <img src={maleicon} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
        <Nav.Link className="sidebar-link">
          <div className="icon-wrap">
          <img src={document} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
        <Nav.Link className="sidebar-link">
          <div className="icon-wrap">
          <img src={clipBoard} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
        <Nav.Link className="sidebar-link">
          <div className="icon-wrap">
          <img src={business} alt="" className="iconSize"/>
          </div>
        </Nav.Link>
      </Nav>
    </div>
    </>
  )
}

export default SideBar
