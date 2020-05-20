import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";

import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile"

export default function Routes({ appProps }) {

    return (
        <BrowserRouter>
            <Switch>
                <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
                <AppliedRoute path="/" exact component={Home} appProps={appProps} />
                <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
                <AppliedRoute path="/profile" exact component={Profile} appProps={appProps} />
                
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}