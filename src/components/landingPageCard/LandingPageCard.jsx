import React from "react";
import { Card } from "react-bootstrap";
import "./landingPageCard.css";

const LandingPageCard = ({ image, title, description, price }) => {
  return (
    <>
      <div className="tour-card">
        <div className="card-image-wrapper">
          <div className="card-image-container">
            <Card.Img className="card-image" src={image} />
          </div>
        </div>
        <div className="card-content">
          <Card.Body>
            <h1>{title}</h1>
            <p>{description}</p>
          </Card.Body>
        </div>
      </div>
    </>
  );
};

export default LandingPageCard;
