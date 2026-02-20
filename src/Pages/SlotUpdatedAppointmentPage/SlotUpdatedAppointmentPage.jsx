import Header from "../../Components/Header/Header";
import "./SlotUpdatedAppointmentPage.css";
import SideBar from "../../Components/SideBar/SideBar";
import AppointmentUpdatedSchedule from "../../Components/AppointmentUpdatedSchedule/AppointmentUpdatedSchedule";
import ModifyDelete from "../../Components/ModifyDelete/ModifyDelete";
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
import TopBar from "../../Components/TopBar/TopBar";

const SlotUpdatedAppointmentPage = () => {
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
  <div className="slot-update-page">
  <Header />
  <TopBar heading="Edit Notification Template" showToggle={true}/>

  <div className="slot-bodyContainer">
    {/* Left narrow sidebar */}
    <div className="slot-status-sidebar">
    <SideBar icons={campaignAndAdminIcons} defaultActive={1}/>
    </div>

    {/* Left wide sidebar */}
    <div className="slot-components-sidebar mt-3">
      <div className="slot-template-summary-card">
        <div className="slot-summary-item">
          <span className="slot-summary-label">Template Name</span>
          <span className="slot-summary-value">Slot Updated Notification</span>
        </div>
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
