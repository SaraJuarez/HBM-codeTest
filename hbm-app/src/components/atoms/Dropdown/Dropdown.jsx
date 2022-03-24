import React from "react";
import './dropdown.css';

function Dropdown(props) {
    const { changeFunction, text,pageDefaultValue, itemsDefaultValue  } = props;
    let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]

    return (
        <div>
            <label className='dropdown-title'>{text}</label>
            <select className='dropdown-select' onChange={changeFunction}>
                {options.length > 0 && options.map((element, index) => {
                    return <option selected={element === pageDefaultValue || element === itemsDefaultValue} key={index} value={element}>{element}</option>
                })}
            </select>
        </div>

    )
}

export default Dropdown;