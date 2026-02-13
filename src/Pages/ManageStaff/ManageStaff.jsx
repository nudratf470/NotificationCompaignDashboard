import React from 'react'
import Header from '../../Components/Header/Header'
import TemplateListTopBar from '../../Components/TemplateListTopBar/TemplateListTopBar'
import StatusSideBar from '../../Components/StatusSideBar/StatusSideBar'
import DashboardStatus from '../../Components/DashboardStatus/DashboardStatus'
import './ManageStaff.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageStaff = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className='manageStaff'>
      <Header />
      <TemplateListTopBar />
      
      <div className="manageStaff-bodyContainer">
        <div className="manageStaff-sidebar">
          <StatusSideBar />
        </div>

             <div className="manageStaff-dashboard">
          <DashboardStatus
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>

      {selectedId && (
        <div class="yellow-next-button">
        <button className="next-button" onClick={() => navigate("/update-appointment")}>
          Next
        </button>
        </div>
      )}
    </div>
  )
}

export default ManageStaff
