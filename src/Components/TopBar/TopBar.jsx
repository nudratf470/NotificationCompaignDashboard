import moon from "../../assets/icons/moon.svg";
import plus from "../../assets/icons/plus.svg";
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./TopBar.css";

const TopBar = ({
  heading = "Dashboard",
  MobileHeading="Create Notification Compaign",
  showButton = false,
  headingWeight = "500",
  headingSize = "18px",
  buttonText = "Create New",
  buttonPath = "/",
  showSearch = false,
  showSettingsIcon = false,
  showAddButton = false,
  showToggle = false,
  showUndoRedo = false,
  showChangesSaved = false,
}) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("desktop");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row className="top-bar align-items-center mx-0 px-2">
      {isMobile ? (
        <Col className="d-flex align-items-center gap-4">
          <button className="back-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <h3 className="mobile-heading mb-0">{MobileHeading}</h3>
        </Col>
      ) : (
        <>
          <Col className="d-flex align-items-center gap-2">
            <div className="moon-icon">
              <img src={moon} alt="moon" />
            </div>

            <h3
              className="mb-0 topbar-heading"
              style={{ fontWeight: headingWeight, fontSize: headingSize }}
            >
              {heading}
            </h3>
          </Col>

          <Col xs="auto" className="d-flex align-items-center gap-2">
            {showButton && (
              <Button
                className="yellowButton d-flex align-items-center gap-2"
                onClick={() => navigate(buttonPath)}
              >
                <img src={plus} className="plusIcon" alt="plus" />
                <span>{buttonText}</span>
              </Button>
            )}
          </Col>
        </>
      )}
    </Row>
  );
};

export default TopBar;