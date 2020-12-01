import axios from 'axios';

import *as apiConst from './const';

export const getProducts = async () => { 
  return await axios.get(apiConst.API_CART).then(res => res.data)   
}

export const checkProduct = async (pid, qua) => {
  await axios.post(apiConst.API_CHECK_PRODUCT,
  {
    "pid": pid,
    "quantity": qua
  })
  .then((res) => {
    console.log(res);
  })  
}