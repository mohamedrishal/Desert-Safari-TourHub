import React from "react";
import "./review.css";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import google from '../../assets/google.png'

function Review() {
  // the card data

  return (
    <section className="review">
      <Container className="mb-3">
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
          <div className="me-auto w-100 mt-3">
            <h2 className="text-white">CUSTOMER REVIEW</h2>
            <hr className="text-secondary" />
          </div>
          <Card
            className="m-2 first-review-container"
            style={{ border: "none" }}
          >
            <Card.Body className="text-center">
              <div className="title-container">
                <img
                  src={google}
                  alt="Google Icon"
                  className="google-icon"
                />
                <h2 className="title">Excellent</h2>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <Card.Text className="description">
                Based on all reviews,
              </Card.Text>
              <a href="#" className="link">
                See all reviews here
              </a>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container className="mb-3">
        <div className="d-flex flex-wrap justify-content-center">
          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>
              <Card.Text className="mt-2">
                <span className="fw-bolder">Best Time I Had In My Trip -</span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>
              <Card.Text className="mt-2">
                <span className="fw-bolder">Amazing Experience - </span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="m-2 review-container"
            style={{ width: "22.5rem", border: "none" }}
          >
            <Card.Body>
              <span className="rating-stars">★★★★</span>
              <Card.Text className="mt-2">
                <span className="fw-bolder">Amazing - </span>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.build on the card title and make
                up
              </Card.Text>
              <div className="d-flex align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHok8rrfE_axzCZBcN64Sx8QAgQMChotANpARaTviIQgex_aCkMuNBeJtRag&s"
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div>
                  <span className="d-block fw-bold">NAVID Z</span>
                  <span className="text-muted">March 15, 2024</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container className="review-container w-75 mb-3">
        <div className="text-center fw-bolder">
          <span>MORE REVIEWS ON TRIP </span>
        </div>
      </Container>

      {/* end Container */}
    </section>
  );
}

export default Review;
