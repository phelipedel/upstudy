import logo from './logo.svg';
import React from "react";
import { BrowserRouter as  Route, Routes,Link } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
        <div>
                  <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </div>
  );
 

}

export default App;
