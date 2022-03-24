import React, { useState } from 'react';
import './newProduct.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Alert from '../../atoms/Alert/Alert';
import InputRadio from '../../atoms/InputRadio/InputRadio';

const DEFAULT_PRODUCT = {
    name: '',
    description: '',
    price: '',
    active: true
}

function NewProduct(props) {
    const { toggleModal, getNewProductInfo, updateFunction, productInfo, type, text } = props;
    const [product, setProduct] = useState({ ...DEFAULT_PRODUCT, ...productInfo });
    const [alertText, setAlertText] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const onChangeInputRadio = (e) => {
        setProduct(oldProduct => ({ ...oldProduct, active: e.target.value === "active" }))
    }

    function getNewInfo(e) {
        if (type === 'create') {
            if (e.target.id === 'yes' || e.target.id === 'no') {
                let value = e.target.id === 'yes' ? true : false;
                product.active = value;
            } else {
                product[e.target.name] = e.target.value;
            }
            setProduct(product)
        }else if (type === 'edit') {
            productInfo[e.target.name] = e.target.value;
            setProduct(productInfo)
        }   
    }

    function sendNewInfo() {
        for (const key in product) {
            if (product[key] === '') {
                setAlertText(key);
                setShowAlert(true)
                return
            } else if (product[key] === undefined && key === 'active') {
                product.active = true;
            }
        }
        toggleModal();
        getNewProductInfo(product);
    }

    function sendUpdatedInfo() {
        let infoObject = {
            updatedInfo: product,
            productId: productInfo._id
        }
        toggleModal()
        delete product.SKU;
        updateFunction(infoObject)
    }

    return (
        <div className='newProduct-container'>
            <h2 className='newProduct-title'>{text}</h2>
            {showAlert === true && <Alert text={alertText} />}
            <Input text='Nombre:' name='name' placeholder={productInfo ? productInfo.name : ''} onChangeFunction={getNewInfo} required={true} />
            <Input text='Descripción: ' name='description' placeholder={productInfo ? productInfo.description : ''} onChangeFunction={getNewInfo} required={true} />
            <Input type='number' text='Precio:' name='price' placeholder={productInfo ? productInfo.price : 0} onChangeFunction={getNewInfo} required={true} />
            <p className='newProduct-text'>¿Esta disponible?</p>
            <InputRadio label='Si' name='active' checked={product.active} onChangeInput={onChangeInputRadio} />
            <InputRadio label='No' name='inactive' checked={!product.active} onChangeInput={onChangeInputRadio} />
            <div className='newProduct-buttonsContainer'>
                <Button text='Aceptar' onClickFunction={type === 'create' ? sendNewInfo : sendUpdatedInfo} />
                <Button text='Cancelar' onClickFunction={toggleModal} />
            </div>
        </div>
    )
}

export default NewProduct;