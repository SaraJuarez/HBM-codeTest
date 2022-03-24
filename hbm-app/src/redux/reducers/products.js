import * as type from '../types';

const initialState = {
  products: [],
  loading: false,
  error: null,
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_PRODUCTS_SUCCEED:
      return {
        ...state,
        loading: false,
        products: action.products
      }
    case type.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.POST_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.POST_PRODUCT_SUCCEED:
      return {
        ...state,
        loading: false,
        products: action.products
      }
    case type.POST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.DELETE_PRODUCT_SUCCEED:
      return {
        ...state,
        loading: false,
        products: action.products
      }
    case type.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.UPDATE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.UPDATE_PRODUCT_SUCCEED:
      return {
        ...state,
        loading: false,
        products: action.products
      }
    case type.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}
