import React from "react";

function changeDay(props) {
    var v = document.getElementById("time_select");
    var s = v.options[v.selectedIndex].text;
    props.handleChange(s);
}

const TimeOption = (props) => {

    return (
        <div>
            <select id="time_select" onChange={() => changeDay(props)}>
                <option value="--">Chose time</option>
                { props.times.map((target,key) => {
                    return (<option key={key} value={target}>{target}</option>)

                })}
            </select>
        </div>
    )
};
export default TimeOption;
