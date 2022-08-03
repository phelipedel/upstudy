import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Nav, Route, Routes, } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Easy from './page/Easy';
import Medium from './page/Medium';
import Hard from './page/Hard';

function App() {
  
      return (
        <Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/easy" element={<Easy />} />
            <Route path="/medium" element={<Medium />} />
            <Route path="/hard" element={<Hard />} />
          </Routes>
        </Nav>

  );
 

}

export default App;
