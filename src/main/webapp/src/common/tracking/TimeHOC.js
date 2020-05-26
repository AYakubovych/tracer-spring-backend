import React, {Component} from "react";
import {getTimes} from "../../util/APIUtils";
import TimeOption from "./TimeOption";

class TimeHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            times: []
        };
    }

    /*render*/
    render(){ return <TimeOption times={this.state.times}
                                 isFetching = {this.state.isFetching}
                                 handleChange = {this.props.handleTimeChange}/>;}

    componentDidMount() {
        const day = this.props.day;
        const index = this.props.index;
        this.fetchTimes(index, day)
    }

    fetchTimes (index,day) {
        getTimes(index,day).then(res => {
            this.setState({times : res});
        }).catch(e => {
            console.log(e);
        });
    }
}
export default TimeHOC;