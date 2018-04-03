import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'
import ImageView from "./postFeed/ImageView";
import MainPage from "./peoplePage/MainPage"
// import ImageViewSingle from "./postFeed/ImageViewSingle";
import VideoView from "./postFeed/VideoView";
import TextView from "./postFeed/TextView";
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
          <Route exact path="/" component={PostPage} />
          <Route exact path='/people' component={MainPage} />
          <Route path="/post/:type/:id" component={SinglePost} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/" component={PostPage} />
        </Switch>

        <Footer />


      </Fragment>
    )
  }
}

export default App;


// import LoginPage from './loginPage/login-page';
// import HomePage from './profilePage/homePage';
// import { authenticationService } from '../services/authenticationService';

// export default class App extends React.Component {
//   render() {
//     return authenticationService.isUserAuthenticated() ? (
//       <HomePage />
//     ) : (
//       <LoginPage />
//     );
//   }
// }

// export default class HomePage extends Component {
//   render() {
//     return (
//       <div className="page-flexbox-wrapper">
//         <Header />
//         <Switch>
//           <Redirect exact from="/" to="/feed" />
//           <Route exact path="/feed" component={Feed} />
//           <Route path="/feed/:type/:singleId" component={SinglePostPage} />
//           <Route exact path="/people" component={People} />
//           <Route path="/people/:id" component={ProfilePage} />
//           <Route path="/profile" component={ProfilePage} />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }

// import { fetchService } from '../services/fetchService';
// import { redirectService } from './redirectService';
// import { SESSION_STORAGE_KEY } from '../constants';

// class AuthenticationService {
//   login(userData, errorHandler) {
//     fetchService.post('login', userData, this.successLogin, error =>
//       errorHandler(error.response.data.error.message)
//     );
//   }

//   register(userData, errorHandler) {
//     fetchService.post('register', userData, this.successRegister, error =>
//       errorHandler(error.response.data.error.message)
//     );
//   }

//   logout() {
//     sessionStorage.removeItem(SESSION_STORAGE_KEY);
//     redirectService.goTo('/');
//   }

//   successLogin(data) {
//     sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
//     redirectService.goTo('/profile');
//   }

//   successRegister() {
//     redirectService.goTo('/login');
//   }

//   isUserAuthenticated() {
//     return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
//   }
// }

// export const authenticationService = new AuthenticationService();