import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, setProduct, deleteProduct, updateProduct } from '../redux/actions/products';
import Card from '../components/organisms/Card/Card';
import './home.css';
import Button from '../components/atoms/Button/Button';
import Modal from '../components/organisms/Modal/Modal';
import Filters from '../components/molecules/Filters/Filters';
function Home() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showOnlyActives, setShowOnlyActives] = useState(true);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const { products, loading, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts({
      active: showOnlyActives,
      itemsPerPage: itemsPerPage,
      page: page
    }))
  }, [])

  useEffect(() => {
    dispatch(getProducts({
      active: showOnlyActives,
      itemsPerPage: itemsPerPage,
      page: page
    }))
  }, [showOnlyActives, page, itemsPerPage])

  function toggleModal() {
    setShowModal(!showModal)
  }

  const getNewProductInfo = async (productObject) => {
    const randomSKU = Math.floor(Math.random() * 1000000000);
    const payload = {
      active: showOnlyActives,
      itemsPerPage,
      page
    }

    let productInfo = {
      productObject: {
        ...productObject,
        SKU: `HB${randomSKU}`
      },
      payload
    }
    dispatch(setProduct(productInfo))
  }

  function updateProductInfo(infoObject) {
    const {updatedInfo, productId} = infoObject;
    let object = {
      updatedInfo: updatedInfo,
      products: products,
      productId: productId
    }
    dispatch(updateProduct(object))
  }

  function dispatchDeleteProduct(productId) {
    let object = {
      productId: productId,
      products: products
    }
    dispatch(deleteProduct(object));
  }

  function handleToggleActive() {
    setShowOnlyActives(!showOnlyActives)
  }

  function changePage(e) {
    setPage(e.target.value)
  }

  function changeNumberProducts(e) {
    setItemPerPage(e.target.value)
  }

  return (
    <div className='home-container'>
      <header className='home-header'>
        <h1>Lista de productos</h1>
        <div className='home-newProduct'>
          <Button onClickFunction={toggleModal} text='Nuevo producto' />
        </div>
      </header>
      <Filters pageDefaultValue={page} itemsDefaultValue={itemsPerPage} changeNumberProducts={changeNumberProducts} changePage={changePage} isOn={showOnlyActives} handleToggle={handleToggleActive} />
      <Fragment>
        {showModal && <Modal getNewProductInfo={getNewProductInfo} type='create' toggleModal={toggleModal} />}
      </Fragment>
      <div className='home-grid'>
        {!products && products.length === 0 && !loading && <p>No existen productos disponibles</p>}
        {error && !loading && <p>{error}</p>}
        {products.length > 0 && products.map((product) => {
          return (
            <Card updateFunction={updateProductInfo} deleteFunction={dispatchDeleteProduct} key={product._id} product={product} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;