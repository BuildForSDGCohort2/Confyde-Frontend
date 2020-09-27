<<<<<<< HEAD
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from './Navbar/NavbarContainer';
import Login from '../pages/Login';
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
					<Redirect from="/" exact to="home" />
				</Switch>

				{/*Importing Banner section */}
				<BannerSection />
				{/*Importing Services section */}
				<Services />
			</div>
		);
	}
=======
import React, { Component } from "react";
import {Route, Redirect, Switch } from "react-router-dom";
import NavbarContainer from "./Navbar/NavbarContainer";
import Login from "../pages/Login";
import BannerSection from "../components/Banner/BannerSection";
import GettingStarted from "./../pages/GettingStarted";
import Services from "./../components/services/Services";
import AskQuestion from "./askQuestion/askQuestion";
import DownloadSection from "./downloadSection/downloadSection";
import Testimonial from "./testimonial/testimonial";
import Blog from "./blog section/blog";
import Footer from "./footer/footer";

class AppContainer extends Component {

    state = {
        pos: document.documentElement.scrollTop,
        imglight: false,
        navClass: "",
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        } else {
            this.setState({ navClass: "", imglight: false });
        }
    };

    render() {
        return (
          <>
            {/*Importing Navbar */}
            <NavbarContainer
              navClass={this.state.navClass}
              imglight={this.state.imglight}
            />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/getting-started" component={GettingStarted} />
              <Redirect from="/" exact to="home" />
            </Switch>

            {/*Importing Banner section */}
            <BannerSection />
            {/*Importing Services section */}
            <Services />
            {/* Importing Ask Question section */}
            <AskQuestion />
            {/* Importing Download section */}
            <DownloadSection />
            {/*Importing Testimonial section */}
            <Testimonial />

            {/* Importing Blog */}
            <Blog />
            {/* Importing Footer */}
            <Footer />
          </>
        );
    }
>>>>>>> f0bf1586a619864ca5c15dd8f9951c4f1feac2c1
}

export default AppContainer;
