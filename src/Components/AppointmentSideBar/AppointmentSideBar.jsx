import cal from "../../assets/icons/cal.svg";
import avatar from "../../assets/icons/avatar.svg";
import avatartwo from "../../assets/icons/avatartwo.svg";
import dimentionalcube from "../../assets/icons/dimentionalcube.svg";
import graph from "../../assets/icons/graph.svg";
import img from "../../assets/icons/img.svg";
import speaker from "../../assets/icons/speaker.svg";
import settinghand from "../../assets/icons/settinghand.svg";
import settingyellowicon from "../../assets/icons/settingyellowicon.svg";
import lines from "../../assets/icons/lines.svg";
import adminred from "../../assets/icons/adminred.svg";
import adminblack from "../../assets/icons/adminblack.svg";
import clock from "../../assets/icons/clock.svg";
import { Nav } from "react-bootstrap";
import "./AppointmentSideBar.css";

const AppointmentSideBar = () => {
  return (
    <div className="appointmentSidebarMenu mt-2">
      <Nav className="appointmentSidebar-nav">

        <Nav.Link className="appointmentSidebar-link active cal">
          <div className="appointmentSidebar-icon-wrap">
            <img src={cal} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={lines} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap cart">
            <img src={avatar} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={avatartwo} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={settinghand} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={dimentionalcube} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={clock} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={graph} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={img} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={speaker} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <Nav.Link className="appointmentSidebar-link">
          <div className="appointmentSidebar-icon-wrap">
            <img src={settingyellowicon} alt="" className="icon-Size" />
          </div>
        </Nav.Link>

        <div className="appointmentSidebar-admin-icons d-flex flex-column gap-2 align-items-center">
          
          <svg
            className="mb-2"
            width="19"
            height="2"
            viewBox="0 0 19 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75H17.75"
              stroke="#BFBFBF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <Nav.Link className="appointmentSidebar-link">
            <div className="appointmentSidebar-icon-wrap admin">
              <img src={adminred} alt="" className="icon-Size adminimg" />
            </div>
          </Nav.Link>

          <Nav.Link className="appointmentSidebar-link">
            <div className="appointmentSidebar-icon-wrap admin">
              <img src={adminblack} alt="" className="icon-Size adminimg" />
            </div>
          </Nav.Link>

        </div>

      </Nav>
    </div>
  );
};

export default AppointmentSideBar;
