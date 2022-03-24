import React from 'react';
import './cardFooter.css';
import Button from '../../atoms/Button/Button';

function CardFooter(props) {
    const { toggleModal } = props;

    return (
        <div className='cardFooter-container'>
            <Button text='Editar' onClickFunction={() => toggleModal('edit')} />
            <Button text='Borrar' onClickFunction={() => toggleModal('delete')} />
        </div>
    )
}

export default CardFooter;