import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./SideBar.css";

const SideBar = ({ icons = [], defaultActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const [expanded, setExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getIconSrc = (item, index) => {
    const isActive = activeIndex === index;
    const isHovered = hoveredIndex === index;

    if (isActive && item.activeSrc) return item.activeSrc;
    if (isHovered && item.hoverSrc) return item.hoverSrc;
    return item.src;
  };

  return (
    <div
      className={`statusSidebarMenu mt-2 ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => { setExpanded(false); setHoveredIndex(null); }}
    >
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
                  <Nav.Link key={subIndex} className="statusSidebar-link">
                    <div className="statusSidebar-icon-wrap">
                      <img src={icon.src} alt={icon.alt || ""} className="statusSidebar-icon" />
                    </div>
                    <span className="statusSidebar-label">{icon.label || icon.alt}</span>
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="statusSidebar-icon-wrap">
                <img
                  src={getIconSrc(item, index)}
                  alt={item.alt || ""}
                  className="statusSidebar-icon"
                />
              </div>
              <span className="statusSidebar-label">{item.label || item.alt}</span>
            </Nav.Link>
          );

        })}
      </Nav>
    </div>
  );
};

export default SideBar;