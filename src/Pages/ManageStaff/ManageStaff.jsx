import React from 'react'
import Header from '../../Components/Header/Header'
import TemplateListTopBar from '../../Components/TemplateListTopBar/TemplateListTopBar'
import StatusSideBar from '../../Components/StatusSideBar/StatusSideBar'
import DashboardStatus from '../../Components/DashboardStatus/DashboardStatus'
import './ManageStaff.css';
const ManageStaff = () => {
  return (
    <div className='manageStaff'>
      <Header />
      <TemplateListTopBar />
      
      <div className="manageStaff-bodyContainer">
        <div className="manageStaff-sidebar">
          <StatusSideBar />
        </div>

        <div className="manageStaff-dashboard">
          <DashboardStatus />
        </div>
      </div>
    </div>
  )
}

export default ManageStaff
