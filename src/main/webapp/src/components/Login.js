import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap"
import {NavDropdown,FormControl,Button,Form} from "react-bootstrap";
import './Login.css';

import Routes from "../Routes";

function Login() {

    return (
        <div className="center_block">
            <div className="center_top"></div>
            <div className="center_border">


                <div className="form_block">
                    <form action="login" method="post">
                        <input type="text" name="username" placeholder="${mail}"/>

                            <input type="password" name="password" placeholder="${pass}"/>

                                <button type="submit" className="submit_button">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;