import { all, call } from 'redux-saga/effects';
import productListSaga from './productListSaga';

function* watchAll() {
  yield all([
    call(productListSaga), 
  ]);
}

export default watchAll;