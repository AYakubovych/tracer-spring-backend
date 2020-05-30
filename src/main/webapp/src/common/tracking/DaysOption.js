import React from "react";
import Select from "react-select";

const customStyles = {
    control: base => ({
        ...base,
        height: 45,
        minHeight: 45,
        borderRadius:'0px',
        borderTop:'0px',
        borderLeft:'0px',
        borderRight:'0px',
        borderColor: '#204969',
        textColor: '#204969'
    }),
    valueContainer: base=>({
        ...base,
        height:45
    })
};

const DaysOption = (props) => {
    const sorted = [...new Set(props.days)];
    const opt = [{value : null,label : "Select day"}];

    sorted.map(
        (val) =>{
            opt.push({value : val,label : val})
        }
    );

    const handleOption = (selectedOption) => {
        console.log(selectedOption)
        props.handleChange(selectedOption.value);
    };

    return (

        <div>
            <Select id="day_select" onChange={handleOption}
                options={opt}
                defaultValue={opt[0]}
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: '#91B4CF',
                            primary: '#204969',
                            textColor: '#204969'
                        },
                    })}>
                {/*<option value="--">Chose day</option>
                { sorted.map((target,key) => {
                    return (<option key={key} value={target}>{target}</option>)
                })}*/}
            </Select>
        </div>
    )
};
export default DaysOption;
