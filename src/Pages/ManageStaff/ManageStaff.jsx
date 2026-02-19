import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import TemplateListTopBar from '../../Components/TemplateListTopBar/TemplateListTopBar';
import SideBar from '../../Components/SideBar/SideBar';
import DashboardStatus from '../../Components/DashboardStatus/DashboardStatus';
import femaleicon from "../../assets/icons/female-icon.svg";
import human from "../../assets/icons/human.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import cube from "../../assets/icons/cube.svg";
import cartyellow from "../../assets/icons/cartyellow.svg";
import docyellow from "../../assets/icons/docyellow.svg";
import envelop from "../../assets/icons/envelop.svg";

import femaleiconwhite from "../../assets/icons/female-iconwhite.svg";
import humanwhite from "../../assets/icons/humanwhite.svg";
import dashboardwhite from "../../assets/icons/dashboardwhite.svg";
import cubewhite from "../../assets/icons/cubewhite.svg";
import cart from "../../assets/icons/cart.svg";
import docwhite from "../../assets/icons/docwhite.svg";
import envelopwhite from "../../assets/icons/envelopwhite.svg";
import './ManageStaff.css';

const ManageStaff = () => {
   const campaignIcons = [ 
    { src: dashboard, activeSrc:dashboardwhite, alt: "dashboard" },
    { src: cube, activeSrc:cubewhite, alt: "cube" },
    { src: cartyellow, activeSrc:cart, alt: "cart" },
    { src: human, activeSrc:humanwhite, alt: "humanwhite" },
    { src: femaleicon,activeSrc:femaleiconwhite, alt: "femaleicon" },
    { src: envelop, activeSrc:envelopwhite, alt: "envelop" },
    { src: docyellow, activeSrc:docwhite, alt: "docwhite" },
  ];

  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='manageStaff'>
      <Header />
      <TemplateListTopBar />
      
      <div className="manageStaff-bodyContainer">
        <div className="manageStaff-sidebar">
          <SideBar icons={campaignIcons} defaultActive={2}/>
        </div>

        <div className="manageStaff-dashboard">
          <DashboardStatus
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>

      {selectedId && (
        <div className="yellow-next-button">
          <button
            className="next-button"
            onClick={() => navigate("/update-appointment")}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;
