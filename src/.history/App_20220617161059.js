import logo from './logo.svg';
import React from "react";
import { NativeRouter,BrowserRouter as Route, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
        <NativeRouter>
    
            <Route exact path="/" component={Home} />
         
        </NativeRouter>


  );
 

}

export default App;
