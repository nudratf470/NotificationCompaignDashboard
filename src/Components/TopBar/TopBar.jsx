import React from 'react'
import moon from "../../assets/images/moon.svg";
import plus from "../../assets/images/plus.svg";
import {Col,Row,Button} from "react-bootstrap";
import './TopBar.css';

const TopBar = () => {
  return (
<>
<Row className="top-bar align-items-center mx-0">
  <Col className="d-flex align-items-center gap-4" xs="auto">
  <div className='moon-icon'>
    <img src={moon} alt="moon" />
    </div>
    <h3 className="mb-0 topbar-heading">Dashboard</h3>
  </Col>
  <Col />
  <Col xs="auto">
    <Button className="yellowButton d-flex align-items-center gap-2">
      <img src={plus} className="plusIcon" alt="plus" />
      <span>Create New</span>
    </Button>
  </Col>
</Row>
    </>
  )
}

export default TopBar
