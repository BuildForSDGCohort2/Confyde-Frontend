import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Images
import secpic from '../../assets/images/undraw2.svg';

class AskQuestions extends Component {
	render() {
		return (
			<div>
				<section className="hero-section-2" id="">
					<Container>
						<Row className="justify-content-center">
							<Col lg={6} sm={8}>
								<div className="hero-img mt-5 mt-lg-0">
									<img src={secpic} alt="" className="img-fluid mx-auto d-block" />
								</div>
							</Col>
							<Col lg={6}>
								<div className="hero-wrapper mb-4">
									<h1 className="hero-title mb-4">Ask a question about any health concern </h1>

									<p>
										Sexual Performance Issues,<br /> Period Issues,<br /> Pregnancy Issues, <br />Skin
										Issues, Children Issues, <br />Psychological Issues.
									</p>

									<div className="mt-4 rounded">
										<Link
											to="#"
											className="btn btn-primary mt-2 mr-2"
											style={{ borderRadius: '20px' }}
										>
											View All Specialties
										</Link>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		);
	}
}

export default AskQuestions;
