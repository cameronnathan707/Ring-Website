import 'reset-css';
import NavBarScroller from './components/NavBarScroller';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Customizer from './components/Customizer';

const navigation = {
  brand: { name: 'Nathan Cameron Creations', to: '/Ring-Website/#' },
  links: [
    { name: 'Home', to: '/Ring-Website/#' },
    { name: 'Products', to: '/Ring-Website/#/prod' },
    { name: 'Ring Customizer', to: '/Ring-Website/#/cust' },
    { name: 'About Me', to: '/Ring-Website/#/about' },
    { name: 'Contact', to: '/Ring-Website/#/contact' },
  ],
};

function App(): JSX.Element {
  return (
    <div className="App">
      <HashRouter>
        <NavBarScroller brand={navigation.brand} links={navigation.links} />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/prod" exact component={() => <Products />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/cust" exact component={() => <Customizer />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
