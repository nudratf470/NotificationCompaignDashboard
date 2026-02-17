import React from "react";
import Header from "../../Components/Header/Header";
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar";
import "./SlotUpdatedAppointmentPage.css";
import AppointmentUpdatedSchedule from "../../Components/AppointmentUpdatedSchedule/AppointmentUpdatedSchedule";
import ModifyDelete from "../../Components/ModifyDelete/ModifyDelete";
import TopBarAppointment from "../../Components/TopBarAppointment/TopBarAppointment";

const SlotUpdatedAppointmentPage = () => {
  return (
  <div className="slot-update-page">
  <Header />
  <TopBarAppointment />

  <div className="slot-bodyContainer">
    {/* Left narrow sidebar */}
    <div className="slot-status-sidebar">
      <AppointmentSideBar />
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
