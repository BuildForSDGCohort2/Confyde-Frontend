import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import './App.css';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import FindADoctor from './pages/FindADoctor';
import About from "./pages/About";
import Services from "./pages/Services";

//import "./App.css";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";


function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/services" component={Services} />
          <Route path="/find-a-doctor" component={FindADoctor} />
          <Route path="/about-us" component={About}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
