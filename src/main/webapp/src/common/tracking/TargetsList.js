import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {Button} from "react-bootstrap";

const TargetsList = (props) => {

    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden',height : '420px'}}>

            {props.data.map((target,key) => {
                return (<Button key={key} style={{width: '283px',backgroundColor:'white',color:'#204969',borderColor:'#204969'}}
                                onClick={() => props.onClick(key)}
                >{target.name} {target.lastName}</Button>)

            })}
        </div>


    )
};
export default TargetsList;
