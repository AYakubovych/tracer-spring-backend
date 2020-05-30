import React, {Component} from "react";
import "./Tracking.css"

import TargetListHOC from "../common/tracking/TargetListHOC"
import TargetInfoHOC from "../common/tracking/TargetInfoHOC";
import DaysHOC from "../common/tracking/DaysHOC";
import TimeHOC from "../common/tracking/TimeHOC";
import {getLocation} from "../util/APIUtils";
import MapHOC from "../common/tracking/MapHOC";
import {Input} from "antd";

export class Tracking extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            day: '',
            time:'',
            clicker : -1,
            isMarkerShow : false,
            lng : 0.0,
            lat : 0.0
        };
    }

    handleListClick(index){
        this.setState(state =>({day : '',time : '',index : index}));
    }

    setDay(day){
        {/*clicker need to fix bug with same day value re-render*/}
        this.setState(state =>({clicker: this.state.clicker-1,time : '',day : day}));
    }

    setTime(time){
        this.setState(state => ({time : time}));
    }

    /*Marker button handler*/
    handleButtonClick(){
        if(this.state.day != null && this.state.time != null){
            this.setState(state => ({isMarkerShow : true}))
            this.fetchLocation()
        }else{
            this.setState(state => ({isMarkerShow : false}))
        }
    }

    fetchLocation() {
        getLocation(this.state.index,this.state.day,this.state.time)
            .then(res => {
                this.setState({lng: res.longitude, lat : res.latitude})
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="tracking_block">
                <div className="inside_block">
                    <div className="left_wrap">
                        <div className="main_left">
                            <TargetInfoHOC key={this.state.index}
                                           index={this.state.index}/>
                        </div>
                        {/*end of main_left div*/}
                        <div className="target_list">
                            <div className="top">
                                <h4 className="top_text">Target's list</h4>
                            </div>
                            <TargetListHOC onClick = {this.handleListClick.bind(this)}/>
                        </div>
                        {/*Marker div*/}
                        <div className="marker_div">
                            <div className="top">
                                <h4 className="top_text">Marker</h4>
                            </div>
                            <div >
                                <DaysHOC key={this.state.index}
                                         index={this.state.index}
                                         handleDayChange={this.setDay.bind(this)}/>
                                <TimeHOC key={this.state.clicker}
                                         day={this.state.day}
                                         index={this.state.index}
                                         handleTimeChange={this.setTime.bind(this)}/>
                                <Input type="submit"
                                       className="submit_button"
                                       onClick={() => this.handleButtonClick()}
                                       value="Set marker"
                                       style={{marginTop:'20px'}}/>
                            </div>
                        </div>
                    </div>
                    {/*Map*/}
                    <div style={{width: '580px', float:'right'}}>
                        <MapHOC key={this.state.lat}
                                isMarkerShow={this.state.isMarkerShow}
                                lat={this.state.lat}
                                lng={this.state.lng}/>
                    </div> {/*end of map div*/}
                </div>
            </div>
        );
    }
}

export default Tracking;