import React, { useState } from "react";
import moon from "../../assets/icons/moon.svg";
import { Col, Row } from "react-bootstrap";
import "./UpdatedAppointmentTopBar.css";

const UpdatedAppointmentTopBar = () => {
  const [activeView, setActiveView] = useState("desktop");

  return (
    <Row className="uatb-top-bar align-items-center mx-0">
      {/* Left Side - Moon Icon + Title */}
      <Col className="d-flex align-items-center gap-3" xs="auto">
        <div className="uatb-moonicon">
          <img src={moon} alt="moon" />
        </div>
        <h3 className="mb-0 uatb-heading">Edit Notification Template</h3>
      </Col>

      {/* Center - Mobile/Desktop Toggle + Actions */}
      <Col className="d-flex justify-content-center align-items-center gap-2">

        {/* View Toggle */}
        <div className="uatb-view-toggle">
          <button
            className={`uatb-toggle-btn ${activeView === "mobile" ? "active" : ""}`}
            onClick={() => setActiveView("mobile")}
          >
            {/* Mobile Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 1.5H5.25C4.42157 1.5 3.75 2.17157 3.75 3V15C3.75 15.8284 4.42157 16.5 5.25 16.5H12.75C13.5784 16.5 14.25 15.8284 14.25 15V3C14.25 2.17157 13.5784 1.5 12.75 1.5Z"
                stroke="#B9B6B6"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5H9.0075"
                stroke="#B9B6B6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Mobile
          </button>
          <button
            className={`uatb-toggle-btn ${activeView === "desktop" ? "active" : ""}`}
            onClick={() => setActiveView("desktop")}
          >
            {/* Desktop Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0002 12V5.25C15.0002 4.85218 14.8422 4.47064 14.5609 4.18934C14.2796 3.90804 13.898 3.75 13.5002 3.75H4.5002C4.10237 3.75 3.72084 3.90804 3.43954 4.18934C3.15823 4.47064 3.0002 4.85218 3.0002 5.25V12M15.0002 12H3.0002M15.0002 12L15.9602 13.9125C16.018 14.0272 16.0454 14.1549 16.0397 14.2833C16.034 14.4116 15.9954 14.5364 15.9277 14.6455C15.8599 14.7547 15.7652 14.8446 15.6527 14.9067C15.5402 14.9688 15.4137 15.0009 15.2852 15H2.7152C2.58672 15.0009 2.46016 14.9688 2.34766 14.9067C2.23516 14.8446 2.14049 14.7547 2.07273 14.6455C2.00497 14.5364 1.9664 14.4116 1.9607 14.2833C1.955 14.1549 1.98238 14.0272 2.0402 13.9125L3.0002 12"
                stroke="#1B1B1B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Desktop
          </button>
        </div>

        {/* Changes Saved + Arrows */}
        <span className="uatb-changes-saved-text">Changes Saved</span>

        <button className="uatb-action-btn uatb-undo-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5.8335V10.8335H7.5" stroke="#C1C1C1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 14.1665C17.5 12.1774 16.7098 10.2697 15.3033 8.8632C13.8968 7.45668 11.9891 6.6665 10 6.6665C8.15427 6.66838 6.37404 7.3508 5 8.58317L2.5 10.8332" stroke="#C1C1C1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>


        </button>

        <svg
          width="1"
          height="16"
          viewBox="0 0 1 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5L0.499999 15.5"
            stroke="#ECECEC"
            strokeLinecap="round"
          />
        </svg>

        <button className="uatb-action-btn uatb-redo-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 5.8335V10.8335H12.5" stroke="#C1C1C1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.5 14.1665C2.5 12.1774 3.29018 10.2697 4.6967 8.8632C6.10322 7.45668 8.01088 6.6665 10 6.6665C11.8457 6.66838 13.626 7.3508 15 8.58317L17.5 10.8332" stroke="#C1C1C1" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>


        </button>
      </Col>
    </Row>
  );
};

export default UpdatedAppointmentTopBar;
