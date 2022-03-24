import React from 'react';
import './modal.css';
import CloseIcon from '@material-ui/icons/Close';
import NewProduct from '../../molecules/NewProduct/NewProduct';
import DeleteProduct from '../../molecules/DeleteProduct/DeleteProduct';

function Modal(props) {
    
    const { type, toggleModal, getNewProductInfo, cardId, deleteFunction, updateFunction, productInfo } = props;
    
    return (
        <div className='modal-container'>
            <div className='modal-subContainer'>
                <div className='modal-content'>
                    <div onClick={toggleModal} className='moda-crossIcon'  >
                        <CloseIcon className='crossIcon'  />
                    </div>
                    {type === 'create' && <NewProduct text='Añadir nuevo producto' type={type} getNewProductInfo={getNewProductInfo} toggleModal={toggleModal} />}
                    {type === 'delete' && <DeleteProduct deleteFunction={deleteFunction} cardId={cardId} toggleModal={toggleModal} />}
                    {type === 'edit' && <NewProduct text='Editar producto' type={type} productInfo={productInfo} updateFunction={updateFunction} toggleModal={toggleModal} cardId={cardId} />}
                </div>
            </div>
        </div>

    )
}

export default Modal;