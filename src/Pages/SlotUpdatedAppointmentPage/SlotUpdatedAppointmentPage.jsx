import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./SlotUpdatedAppointmentPage.css";
import SideBar from "../../Components/SideBar/SideBar";
import AppointmentUpdatedSchedule from "../../Components/AppointmentUpdatedSchedule/AppointmentUpdatedSchedule";
import ModifyDelete from "../../Components/ModifyDelete/ModifyDelete";
import TopBar from "../../Components/TopBar/TopBar";

import calyellow          from "../../assets/icons/calyellow.svg";
import avatar             from "../../assets/icons/avatar.svg";
import avatartwo          from "../../assets/icons/avatartwo.svg";
import dimentionalcube    from "../../assets/icons/dimentionalcube.svg";
import graph              from "../../assets/icons/graph.svg";
import img                from "../../assets/icons/img.svg";
import speaker            from "../../assets/icons/speaker.svg";
import settinghand        from "../../assets/icons/settinghand.svg";
import settingyellowicon  from "../../assets/icons/settingyellowicon.svg";
import lines              from "../../assets/icons/lines.svg";
import adminred           from "../../assets/icons/adminred.svg";
import adminblack         from "../../assets/icons/adminblack.svg";
import clock              from "../../assets/icons/clock.svg";
import calwhite           from "../../assets/icons/calwhite.svg";
import avatarwhite        from "../../assets/icons/avatarwhite.svg";
import avatartwowhite     from "../../assets/icons/avatartwowhite.svg";
import dimentionalcubewhite from "../../assets/icons/dimentionalcubewhite.svg";
import graphwhite         from "../../assets/icons/graphwhite.svg";
import imgwhite           from "../../assets/icons/imgwhite.svg";
import speakerwhite       from "../../assets/icons/speakerwhite.svg";
import settinghandwhite   from "../../assets/icons/settinghandwhite.svg";
import settinggearwhite   from "../../assets/icons/settinggearwhite.svg";
import lineswhite         from "../../assets/icons/lineswhite.svg";
import clockwhite         from "../../assets/icons/clockwhite.svg";

const SlotUpdatedAppointmentPage = () => {
  const [activeView, setActiveView] = useState("mobile");

  const campaignAndAdminIcons = [
    { src: calyellow,        activeSrc: calwhite,             alt: "calender" },
    { src: lines,            activeSrc: lineswhite,           alt: "lines" },
    { src: avatar,           activeSrc: avatarwhite,          alt: "avatar" },
    { src: avatartwo,        activeSrc: avatartwowhite,       alt: "avatartwo" },
    { src: settinghand,      activeSrc: settinghandwhite,     alt: "settinghand" },
    { src: dimentionalcube,  activeSrc: dimentionalcubewhite, alt: "dimentionalcube" },
    { src: clock,            activeSrc: clockwhite,           alt: "clock" },
    { src: graph,            activeSrc: graphwhite,           alt: "graph" },
    { src: img,              activeSrc: imgwhite,             alt: "img" },
    { src: speaker,          activeSrc: speakerwhite,         alt: "speaker" },
    { src: settingyellowicon,activeSrc: settinggearwhite,     alt: "settingyellowicon" },
    { type: "divider" },
    {
      group: [
        { src: adminred,   alt: "admin red" },
        { src: adminblack, alt: "admin black" },
      ],
    },
  ];

  return (
    <div className="slot-update-page">
      <Header />

      {/* Desktop TopBar — has its own toggle built in via showToggle prop */}
      <TopBar
        icons={campaignAndAdminIcons}
        heading="Edit Notification Template"
        showToggle={true}
        showUndoRedo={true}
        showChangesSaved={true}
      />

      {/* ── Mobile-only toggle row ── */}
    
      <div className="mobile-toggle-only">
        <div className="view-toggle">
          <button
            className={`toggle-btn ${activeView === "desktop" ? "active" : ""}`}
            onClick={() => setActiveView("desktop")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M15.0002 12V5.25C15.0002 4.85218 14.8422 4.47064 14.5609 4.18934C14.2796 3.90804 13.898 3.75 13.5002 3.75H4.5002C4.10237 3.75 3.72084 3.90804 3.43954 4.18934C3.15823 4.47064 3.0002 4.85218 3.0002 5.25V12M15.0002 12H3.0002M15.0002 12L15.9602 13.9125C16.018 14.0272 16.0454 14.1549 16.0397 14.2833C16.034 14.4116 15.9954 14.5364 15.9277 14.6455C15.8599 14.7547 15.7652 14.8446 15.6527 14.9067C15.5402 14.9688 15.4137 15.0009 15.2852 15H2.7152C2.58672 15.0009 2.46016 14.9688 2.34766 14.9067C2.23516 14.8446 2.14049 14.7547 2.07273 14.6455C2.00497 14.5364 1.9664 14.4116 1.9607 14.2833C1.955 14.1549 1.98238 14.0272 2.0402 13.9125L3.0002 12"
                stroke="#1B1B1B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
            Desktop
          </button>

          <button
            className={`toggle-btn ${activeView === "mobile" ? "active" : ""}`}
            onClick={() => setActiveView("mobile")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M12.75 1.5H5.25C4.42157 1.5 3.75 2.17157 3.75 3V15C3.75 15.8284 4.42157 16.5 5.25 16.5H12.75C13.5784 16.5 14.25 15.8284 14.25 15V3C14.25 2.17157 13.5784 1.5 12.75 1.5Z"
                stroke="#B9B6B6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
              />
              <path d="M9 13.5H9.0075" stroke="#B9B6B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Mobile
          </button>
        </div>

      </div>

      <div className="slot-bodyContainer">

        {/* Left narrow sidebar */}
        <div className="slot-status-sidebar">
          <SideBar icons={campaignAndAdminIcons} defaultActive={1} />
        </div>

        {/* Left wide sidebar */}
        <div className="slot-components-sidebar mt-md-3">
          <div className="slot-template-summary-card">
            <div className="slot-summary-item">
              <span className="slot-summary-label template-name">Template Name</span>
              <span className="slot-summary-value slot-updated-notification">Slot Updated Notification</span>
            </div>
            <div className="notification-details">
              <div className="slot-summary-item">
                <span className="slot-summary-label">Notification Purpose</span>
                <span className="slot-summary-value">Slot Updated</span>
              </div>
              <div className="slot-summary-item">
                <span className="slot-summary-label">Repeat Pattern</span>
                <span className="slot-summary-value">Once</span>
              </div>
              <div className="slot-summary-item lastgroup">
                <span className="slot-summary-label">Group</span>
                <span className="slot-summary-value">Group 1 (256 people)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main center content */}
        <div className="slot-dashboard-status">
          <div className="slot-content-wrapper">
            <div className="slot-notification-label">
              <span>Notification Name</span>
              <h5>Slot Updated Notification</h5>
            </div>
            <div className="slot-notificationCard">
              <AppointmentUpdatedSchedule />
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="slot-properties-sidebar-wrapper mt-3">
          <ModifyDelete />
        </div>

      </div>
    </div>
  );
};

export default SlotUpdatedAppointmentPage;