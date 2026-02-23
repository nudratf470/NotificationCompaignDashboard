import React, { useState, useRef, useEffect } from "react";
import "./NotificationEditor.css";

const NotificationEditor = () => {
  const [collapsed, setCollapsed] = useState({
    upload: false,
    title: false,
    description: false,
    timing: false,
  });

  const [showAddMenu, setShowAddMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowAddMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (section) => {
    setCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddItem = (itemType) => {
    console.log("Adding:", itemType);
    // Add your logic here
    setShowAddMenu(false);
  };

  const MinimizeIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0123 18.3552C14.6203 18.3552 18.3557 14.6198 18.3557 10.0118C18.3557 5.40392 14.6203 1.66846 10.0123 1.66846C5.40441 1.66846 1.66895 5.40392 1.66895 10.0118C1.66895 14.6198 5.40441 18.3552 10.0123 18.3552Z" stroke="#AAAAAA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6748 10.0122H13.3495" stroke="#AAAAAA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const menuItems = [
    "Image-Text",
    "Heading- Text-Image",
    "Video-Text",
    "Text",
    "Image-Heading-Text",
    "Image",
    "Logo",
    "Promotion"
  ];

  return (
    <div className="appointmentContainer d-flex align-items-center justify-content-center">
      <div className="notification-editor">
        
       

        {/* Upload Section */}
        <div className="editor-section">
          <div className="section-header">
            <div className="upload-tab d-flex align-items-center justify-content-center">
              <label className="upload-btn">
                Upload
                <input type="file" hidden />
              </label>
            </div>
            <button 
              className="minimize-icon"
              onClick={() => toggleSection('upload')}
              aria-label="Minimize upload section"
            >
              <MinimizeIcon />
            </button>
          </div>
          {!collapsed.upload && (
            <div className="section-content">
              {/* Upload content */}
            </div>
          )}
        </div>

        {/* Title Section */}
        <div className="editor-section">
          <div className="section-header">
            <h2 className="card-title">Appointment Updated!</h2>
            <button 
              className="minimize-icon"
              onClick={() => toggleSection('title')}
              aria-label="Minimize title section"
            >
              <MinimizeIcon />
            </button>
          </div>
          {!collapsed.title && (
            <div className="section-content">
              {/* Title content */}
            </div>
          )}
        </div>

        {/* Description Section */}
        <div className="editor-section">
          <div className="section-header">
            <p className="card-description">
              Your appointment has been successfully rescheduled.
            </p>
            <button 
              className="minimize-icon"
              onClick={() => toggleSection('description')}
              aria-label="Minimize description section"
            >
              <MinimizeIcon />
            </button>
          </div>
          {!collapsed.description && (
            <div className="section-content">
              {/* Description content */}
            </div>
          )}
        </div>

        {/* Timing Section */}
        <div className="editor-section">
          <div className="section-header timing-section-header">
            <div className="timing-container">
              {/* Previous */}
              <div className="timing-block">
                <div className="timing-label">Previous</div>
                <div className="timing-card previous-card">
                  <div className="timing-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33301 1.3335V4.00016" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.667 1.3335V4.00016" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.6665H14" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="timing-text">Jan 15, 2025</span>
                  </div>
                  <div className="timing-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 4V8L10.6667 9.33333" stroke="#818181" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="timing-text strikethrough">10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.93945 12H18.7698" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.8545 5L18.7696 12L11.8545 19" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* New */}
              <div className="timing-block">
                <div className="timing-label new-label">New</div>
                <div className="timing-card new-card">
                  <div className="timing-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33301 1.3335V4.00016" stroke="#101828" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.667 1.3335V4.00016" stroke="#101828" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" stroke="#101828" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.6665H14" stroke="#101828" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="timing-text">Jan 15, 2025</span>
                  </div>
                  <div className="timing-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z" stroke="#00A63E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 4V8L10.6667 9.33333" stroke="#00A63E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="timing-text new-time">2:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="minimize-icon"
              onClick={() => toggleSection('timing')}
              aria-label="Minimize timing section"
            >
              <MinimizeIcon />
            </button>
          </div>
          
          {!collapsed.timing && (
            <div className="section-content">
              {/* Timing content */}
            </div>
          )}
        </div>

        {/* OK Button */}
        <div className="appointment-card">
          <button className="ok-button">OK</button>
        </div>

        {/* Plus Icon with Dropdown Menu */}
        <div className="plus-icon-container" ref={menuRef}>
          <button 
            className="plus-icon"
            onClick={() => setShowAddMenu(!showAddMenu)}
            aria-label="Add section"
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0123 18.3552C14.6202 18.3552 18.3557 14.6197 18.3557 10.0118C18.3557 5.40391 14.6202 1.66846 10.0123 1.66846C5.4044 1.66846 1.66895 5.40391 1.66895 10.0118C1.66895 14.6197 5.4044 18.3552 10.0123 18.3552Z" stroke="#AAAAAA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.6748 10.0122H13.3495" stroke="#AAAAAA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.0117 6.6748V13.3495" stroke="#AAAAAA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showAddMenu && (
            <div className="add-menu-dropdown">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="add-menu-item"
                  onClick={() => handleAddItem(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default NotificationEditor;