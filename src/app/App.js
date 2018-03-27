import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PostPage />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
