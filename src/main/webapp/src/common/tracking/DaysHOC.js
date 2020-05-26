import React, {Component} from "react";
import {getDays} from "../../util/APIUtils";
import DaysOption from "./DaysOption";

class DaysHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            days: []
        };
    }

    /*render*/
    render(){ return <DaysOption days = {this.state.days}
                                 isFetching = {this.state.isFetching}
                                 handleChange = {this.props.handleDayChange}/>;}

    componentDidMount() {
        const i = this.props.index;
        this.fetchDays(i);
    }

    fetchDays (index){
        getDays(index).then(res => {
            this.setState({days : res});
        })
            .catch(e => {
                console.log(e);
            });
    }
}
export default DaysHOC;