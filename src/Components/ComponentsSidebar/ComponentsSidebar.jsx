import React, { useState } from "react";
import "./ComponentsSidebar.css";

const ComponentsSidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const components = [
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Icon",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Card",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8H12" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 13.3332V2.6665" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 13.3332V2.6665" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Heading + Text + Image",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.66699 4.6665V2.6665H13.3337V4.6665" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 13.3335H10" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 2.6665V13.3332" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Text",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.39062 8.39062L12.6666 12.6666" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.45903 2.02454C2.39832 1.99896 2.33137 1.99205 2.26671 2.00471C2.20206 2.01736 2.14265 2.049 2.09607 2.09558C2.04949 2.14216 2.01785 2.20157 2.00519 2.26623C1.99254 2.33088 1.99945 2.39783 2.02503 2.45854L6.35836 13.1245C6.38504 13.1891 6.43126 13.2436 6.49054 13.2805C6.54982 13.3174 6.61917 13.3348 6.68885 13.3302C6.75852 13.3257 6.82501 13.2994 6.87898 13.2551C6.93294 13.2108 6.97166 13.1507 6.9897 13.0832L8.0357 9.02787C8.09137 8.79111 8.21074 8.57408 8.38089 8.40028C8.55105 8.22649 8.7655 8.10255 9.00103 8.04187L13.0837 6.98921C13.1515 6.97161 13.212 6.9331 13.2567 6.87916C13.3013 6.82522 13.3279 6.75858 13.3325 6.6887C13.3372 6.61882 13.3197 6.54925 13.2826 6.48986C13.2454 6.43048 13.1906 6.3843 13.1257 6.35787L2.45903 2.02454Z" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Button",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33301 8H12.6663" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Divider",
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.6663 11.3335V12.0002C14.6663 12.3335 14.333 12.6668 13.9997 12.6668H1.99967C1.66634 12.6668 1.33301 12.3335 1.33301 12.0002V11.3335" stroke="#494949" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: "Spacer",
    },
  ];

  return (
    <div className="components-sidebar">
      {components.map((component, index) => (
        <div key={index} className="component-item-wrapper">
          <div className="component-item" onClick={() => toggle(index)}>
            <div className="component-icon">{component.icon}</div>
            <span className="component-label">{component.label}</span>
            <button
              className="add-btn"
              onClick={(e) => { e.stopPropagation(); toggle(index); }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease"
                }}
              >
                <path d="M3.33301 8H12.6663" stroke="#999999" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.3335V12.6668" stroke="#999999" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {openIndex === index && (
            <div className="component-accordion-content">
              <p className="component-accordion-text">
                Configure {component.label} settings here.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComponentsSidebar;