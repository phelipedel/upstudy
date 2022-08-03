import logo from './logo.svg';
import { BrowserRouter, Route,  } from 'react-router-dom';
import Home from './page/Home';

function App() {

      return (
    
      <BrowserRouter>  

        <Route exact path="/" element={<Home />} />
      </BrowserRouter>
  );
 

}

export default App;
