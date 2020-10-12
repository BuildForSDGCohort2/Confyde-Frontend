import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from './Navbar/NavbarContainer';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import BannerSection from '../components/Banner/BannerSection';
import GettingStarted from './../pages/GettingStarted';
import Services from './../components/services/Services';

class AppContainer extends Component {
	state = {
		pos: document.documentElement.scrollTop,
		imglight: false,
		navClass: ''
	};

	componentDidMount() {
		window.addEventListener('scroll', this.scrollNavigation, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollNavigation, true);
	}

	scrollNavigation = () => {
		var scrollup = document.documentElement.scrollTop;
		if (scrollup > this.state.pos) {
			this.setState({ navClass: 'nav-sticky', imglight: false });
		} else {
			this.setState({ navClass: '', imglight: false });
		}
	};

	render() {
		return (
			<div>
				{/*Importing Navbar */}
				<NavbarContainer navClass={this.state.navClass} imglight={this.state.imglight} />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/getting-started" component={GettingStarted} />
					<Route path="/dashboard" component={Dashboard} />
					<Redirect from="/" exact to="home" />
				</Switch>

				{/*Importing Banner section */}
				<BannerSection />
				{/*Importing Services section */}
				<Services />
			</div>
		);
	}
}

export default AppContainer;
