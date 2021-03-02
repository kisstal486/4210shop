import React from 'react';
import './Components/MainPage'
import './Stylesheets/Common.css';
import './Stylesheets/home.css';
import './Stylesheets/category.css'
import './Stylesheets/product.css';
import MainPage from './Components/MainPage';
import Category from './Components/Category';
import Product from './Components/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class Web extends React.Component {
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route exact path = "/" render={(props) => <MainPage {...props} />}></Route>
          <Route exact path = "/category=:cat" render={(props) => <Category {...props} />}></Route>
          <Route exact path = "/category=:cat/product=:id" render={(props) => <Product {...props} />}></Route>
        </Switch>
      </Router>
     );
  }
}

export default Web;
