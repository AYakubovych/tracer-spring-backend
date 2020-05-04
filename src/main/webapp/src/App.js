import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/NavigationBar";

function App()  {

    const [isAuthenticated, userHasAuthenticated] = useState(false);

    return (
        <NavigationBar></NavigationBar>
    );


    function handleLogout() {
        //Logout logic

        userHasAuthenticated(false);
    }

}

export default App;
