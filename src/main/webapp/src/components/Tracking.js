import React, {Component} from "react";
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_API_KEY} from "../constants/mapKey";
import "./Tracking.css"

import TargetListHOC from "../common/tracking/TargetListHOC"
import TargetInfoHOC from "../common/tracking/TargetInfoHOC";
import DaysHOC from "../common/tracking/DaysHOC";
import TimeHOC from "../common/tracking/TimeHOC";
import {getLocation} from "../util/APIUtils";

export class Tracking extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            day: '',
            time:'',
            clicker : -1
        };
    }

    handleListClick(index){
        this.setState(state =>({day : ''}));
        this.setState(state =>({time : ''}));
        this.setState(state =>({index : index}));
    }

    setDay(day){
        {/*clicker need to fix bug with same day value re-render*/}
        this.state.clicker--;
        this.setState(state =>({time : ''}));
        this.setState(state =>({day : day}));
    }

    setTime(time){
        this.setState(state => ({time : time}));
    }

    /*Marker button handler*/
    handleButtonClick(){
        const index = this.state.index;
        const day = this.state.day;
        const time = this.state.time;
        const longitude = '';
        const latitude = '';

        if(day.length > 0 && time.length > 0){
            getLocation(index,day,time).then(
                (res) => console.log(res)
            ).catch(e => {
                console.log(e);
            });
        }
    }

    render() {
        return (
            <div className="block">
                <div className="inside_block">
                    <div className="left_wrap">
                        <div className="main_left">
                            <TargetInfoHOC key={this.state.index}
                                           index={this.state.index}/>
                        </div> {/*end of main_left div*/}

                            <div className="target_list">
                                <div className="top">
                                    <h4 className="top_text">Target's list</h4>
                                </div>
                                <TargetListHOC onClick = {this.handleListClick.bind(this)}/>
                            </div>
                            <div className="marker_div">
                                <div className="top">
                                    <h4 className="top_text">Marker</h4>
                                </div>
                                <DaysHOC key={this.state.index}
                                         index={this.state.index}
                                         handleDayChange={this.setDay.bind(this)}/>
                                <TimeHOC key={this.state.clicker}
                                         day={this.state.day}
                                         index={this.state.index}
                                         handleTimeChange={this.setTime.bind(this)}/>
                                <button onClick={() => this.handleButtonClick()}>Test</button>

                            </div>

                        </div>
                    {/*Map*/}
                    <div style={{width: '580px', float:'right'}}>
                        <Map google={this.props.google}
                             style={{maxWidth: '588px',
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


                            {/*<InfoWindow onClose={this.onInfoWindowClose}>

                            </InfoWindow>*/}
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