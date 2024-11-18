import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import ProductDetail from './components/ProductDetail';
import Homepage from './components/Homepage';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import MultipleItems from './components/Slider/index'

import 'aos/dist/aos.css';
import './fonts.css';

function NotFoundPage() {
  return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
  );
}


function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }, []);

  return (
      <Router basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/ShopPage">ShopPage</Link>
              <br />
              <Link to="/ProductDetail">ProductDetail</Link>
              <br />
              <Link to="/Homepage">Homepage</Link>
            </div>
          </Route>

          <Route exact path="/ShopPage" component={ShopPage} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/aboba" component={MultipleItems} />

          {/* Обработчик для всех несуществующих маршрутов */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
  );
}

export default App;
