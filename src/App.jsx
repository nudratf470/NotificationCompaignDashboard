import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotificationCard from "./Components/NotificationCard/NotificationCard";
import ManageStaff from "./Pages/ManageStaff/ManageStaff";
import OnboardingType from "./Pages/OnboardingDashboard/OnboardingType";
import UpdateAppointmentPage from "./Pages/UpdateAppointmentPage/UpdateAppointmentPage";
import SlotNotificationPage from "./Pages/SlotNotificationPage/SlotNotificationPage";
import SlotUpdatedAppointmentPage from "./Pages/SlotUpdatedAppointmentPage/SlotUpdatedAppointmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
   
      {/*  <Route path="/notifications" element={<NotificationCard />} />*/}
        <Route path="/" element={<OnboardingType />} />
        <Route path="/manage-staff" element={<ManageStaff />} />
        <Route path="/update-appointment" element={<UpdateAppointmentPage />} />
        <Route path="/slot-notification" element={<SlotNotificationPage />} />
        <Route path="/slot-updated" element={<SlotUpdatedAppointmentPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;