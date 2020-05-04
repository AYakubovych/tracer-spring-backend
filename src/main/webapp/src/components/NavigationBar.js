import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap"
import {NavDropdown,FormControl,Button,Form} from "react-bootstrap";
import './NavigationBar.css';

import Routes from "../Routes";

function NavigationBar()  {

    const [isAuthenticated, userHasAuthenticated] = useState(false);

    return (
        <div className="App container">
            <Navbar collapseOnSelect expand="lg" className="color-nav">
                <Navbar.Brand style={{ color: "white" }} href="/">Tracer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        {isAuthenticated
                            ?<>
                                <Nav.Link>Profile</Nav.Link>
                                <NavItem onClick={handleLogout}>Logout</NavItem>
                            </>
                            :
                            <>
                                <Nav.Link href="/login" style={{ color: "white" }}>Log in</Nav.Link>
                                <Nav.Link href="" style={{ color: "white" }}>Create profile</Nav.Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </div>

    );


    function handleLogout() {
        //Logout logic

        userHasAuthenticated(false);
    }

}

export default NavigationBar;