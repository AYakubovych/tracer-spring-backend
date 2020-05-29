import React, {useEffect, useState} from "react";

import axios from 'axios';
import {ACCESS_TOKEN} from "../constants";
import './Profile.css';
import {Nav} from "react-bootstrap";

export default function Profile() {

    const[name,setName] = useState([]);
    const[lastName,setLastName] = useState([]);
    const[email,setEmail] = useState([]);
    //header
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        }};
    useEffect( () => {
        try{
            /*getCurrentUser().then(res => setUser(res.data))
            */
            axios.get('http://localhost:8080/profile',config).then(res => {
                setName(res.data.name);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            });
        }catch (e) {
            console.log(e);
        }
    },[]);

    return(
        <div className="profile_block">
            <div className="block_inside">
                <div className="first_row">
                <div className="personal_data_block">
                    <div className="top">
                        <h4 className="top_text">Personal data</h4>
                    </div>
                    <div className="qq">
                        <h4 className="in_box_text">Name: {name}</h4>
                        <h4 className="in_box_text">Last name: {lastName}</h4>
                        <h4 className="in_box_text">Mail: {email}</h4>
                    </div>
                </div>

                    <div className="map_block">
                        <div style={{marginTop:"120px"}}>
                            <Nav.Link className="tracking_button" href="/tracking">Track</Nav.Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
