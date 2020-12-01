import *as actionTypes from '../actionsType/productListType';
import *as utils from './utils';

const INITIAL_STATE = {
    products: [],
    productsQuantity: [],
    isError: false,
    isLoading: false,
    orderTotal: 0,   
};

export const productListReducer = ( state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case actionTypes.PERFORM_FETCH_PRODUCT_LIST:
            return{
                ...state,                            
                isLoading: true,
            }
        case actionTypes.SUCCESS_FETCH_PRODUCT_LIST:
            return{
                ...state,          
                products: action.payload,    
                isError: false,     
                isLoading: false,   
                orderTotal: utils.calculateOrderTotal(utils.addQua(action.payload)),       
                productsQuantity: utils.addQua(action.payload),
            }
        case actionTypes.ERROR_FETCH_PRODUCT_LIST:
            return{
                ...state,
                isError: true,  
                isLoading: false,            
            }        
        case actionTypes.UPDATE_PRODUCT_QUA:
            return{
                ...state,         
                productsQuantity: utils.updateItemQua(state.productsQuantity, action.payload.pid, action.payload.qua)      
            }
        case actionTypes.CALCULATE_TOTAL_ORDER:
            return{
                ...state,       
                orderTotal: utils.calculateOrderTotal(state.productsQuantity)                 
            }
        default: 
            return state;
    }
}

export default productListReducer



