import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  notification } from 'antd';
import './NavigationBar.css';
import Routes from "./Routes";
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import NavigationBar from "./components/NavigationBar";
import {Helmet} from "react-helmet";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        notification[notificationType]({
            message: 'Tracer',
            description: description,
        });
    }

    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        window.location.assign("/");
    }

    render(){
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #F2F2F2; }'}</style>
                </Helmet>
                <NavigationBar appProps={this.state.isAuthenticated} onLogin={this.handleLogin}/>
                <Routes appProps = {this.state.isAuthenticated}/>
            </div>
        );
    }
}
export default App;
