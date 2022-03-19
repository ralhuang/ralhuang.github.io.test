import './App.scss';

import React from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        
      </div>
    </Router>
  );
}

export default App;
