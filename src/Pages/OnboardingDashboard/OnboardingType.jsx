import React from 'react'
import Header from '../../Components/Header/Header'
import TopBar from '../../Components/TopBar/TopBar'
import SideBar from '../../Components/SideBar/SideBar'
import BodyContent from '../../Components/BodyContent/BodyContent'
import femaleicon from "../../assets/icons/femaleicon.svg";
import maleicon from "../../assets/icons/maleicon.svg";
import business from "../../assets/icons/business.svg";
import calenderyellow from "../../assets/icons/calenderyellow.svg";
import clipBoard from "../../assets/icons/clipBoard.svg";
import document from "../../assets/icons/document.svg";
import femaleiconwhite from "../../assets/icons/femaleiconwhite.svg";
import maleiconwhite from "../../assets/icons/maleiconwhite.svg";
import calenderwhite from "../../assets/icons/calenderwhite.svg";
import clipboardwhite from "../../assets/icons/clipboardwhite.svg";
import documentwhite from "../../assets/icons/documentwhite.svg";
import businesswhite from "../../assets/icons/businesswhite.svg";

import './onboardingType.css';

const OnboardingType = () => {
  const campaignIcons = [
  { src: calenderyellow, activeSrc:calenderwhite, alt: "calender" },
  { src: femaleicon, activeSrc:femaleiconwhite, alt: "femaleicon" },
  { src: maleicon, activeSrc:maleiconwhite, alt: "maleicon" },
  { src: document, activeSrc:documentwhite, alt: "document" },
  { src: clipBoard, activeSrc:clipboardwhite, alt: "clipBoard" },
  { src: business, activeSrc:businesswhite, alt: "business" },
];
  return (
    <div className='OnboardingType'>
    <Header/>
    <TopBar heading="Dashboard" showButton={true} buttonText="Create New" buttonPath="/manage-staff" />

    <div className="bodyContainer">
      <div className="sidebar">
    <SideBar icons={campaignIcons} defaultActive={0}/>
    </div>
    <div className="bodyContent">
    <BodyContent/>
    </div>
    </div>
    </div>
  )
}

export default OnboardingType
