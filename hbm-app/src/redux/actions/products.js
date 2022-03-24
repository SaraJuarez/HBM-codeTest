import * as type from '../types';

export function getProducts(products) {
    return {
        type: type.GET_PRODUCTS_REQUESTED,
        payload: products,
    }
}

export function setProduct(products) {
    return {
        type: type.POST_PRODUCT_REQUESTED,
        payload: products
    }
}

export function deleteProduct(productId) {
    return {
        type: type.DELETE_PRODUCT_REQUESTED,
        payload: productId
    }
}

export function updateProduct(productId) {
    return {
        type: type.UPDATE_PRODUCT_REQUESTED,
        payload: productId
    }
}