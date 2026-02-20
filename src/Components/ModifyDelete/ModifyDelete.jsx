import React, { useState } from "react";
import YellowRoundedButton from "../YellowRoundedButton/YellowRoundedButton";
import { useNavigate } from "react-router-dom";
import "./ModifyDelete.css";

const ModifyDelete = () => {
  const navigate = useNavigate();
  const [openOption, setOpenOption] = useState(null);

  const toggleOption = (name) => {
    setOpenOption(openOption === name ? null : name);
  };

  const arrowIcon = (isOpen) => (
    <svg
      width="8"
      height="11"
      viewBox="0 0 8 11"
      fill="none"
      style={{
        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease"
      }}
    >
      <path d="M7.15334 4.28254C7.69716 4.68214 7.69716 5.49461 7.15334 5.89422L1.59214 9.98064C0.931722 10.4659 1.09565e-06 9.99434 1.08588e-06 9.1748L9.88418e-07 1.00196C9.78645e-07 0.182414 0.931721 -0.289162 1.59214 0.196119L7.15334 4.28254Z" fill="#B9B9B9"/>
    </svg>
  );

  const options = ["Modify", "Delete"];

  return (
    <>
      <div className="md-nextButtonContainer">
        <YellowRoundedButton
          label="Next"
          className="md-myButton"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="md-previewOptions mt-2">
        {options.map((option) => (
          <div key={option} className="md-optionGroup">
            <div
              className="md-optionIcons"
              onClick={() => toggleOption(option)}
            >
              <span>{option}</span>
              {arrowIcon(openOption === option)}
            </div>

            {openOption === option && (
              <div className="md-optionContent">
                <p className="md-optionContentText">
                  {option} settings will appear here.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ModifyDelete;