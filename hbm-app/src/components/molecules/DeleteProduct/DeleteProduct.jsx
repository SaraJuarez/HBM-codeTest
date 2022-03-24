import React from "react";
import Button from '../../atoms/Button/Button';
import './deleteProduct.css';

function DeleteProduct(props) {
    const { toggleModal, cardId, deleteFunction } = props;

    function confirmDelete() {
        toggleModal()
        deleteFunction(cardId)
    }

    return (
        <div className='deleteProduct-container'>
            <p className='deleteProduct-title'>¿Seguro que quiere borrar el producto?</p>
            <div className='deleteProduct-buttonContainer'>
                <Button onClickFunction={confirmDelete} text='Aceptar' />
                <Button onClickFunction={toggleModal} text='Cancelar' />
            </div>

        </div>
    )
}

export default DeleteProduct;