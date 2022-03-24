import React from "react";
import './input.css';

function Input(props) {

    const { text, placeholder, onChangeFunction, name, required } = props;

    return (
        <div>
            <p className='input-text'>{text}</p>
            <input type={name === 'price' ? 'number' : 'string'} className='input-myInput' placeholder={placeholder} onChange={onChangeFunction} name={name} required={required} />
        </div>

    )
}

export default Input;