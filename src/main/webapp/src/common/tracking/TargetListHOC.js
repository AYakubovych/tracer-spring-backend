import TargetsList from "./TargetsList";
import React ,{Component} from "react";
import {getSubTargetsList} from "../../util/APIUtils";

class TargetListHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            targets: []
        };
    }
    render = () => < TargetsList data = {this.state.targets}
                                 isFetching = {this.state.isFetching}
                                 onClick = {this.props.onClick}
    />;

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        getSubTargetsList().then(res => {
            this.setState({targets: res})
        })
        .catch(e => {
            console.log(e);
        });
    }
}

export default TargetListHOC;