import React, { useState, useCallback } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/productList';
import { checkProduct } from '../api/productsApi';

const Product = (props) => {    

  const {
    max,
    min,
    name,
    price,
    pid,
    img,
    isBlocked,
  } = props.product;  

  const [qua, setQua] = useState(min);  
  const delayedQua = useCallback(_.debounce((qua) => handleCheckProduct(qua), 500), [])
  
  const handleCheckProduct = async (qua) =>{
    try{
      await checkProduct(pid, qua)
      props.updateProductQua(pid, qua)
    }catch(e){          
      setQua(min)
      props.updateProductQua(pid, min)
    }
  } 

  const addQua = () => {  
    if(qua+1 <= max){
      setQua(qua+1);    
      delayedQua(qua+1)      
    }
  }

  const subQua = () => {  
    if(qua-1 >= min){
      setQua(qua-1);    
      delayedQua(qua-1)      
    }
  }
   
  return(
    <div className='at-column'>              
      <div className='at-user'>
        <div className='at-user__avatar'>
          <img src={window.location.origin + '/public' + img} ></img>
        </div>
        <div className="at-user__name">{name}</div>
        <div className="at-user__title">price: {price}$</div>
        <div className="at-user__title">quantity:{qua}</div>
        <div className="at-social">                   
          <button 
            className="button"
            disabled={isBlocked}
            onClick={addQua}
          >+</button>            
          <button
            className="button"
            disabled={isBlocked}
            onClick={subQua}
          >-</button>                                      
        </div>                    
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateProductQua: (pid, qua) =>{ 
      dispatch(actionCreators.updateProductQua({pid, qua})),
      dispatch(actionCreators.calculateTotalOrder())
    }        
  }
};

export default connect(null, mapDispatchToProps)(Product);
