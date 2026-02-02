import React from 'react'
import PerformanceChart from '../Graph/PerformanceChart';
import Cards from '../Cards/Cards';
import {Container} from "react-bootstrap";
import './BodyContent.css';
import NotificationPreview from '../NotificationPreview/NotificationPreview';
import AppointmentUpdatedSchedule from '../AppointmentUpdatedSchedule/AppointmentUpdatedSchedule';


const BodyContent = () => {
  return (
    <>
      <Cards/>
      <PerformanceChart/>
      <div className='preview-cards my-4'>
        <div className='NotificationPreview'>
          <h4>Push Notification Preview</h4>
          <NotificationPreview/>
        </div>

         <div className='NotificationPreview'>
          <h4>In-App Message Preview</h4>
          <AppointmentUpdatedSchedule/>
        </div>
      </div>
    </>
  )
}

export default BodyContent
