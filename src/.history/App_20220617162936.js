import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Nav, Route, Routes, } from 'react-router-dom';
import Home from './page/Home';

function App() {
  
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

  );
 

}

export default App;
