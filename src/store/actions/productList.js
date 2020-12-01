import * as productListType from '../actionsType/productListType'
import *as ts from './productList';

export const performFetchProductList = () =>{
    return{
        type: productListType.PERFORM_FETCH_PRODUCT_LIST,
    }
}

export const successFetchProductList = (payload) =>{
    return{
        type: productListType.SUCCESS_FETCH_PRODUCT_LIST,  
        payload     
    }
}

export const errorFetchProductList = () =>{
    return{
        type: productListType.ERROR_FETCH_PRODUCT_LIST,        
    }
}

export const updateProductQua = (payload) =>{
    return{
        type: productListType.UPDATE_PRODUCT_QUA,
        payload
    }
}

export const calculateTotalOrder = () =>{
    return{
        type: productListType.CALCULATE_TOTAL_ORDER,
    }
}