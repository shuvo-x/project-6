import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Connection from './Connection';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    
    
    <Router>
   <Navbar />
      <Switch>
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
        <Connection />
      </Switch>
     <Footer />
    </Router>
    
    
    
    </>
  );
}

export default App;
