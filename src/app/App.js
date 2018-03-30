import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'
import ImageView from "./postFeed/ImageView";
import MainPage from "./peoplePage/MainPage"
// import ImageViewSingle from "./postFeed/ImageViewSingle";
import VideoView from "./postFeed/VideoView";
// import VideoViewSingle from "./postFeed/VideoViewSingle";
import TextView from "./postFeed/TextView";
// import TextViewSingle from "./postFeed/TextViewSingle";

import './App.css';
import SinglePost from './singlePost/SinglePost';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch >
          <Route exact path="/post/:type/:id" component={SinglePost} />
          <Route exact path="/" component={PostPage} />
          <Route exact path='/people' component={MainPage} />
        </Switch >
        <Footer />
      </Fragment>
    );
  }
}

export default App;
