import React from "react";


import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Music from './Music';
import Photos from './Photos';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';

export default function RoutingApp() {
  return (
    
    <Router>
        <ul>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/home">Home</Link></li> 
        </ul>

          <Route path="/music">
            <Music />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
    </Router>
  )
}






