import React, { Component } from "react";
import {getCurrentUser} from "../util/APIUtils";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {name: '',lastName:'',email:''};
        console.log("asd");
        this.handleUser();
    }

    handleUser = () => {
        getCurrentUser().then(
            res => {
                console.log(res);
                this.state.name = res.name;
                this.state.lastName = res.lastName;
                this.state.email = res.email;
            })
    };

    render() {
        return(
            <div class = "center_block">
                <div class="center_top"></div>
                <div class = "center_border">
                    <div class="text_box">

                        <h4 class="in_box_text">Personal data</h4>
                        <h4 class="in_box_text">Name: {this.state.name}</h4>
                        <h4 class="in_box_text">Last name: {this.state.lastName}</h4>
                        <h4 class="in_box_text">Mail: {this.state.email}</h4>


                    </div>
                </div>
            </div>
        );
    }

}
export default Profile;