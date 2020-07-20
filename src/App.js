import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import DetailImage from './pages/detailImage/DetailImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="printerest">
          <Header />

          <Switch>
            <Route path="/detail-image">
              <DetailImage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>

      </Router>
    );
  }
}

export default App;
