import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./SideBar.css";

const SideBar = ({ icons = [], defaultActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="statusSidebarMenu mt-2">
      <Nav className="statusSidebar-nav">
        {icons.map((item, index) => {

          if (item.type === "divider") {
            return (
              <div key={index} className="statusSidebar-divider">
                <svg width="19" height="2" viewBox="0 0 19 2" fill="none">
                  <path d="M0.75 0.75H17.75" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            );
          }


          if (item.group) {
            return (
              <div key={index} className="statusSidebar-group">
                {item.group.map((icon, subIndex) => (
                  <Nav.Link
                    key={subIndex}
                    className="statusSidebar-link"
                  >
                    <div className="statusSidebar-icon-wrap">
                      <img src={icon.src} alt={icon.alt || ""} className="statusSidebar-icon" />
                    </div>
                  </Nav.Link>
                ))}
              </div>
            );
          }


          return (
            <Nav.Link
              key={index}
              className={`statusSidebar-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="statusSidebar-icon-wrap">
                <img
                  src={activeIndex === index && item.activeSrc ? item.activeSrc : item.src}
                  alt={item.alt || ""}
                  className="statusSidebar-icon"
                />
              </div>
            </Nav.Link>
          );

        })}
      </Nav>
    </div>
  );
};

export default SideBar;