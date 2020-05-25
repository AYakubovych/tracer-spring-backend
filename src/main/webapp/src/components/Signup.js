import React, { Component } from "react";
import {Form, Input, notification} from "antd";
import './Signup.css';
import {ACCESS_TOKEN} from "../constants";
import {signup,login} from "../util/APIUtils";


class Signup extends Component{

    constructor(props) {
        super(props);
        this.state = {name:'',lastName:'', email: '', password: ''};
    }
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };
    doSignup = () => {
        const singUpRequest = {email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastName: this.state.lastName
        };
        console.log("doSignup")
        signup(singUpRequest)
            .then(res => {
                console.log(res);
                if(res.success === true){
                    this.afterSignUp();
                }
                this.redirect()
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

    redirect = () =>{
        setTimeout(() => {
            console.log("redirect");
            window.location.assign("/profile");
        },1000)
    }

    afterSignUp = () => {
        console.log("afterSingUp")
        const loginRequest = {email: this.state.email, password: this.state.password};
        login(loginRequest).then(
            res => {
                localStorage.setItem(ACCESS_TOKEN,res.accessToken);
                this.setState({...this.state, isAuthenticated: true});
            });
    };

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
                            <Input type="text"
                                   name="name"
                                   onChange={this.handleChange}
                                   placeholder="Name" />
                            <Input type="text"
                                   name="lastName"
                                   onChange={this.handleChange}
                                   placeholder="Last name" />

                            <Input type="password"
                                   name="password"
                                   placeholder="Password"
                                   onChange={this.handleChange}/>

                            <Input type="submit"
                                   className="submit_button"
                                   onClick={this.doSignup}
                                   value="Submit"/>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;