import './App.scss';

import React from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <div className="content">
        
      </div>
    </Router>
  );
}

export default App;
