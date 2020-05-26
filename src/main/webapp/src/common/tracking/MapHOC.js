import React, {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import {GOOGLE_API_KEY} from "../../constants/mapKey";

class MapHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng : 18.670546,
            lat : 52.425962,
            zoom : 4
        };
    }
    render = () => <Map
        google={this.props.google}
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
            lat: this.state.lat,
            lng: this.state.lng
        }}zoom={this.state.zoom}>

        {this.props.isMarkerShow && <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />}
    </Map>
    static getDerivedStateFromProps(props,state){
        console.log(props.lng + " " + props.lat)
        if(props.isMarkerShow){
           return  {lat : props.lat,lng : props.lng,zoom : 14}
        }else return null;
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
})(MapHOC)