import React from "react";
import Header from "../../Components/Header/Header";
import UpdatedAppointmentTopBar from "../../Components/UpdatedAppointmentTopBar/UpdatedAppointmentTopBar";
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar";
import ComponentsSidebar from "../../Components/ComponentsSidebar/ComponentsSidebar";
import PropertiesSideBar from "../../Components/PropertiesSideBar/PropertiesSideBar";
import NotificationEditor from "../../Components/NotificationEditor/NotificationEditior";
import "./UpdateAppointmentPage.css";

const UpdateAppointmentPage = () => {
  return (
    <div className="update-appointment-page">
      <Header />
      <UpdatedAppointmentTopBar />

      <div className="bodyContainer">
      
        <div className="status-sidebar">
          <AppointmentSideBar />
        </div>

        <div className="components-sidebar-wrapper mt-3">
          <ComponentsSidebar />
        </div>

        <div className="dashboard-status">
          <div className="content-wrapper">
            <div className="notification-label">
              <span>Notification Name</span>
              <h5>Slot Updated Notification</h5>
            </div>

            <NotificationEditor />
          </div>
        </div>

     
        <div className="properties-sidebar-wrapper mt-3">
          <PropertiesSideBar />
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointmentPage;
