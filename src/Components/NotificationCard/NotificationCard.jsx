import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import send from "../../assets/images/send.svg";
import click from "../../assets/images/click.svg";
import convert from "../../assets/images/convert.svg";
import delivered from "../../assets/images/delivered.svg";
import open from "../../assets/images/open.svg";
import './NotificationCard.css'

const NotificationCard = () => {
  return (
    <Row>
      <Col>
      <Card className="notificationCard d-flex">
    <div className="heading-icon d-flex align-items-baseline justify-content-between"><h6 className="cardHeading">Sent</h6><img src={send}/></div>
      <h3 className="notificationNumber me-auto">2,143</h3>
      <h6 className="smallText me-auto" style={{color: "var(--brand-gray)"}}>Total notifications</h6>
      </Card>
      </Col>

      <Col>
      <Card className="notificationCard d-flex">
       <div className="heading-icon d-flex align-items-baseline justify-content-between"><h6 className="cardHeading">Delivered</h6><img src={delivered}/></div>
      <h3 className="notificationNumber me-auto">2,143</h3>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-green)"}}>99.4%</h6>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-green)"}}>rate</h6>
      </Card>
      </Col>
      

      <Col>
      <Card className="notificationCard d-flex">
       <div className="heading-icon d-flex align-items-baseline justify-content-between"><h6 className="cardHeading">Opened</h6><img src={open}/></div>
      <h3 className="notificationNumber me-auto">1,987</h3>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-purple)"}}>92.7%</h6>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-purple)"}}>rate</h6>
      </Card>
      </Col>

      <Col>
      <Card className="notificationCard d-flex">
       <div className="heading-icon d-flex align-items-baseline justify-content-between"><h6 className="cardHeading">Clicked</h6><img src={click}/></div>
      <h3 className="notificationNumber me-auto">1,432</h3>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-orange)"}}>72.1%</h6>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-orange)"}}>CTR</h6>
      </Card>
      </Col>

      <Col>
      <Card className="notificationCard d-flex">
       <div className="heading-icon d-flex align-items-baseline justify-content-between"><h6 className="cardHeading">Converted</h6><img src={convert}/></div>
      <h3 className="notificationNumber me-auto">1,398</h3>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-bluishgreen)"}}>97.6%</h6>
      <h6 className="smallText me-auto line-tight" style={{color: "var(--brand-bluishgreen)"}}>rate</h6>
      </Card>
      </Col>
    </Row>
  );
};

export default NotificationCard;
