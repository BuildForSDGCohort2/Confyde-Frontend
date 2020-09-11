import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import homeImg from "../../assets/images/home-img.png";

class BannerSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="hero-wrapper mb-4">
                 
                  <h3 className="hero-title mb-4">
                    We are the leading healthcare soltion in Africa{" "}
                    <span className="text-primary">Confyde</span>
                  </h3>

                  <p>
                    Get Affordable quality health care. Speak to a doctor.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary mt-2 mr-2">
                      Geting Started
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} sm={8}>
                <div className="home-img mt-5 mt-lg-0">
                  <img
                    src={homeImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default BannerSection;
