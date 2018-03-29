import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'
import ImageView from "./postFeed/ImageView";
// import ImageViewSingle from "./postFeed/ImageViewSingle";
import VideoView from "./postFeed/VideoView";
// import VideoViewSingle from "./postFeed/VideoViewSingle";
import TextView from "./postFeed/TextView";
// import TextViewSingle from "./postFeed/TextViewSingle";

import './App.css';
import SinglePost from './singlePost/SinglePost';
// /post/text/234
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch >
          <Route path="/post/:type/:id" component={SinglePost} />

          <Route path="/" component={PostPage} />

        </Switch >
        <Footer />
      </Fragment>
    );
  }
}

export default App;
