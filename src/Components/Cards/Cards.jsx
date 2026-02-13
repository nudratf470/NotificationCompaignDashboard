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
        <Row className='compaign-cards gx-3 gx-md-4 gy-3'>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="Content-Card d-flex gap-1">
              <div className="card-heading d-flex justify-content-between">
                <div className="iconbg Blue">
                  <img src={send} alt="Send icon" />
                </div> 
                <div className='arrowbg'>
                  <img src={zigzagarrow} alt="Trend arrow" />
                  <span>12.5%</span>
                </div>
              </div>
              <h3 className="notificationNumber me-auto">2,156</h3>
              <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>
                Total Campaigns Sent
              </h6>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="Content-Card d-flex gap-1">
              <div className="card-heading d-flex justify-content-between">
                <div className="iconbg Green">
                  <img src={delivered} alt="Delivered icon" />
                </div> 
                <div className='arrowbg'>
                  <img src={zigzagarrow} alt="Trend arrow" />
                  <span>99.9%</span>
                </div>
              </div>
              <h3 className="notificationNumber me-auto">2,143</h3>
              <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>
                Total Delivered
              </h6>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="Content-Card d-flex gap-1">
              <div className="card-heading d-flex justify-content-between">
                <div className="iconbg iconbgPurple">
                  <img src={open} alt="Open icon" />
                </div> 
                <div className='arrowbg'>
                  <img src={zigzagarrow} alt="Trend arrow" />
                  <span>92.7%</span>
                </div>
              </div>
              <h3 className="notificationNumber me-auto">1,987</h3>
              <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>
                Avg. Open Rate
              </h6>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="Content-Card d-flex gap-1">
              <div className="card-heading d-flex justify-content-between">
                <div className="iconbg iconbgPink">
                  <img src={linearrow} alt="Click icon" />
                </div> 
                <div className='arrowbg iconbgPink'>
                  <img src={reversezigzag} alt="Trend arrow" />
                  <span>72.1%</span>
                </div>
              </div>
              <h3 className="notificationNumber me-auto">2,143</h3>
              <h6 className="paragraphText me-auto" style={{color: "var(--brand-gray)"}}>
                Avg. Click Rate
              </h6>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cards