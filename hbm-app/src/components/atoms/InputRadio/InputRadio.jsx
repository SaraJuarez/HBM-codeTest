import React from "react";
import './inputRadio.css';

function InputRadio(props) {
    const { onChangeInput, label, name, checked = false } = props;

    return (
        <div className='newProduct-inputRadio'>
            <input onChange={onChangeInput} type='radio' value={name} name={name} checked={checked} />
            <label className='inputRadio-text'>{label}</label>
        </div>
    )
}

export default InputRadio;
