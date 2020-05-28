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

const TimeOption = (props) => {

    const opt = [{value : null,label : "Select time",style:{color: '#204969'}}];
    props.times.map(
        (val) =>{
            opt.push({value : val,label : val,style:{color: '#204969'}})
        }
    )

    const handleOption = (selectedOption) => {
        console.log(selectedOption)
        props.handleChange(selectedOption.value);
    }

    return (

        <div>
            <Select id="time_select" onChange={handleOption}
                    options={opt}
                    defaultValue={opt[0]}
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        textAlign:'center',
                        borderRadius: "0px",
                        borderColor: '#204969',
                        textColor: '#204969',
                        colors: {
                            ...theme.colors,
                            primary25: '#91B4CF',
                            primary: '#204969',
                            textColor: '#204969'
                        },
                    })}>
            </Select>
        </div>
    )

};
export default TimeOption;
