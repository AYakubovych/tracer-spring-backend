import React, {Component} from "react";
import TargetInfo from "./TargetInfo";
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
        this.setState({...this.state, isFetching: true});
        getDays(index).then(res => {
            this.setState({days : res, isFetching: false});
        })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    }
}
export default DaysHOC;