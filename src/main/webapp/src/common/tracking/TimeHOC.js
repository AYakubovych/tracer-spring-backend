import React, {Component} from "react";
import {getSubTargetInfo, getTimes} from "../../util/APIUtils";
import TimeOption from "./TimeOption";
import DaysOption from "./DaysOption";

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
        console.log(index + " " + day);
        this.fetchTimes(index, day)
    }

    fetchTimes (index,day) {
            this.setState({...this.state, isFetching: true});
            getTimes(index,day).then(res => {
                this.setState({times : res, isFetching: false});
                console.log(res);
            })
                .catch(e => {
                    console.log(e);
                    this.setState({...this.state, isFetching: false});
                });
    }
}
export default TimeHOC;