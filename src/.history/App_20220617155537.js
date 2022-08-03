import logo from './logo.svg';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
        <BrowserRouter>
            <Router>  

            <Route path="/" element={<Home />} />
            </Router>
        </BrowserRouter>
  );
 

}

export default App;
