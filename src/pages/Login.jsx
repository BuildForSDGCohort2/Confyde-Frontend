import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'reactstrap';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material/RaisedButton';
function Login() {
	return (
		<div>
			<div>
				<Form className="text-center">
					<section className="hero-section-2" id="">
						<Container>
							<Row className="justify-content-center">
								<Col lg={6} sm={8}>
									<div className="hero-wrapper mb-4">
										<div className="mt-4 rounded">
											<Link
												to="#"
												className="btn btn-primary mt-2 mr-2"
												style={{ borderRadius: '40px', fontSize: '22px' }}
											>
												C
											</Link>
										</div>
										<br />
										<br />
										<h1 className="hero-title mb-4">Login</h1> <br />
										<p>
											Not a doctor?{' '}
											<span className="text-primary">
												<Link to="#" className="mt-2 mr-2 ">
													Register
												</Link>
											</span>
										</p>
										<label>
											<input type="phone" placeholder="Mobile Number" />
											<br />
											<br />

											<input type="password" placeholder="Password" />
											<br />

											<div>
												<input type="checkbox" />
												<p>Remain anonymous</p>
												<br />

												<input type="checkbox" />
												<p>
													By signing up, I agree to{' '}
													<Link to="#" className="text-primary mt-2 mr-2">
														terms
													</Link>
												</p>
											</div>
											<br />

											<div className="mt-4 rounded" />
											<Button variant="contained" color="primary">
												Sign Up
											</Button>
											<br />
											<br />
											<p>
												Have an account?{' '}
												<Link to="#" className="text-primary mt-2 mr-2">
													Sign In
												</Link>
											</p>
										</label>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
				</Form>
			</div>
		</div>
	);
}

export default Login;
