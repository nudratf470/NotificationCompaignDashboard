import React from 'react'
import { Row, Col, Card, Container } from "react-bootstrap";
import send from "../../assets/images/send.svg";
import click from "../../assets/images/click.svg";
import convert from "../../assets/images/convert.svg";
import delivered from "../../assets/images/delivered.svg";
import open from "../../assets/images/open.svg";
import zigzagarrow from "../../assets/images/zigzagarrow.png";
import linearrow from "../../assets/images/linearrow.png";
import reversezigzag from "../../assets/images/reversezigzag.png";
import './Cards.css';

const Cards = () => {
  return (
    <>
<Container fluid className='p-0 m-0'>
    <Row className='compaign-cards my-2 gx-4 gy-3'>
      <Col xs={12} sm={6} md={3} lg={3}>
      <Card className="Content-Card d-flex gap-1">
      <div className="card-heading d-flex justify-content-between">
     <div className="iconbg"> <img src={send} className=''/></div> 
     <div className='arrowbg'><img src={zigzagarrow}/><span>12.5%</span></div>
       </div>
      <h3 className="notificationNumber me-auto">2,156</h3>
      <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>Total Campaigns Sent</h6>
      </Card>
      </Col>

     <Col xs={12} sm={6} md={3}>
      <Card className="Content-Card d-flex gap-1">
      <div className="card-heading d-flex justify-content-between">
     <div className="iconbg"> <img src={delivered} className=''/></div> 
      <div className='arrowbg'><img src={zigzagarrow}/><span>99.9%</span></div>
       </div>
      <h3 className="notificationNumber me-auto">2,143</h3>
      <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>Total Delivered</h6>
      </Card>
      </Col>

       <Col xs={12} sm={6} md={3}>
      <Card className="Content-Card d-flex gap-1">
      <div className="card-heading d-flex justify-content-between">
     <div className="iconbg iconbgPurple"> <img src={open} className=''/></div> 
      <div className='arrowbg'><img src={zigzagarrow}/><span>92.7%</span></div>
       </div>
      <h3 className="notificationNumber me-auto">1,987</h3>
      <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>Avg. Open Rate</h6>
      </Card>
      </Col>

       <Col xs={12} sm={6} md={3}>
      <Card className="Content-Card d-flex gap-1">
      <div className="card-heading d-flex justify-content-between">
     <div className="iconbg iconbgPink"> <img src={linearrow} className=''/></div> 
      <div className='arrowbg iconbgPink'><img src={reversezigzag}/><span>72.1%</span></div>
      </div>
      <h3 className="notificationNumber me-auto">2,143</h3>
      <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>Avg. Click Rate</h6>
      </Card>
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default Cards
