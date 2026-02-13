import React from 'react'
import moon from "../../assets/images/moon.svg";
import plus from "../../assets/images/plus.svg";
import {Col,Row,Button} from "react-bootstrap";
import './CreateNotificationTopBar.css';

const CreateNotificationTopBar = () => {
  return (
<>
<Row className="top-bar align-items-center mx-0">
  <Col className="d-flex align-items-center gap-4" xs="auto">
  <div className='moon-icon'>
    <img src={moon} alt="moon" />
    </div>
    <h3 className="mb-0 topbar-heading">Create Notification Compaign</h3>
  </Col>
  <Col />
</Row>
    </>
  )
}

export default CreateNotificationTopBar
