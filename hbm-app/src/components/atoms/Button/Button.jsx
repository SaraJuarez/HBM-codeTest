import React from 'react';
import './button.css';


function Button(props) {
    const { text, onClickFunction } = props;

    return (
        <div onClick={onClickFunction} className='button-container'>
            <p className='button-text'>{text}</p>
        </div>
    )
}

export default Button;