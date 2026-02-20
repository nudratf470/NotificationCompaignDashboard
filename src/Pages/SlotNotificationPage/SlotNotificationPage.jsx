import Header from "../../Components/Header/Header";
import TopBar from "../../Components/TopBar/TopBar";
import YellowRoundedButton from "../../Components/YellowRoundedButton/YellowRoundedButton";
import calyellow from "../../assets/icons/calyellow.svg";
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
import calwhite from "../../assets/icons/calwhite.svg";
import avatarwhite from "../../assets/icons/avatarwhite.svg";
import avatartwowhite from "../../assets/icons/avatartwowhite.svg";
import dimentionalcubewhite from "../../assets/icons/dimentionalcubewhite.svg";
import graphwhite from "../../assets/icons/graphwhite.svg";
import imgwhite from "../../assets/icons/imgwhite.svg";
import speakerwhite from "../../assets/icons/speakerwhite.svg";
import settinghandwhite from "../../assets/icons/settinghandwhite.svg";
import settinggearwhite from "../../assets/icons/settinggearwhite.svg";
import lineswhite from "../../assets/icons/lineswhite.svg";
import clockwhite from "../../assets/icons/clockwhite.svg";
import SideBar from "../../Components/SideBar/SideBar";
import "./SlotNotificationPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SlotNotificationPage = () => {
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState("Appointment Booked");
  const [purpose, setPurpose] = useState("Slot Updated");
  const [repeat, setRepeat] = useState("Once");
  const [channel, setChannel] = useState("Both (Push Notification, In App)");
  const [group, setGroup] = useState("Group 1 (256 people)");
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const dropdownArrow = (
    <svg className="dropdown-icon" width="11" height="8" viewBox="0 0 11 8" fill="none">
      <path d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z" fill="#B9B9B9" />
    </svg>
  );

  const campaignAndAdminIcons = [
    { src: calyellow, activeSrc: calwhite, alt: "calender" },
    { src: lines, activeSrc: lineswhite, alt: "lines" },
    { src: avatar, activeSrc: avatarwhite, alt: "avatar" },
    { src: avatartwo, activeSrc: avatartwowhite, alt: "avatartwo" },
    { src: settinghand, activeSrc: settinghandwhite, alt: "settinghand" },
    { src: dimentionalcube, activeSrc: dimentionalcubewhite, alt: "dimentionalcube" },
    { src: clock, activeSrc: clockwhite, alt: "clock" },
    { src: graph, activeSrc: graphwhite, alt: "graph" },
    { src: img, activeSrc: imgwhite, alt: "img" },
    { src: speaker, activeSrc: speakerwhite, alt: "speaker" },
    { src: settingyellowicon, activeSrc: settinggearwhite, alt: "settingyellowicon" },
    { type: "divider" },
    {
      group: [
        { src: adminred, alt: "admin red" },
        { src: adminblack, alt: "admin black" },
      ]
    },
  ];

  return (
    <div className="update-appointment-page">
      <Header />
      <TopBar heading="Create Notification Campaign" />

      <div className="slot-body">
        {/* LEFT SIDEBAR */}
        <div className="slot-status-sidebar">
          <SideBar icons={campaignAndAdminIcons} defaultActive={1} />
        </div>

        {/* TEMPLATE NAME */}
        <div className="labels-container">
          <span className="label-name">Template Name</span>
          <h3 className="label-title">Slot Updated Notification</h3>
        </div>

        {/* FIRST COLUMN */}
        <div className="bodylabelContainer">

          {/* Campaign Name — plain */}
          <div className="Body-labels-container">
            <span className="Body-label-name">Campaign Name</span>
            <h3 className="Body-label-title">Slot Updated Notification</h3>
          </div>

          {/* Trigger dropdown */}
          <div className={`Body-labels-container ${openDropdown === "trigger" ? "dropdown-open" : ""}`}>
            <span className="Body-label-name">Trigger</span>
            <h3 className="Body-label-title" onClick={() => toggleDropdown("trigger")} style={{ cursor: "pointer" }}>
              {trigger}
              {dropdownArrow}
            </h3>
            {openDropdown === "trigger" && (
              <div className="slot-dropdown-list">
                {["Appointment Booked", "Appointment Cancelled", "Slot Updated"].map(opt => (
                  <div key={opt} className="slot-dropdown-item" onClick={() => { setTrigger(opt); setOpenDropdown(null); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notification Purpose dropdown */}
          <div className={`Body-labels-container ${openDropdown === "purpose" ? "dropdown-open" : ""}`}>
            <span className="Body-label-name">Notification Purpose</span>
            <h3 className="Body-label-title" onClick={() => toggleDropdown("purpose")} style={{ cursor: "pointer" }}>
              {purpose}
              {dropdownArrow}
            </h3>
            {openDropdown === "purpose" && (
              <div className="slot-dropdown-list">
                {["Slot Updated", "Slot Cancelled", "Slot Booked"].map(opt => (
                  <div key={opt} className="slot-dropdown-item" onClick={() => { setPurpose(opt); setOpenDropdown(null); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* SECOND COLUMN */}
        <div className="bodylabelContainertwo">

          {/* Repeat Pattern dropdown */}
          <div className={`Body-labels-container ${openDropdown === "repeat" ? "dropdown-open" : ""}`}>
            <span className="Body-label-name">Repeat Pattern</span>
            <h3 className="Body-label-title" onClick={() => toggleDropdown("repeat")} style={{ cursor: "pointer" }}>
              {repeat}
              {dropdownArrow}
            </h3>
            {openDropdown === "repeat" && (
              <div className="slot-dropdown-list">
                {["Once", "Daily", "Weekly"].map(opt => (
                  <div key={opt} className="slot-dropdown-item" onClick={() => { setRepeat(opt); setOpenDropdown(null); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Channel dropdown */}
          <div className={`Body-labels-container ${openDropdown === "channel" ? "dropdown-open" : ""}`}>
            <span className="Body-label-name">Channel</span>
            <h3 className="Body-label-title" onClick={() => toggleDropdown("channel")} style={{ cursor: "pointer" }}>
              {channel}
              {dropdownArrow}
            </h3>
            {openDropdown === "channel" && (
              <div className="slot-dropdown-list">
                {["Both (Push Notification, In App)", "Push Notification", "In App"].map(opt => (
                  <div key={opt} className="slot-dropdown-item" onClick={() => { setChannel(opt); setOpenDropdown(null); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Email Subject dropdown — with Add New */}
          <div className={`Body-labels-container ${openDropdown === "group" ? "dropdown-open" : ""}`}>
            <span className="Body-label-name">Email Subject</span>
            <h3 className="Body-label-title" onClick={() => toggleDropdown("group")} style={{ cursor: "pointer" }}>
              {group}
              {dropdownArrow}
            </h3>
            {openDropdown === "group" && (
              <div className="slot-dropdown-list">
                {["Group 1 (256 people)", "Group 2 (256 people)", "Group 3 (256 people)"].map(opt => (
                  <div key={opt} className="slot-dropdown-item" onClick={() => { setGroup(opt); setOpenDropdown(null); }}>
                    {opt}
                  </div>
                ))}
                <div className="slot-dropdown-addnew-wrapper">
                  <button className="slot-dropdown-addnew">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.33707 18.3337H12.2281C16.304 18.3337 17.9343 16.667 17.9343 12.5003V7.50033C17.9343 3.33366 16.304 1.66699 12.2281 1.66699H7.33707C3.26121 1.66699 1.63086 3.33366 1.63086 7.50033V12.5003C1.63086 16.667 3.26121 18.3337 7.33707 18.3337Z" fill="#FFD705" />
                      <path d="M6.52148 10.0003H13.0429M9.78218 13.3337V6.66699" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add New
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* NEXT BUTTON */}
        <div className="Button-wrapper">
          <YellowRoundedButton label="Next" onClick={() => navigate("/slot-updated")} />
        </div>
      </div>
    </div>
  );
};

export default SlotNotificationPage;