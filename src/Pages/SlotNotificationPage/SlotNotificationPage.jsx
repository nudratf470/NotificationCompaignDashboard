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

const SlotNotificationPage = () => {
  const navigate=useNavigate();
   const campaignAndAdminIcons = [
      { src: calyellow, activeSrc:calwhite , alt: "calender" },
      { src: lines, activeSrc:lineswhite , alt: "lines" },
      { src: avatar, activeSrc:avatarwhite , alt: "avatar" },
      { src: avatartwo, activeSrc:avatartwowhite , alt: "avatartwo" },
      { src: settinghand, activeSrc:settinghandwhite , alt: "settinghand" },
      { src: dimentionalcube, activeSrc:dimentionalcubewhite , alt: "dimentionalcube" },
      { src: clock, activeSrc:clockwhite , alt: "clock" },
       { src: graph, activeSrc:graphwhite , alt: "graph" },
      { src: img, activeSrc:imgwhite , alt: "img" },
      { src: speaker, activeSrc:speakerwhite , alt: "speaker" },
      { src: settingyellowicon, activeSrc:settinggearwhite , alt: "settingyellowicon" },
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
        <TopBar heading="Create Notification Compaign"/>

      <div className="slot-body">
  {/* LEFT SIDEBAR */}
  <div className="slot-status-sidebar">
  <SideBar icons={campaignAndAdminIcons} defaultActive={1}/>
  </div>


        {/* TEMPLATE NAME */}
        <div className="labels-container">
          <span className="label-name">Template Name</span>
          <h3 className="label-title">Slot Updated Notification</h3>
        </div>

        {/* FIRST COLUMN */}
        <div className="bodylabelContainer">
          <div className="Body-labels-container">
            <span className="Body-label-name">Campaign Name</span>
            <h3 className="Body-label-title">Slot Updated Notification</h3>
          </div>

          <div className="Body-labels-container">
            <span className="Body-label-name">Trigger</span>
            <h3 className="Body-label-title">
              Appointment Booked
              <svg
                className="dropdown-icon"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z"
                  fill="#B9B9B9"
                />
              </svg>
            </h3>
          </div>

          <div className="Body-labels-container">
            <span className="Body-label-name">Notification Purpose</span>
            <h3 className="Body-label-title">
              Slot Updated
              <svg
                className="dropdown-icon"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
              >
                <path
                  d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z"
                  fill="#B9B9B9"
                />
              </svg>
            </h3>
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className="bodylabelContainertwo">
          <div className="Body-labels-container">
            <span className="Body-label-name">Repeat Pattern</span>
            <h3 className="Body-label-title">
              Once
              <svg className="dropdown-icon" width="11" height="8" viewBox="0 0 11 8">
                <path
                  d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z"
                  fill="#B9B9B9"
                />
              </svg>
            </h3>
          </div>

          <div className="Body-labels-container">
            <span className="Body-label-name">Channel</span>
            <h3 className="Body-label-title">
              Both (Push Notification, In App)
              <svg className="dropdown-icon" width="11" height="8" viewBox="0 0 11 8">
                <path
                  d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z"
                  fill="#B9B9B9"
                />
              </svg>
            </h3>
          </div>

          <div className="Body-labels-container">
            <span className="Body-label-name">Group</span>
            <h3 className="Body-label-title">
              Group 1 (256 people)
              <svg className="dropdown-icon" width="11" height="8" viewBox="0 0 11 8">
                <path
                  d="M5.99602 7.18525C5.596 7.71791 4.7968 7.71791 4.39678 7.18526L0.202668 1.60051C-0.292354 0.941356 0.177947 0 1.00229 0H9.39052C10.2149 0 10.6852 0.941354 10.1901 1.60051L5.99602 7.18525Z"
                  fill="#B9B9B9"
                />
              </svg>
            </h3>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="Button-wrapper">
          <YellowRoundedButton label="Next" onClick={() => navigate("/slot-updated")}  />
        </div>
      </div>
    </div>
  );
};

export default SlotNotificationPage;
