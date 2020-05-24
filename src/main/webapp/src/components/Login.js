import React, { Component } from "react";
import {ACCESS_TOKEN} from '../constants';
import { Form, Input,notification } from 'antd';
import { login } from '../util/APIUtils';


import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };

    loginLogic = () => {
        const loginRequest = {email: this.state.email, password: this.state.password};
            login(loginRequest)
            .then(res => {
                if (res.accessToken !== null) {
                    localStorage.setItem(ACCESS_TOKEN,res.accessToken);
                    this.afterLogin()
                }
            })
            .catch(error => {
                if (error.status === 401) {
                    notification.error({
                        message: 'Error',
                        description: 'Your Username or Password is incorrect. Please try again!'
                    });
                } else {
                    notification.error({
                        message: 'Error',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                }
            })
    };

    afterLogin(){
        window.location.assign("/profile");
    }

    render() {
        return (
            <div className="center_block">
                <div className="center_top"></div>
                <div className="center_border">

                    <h4 className="text">Fill in the fields</h4>

                    <div className="form_block">
                        <Form method="post">
                            <Input type="text"
                                   name="email"
                                   onChange={this.handleChange}
                                   placeholder="Mail" />

                            <Input type="password"
                                   name="password"
                                   placeholder="Pass"
                                   onChange={this.handleChange}/>

                            <Input type="submit"
                                    className="submit_button"
                                    onClick={this.loginLogic}
                                    value="Submit"/>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;