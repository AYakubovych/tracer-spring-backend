import React, {Component} from "react";
import TargetsList from "./TargetsList";
import {getSubTargetInfo} from "../../util/APIUtils";
import TargetInfo from "./TargetInfo";

class TargetInfoHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            info: []
        };
    }

    /*render*/
    render(){ return< TargetInfo info = {this.state.info} isFetching = {this.state.isFetching}/>;}

    componentDidMount() {
        const i = this.props.index;
        this.fetchInfo(i);
    }

    fetchInfo (index){
        this.setState({...this.state, isFetching: true});
        getSubTargetInfo(index).then(res => {
            this.setState({info : res, isFetching: false});
        })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    }
}
export default TargetInfoHOC;