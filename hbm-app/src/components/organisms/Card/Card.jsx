import React, { Fragment, useState } from 'react';
import './card.css';
import CardFooter from '../../molecules/CardFooter/CardFooter';
import Modal from '../Modal/Modal';

function Card(props) {
  const { name, description, price, _id} = props.product;
  const { deleteFunction, updateFunction } = props;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState();

  function toggleModal(modalType) {
    setModalType(modalType)
    setShowModal(!showModal)
  }

  return (
    <Fragment>
      {showModal && <Modal updateFunction={updateFunction} deleteFunction={deleteFunction} productInfo={props.product} cardId={_id} toggleModal={toggleModal} type={modalType} />}
      <div className="card-container">
        <p className="card-title"><span>Producto:</span>{name}</p>
        <p className="card-subtitle"><span>Descripción:</span>{description}</p>
        <p className="card-text"><span>Precio:</span>{price}</p>
        <CardFooter toggleModal={toggleModal} />
      </div>
    </Fragment>

  )
}

export default Card;