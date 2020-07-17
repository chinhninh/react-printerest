import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="printerest">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
