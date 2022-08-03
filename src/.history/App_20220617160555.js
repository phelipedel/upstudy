import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes,  } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
    
      <Router>  

        <Routes exact path="/" element={<Home />} />
      </Router>
  );
 

}

export default App;
