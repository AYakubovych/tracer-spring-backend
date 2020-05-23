import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";
import {ProtectedRoute} from "./components/ProtectedRoute";

import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile"
import Tracking from "./components/Tracking";

export default function Routes({ appProps }) {

    return (
        <BrowserRouter>
            <Switch>
                <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
                <AppliedRoute path="/" exact component={Home} appProps={appProps} />
                <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
                <ProtectedRoute path="/profile" exact component={Profile} appProps={appProps} />
                <ProtectedRoute path="/tracking" exact component={Tracking} appProps={appProps} />

                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </BrowserRouter>
    );
}