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
            <Route path="/detail-image">
              <DetailImage />
            </Route>
            <Route path="/search">
             {body}
            </Route>
            <Route path="/">
             <div></div>
            </Route>
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
