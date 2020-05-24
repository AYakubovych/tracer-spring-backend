import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {Button} from "react-bootstrap";

const TargetsList = (props) => {
    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden',height : '420px'}}>

            {props.data.map((target) => {
                return (<Button style={{width: '283px',backgroundColor:'white',color:'#204969',borderColor:'#204969'}}
                                onClick={() => props.onClick(target.id)}
                >{target.name} {target.lastName}</Button>)

            })}
        </div>


    )
};
export default TargetsList;
