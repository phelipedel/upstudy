import logo from './logo.svg';
import React from "react";
import { NativeRouter,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </NativeRouter>
        

  );
 

}

export default App;
