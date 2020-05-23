import React, {Component, useEffect, useState} from "react";
import {ACCESS_TOKEN} from "../constants";
import axios from "axios";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {GOOGLE_API_KEY} from "../constants";
import "./Tracking.css"

export class Tracking extends Component{


    render() {
        return (
            <div className="block">
                <div className="inside_block">
                    <div className="left_wrap">
                        <div className="main_left">
                            <div className="top">
                                <h4 className="top_text">Current target</h4>
                            </div>
                            <div className="target_img"></div>
                            <div className="data">
                                { /*<input type="image" src="${pageContext.request.contextPath}/images/settings.png"
                                onClick="location.href = '/profile';" width="24" height="24"
                                alt="Settings"> */}
                                <h4 className="data_text">Name:</h4>
                                <h4 className="data_text">Surname</h4>
                                <h4 className="data_text">Email</h4>
                                <h4 className="data_text">Phone</h4>
                            </div>
                        </div> {/*end of main_left div*/}

                            <div className="target_list">
                                <div className="top">
                                    <h4 className="top_text">Target's list</h4>
                                </div>
                                {/**/}
                            </div>
                            <div className="marker_div">
                                <div className="top">
                                    <h4 className="top_text">Marker</h4>
                                </div>
                                {/**/}
                            </div>

                        </div>

                    <div style={{width: '580px', float:'right'}}>
                        <Map google={this.props.google}
                             style={{width: '588px',
                                 height: '826px',
                                 position: 'absolute',
                                 right: '1px',
                                 borderWidth:'thin',
                                 borderStyle:'solid',
                                 borderColor:'#204969',
                                 borderRadius: '13px',
                                 marginTop: '16px'}}
                             initialCenter={{
                                 lat: 52.425962,
                                 lng: 18.670546
                             }}zoom={4}>


                            <InfoWindow onClose={this.onInfoWindowClose}>

                            </InfoWindow>
                        </Map>
                    </div> {/*end of map div*/}
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
})(Tracking)