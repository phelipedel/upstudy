import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
    
      <Router>  
        <Switch>
          <Route path="/" element={<Home />} /> 
        </Switch>
        
      </Router>
  );
 

}

export default App;
