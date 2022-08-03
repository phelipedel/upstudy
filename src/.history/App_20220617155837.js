import logo from './logo.svg';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
    
      <Router>  

        <Route path="/" element={<Home />} />
      </Router>
  );
 

}

export default App;
