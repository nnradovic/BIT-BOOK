import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import PostPage from "./postFeed/PostPage";

class App extends Component {
  render() {
    return (
      <PostPage />
    );
  }
}

export default App;
