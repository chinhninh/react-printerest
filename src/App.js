import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import DetailImage from './pages/detailImage/DetailImage';
import Loading from './components/loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux';
import ScrollToTopRoute from './components/scrollToTopRoute/ScrollToTopRoute';

class App extends Component {
  render() {
    const {dataSearchImage,loadingSearchImage} = this.props;
    // console.log("loading: ",dataSearchImage)
    const body = (
      loadingSearchImage ? <Loading/> : <Home />
    )
    return (
      <Router>
        <div className="printerest">
          <Header />

          <Switch>
            <ScrollToTopRoute path="/detail-image">
              <DetailImage />
            </ScrollToTopRoute>
            <ScrollToTopRoute path="/search">
             {body}
            </ScrollToTopRoute>
            <ScrollToTopRoute path="/">
             <div></div>
            </ScrollToTopRoute>
          </Switch>

        </div>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingSearchImage: state.searchImage.loading,
    dataSearchImage: state.searchImage.data
  }
}

const maDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps,maDispatchToProps)(App);
