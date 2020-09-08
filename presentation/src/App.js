import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Nav from './config/Nav'
import Routes from './config/Routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
