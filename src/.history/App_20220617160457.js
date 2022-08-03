import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
    
      <Router>  

        <Route exact path="/home" element={<Home />} />
      </Router>
  );
 

}

export default App;
