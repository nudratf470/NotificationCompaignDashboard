import React from 'react'
import Header from '../../Components/Header/Header'
import TopBar from '../../Components/TopBar/TopBar'
import SideBar from '../../Components/SideBar/SideBar'
import BodyContent from '../../Components/BodyContent/BodyContent'
import './onboardingType.css';

const OnboardingType = () => {
  return (
    <div className='OnboardingType'>
    <Header/>
    <TopBar/>
    <div className="bodyContainer">
      <div className="sidebar">
    <SideBar/>
    </div>
    <div className="bodyContent">
    <BodyContent/>
    </div>
    </div>
    </div>
  )
}

export default OnboardingType
