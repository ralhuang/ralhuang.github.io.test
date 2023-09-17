import React from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar.js';
import { Hero } from './components/Hero/Hero.js';

import { Projects } from './pages/projects.js';
import { Resume } from './pages/resume.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <div id='top-scroll' className="content scroll-smooth">
        <section>
          <Hero/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Resume/>
        </section>
      </div>
      
      
    </Router>
  );
}

export default App;
