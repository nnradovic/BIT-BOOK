import React, { Component, Fragment } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
