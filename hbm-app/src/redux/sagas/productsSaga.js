import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsList, createNewProduct, deleteProduct, editProduct } from '../../api';

function* fetchProductsSaga(params) {
    try {
        const products = yield call(getProductsList, params);
        yield put({ type: 'GET_PRODUCTS_SUCCEED', products: products })
    } catch (e) {
        yield put({ type: 'GET_PRODUCTS_FAIL', message: e.message })
    }
}

function* createNewProductSaga(payload) {
    try {
        const newProduct = yield call(createNewProduct, payload);
        yield put({ type: 'POST_PRODUCT_SUCCEED', products: newProduct })
    } catch (e) {
        yield put({ type: 'POST_PRODUCT_FAIL', message: e.message })
    }
}

function* deleteProductSaga(payload) {
    try {
        const deletedProduct = yield call(deleteProduct, payload)
        yield put({ type: 'DELETE_PRODUCT_SUCCEED', products: deletedProduct })
    } catch (e) {
        yield put({ type: 'DELETE_PRODUCT_FAIL', message: e.message })
    }
}

function* updateProductSaga(payload) {
    try {
        const productsUpdated = yield call(editProduct, payload)
        yield put({ type: 'UPDATE_PRODUCT_SUCCEED', products: productsUpdated })
    } catch (e) {
        yield put({ type: 'UPDATE_PRODUCT_FAIL', message: e.message })
    }
}

function* productsSaga() {
    yield takeEvery('GET_PRODUCTS_REQUESTED', fetchProductsSaga);
    yield takeEvery('POST_PRODUCT_REQUESTED', createNewProductSaga);
    yield takeEvery('DELETE_PRODUCT_REQUESTED', deleteProductSaga);
    yield takeEvery('UPDATE_PRODUCT_REQUESTED', updateProductSaga);
}

export default productsSaga;