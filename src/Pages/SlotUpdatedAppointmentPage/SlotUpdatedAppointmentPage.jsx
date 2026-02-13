import React from "react";
import Header from "../../Components/Header/Header";
import UpdatedAppointmentTopBar from "../../Components/UpdatedAppointmentTopBar/UpdatedAppointmentTopBar";
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar";
import ComponentsSidebar from "../../Components/ComponentsSidebar/ComponentsSidebar";
import PropertiesSidebar from "../../Components/Propertiessidebar/Propertiessidebar";
import NotificationEditor from "../../Components/NotificationEditor/NotificationEditior";
import "./SlotUpdatedAppointmentPage.css";
import AppointmentUpdatedSchedule from "../../Components/AppointmentUpdatedSchedule/AppointmentUpdatedSchedule";

const SlotUpdatedAppointmentPage = () => {
  return (
    <div className="update-appointment-page">
      <Header />
      <UpdatedAppointmentTopBar />

      <div className="bodyContainer">
        {/* Left narrow sidebar */}
        <div className="status-sidebar">
          <AppointmentSideBar />
        </div>

        {/* Left wide sidebar */}
        <div className="components-sidebar-wrapper mt-3">
          <div className="template-summary-card">
      <div className="summary-item">
        <span className="summary-label">Template Name</span>
        <span className="summary-value">Slot Updated Notification</span>
      </div>


      <div className="summary-item">
        <span className="summary-label">Notification Purpose</span>
        <span className="summary-value">Slot Updated</span>
      </div>


      <div className="summary-item">
        <span className="summary-label">Repeat Pattern</span>
        <span className="summary-value">Once</span>
      </div>


      <div className="summary-item lastgroup">
        <span className="summary-label">Group</span>
        <span className="summary-value">Group 1 (256 people)</span>
      </div>
    </div>
        </div>

        {/* Main center content */}
        <div className="dashboard-status">
          <div className="content-wrapper">
            <div className="notification-label">
              <span>Notification Name</span>
              <h5>Slot Updated Notification</h5>
            </div>
            <div className="notificationCard">
            <AppointmentUpdatedSchedule/>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="properties-sidebar-wrapper mt-3">
          <PropertiesSidebar />
        </div>
      </div>
    </div>
  );
};

export default SlotUpdatedAppointmentPage;
