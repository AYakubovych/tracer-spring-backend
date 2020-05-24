import React from "react";
import {Route,Redirect} from "react-router-dom";
import {ACCESS_TOKEN} from "../constants";

export const  ProtectedRoute = ({component: C,...appProps}) => {
    return (


        <Route {...appProps} render={
            (props) => {
                if(localStorage.getItem(ACCESS_TOKEN) !== null){
                    return   <C {...props} />
                }else{
                    return ( <Redirect to={
                        {
                        pathname: "/",
                        state: {
                            from: props.location
                        }

                        }
                    }/>
                    ); //end of return
                    }
            }

        }/>
    )
}