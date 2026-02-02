import React from "react";
import "./AppointmentUpdatedSchedule.css";
import done from "../../assets/images/done.svg";
import BlueButton from "../BlueButton/BlueButton";

const AppointmentUpdatedSchedule = () => {
  return (
    <>
      <div className="AppointmentupdatedSchedule mt-5 d-flex flex-column align-items-center gap-1">
        <div className="delivered-iconbg">
          <img src={done} className="" />
        </div>
        <h3>Appointment Updated</h3>
        <p>Your appointment has been successfully rescheduled.</p>
        <div className="updatedTiming d-flex align-items-center justify-content-between">
          <div className="timingBlock">
            <div className="timingTitle">Previous</div>

            <div className="previous timingCard">
              <div className="rowItem">
                <span className="iconWrap">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_4938)">
                      <path
                        d="M5.33301 1.3335V4.00016"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.667 1.3335V4.00016"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 6.6665H14"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_4938">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <p>Jan 15, 2025</p>
              </div>
              <div className="rowItem">
                <span className="iconWrap">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_4949)">
                      <path
                        d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 4V8L10.6667 9.33333"
                        stroke="#818181"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_4949">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <p className="strike">10:00 AM</p>
              </div>
            </div>
          </div>

          <div className="arrowWrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.93945 12H18.7698"
                stroke="#00A63E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8545 5L18.7696 12L11.8545 19"
                stroke="#00A63E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="timingBlock">
            <div className="timingTitle newTitle">New</div>
            <div className="new timingCard">
              <div className="rowItem">
                <span className="iconWrap">
                  
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_4965)">
                      <path
                        d="M5.33301 1.3335V4.00016"
                        stroke="#101828"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.667 1.3335V4.00016"
                        stroke="#101828"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                        stroke="#101828"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 6.6665H14"
                        stroke="#101828"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_4965">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <p>Jan 15, 2025</p>
              </div>

          
              <div className="rowItem">
                <span className="iconWrap">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_4973)">
                      <path
                        d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                        stroke="#00A63E"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 4V8L10.6667 9.33333"
                        stroke="#00A63E"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_4973">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <p className="newTimeText">2:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <BlueButton />
      </div>
    </>
  );
};

export default AppointmentUpdatedSchedule;
