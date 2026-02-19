import React from "react"; 
import Header from "../../Components/Header/Header"; 
import UpdatedAppointmentTopBar from "../../Components/UpdatedAppointmentTopBar/UpdatedAppointmentTopBar"; 
import ComponentsSidebar from "../../Components/ComponentsSidebar/ComponentsSidebar"; 
import NotificationEditor from "../../Components/NotificationEditor/NotificationEditior"; 
import PropertiesSideBar from "../../Components/PropertiesSideBar/PropertiesSideBar";
import SideBar from "../../Components/SideBar/SideBar";
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

import "./UpdateAppointmentPage.css"; 

const UpdateAppointmentPage = () => {
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
      <UpdatedAppointmentTopBar />

      <div className="body-container">
        {/* Left Narrow Sidebar */}
        <div className="status-sidebar">
          <SideBar icons={campaignAndAdminIcons} defaultActive={1}/>
        </div>

       <div className="ComponentsSidebar">
        <ComponentsSidebar />
        </div>

        {/* Main Dashboard Area */}
        <div className="dashboard-status">
          <div className="content-wrapper">
            <div className="notification-label">
              <span>Notification Name</span>
              <h5>Slot Updated Notification</h5>
            </div>
            <NotificationEditor />
          </div>
        </div>

        {/* Right Properties Sidebar */}
        <div className="properties-sidebar">
          <PropertiesSideBar/>
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointmentPage;
