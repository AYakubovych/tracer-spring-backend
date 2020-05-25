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

        this.setState({...this.state, isFetching: true});

        getSubTargetsList().then(res => {
            this.setState({targets: res, isFetching: false})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        });
    }
}

export default TargetListHOC;