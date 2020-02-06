import React from 'react';
import './App.css';
import Header from './Photos';
import Footer from './AboutMe';
import Article from './Blog';
import CoolComponent from './Contact';
import Welcome from './Music';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const linkNames = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Blog',
    path: '/blog'
  },
  {
    text: 'Music',
    path: '/music'
  },
  {
    text: 'Photos',
    path: '/photos'
  },
  {
    text: 'Contact',
    path: '/contact'
  }
];

function App() {
return (
    <Router>
      <Header title={websiteTitle} />
      <Nav 
        links={linkNames}
      />

      <Switch>
        
        <Route path="/blog">
          <Blog />
        
        </Route>
        
        <Route path="/music">
          <Music />
        </Route>
        
        <Route path="/photos">
          <Photos />
        
          <Route path="/contact">
          <Contact />
        
          <Route path="/aboutme">
          <AboutMe />
        
        <Route path="/">
          <Home />
        
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
