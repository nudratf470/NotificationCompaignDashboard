import React from "react";
import femaleicon from "../../assets/icons/female-icon.svg";
import human from "../../assets/icons/human.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import cube from "../../assets/icons/cube.svg";
import cart from "../../assets/icons/cart.svg";
import document from "../../assets/icons/document.svg";
import envelop from "../../assets/icons/envelop.svg";
import { Nav } from "react-bootstrap";
import "./StatusSideBar.css";

const StatusSideBar = () => {
  return (
    <div className="statusSidebarMenu mt-2">
      <Nav className="statusSidebar-nav">

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={dashboard} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={cube} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        {/* ACTIVE */}
        <Nav.Link className="statusSidebar-link active">
          <div className="statusSidebar-icon-wrap">
            <img src={cart} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={human} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={femaleicon} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={envelop} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

        <Nav.Link className="statusSidebar-link">
          <div className="statusSidebar-icon-wrap">
            <img src={document} alt="" className="statusSidebar-icon" />
          </div>
        </Nav.Link>

      </Nav>
    </div>
  );
};

export default StatusSideBar;
