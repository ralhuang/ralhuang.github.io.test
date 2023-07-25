import React from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Hero/>
        <Projects/>
        <Resume/>
      </div>
      
      
    </Router>
  );
}

export default App;
