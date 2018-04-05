import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./login/WelcomePage";
import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute'


export class RootComponent extends Component {


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={GuestRoute(WelcomePage)} />
                    <Route path="/" component={UserRoute(App)} />
                </Switch>
            </Fragment>

            //    <Switch>
            //    {checkRoute()}
            //    </Switch>

        )
    }
};
