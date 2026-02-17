import React from "react";
import Header from "../../Components/Header/Header";
import CreateNotificationTopBar from "../../Components/CreateNotificationTopBar/CreateNotificationTopBar";
import AppointmentSideBar from "../../Components/AppointmentSideBar/AppointmentSideBar";
import YellowRoundedButton from "../../Components/YellowRoundedButton/YellowRoundedButton";
import "./SlotNotificationPage.css";
import { useNavigate } from "react-router-dom";

const SlotNotificationPage = () => {
const navigate=useNavigate();
  return (
    <div className="update-appointment-page">
      <Header />
      <CreateNotificationTopBar />

      <div className="slot-body">
  {/* LEFT SIDEBAR */}
  <div className="slot-status-sidebar">
    <AppointmentSideBar />
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
