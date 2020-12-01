import { Action } from 'redux';

export interface IProductEvent{
  price: number,
  min: number,
  max: number,
  name: String,
  img: String,
  pid: String,
  isBlocked ?: Boolean,
}

export interface IUpdate {
  pid: String,
  qua: number,
}

export interface IPerformFetchProductList extends Action {
  type: 'PERFORM_FETCH_PRODUCT_LIST',   
}

export interface IErrorFetchProductList extends Action {
  type: 'ERROR_FETCH_PRODUCT_LIST',   
}

export interface ISuccessFetchProductList extends Action {
  type: 'SUCCESS_FETCH_PRODUCT_LIST',   
  payload: IProductEvent
}

export interface IErrorFetchProductList extends Action {
  type: 'ERROR_FETCH_PRODUCT_LIST',   
}

export interface IUpdateProductQua extends Action {
  type: 'UPDATE_PRODUCT_QUA',   
  payload: IUpdate
}

export interface ICalculateTotalOrder extends Action {
  type: 'CALCULATE_TOTAL_ORDER',   
}