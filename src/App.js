import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="topnav">
        <div class="buttons">

        </div>

          <Link to="/">Home</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/resume">Resume</Link>

      </div>
      <div class="content">

      </div>
    </Router>
  );
}

export default App;
