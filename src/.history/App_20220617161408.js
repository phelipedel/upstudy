import logo from './logo.svg';
import React from "react";
import { BrowserRouter as  Route, Routes, } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
 

}

export default App;
