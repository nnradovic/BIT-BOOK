import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'

import MainPage from "./peoplePage/MainPage"


import './App.css';
import SinglePost from './singlePost/SinglePost';
import MyProfile from './profile/MyProfile';
import Profile from './profile/Profile';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/post/:type/:id" component={SinglePost} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path='/people' component={MainPage} />
          <Route exact path="/profile" component={MyProfile} />
          <Route exact path="/" component={PostPage} />
        </Switch>

        <Footer />


      </Fragment>
    )
  }
}

export default App;


