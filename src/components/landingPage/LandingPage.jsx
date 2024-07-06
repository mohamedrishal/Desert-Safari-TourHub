import React from "react";
import "./landingPage.css";
import Banner from '../../assets/Deset Safari video.mp4'
import { Col, Container, Row } from "react-bootstrap";
import LandingPageCard from "../landingPageCard/LandingPageCard";
import card2 from "../../assets/buggy.jpg";
import card1 from "../../assets/IMG_6922.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="banner">
        <video className="banner-video" autoPlay loop muted>
          <source src={Banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <p>SAFARI AND BUGGY TOURS IN DUBAI</p>
          <h1>From Dunes to Delight</h1>
        </div>
      </div>
      <div className="two-cards">
        <Container>
          <Row className="">
            <Col md={6} className="second-align">
              <LandingPageCard
                image={card1}
                title="Safari Tours"
                description="5 tours from AED 169"
                price="169"
              />
            </Col>
            <Col md={6} className="second-align">
              <LandingPageCard
                image={card2}
                title="Buggy Tours"
                description="13 tours from AED 580"
                price="580"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
