import React from "react";
import './alert.css';

function Alert(props) {
    const { text } = props;
    let textMessages = {
        name: 'nombre',
        description: 'descripción',
        price: 'precio',
    }


    return (
        <div className='alert-container'>
            <p>Falta el campo {textMessages[text]}</p>
        </div>
    )
}

export default Alert;