import React, { useState } from "react";
import YellowRoundedButton from "../YellowRoundedButton/YellowRoundedButton";
import { useNavigate } from "react-router-dom";
import "./PropertiesSidebar.css";

const PropertiesSidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nextbtnContainer">
        <YellowRoundedButton
  label="Next"
  className="myButton"
  onClick={() => navigate("/slot-notification")}   
/>

      </div>
      <div className="previewOptions mt-2">
        <div className="option-icons">
          <span>Preview</span>
          <svg
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.15334 4.28254C7.69716 4.68214 7.69716 5.49461 7.15334 5.89422L1.59214 9.98064C0.931722 10.4659 1.09565e-06 9.99434 1.08588e-06 9.1748L9.88418e-07 1.00196C9.78645e-07 0.182414 0.931721 -0.289162 1.59214 0.196119L7.15334 4.28254Z"
              fill="#B9B9B9"
            />
          </svg>
        </div>

           <div className="option-icons">
          <span>Content</span>
          <svg
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.15334 4.28254C7.69716 4.68214 7.69716 5.49461 7.15334 5.89422L1.59214 9.98064C0.931722 10.4659 1.09565e-06 9.99434 1.08588e-06 9.1748L9.88418e-07 1.00196C9.78645e-07 0.182414 0.931721 -0.289162 1.59214 0.196119L7.15334 4.28254Z"
              fill="#B9B9B9"
            />
          </svg>
        </div>

        
           <div className="option-icons">
          <span>Style</span>
          <svg
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.15334 4.28254C7.69716 4.68214 7.69716 5.49461 7.15334 5.89422L1.59214 9.98064C0.931722 10.4659 1.09565e-06 9.99434 1.08588e-06 9.1748L9.88418e-07 1.00196C9.78645e-07 0.182414 0.931721 -0.289162 1.59214 0.196119L7.15334 4.28254Z"
              fill="#B9B9B9"
            />
          </svg>
        </div>

        
           <div className="option-icons">
          <span>Advanced</span>
          <svg
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.15334 4.28254C7.69716 4.68214 7.69716 5.49461 7.15334 5.89422L1.59214 9.98064C0.931722 10.4659 1.09565e-06 9.99434 1.08588e-06 9.1748L9.88418e-07 1.00196C9.78645e-07 0.182414 0.931721 -0.289162 1.59214 0.196119L7.15334 4.28254Z"
              fill="#B9B9B9"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PropertiesSidebar;
