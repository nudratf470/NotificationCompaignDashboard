import React from "react";
import Bellicon from "../../assets/images/Bellicon.svg";
import "./NotificationPreview.css";

const NotificationPreview = () => {
  return (
    <>
      <div className="appointment-updated mt-5">
        <span>9:41</span>
        <div className="appoinment d-flex gap-3">
          <div className="Bell-iconbg">
            {" "}
            <img src={Bellicon} className="" />
          </div>
          <div class="appointmentschedule">
            <h4 className="p-0 m-0"> Appointment Updated </h4> 
            

            <p className="mt-2">
              Your appointment has been rescheduled to 2:30 PM on Jan 15.
            </p>
          </div>
        </div>
        <div className="details">
          <span>
            <svg style={{ marginRight: "8px" }}
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg pe-2">
              <g opacity="0.99733">
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                  fill="#155DFC"
                />
              </g>
            </svg>
          Tap to view details
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationPreview;
