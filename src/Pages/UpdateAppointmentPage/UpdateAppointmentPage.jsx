import React from "react"; 
import Header from "../../Components/Header/Header"; 
import UpdatedAppointmentTopBar from "../../Components/UpdatedAppointmentTopBar/UpdatedAppointmentTopBar"; 
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar"; 
import ComponentsSidebar from "../../Components/ComponentsSidebar/ComponentsSidebar"; 
import PropertySideBar from "../../Components/Property-SideBar/Property-SideBar"; 
import NotificationEditor from "../../Components/NotificationEditor/NotificationEditior"; 
import "./UpdateAppointmentPage.css"; 

const UpdateAppointmentPage = () => {
  return (
    <div className="update-appointment-page">
      <Header />
      <UpdatedAppointmentTopBar />

      <div className="body-container">
        {/* Left Narrow Sidebar */}
        <div className="status-sidebar">
          <AppointmentSideBar />
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
          <Property-SideBar />
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointmentPage;
