import { url } from '../constants';
const axios = require('axios').default;

const getProductsList = async (params) => {
  try {
    const { page, itemsPerPage, active } = params.payload;

    const { data } = await axios.get(url, {
      params: {
        page,
        itemsPerPage,
        active
      }
    });

    return data.list;
  } catch (error) {
    console.log(error)
  }
}

const createNewProduct = async (info) => {
  const { productObject, payload } = info.payload

  try {
    await axios.post(url, productObject)

    let newList = await getProductsList({ payload });
    return newList;
  } catch (error) {
    let oldList = await getProductsList({ payload });
    return oldList;
  }
}

const deleteProduct = async (objectInfo) => {
  const { productId, products } = objectInfo.payload;

  try {
    await axios.delete(`${url}/${productId}`)

    let allProducts = products;
    let indexOldProduct = allProducts.findIndex((element) => element._id === productId);
    allProducts.splice(indexOldProduct, 1);
    return allProducts;
  } catch (error) {
    console.log(error)
  }
}

const editProduct = async (data) => {
  try {
    const { updatedInfo, products, productId } = data.payload;

    await axios.put(`${url}/${productId}`, updatedInfo);

    let updatedProducts = [...products]
    const productIndex = products?.findIndex(item => item._id === updatedInfo?._id)
    if (productIndex >= 0) {
      updatedProducts[productIndex] = { ...updatedInfo }
    }
    return updatedProducts;
  } catch (error) {
    console.log(error)
  }
}

export { getProductsList, createNewProduct, deleteProduct, editProduct };