import 'reset-css';
import NavBarScroller from './components/NavBarScroller';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Customizer from './components/Customizer';

const navigation = {
  brand: { name: 'Nathan Cameron Creations', to: '/' },
  links: [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/prod' },
    { name: 'Ring customizer', to: '/cust' },
    { name: 'About me', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ],
};

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarScroller brand={navigation.brand} links={navigation.links} />
        <Switch>
        <Route path="/" exact component={() => <Home />} />
          <Route path="/prod" exact component={() => <Products />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/cust" exact component={() => <Customizer />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
