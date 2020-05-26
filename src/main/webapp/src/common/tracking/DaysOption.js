import React from "react";

function changeDay(props) {
    var v = document.getElementById("day_select");
    var s = v.options[v.selectedIndex].text;
    props.handleChange(s);
}
const DaysOption = (props) => {
    const sorted = [...new Set(props.days)];

    return (
        <div>
            <select id="day_select" onChange={() => changeDay(props)}>
                <option value="--">Chose day</option>
                { sorted.map((target,key) => {
                    return (<option key={key} value={target}>{target}</option>)
                })}
            </select>
        </div>
    )
};
export default DaysOption;
