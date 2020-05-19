import React, {Component, useState} from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";



class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick({ key }) {
        if(key === "logout") {
            this.props.onLogout();
        }
    }
    render(){
    return (
        <div className="App container">
            <Navbar collapseOnSelect expand="lg" className="color-nav">
                <Navbar.Brand style={{ color: "white" }} href="/">Tracer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        {this.props.isAuthenticated
                            ?<>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <NavItem onClick={this.state.handleLogout()}>Logout</NavItem>
                            </>
                            :
                            <>
                                <Nav.Link href="/login" style={{ color: "white" }}>Log in</Nav.Link>
                                <Nav.Link href="/signup" style={{ color: "white" }}>Create profile</Nav.Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
    }

}

export default NavigationBar;