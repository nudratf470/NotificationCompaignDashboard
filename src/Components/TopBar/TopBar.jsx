import React from "react";
import moon from "../../assets/icons/moon.svg";
import plus from "../../assets/icons/plus.svg";
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TopBar.css";

const TopBar = ({
  heading = "Dashboard",
  showButton = false,
  headingWeight="500",
  headingSize="18px",
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

  return (
    <Row className="top-bar align-items-center mx-0 px-2">
      <Col className={`topbar-left d-flex align-items-center gap-2 p-0 ${showToggle ? "col-auto" : ""}`}>
        <div className="moon-icon">
          <img src={moon} alt="moon" />
        </div>
         <h3 className="mb-0 topbar-heading" style={{ fontWeight: headingWeight, fontSize: headingSize }}>
          {heading}
          </h3>

        {showSearch && (
          <InputGroup className="search-bar d-none d-sm-inline-flex d-flex align-items-center">
            <InputGroup.Text className="search-icon">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M14.5 14.5L13.1 13.1M7.15 13.8C8.02329 13.8 8.88803 13.628 9.69484 13.2938C10.5017 12.9596 11.2348 12.4698 11.8523 11.8523C12.4698 11.2348 12.9596 10.5017 13.2938 9.69484C13.628 8.88803 13.8 8.02329 13.8 7.15C13.8 6.27671 13.628 5.41197 13.2938 4.60516C12.9596 3.79834 12.4698 3.06525 11.8523 2.44774C11.2348 1.83023 10.5017 1.34039 9.69484 1.0062C8.88803 0.672007 8.02329 0.5 7.15 0.5C5.38631 0.5 3.69486 1.20062 2.44774 2.44774C1.20062 3.69486 0.5 5.38631 0.5 7.15C0.5 8.91369 1.20062 10.6051 2.44774 11.8523C3.69486 13.0994 5.38631 13.8 7.15 13.8Z"
                  stroke="#969696" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </InputGroup.Text>
            <FormControl placeholder="Search" className="search-input" />
            <Button className="filter-button">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11.6641 4.08398H6.41406" stroke="#B8B8B8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.16406 9.91602H2.91406" stroke="#B8B8B8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.91406 11.666C10.8806 11.666 11.6641 10.8825 11.6641 9.91602C11.6641 8.94952 10.8806 8.16602 9.91406 8.16602C8.94756 8.16602 8.16406 8.94952 8.16406 9.91602C8.16406 10.8825 8.94756 11.666 9.91406 11.666Z" stroke="#B8B8B8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.08594 5.83398C5.05244 5.83398 5.83594 5.05048 5.83594 4.08398C5.83594 3.11749 5.05244 2.33398 4.08594 2.33398C3.11944 2.33398 2.33594 3.11749 2.33594 4.08398C2.33594 5.05048 3.11944 5.83398 4.08594 5.83398Z" stroke="#B8B8B8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </InputGroup>
        )}
      </Col>

      {showToggle && (
        <Col className="d-flex justify-content-center align-items-center gap-2">
          <div className="toggle-group" style={{ marginRight: !showUndoRedo && !showChangesSaved ? "150px" : "0" }}>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${activeView === "mobile" ? "active" : ""}`}
              onClick={() => setActiveView("mobile")}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M12.75 1.5H5.25C4.42157 1.5 3.75 2.17157 3.75 3V15C3.75 15.8284 4.42157 16.5 5.25 16.5H12.75C13.5784 16.5 14.25 15.8284 14.25 15V3C14.25 2.17157 13.5784 1.5 12.75 1.5Z" stroke="#B9B6B6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.5H9.0075" stroke="#B9B6B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Mobile
            </button>
            <button
              className={`toggle-btn ${activeView === "desktop" ? "active" : ""}`}
              onClick={() => setActiveView("desktop")}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15.0002 12V5.25C15.0002 4.85218 14.8422 4.47064 14.5609 4.18934C14.2796 3.90804 13.898 3.75 13.5002 3.75H4.5002C4.10237 3.75 3.72084 3.90804 3.43954 4.18934C3.15823 4.47064 3.0002 4.85218 3.0002 5.25V12M15.0002 12H3.0002M15.0002 12L15.9602 13.9125C16.018 14.0272 16.0454 14.1549 16.0397 14.2833C16.034 14.4116 15.9954 14.5364 15.9277 14.6455C15.8599 14.7547 15.7652 14.8446 15.6527 14.9067C15.5402 14.9688 15.4137 15.0009 15.2852 15H2.7152C2.58672 15.0009 2.46016 14.9688 2.34766 14.9067C2.23516 14.8446 2.14049 14.7547 2.07273 14.6455C2.00497 14.5364 1.9664 14.4116 1.9607 14.2833C1.955 14.1549 1.98238 14.0272 2.0402 13.9125L3.0002 12" stroke="#1B1B1B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Desktop
            </button>
          </div>

          {showChangesSaved && (
            <span className="uatb-changes-saved-text">Changes Saved</span>
          )}

          {showUndoRedo && (
            <>
              <button className="uatb-action-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.8335V10.8335H7.5" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 14.1665C17.5 12.1774 16.7098 10.2697 15.3033 8.8632C13.8968 7.45668 11.9891 6.6665 10 6.6665C8.15427 6.66838 6.37404 7.3508 5 8.58317L2.5 10.8332" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <svg width="1" height="16" viewBox="0 0 1 16" fill="none">
                <path d="M0.5 0.5L0.499999 15.5" stroke="#ECECEC" strokeLinecap="round"/>
              </svg>
              <button className="uatb-action-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 5.8335V10.8335H12.5" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 14.1665C2.5 12.1774 3.29018 10.2697 4.6967 8.8632C6.10322 7.45668 8.01088 6.6665 10 6.6665C11.8457 6.66838 13.626 7.3508 15 8.58317L17.5 10.8332" stroke="#C1C1C1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
          </div>
        </Col>
      )}

      <Col xs="auto" className="d-flex align-items-center gap-2 p-0 d-none d-sm-inline-flex">

        {showAddButton && (
          <button className="add">Add</button>
        )}

        {showSettingsIcon && (
          <div className="setting-icon d-flex align-items-center justify-content-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.14276 1.33398H7.84943C7.49581 1.33398 7.15667 1.47446 6.90662 1.72451C6.65657 1.97456 6.51609 2.3137 6.51609 2.66732V2.78732C6.51586 3.02113 6.45413 3.25078 6.33712 3.45321C6.22011 3.65564 6.05192 3.82374 5.84943 3.94065L5.56276 4.10732C5.36007 4.22434 5.13014 4.28595 4.8961 4.28595C4.66205 4.28595 4.43212 4.22434 4.22943 4.10732L4.12943 4.05398C3.82347 3.87749 3.45999 3.82961 3.11876 3.92086C2.77754 4.0121 2.48646 4.23501 2.30943 4.54065L2.16276 4.79398C1.98627 5.09994 1.93839 5.46343 2.02963 5.80465C2.12088 6.14587 2.34379 6.43695 2.64943 6.61398L2.74943 6.68065C2.95095 6.79699 3.11851 6.96404 3.23546 7.1652C3.35242 7.36637 3.41469 7.59463 3.4161 7.82732V8.16732C3.41703 8.40226 3.35586 8.63329 3.23879 8.83699C3.12172 9.04069 2.9529 9.20984 2.74943 9.32732L2.64943 9.38732C2.34379 9.56435 2.12088 9.85543 2.02963 10.1967C1.93839 10.5379 1.98627 10.9014 2.16276 11.2073L2.30943 11.4607C2.48646 11.7663 2.77754 11.9892 3.11876 12.0804C3.45999 12.1717 3.82347 12.1238 4.12943 11.9473L4.22943 11.894C4.43212 11.777 4.66205 11.7154 4.8961 11.7154C5.13014 11.7154 5.36007 11.777 5.56276 11.894L5.84943 12.0607C6.05192 12.1776 6.22011 12.3457 6.33712 12.5481C6.45413 12.7505 6.51586 12.9802 6.51609 13.214V13.334C6.51609 13.6876 6.65657 14.0267 6.90662 14.2768C7.15667 14.5268 7.49581 14.6673 7.84943 14.6673H8.14276C8.49638 14.6673 8.83552 14.5268 9.08557 14.2768C9.33562 14.0267 9.4761 13.6876 9.4761 13.334V13.214C9.47634 12.9802 9.53806 12.7505 9.65507 12.5481C9.77208 12.3457 9.94027 12.1776 10.1428 12.0607L10.4294 11.894C10.6321 11.777 10.862 11.7154 11.0961 11.7154C11.3301 11.7154 11.5601 11.777 11.7628 11.894L11.8628 11.9473C12.1687 12.1238 12.5322 12.1717 12.8734 12.0804C13.2147 11.9892 13.5057 11.7663 13.6828 11.4607L13.8294 11.2006C14.0059 10.8947 14.0538 10.5312 13.9626 10.19C13.8713 9.84876 13.6484 9.55768 13.3428 9.38065L13.2428 9.32732C13.0393 9.20984 12.8705 9.04069 12.7534 8.83699C12.6363 8.63329 12.5752 8.40226 12.5761 8.16732V7.83398C12.5752 7.59904 12.6363 7.36802 12.7534 7.16431C12.8705 6.96061 13.0393 6.79146 13.2428 6.67398L13.3428 6.61398C13.6484 6.43695 13.8713 6.14587 13.9626 5.80465C14.0538 5.46343 14.0059 5.09994 13.8294 4.79398L13.6828 4.54065C13.5057 4.23501 13.2147 4.0121 12.8734 3.92086C12.5322 3.82961 12.1687 3.87749 11.8628 4.05398L11.7628 4.10732C11.5601 4.22434 11.3301 4.28595 11.0961 4.28595C10.862 4.28595 10.6321 4.22434 10.4294 4.10732L10.1428 3.94065C9.94027 3.82374 9.77208 3.65564 9.65507 3.45321C9.53806 3.25078 9.47634 3.02113 9.4761 2.78732V2.66732C9.4761 2.3137 9.33562 1.97456 9.08557 1.72451C8.83552 1.47446 8.49638 1.33398 8.14276 1.33398Z" stroke="#404145" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#404145" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        {showButton && (
          <Button
            className="yellowButton d-flex align-items-center gap-2"
            onClick={() => navigate(buttonPath)}
          >
            <img src={plus} className="plusIcon" alt="plus" />
            <span className="btn-text">{buttonText}</span>
          </Button>
        )}

      </Col>
    </Row>
  );
};

export default TopBar;