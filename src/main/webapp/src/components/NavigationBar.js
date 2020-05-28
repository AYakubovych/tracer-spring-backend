import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {ACCESS_TOKEN} from "../constants";



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

    handleLogout(){
        localStorage.clear();
        window.location.assign("/");
        this.setState({...this.state, isAuthenticated: false})
    }

    render(){
    return (
        <div className="App container">
            <Navbar collapseOnSelect expand="lg" className="color-nav" style={{minWidth:'1280px',marginLeft: '-80px',fontSize: '18px',}}>
                <Navbar.Brand style={{ color: "white" }} href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        {localStorage.getItem(ACCESS_TOKEN) !== null
                            ?<>
                                <Nav.Link href="/profile" style={{ color: "white" }}>Profile</Nav.Link>
                                <Nav.Link onClick={() => this.handleLogout()} style={{ color: "white" }}>Logout</Nav.Link>
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