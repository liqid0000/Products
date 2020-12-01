import { 
    put, 
    call,       
    takeEvery,      
}from  'redux-saga/effects';

import *as actionsProductList from '../store/actions/productList';
import *as actionProductListType from '../store/actionsType/productListType';
import { getProducts } from '../api/productsApi';

export function* fetchProductList() {   
    try{                    
        const products = yield call(getProducts)
        console.log('aaa')         
        if(products) yield put(actionsProductList.successFetchProductList(products))          
    }catch(e){      
        yield put(actionsProductList.errorFetchProductList())
    }
}

export default function* (){       
    yield takeEvery(actionProductListType.PERFORM_FETCH_PRODUCT_LIST, fetchProductList);      
} 