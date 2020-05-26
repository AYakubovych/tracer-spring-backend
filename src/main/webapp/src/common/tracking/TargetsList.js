import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {Button} from "react-bootstrap";
import "./TargetList.css";

const TargetsList = (props) => {

    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden',height : '420px'}}>
            <Button className="add_button list_item">+ Add</Button>
            {props.data.map((target,key) => {
                return (<Button key={key}
                                className="list_item"
                                onClick={() => props.onClick(key)}
                >{target.name} {target.lastName}</Button>)
            })}
        </div>
    )
};
export default TargetsList;
