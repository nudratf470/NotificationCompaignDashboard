import React from "react";
import Header from "../../Components/Header/Header";
import UpdatedAppointmentTopBar from "../../Components/UpdatedAppointmentTopBar/UpdatedAppointmentTopBar";
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar";
import ComponentsSidebar from "../../Components/ComponentsSidebar/ComponentsSidebar";
import PropertiesSidebar from "../../Components/Propertiessidebar/Propertiessidebar";
import NotificationEditor from "../../Components/NotificationEditor/NotificationEditior";
import "./UpdateAppointmentPage.css";

const UpdateAppointmentPage = () => {
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
          <ComponentsSidebar />
        </div>

        {/* Main center content */}
        <div className="dashboard-status">
          <div className="content-wrapper">
            <div className="notification-label">
              <span>Notification Name</span>
              <h5>Slot Updated Notification</h5>
            </div>

            <NotificationEditor />
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

export default UpdateAppointmentPage;
