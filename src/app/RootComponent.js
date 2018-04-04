import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./login/WelcomePage";
import {authenticationService} from "../service/RegisterLoginService"

export const RootComponent = () => {
    const checkRoute = () => {
        if (!authenticationService.isUserAuthenticated()) {
            return <WelcomePage />
        }
        
        return <App />
    }

     return (
         <Switch>
            
           {checkRoute()}
         </Switch>
     )
};
